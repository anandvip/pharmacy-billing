# Counter Khata · pharmacy billing

A single-file, offline-first billing and khata (credit book) app for a pharmacy counter. Live at https://pharmacy.vipulanand.in

It prints your shop details on every bill. Each client gets a neat, legible, itemized bill with the date and the discount % on each line. Data stays on the phone in the browser (IndexedDB). There is no server.

## Pages

| Path | What it is |
|---|---|
| `/` (`index.html`) | The app |
| `/guide/` | **Start here.** A step-by-step onboarding guide for first-time pharmacists |
| `/howto/` | Help and FAQ for when you are stuck |

## Guide

`guide/index.html` walks a new pharmacist through one full cycle:

1. Create your business (Shop details)
2. Practice mode vs real mode
3. PIN and the discount limit
4. Stock
5. Clients
6. Billing
7. WhatsApp sharing
8. Khata and payments
9. Fixes and returns
10. Reports
11. Backup and Excel import/export
12. The bottom bar

Each step says why the feature exists. It also has a phone screenshot with an English and Hindi caption.

- English/Hindi toggle and light/dark toggle, both remembered in `localStorage`
- Progress steps, table of contents, share links (WhatsApp, X, Facebook, LinkedIn, copy link)
- SEO: canonical, Open Graph, Twitter tags and JSON-LD `HowTo`
- Screenshots in `guide/img/` were taken in headless Chromium at a 390px phone width with **fictional data only**. Each is an SVG wrapping a WebP image, so they can be committed as text.

When a button label changes in `index.html`, update `guide/` and `howto/` too.

## Conventions

Vanilla HTML/CSS/JS in one file per page. No frameworks, CDN or analytics. Numeric HTML entities only.

© 2026 · Created by Vipul Anand, Kurukshetra
