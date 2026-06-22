# MEMO — SIMULATION HANDOVER & PROGRESS LOG
## Clickable prototype of the digital consignment-memo platform

| Field | Detail |
|---|---|
| Document | Simulation handover (companion to `MEMO_APP_HANDOVER.md`, the full product spec) |
| Status | Working clickable simulation — v0.7 |
| Last worked | June 22, 2026 |
| Live URL (dev) | http://localhost:5183/ |
| Code location | `C:\Users\Matrix\Desktop\memo app\memo\` |
| Purpose of build | The user's own **scope-clarity** — feel and pressure-test the UX before any production build |

---

## 1. WHAT THIS IS (and what it is not)

The full product spec (`MEMO_APP_HANDOVER.md`, v3.0, 18 sections) describes a **production** system: React Native (Expo) + Node/Express + PostgreSQL + Redis + S3 + Twilio + SendGrid + OpenAI, over a 3-phase ~30-week roadmap.

**This deliverable is NOT that.** It is a **high-fidelity, clickable web simulation** of the experience:
- React 18 + TypeScript + Vite + Tailwind + Zustand
- Mobile-framed in the browser (reads as the real phone app)
- **All data is fake and in-memory** (seeded on load, resets on refresh)
- **No backend, no real auth, no persistence, no network**

The layout/interaction logic ports to React Native later; the pixels get rebuilt. The simulation exists to validate *desirability and flow*, not to be shipped.

---

## 2. THE INITIAL THOUGHT PROCESS & KEY DECISIONS

### 2.1 Simulation-first (not production-first)
The spec was written as a production brief. Rather than spend days scaffolding RN + Postgres before anything could be *felt*, we chose to build a clickable simulation first and get a live link in hours. This matches how the user worked on a prior product (BUDDY) and their preference for testable links.

### 2.2 The LLM Council pressure-test
We ran the "simulation-first" decision through a 5-advisor council. The sharpest finding (the Contrarian, upheld by peer review): **a happy-path demo validates the wrong hypothesis** — it proves you can design a nice UI, not that dealers will trust/adopt it. The fake counterparty that "always signs" would auto-skip the riskiest real moment.

**Resolution:** because the demo's purpose is the user's *own scope-clarity* (not market validation or fundraising), a simulation is the right tool — but we deliberately baked in the scary moments anyway:
1. The simulated counterparty can **sign / stall / decline** (not just auto-accept).
2. One seeded memo deliberately **goes wrong** (dispute + returned stone).
3. The **FOR ME / BY ME mirror** is treated as the hero ("Both sides" view).

### 2.3 Naming the in/out concept
The spec's core idea is the FOR ME / BY ME duality. An outsider review flagged those labels read *backwards* under perspective. We settled on **"Memo In" / "Memo Out"** — the clearest in/out framing, and consistent with the spec's own parentheticals (FOR ME = Memo In, BY ME = Memo Out). Product brand name is still open (working title "Memo"; candidate "Memora").

---

## 3. HOW TO RUN

```
cd "C:\Users\Matrix\Desktop\memo app\memo"
npm install
npm run dev        # serves on http://localhost:5183/
```
- A preview-server config named **"memo"** exists in `…\buddy code\.claude\launch.json` (runs Vite via `node vite.js` with the memo dir as root, port **5183**).
- **App passcode: `1234`** (or tap the Face ID 😊 button). Locks on every launch.
- **Build check:** `npm run build` (runs `tsc --noEmit && vite build`). Type-check stays at 0 errors.

### Tooling notes for whoever continues
- The launcher's cwd is the "buddy code" project root, so in `tailwind.config.js` the `content` globs and the PostCSS Tailwind config path are **absolute** — do not "fix" them to relative.
- `preview_screenshot` consistently times out on this app (rasterizer choke on the gradients/SVGs). Verify via `preview_snapshot` + `preview_eval`. In dev, `window.useStore` and `window.__stockImport` are exposed for test-driving.

---

## 4. TECH & FILE MAP

```
memo/
├── package.json            React 18, TS, Vite 5, Tailwind 3, Zustand 4, xlsx (SheetJS)
├── tailwind.config.js      paper + chrome palette; absolute content globs
├── postcss.config.js       tailwind config path is absolute
├── src/
│   ├── main.tsx            entry
│   ├── App.tsx             routing (lock gate → tabs / memo / create / search)
│   ├── index.css           paper texture, page-turn keyframes
│   ├── types.ts            Party, Item, Memo, StockItem, ParcelAllocation, Signature…
│   ├── util.ts             dates, money, status colors, direction, item-type labels
│   ├── store.ts            Zustand store + ALL seed data + actions (the heart)
│   ├── stockImport.ts      SheetJS bulk import: template download + column-detecting parser
│   ├── components/
│   │   ├── MobileFrame.tsx     phone frame
│   │   ├── TabBar.tsx          Home / In / Out / Stock★ / Contacts / Settings
│   │   ├── MemoCard.tsx        list card (carries a "deck" for page-flip)
│   │   ├── MirrorOverlay.tsx   "Both sides" two-pane mirror
│   │   ├── SignaturePad.tsx    finger/mouse drawn signature canvas
│   │   ├── PhotoAttachments.tsx camera/library/file, downscale, viewer, readOnly mode
│   │   └── ui.tsx             Avatar, StatusChip, DirectionPill, Btn, Sheet
│   └── screens/
│       ├── Lock.tsx           passcode pad + Face ID
│       ├── Dashboard.tsx      Memo In/Out summary (clickable), stock card, recent activity
│       ├── MemoListScreen.tsx In / Out lists
│       ├── MemoBook.tsx       the paper COMMISSIEBOEK view + swipe page-deck + actions
│       ├── CreateMemo.tsx     create + sign + add-from-stock + inline new-contact + date picker
│       ├── Search.tsx         search memos/customers/stones + filters
│       ├── Stock.tsx          inventory (premium): list, detail, sell, add-to-memo, bulk import
│       ├── Contacts.tsx       customers/suppliers + company info
│       └── Settings.tsx       security (lock now / archived), labels, deferred list
```

---

## 5. PROGRESSION (what was built, pass by pass)

- **v0.1 — The spine.** Dashboard, Memo In/Out lists, the paper Memo Book view (COMMISSIEBOEK styling), create + drawn signature, simulated counterparty (sign/stall/decline), mark-sold partial fulfillment, two-pane mirror. Seeded 5 memos incl. one disputed "went-wrong" memo.
- **v0.2 — Book + search.** Swipe page-deck between memos (page-turn animation, ‹ ›, "page X of Y"); full-text search across refs/customers/stone specs/types with filter chips.
- **v0.3 — Stock (premium).** Inventory with status = where it is (Available / On memo / Sold); sell-directly + add-to-memo; memo lines link to stock (`stockId`) so selling/returning syncs stock. Flagged ★ Premium everywhere.
- **v0.4 — Contacts + bulk import.** Clickable home cards; Contacts page (customers/suppliers + company info); dynamic contacts in create flow; stock reference numbers; **bulk Excel import** with downloadable template (SheetJS).
- **v0.5 — Security + depth.** App passcode lock + simulated Face ID; archive any memo (hidden, passcode-gated in Settings); custom **due-date calendar**; expanded seed to **18 contacts / 13 memos** (late payment, due-today, past-due, settled, disputed, awaiting-sig); **divisible 100ct parcel** split across memos/contacts.
- **v0.6 — Two fixes + photos.** Fixed: creating a contact mid-memo lost the draft (now an **inline** new-contact sheet, no navigation). Added **photo attachments** (camera/library/file, downscaled) on stock items and memos.
- **v0.7 — Photo linkage fix.** Photos belong to the *item*: a memo line with `stockId` now shows the linked stock item's photos automatically ("Item photos"), live, regardless of when attached.

---

## 6. CURRENT FEATURE SET (what works today)

- **FOR ME / BY ME (Memo In / Memo Out)** duality with a live two-pane mirror.
- **The Memo Book**: paper COMMISSIEBOEK aesthetic, item ledger, price-hide toggle, drawn signatures (verified), swipe between memos.
- **Create memo**: direction, contact (incl. inline new-contact), items (manual or from stock), 4 item types, custom due date, drawn signature, "send".
- **Counterparty resolution**: sign → ACTIVE + mirrors; stall; decline.
- **Partial fulfillment**: mark items sold/returned; status cascades.
- **Stock / inventory (premium)**: add, sell-directly, add-to-memo, reference numbers, bulk Excel import + template, photos, divisible parcel split across memos.
- **Contacts**: customers/suppliers with company info + per-contact memo history.
- **Search**: across memos, customers, stone specs, parcels, types.
- **Security**: passcode + Face ID lock; password-gated archive.
- **Photos**: on stock items and memos, item-linked, with fullscreen viewer.

---

## 7. WHAT REMAINS — mapped to the original spec / 3-phase roadmap

### Phase 1 (MVP per spec §15) — mostly represented in sim, NOT production
- [x] Both pages, item creation (4 types), drawn signatures, sharing (simulated), mark sold/returned, page-flip UI, document/photo attachments, basic dashboard — **simulated**.
- [ ] Real registration/auth; partner registration via link (real invite flow).
- [ ] Real reminders / push notifications (only seeded "activity" today).
- [ ] Real offline support + sync (currently in-memory only).
- [ ] Memo amendment + re-sign flow (spec §4.3.4 / Flow E) — **not built**.
- [ ] Content-hash signature locking / integrity verification (spec §8) — **not built** (signatures are drawn + displayed, not hashed).

### Phase 2 (Complete workflow per spec §16)
- [ ] **Invoicing** (generate/send PDF) — not built (placeholder).
- [ ] **Settlements** (settle / offset / defer / dispute, settlement memo) — not built (status exists, no flow).
- [ ] **WhatsApp & email** integration (Twilio/SendGrid) — not built (compose text only, simulated).
- [ ] **Multi-language UI + auto-translate** (spec §11) — not built (English only).
- [ ] Currencies / FX (spec §4.8.4) — EUR only.
- [ ] Smart/configurable reminders, notification center — not built.
- [ ] Analytics AI (spec §9.1) — placeholder card only.

### Phase 3 (AI + team per spec §16)
- [ ] **Secretary AI** (draft comms, suggest, approve-to-send) — placeholder card only.
- [ ] **Team accounts / roles / white-label branding** (spec §11–12) — not built.
- [ ] Web companion, API access — not built.

### Cross-cutting (production foundation)
- [ ] Real backend (Node/Express + Postgres), S3 storage, JWT auth, AES-256 price encryption, audit log persistence.
- [ ] Port to **React Native (Expo)** for the actual mobile apps.

---

## 8. BUGS FOUND & FIXED (this engagement)
1. **Red-screen build error** — unbalanced JSX in CreateMemo (transient mid-edit). Fixed.
2. **"Memo → homepage" jump** — was the broken build force-reloading, not a routing bug. Resolved when it compiled.
3. **Counterparty signing did nothing for new contacts** — `partnerResolve` used the static seed map, not live `parties`. Fixed (+ signature generator for any contact).
4. **Creating a contact mid-memo lost the draft** — "＋ New" navigated away; now an inline sheet. Fixed.
5. **Stock-item photos didn't show on the memo** — photos are now item-linked and read through `stockId`. Fixed.

---

## 9. KNOWN LIMITATIONS / PRODUCTION CAVEATS
- **Security is demo-grade.** Passcode `1234` lives in client state and resets on reload. Real privacy needs device biometrics + encrypted storage.
- **`xlsx` (SheetJS) has a high-severity npm advisory.** Fine for a local sim; for production pin SheetJS's official build or switch to `exceljs`.
- **All data is in-memory** — every refresh resets to the seed. No persistence by design.
- **Bottom tab bar is at 6 tabs.** Adding more sections (invoicing/settlements/AI) needs a nav rethink (e.g., a "More" menu).
- **Native date picker shows the OS locale** (Hebrew labels on this machine) — correct behavior; follows each user's device.
- **Screenshots of the running app time out** in the preview tool (rasterizer); use snapshots.

---

## 10. RECOMMENDED NEXT STEPS (pick up here)
1. **Decide the product name** (Memo vs Memora vs other) — affects branding everywhere.
2. **Settlements + Invoicing** — the biggest missing workflow pieces; they complete the money side and make the "late payment" seed actionable.
3. **Amendment + signature-hash locking** — closes the Phase-1 integrity gap that matters legally.
4. **Then decide the fork:** keep enriching the sim, or start the production port (RN/Expo + backend). The UX is now well-explored enough to spec the build confidently.
5. Nav redesign before adding more top-level sections.

---

## 11. DEMO SCRIPT (good flows to show / re-test)
1. Unlock with **1234** (or Face ID).
2. Home → tap **Memo Out** card → open a memo → **swipe** between memos.
3. **Memo Out → YD-2026-0009 (awaiting)** → "Rajesh signs" → watch it go ACTIVE → "Both sides".
4. **Stock → a stone → Add to memo → ＋ New (inline) → Add & select → sign** (the lost-draft fix).
5. **Stock → PC-1000** → the 100ct parcel split across Rajesh/Fatima/Lin + sold-to-Sameer, 42.5ct free.
6. **Stock → Bulk import → Download template**, fill rows, re-upload.
7. Add a **photo** to a stock stone → open its memo → see it under **Item photos**.
8. Open a memo → tap **🔒** to archive → find it in **Settings → Archived memos** (passcode).

---

*Companion memory: the assistant's working notes live in its memory file `memo-app-status.md` (cumulative v0.1→v0.7). Reply language for this project: English.*
*End of simulation handover.*
