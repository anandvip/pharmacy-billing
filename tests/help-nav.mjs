/**
 * Help + howto/guide link checks for Counter Khata v1.1 footing.
 * Usage: BASE=http://127.0.0.1:8765 node tests/help-nav.mjs
 */
import { chromium, devices } from 'playwright';

const BASE = process.env.BASE || 'http://127.0.0.1:8765';
const results = {};

async function ready(page) {
  await page.waitForFunction(() => typeof go === 'function' && S?.meds?.length, null, { timeout: 10000 });
}

async function seedCart(page, n = 8) {
  await page.evaluate(n => {
    const m = S.meds.find(x => !x.archived) || S.meds[0];
    C.cid = S.clients[0].id;
    C.cart = [];
    for (let i = 0; i < n; i++) {
      C.cart.push({ medId: m.id, name: m.name, salt: m.salt || '', mrp: m.mrp, medTps: m.tps, form: m.form, pack: m.pack, unit: m.unit, looseOk: m.looseOk, kind: m.kind, tps: m.tps, strips: 1, loose: 0, disc: m.disc || 0 });
    }
    C.paid = ''; C.mode = 'credit'; C.date = today(); C.edit = null; C.override = ''; C.ovrOpen = false;
    go('counter');
  }, n);
  await page.waitForSelector('#savebar');
}

function help(page) {
  return page.locator('nav#tabs a').filter({ hasText: 'Help' });
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const fails = [];

  for (const [vpName, device] of [
    ['390x844', devices['iPhone 13']],
    ['360x740', { viewport: { width: 360, height: 740 }, userAgent: devices['Pixel 5'].userAgent }],
  ]) {
    const page = await (await browser.newContext({ ...device, hasTouch: true, isMobile: true })).newPage();
    const dialogs = [];
    page.on('dialog', async d => { dialogs.push(d.type()); try { await d.dismiss(); } catch {} });

    for (const path of ['/', '/index.html']) {
      await page.goto(BASE + path, { waitUntil: 'domcontentloaded' });
      await ready(page);

      // Savebar must not cover Help at scrollY=0 with a filled cart
      await seedCart(page, 10);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(80);
      const geom = await page.evaluate(() => {
        const sb = document.getElementById('savebar').getBoundingClientRect();
        const nav = document.getElementById('tabs').getBoundingClientRect();
        const a = [...document.querySelectorAll('nav.tabs a')].find(n => /help/i.test(n.textContent)).getBoundingClientRect();
        return {
          gap: nav.top - sb.bottom,
          overlap: !(a.right < sb.left || a.left > sb.right || a.bottom < sb.top || a.top > sb.bottom),
          navZ: +getComputedStyle(document.getElementById('tabs')).zIndex,
          saveZ: +getComputedStyle(document.getElementById('savebar')).zIndex,
          efpHelp: !!document.elementFromPoint(a.left + a.width / 2, a.top + a.height / 2)?.closest('nav.tabs a'),
        };
      });
      const gKey = `geom:${vpName}:${path}`;
      results[gKey] = geom.gap > 0 && !geom.overlap && geom.navZ > geom.saveZ && geom.efpHelp;
      if (!results[gKey]) fails.push(gKey + ' ' + JSON.stringify(geom));

      // Help navigates even with dirty cart (no leave-site dialog)
      dialogs.length = 0;
      await help(page).tap();
      await page.waitForTimeout(500);
      const dirtyKey = `help-dirty:${vpName}:${path}`;
      results[dirtyKey] = /howto/.test(page.url()) && !dialogs.includes('beforeunload');
      if (!results[dirtyKey]) fails.push(dirtyKey + ' url=' + page.url() + ' dialogs=' + dialogs);

      await page.goto(BASE + path);
      await ready(page);

      // Help from every tab
      for (const tab of ['counter', 'clients', 'stock', 'reports', 'shop']) {
        await page.evaluate(t => { C.cart = []; go(t); }, tab);
        await help(page).tap();
        await page.waitForTimeout(400);
        const k = `help-tab:${vpName}:${path}:${tab}`;
        results[k] = /howto/.test(page.url());
        if (!results[k]) fails.push(k);
        await page.goto(BASE + path);
        await ready(page);
      }
    }
    await page.close();
  }

  // Link crawl: howto + guide internal hrefs and images return 200
  const page = await (await browser.newContext()).newPage();
  const linkFails = [];
  for (const start of ['/howto/', '/guide/']) {
    const resp = await page.goto(BASE + start, { waitUntil: 'domcontentloaded' });
    if (resp.status() !== 200) linkFails.push(start + ' status ' + resp.status());
    const hrefs = await page.$$eval('a[href]', as => as.map(a => a.getAttribute('href')));
    for (const h of hrefs) {
      if (!h || h.startsWith('mailto:') || h.startsWith('tel:')) continue;
      if (h.startsWith('#')) {
        const id = decodeURIComponent(h.slice(1));
        const ok = await page.evaluate(id => !!document.getElementById(id), id);
        if (!ok) linkFails.push(start + ' missing anchor ' + h);
        continue;
      }
      const url = new URL(h, page.url());
      // Only assert same-origin app links; skip third-party share intents.
      if (url.origin !== new URL(BASE).origin) continue;
      const r = await page.request.get(url.href);
      if (r.status() >= 400) linkFails.push(start + ' ' + h + ' -> ' + r.status());
    }
    if (start === '/guide/') {
      const imgs = await page.$$eval('img[src]', is => is.map(i => i.getAttribute('src')));
      for (const src of imgs) {
        const r = await page.request.get(new URL(src, page.url()).href);
        if (r.status() >= 400) linkFails.push('img ' + src + ' -> ' + r.status());
      }
    }
  }
  results.links = linkFails.length === 0;
  if (linkFails.length) fails.push(...linkFails);

  await browser.close();

  console.log(JSON.stringify({ results, fails }, null, 2));
  if (fails.length) {
    console.log('SOME FAILED');
    process.exit(1);
  }
  console.log('ALL PASS');
}

main().catch(e => { console.error(e); process.exit(1); });
