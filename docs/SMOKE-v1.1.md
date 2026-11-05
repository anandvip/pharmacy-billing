# Smoke checklist · v1.1 footing

Run this on a real phone **before** merging `v1.1-footing` into `vipul`. Do not skip the backup.

Estimated time: 10–15 minutes. Use fictional clients if you practice on a spare phone.

## 0. Backup first (mandatory)

1. Open the **live** app (current v1.0 on https://pharmacy.vipulanand.in).
2. Shop → **Download full backup**.
3. Keep that JSON file somewhere safe (Files / Drive / WhatsApp to yourself).
4. Only then open the `v1.1-footing` build (or a local copy of that branch).

If anything looks wrong, Shop → **Backup** → **Restore a backup** with the file from step 2 (PIN required).

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

## 6. Khata balance (ledger order + labels)

- [ ] New client with opening **0**. Credit bill 1 → **Amount received** equal to bill 1 → credit bill 2.
- [ ] Client card / khata **Pending** equals bill 2 only (not bill 1 + bill 2).
- [ ] On the khata list, bill 1, then the payment, then bill 2, with running balance that does **not** jump to bill1+bill2 before the payment on the same day.
- [ ] New bill screen shows **Previous due**, **This bill**, and **Total due now**.
- [ ] Month bill for an older month still shows that month’s closing; a payment in a later month appears in the later month (hint under Brought forward).

## 6b. Previous balance from paper khata

- [ ] New client form label is **Previous balance from paper khata (optional)** with **Client owes me** / **I owe client (advance)**.
- [ ] Helper says leave blank or 0 for a new client; credit builds from bills automatically.
- [ ] Add client with previous balance 500 → edit to **0** → pending becomes 0; no advance; no new payment row.
- [ ] Edit to blank / tap **Remove previous balance** → Save → opening is 0.
- [ ] Edit to 200 → pending 200.
- [ ] If opening 500 was paid with Amount received (pending 0), editing opening to 0 shows a warning about advance; Cancel keeps opening 500 and pending 0.
- [ ] Advance only appears when **I owe client (advance)** is chosen on purpose (or after confirming the warning).

## 7. Reset app / start fresh

- [ ] Shop → Backup → **Reset app / start fresh**.
- [ ] Modal warns that everything on this device will be erased.
- [ ] **Download backup first** works; **Erase everything** stays disabled until backup downloaded **or** “I understand, erase without backup” is ticked.
- [ ] Erase asks for the PIN, then reloads to an empty shop (no old clients/bills).
- [ ] Shop → Backup → **Restore a backup** brings the file back; `"version": 1` still holds.

## 8. Regression quick looks

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
