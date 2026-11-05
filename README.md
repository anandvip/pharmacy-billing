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

`guide/index.html` walks a new pharmacist through one full cycle: shop, practice vs real, PIN, stock, client, bill, WhatsApp, payments, returns, reports, backup, and the bottom bar. English/Hindi and light/dark toggles. Screenshots in `guide/img/` use fictional data only.

## Branches and tags

| Ref | Meaning |
|---|---|
| `vipul` | **Live** GitHub Pages branch. Do not force-push or rewrite. |
| `v1.0` | Tag for the November 2026 first cut (app + bilingual guide). |
| `v1.1-footing` | Feature branch for v1.1 footing work. Not live until merged. |

## v1.1 footing (on `v1.1-footing`)

Additive UI only. IndexedDB stays `counter-khata` version **1** with the same stores and fields. A `version:1` backup from v1.0 restores into v1.1.

- Reports: Year and financial-year (Apr–Mar) views with a per-client table and CSV
- Month bill: Download CSV for that client and month
- Annual / FY statement PDF (same layout as the month statement)
- Sticky Save bar with a prominent Net total; recent-client chips; bill PDF already shows a savings strip

Before any merge to `vipul`, run `docs/SMOKE-v1.1.md` on a phone (backup first).

## Conventions

Vanilla HTML/CSS/JS in one file per page. No frameworks, CDN or analytics. Numeric HTML entities only.

© 2026 · Created by Vipul Anand, Kurukshetra
