# Smoke checklist · v1.1 footing

Run this on a real phone **before** merging `v1.1-footing` into `vipul`. Do not skip the backup.

Estimated time: 10–15 minutes. Use fictional clients if you practice on a spare phone.

## 0. Backup first (mandatory)

1. Open the **live** app (current v1.0 on https://pharmacy.vipulanand.in).
2. Shop → **Download full backup**.
3. Keep that JSON file somewhere safe (Files / Drive / WhatsApp to yourself).
4. Only then open the `v1.1-footing` build (or a local copy of that branch).

If anything looks wrong, Shop → **Restore a backup** with the file from step 2 (PIN required).

## 1. Database safety

- [ ] After opening v1.1, existing clients, bills, stock and balances still look right.
- [ ] Shop → Download full backup again; the file still says `"version": 1` and `"app": "counter-khata"`.
- [ ] Optional spare phone: Restore the v1.0 backup into v1.1; client names, bill numbers and balances match.

## 2. Existing day-to-day flows

- [ ] Counter: pick a client, add a medicine, set discount, Cash/UPI/Credit, **Save**.
- [ ] **Save & WhatsApp** opens the share sheet; PDF still shows shop name and line discounts.
- [ ] Bill PDF shows the green **Net savings** strip.
- [ ] Clients → khata → **Amount received** still saves.
- [ ] Open a bill → Return packs / Edit items still ask for the PIN.

## 3. New · sticky Save bar and recent chips

- [ ] Counter with no client: recent clients appear as chips under the search box; tapping one selects them.
- [ ] With a cart: a sticky bar shows **Net total** and the Save / Save & WhatsApp buttons above the bottom tabs.

## 4. New · Month bill CSV

- [ ] Clients → open a client → **Month bill**.
- [ ] Pick a month that has bills.
- [ ] Tap **Download CSV**. File opens with date, entry, debit, credit, balance and a closing row.

## 5. New · Year / FY reports

- [ ] Reports → **Year**: label shows the calendar year; per-client table has Brought fwd / Medicines / Returns / Received / Closing.
- [ ] **Download CSV** downloads a period file including those clients.
- [ ] Reports → **FY (Apr–Mar)**: label looks like `FY 2026-27`; table and CSV work the same way.
- [ ] On a client row, tap **PDF**: annual/FY statement preview opens (same style as the month statement).

## 6. Regression quick looks

- [ ] Practice banner / Clear practice data still behave as before if you use a clean browser.
- [ ] Howto and Guide links from Help still open.

## Sign-off

| | |
|---|---|
| Tester | |
| Date (IST) | |
| Build / commit | |
| Backup file kept? | yes / no |
| Ready to merge? | yes / no |
| Notes | |

© 2026 · Created by Vipul Anand, Kurukshetra
