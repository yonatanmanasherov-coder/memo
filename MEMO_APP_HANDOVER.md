# MEMO — PRODUCT REQUIREMENTS & TECHNICAL HANDOVER
## Digital Consignment Memo Platform for the Jewelry & Diamond Industry

---

| Field | Detail |
|---|---|
| Document Version | 3.0 — Final Handover |
| Status | Ready for Development |
| Date | June 21, 2026 |
| Platform | Mobile-first (iOS + Android) with Web companion |
| Classification | Confidential — Internal Use Only |

---

## TABLE OF CONTENTS

1. Product Overview
2. Core Concept: The FOR ME / BY ME Duality
3. User Definition
4. Full Feature Specification
5. User Flows (Detailed)
6. Data Models
7. Item Type Schemas
8. Signature Protocol
9. AI Specifications (Analytics + Secretary)
10. Integration Specifications (WhatsApp + Email)
11. Multi-Language & Translation
12. Team Management & White-Label
13. Technical Architecture
14. UI/UX Specifications
15. Privacy & Security
16. Implementation Roadmap
17. Open Decisions
18. Glossary

---

---

# SECTION 1: PRODUCT OVERVIEW

## 1.1 The Problem

The jewelry and diamond industry has used paper consignment memo books for decades. Every transaction where goods change hands temporarily — for viewing, for sale, on approval — is recorded manually. This system has fundamental, costly problems:

- **Disputes with no resolution:** "I never signed that" or "I never received those items" with no proof either way
- **Lost follow-ups:** Overdue memos go unnoticed, items are never returned or settled
- **No visibility across active memos:** A person managing 20 active consignments has no overview of what they owe or are owed
- **Informal settlements that go wrong:** Verbal agreements around pricing and settlement become the source of financial disputes
- **No audit trail:** If the memo book is lost, damaged, or disputed, there is no backup
- **Administrative overhead:** 2–3 hours per day spent chasing, reconciling, and manually creating invoices

## 1.2 The Solution

**Memo** is a mobile-first platform that digitizes the consignment memo workflow. It preserves everything familiar about the physical memo book — the format, the feel, the informality — while adding digital signatures, automated follow-ups, AI-powered insights, and direct invoicing.

Every user has two sides to their activity:

- **FOR ME** — items held by them on consignment (received from others)
- **BY ME** — items sent out on consignment (given to others to hold/sell)

These two sides are independent, simultaneous, and always visible. A user can be receiving a parcel of diamonds while simultaneously sending out jewelry — tracked separately, managed together.

## 1.3 Product Promise

> "The memo book you've always used. Now it remembers everything, signs itself, follows up automatically, and tells you what to do next."

## 1.4 Design Philosophy

- **Familiarity first:** The digital memo looks and feels like the paper memo. Users should recognize it immediately.
- **No forced formality:** The app works for verbal agreements, informal deals, and fully documented contracts — equally, without judgment.
- **Privacy by design:** No user can see another user's pricing, terms, or relationships unless explicitly shared.
- **Completeness over simplicity:** This is a professional tool for an industry that needs reliability, not convenience theater.
- **Network by default:** Every person who signs a memo becomes a user. The network grows because the product requires it.

---

---

# SECTION 2: CORE CONCEPT — THE FOR ME / BY ME DUALITY

## 2.1 The Fundamental Model

Every user in the system operates on two ledgers simultaneously:

### FOR ME (Memo In)
Items currently in my possession that belong to someone else.
- I am holding them on consignment
- I may sell them (with the original owner's agreement)
- If I sell them, I owe the original owner their agreed amount
- If I don't sell them, I return them by the agreed date
- The original owner can call them back at any time

### BY ME (Memo Out)
Items currently held by someone else that belong to me.
- They are holding my items on consignment
- They may sell them (with my agreement)
- If they sell them, they owe me my agreed amount
- If they don't sell them, they return them by the agreed date
- I can recall them at any time

## 2.2 The Same Memo, Two Perspectives

A single consignment agreement creates entries on **both sides** simultaneously:

```
Person A sends 5 diamonds to Person B

Person A sees:        Person B sees:
─────────────         ─────────────
BY ME                 FOR ME
Memo #RJ-001          Memo #RJ-001
→ 5 diamonds          → 5 diamonds
  at Person B           from Person A
  Due: Aug 15           Due: Aug 15
  Status: Active        Status: Active
```

When Person B sells diamond #3:

```
Person A sees:        Person B sees:
─────────────         ─────────────
BY ME                 FOR ME
Memo #RJ-001          Memo #RJ-001
→ Diamond 1: Active   → Diamond 1: Active
→ Diamond 2: Active   → Diamond 2: Active
→ Diamond 3: SOLD ✓   → Diamond 3: SOLD ✓
→ Diamond 4: Active   → Diamond 4: Active
→ Diamond 5: Active   → Diamond 5: Active
Settlement pending    Invoice generated
```

## 2.3 Independence of Both Sides

A user's FOR ME page and BY ME page are entirely independent:

- Having items FOR ME does not affect your BY ME items
- Settlement of a FOR ME memo does not trigger anything in BY ME
- Both pages can be active simultaneously with no conflict
- Items on different memos never cross-contaminate

## 2.4 Dashboard View (The Combined Overview)

The home screen gives a unified picture across both sides:

```
HOME DASHBOARD
═══════════════════════════════════════

FOR ME (I'm holding)          BY ME (Others are holding)
──────────────────            ─────────────────────────
12 active memos               8 active memos
47 items held                 22 items out
€320,000 total value          €180,000 total value

🔴 3 items overdue            🔴 1 item overdue
🟡 5 items due this week      🟡 2 items due this week
🟢 39 items active            🟢 19 items active

Pending settlements:          Pending settlements:
You owe: €45,000              Owed to you: €28,000
```

---

---

# SECTION 3: USER DEFINITION

## 3.1 Who Uses This App

The app is designed for **any participant in the jewelry and diamond ecosystem** who handles goods on consignment. The app does not distinguish between roles — any user can send memos, receive memos, or both. The industry includes but is not limited to:

- Diamond traders and brokers
- Jewelry wholesalers
- Retail jewelry stores
- Independent jewelry designers
- Gemstone dealers
- Auction houses (consignment intake)
- Estate jewelry buyers
- Watch dealers
- Jewelry manufacturers receiving stones on memo

**The app does not label users by role.** A user is simply someone who sends or receives consignments. Their activity defines their use pattern, not a role assigned at signup.

## 3.2 User Relationships

Users connect with each other through memos. When User A sends a memo to User B:

- Both must have accounts in the app
- User B receives a notification (in-app + optional WhatsApp/email)
- User B reviews the memo and signs
- The memo becomes active with both signatures locked

If User B does not yet have an account:
- User A can send a memo link via WhatsApp or email
- User B clicks the link, creates a free account, and signs
- The memo activates once both parties have signed
- User B now has an account and can use the app fully

This is the primary network growth mechanism: **every sent memo is an invitation.**

## 3.3 Team Accounts (Firms and Stores)

Some users operate as part of a team. A team account allows:

- Multiple staff members under one entity
- Manager-level oversight of all memos
- Staff-level restricted access (create memos, not see pricing)
- All memos signed "on behalf of [Firm Name]"
- White-label branding on all memos and communications

Team accounts are additive — they layer on top of individual accounts. The team entity sends and receives memos as an organization, not as individuals.

---

---

# SECTION 4: FULL FEATURE SPECIFICATION

## 4.1 Memo Creation

### 4.1.1 Creating a Memo

Any user can create a new memo at any time. A memo represents a single consignment agreement.

**Required fields:**
- Memo direction: FOR ME (I am receiving) or BY ME (I am sending)
- Other party: Name + phone/email (auto-suggest from contact history)
- Date: Auto-filled with today (editable)
- Items: At least one item (see Item Types)
- Due date or terms: "Return by [date]" or "30 days" or "Until recalled" or "Open-ended"

**Optional fields:**
- Reference number (auto-generated or custom)
- Notes / special conditions
- Agreed commission or markup percentage
- Internal memo (visible only to you, not shared)

### 4.1.2 Memo Numbering

Auto-generated in format: `[PREFIX]-[YEAR]-[SEQUENCE]`
- Default: `MEMO-2026-0001`
- Custom prefix for firm accounts: `RJS-2026-0001`
- Sequence resets per year or continues (user preference)

### 4.1.3 Draft State

A memo can be saved as Draft before any item is added or before sending to the other party. Draft memos:
- Are only visible to the creator
- Have no legal standing
- Cannot have signatures until published
- Can be deleted without trace

### 4.1.4 Publishing a Memo

When the creator is satisfied with the memo, they publish it:
1. Creator signs the memo (digital signature)
2. App generates a shareable link
3. Creator sends the link via: In-app | WhatsApp | Email | Copy link
4. Other party receives, reviews, and signs
5. Memo becomes active (both signatures present)

---

## 4.2 Items Within a Memo

### 4.2.1 Item Types

A single memo can contain any mix of:
- Natural diamonds (individual stones)
- Lab-grown diamonds (individual stones)
- Parcels (bulk lot of multiple stones)
- Jewelry pieces

See Section 7 for complete field schemas per item type.

### 4.2.2 Item Management

Each item within a memo has its own status and can be managed independently:

| Action | Description |
|---|---|
| Mark Sold | Record a sale without closing the memo |
| Mark Returned | Record an item's return without closing the memo |
| Mark Pending | Flag item as "discussion in progress" |
| Generate Invoice | Create invoice for this item from the memo details |
| Attach Document | Add photos, certs, appraisals to this specific item |
| Add Note | Private note on this item (not shared) |

### 4.2.3 Partial Fulfillment

A memo does not need to close all at once. Items resolve individually:

- Item 1: SOLD → invoice generated, settlement pending
- Item 2: RETURNED → memo item closed, no obligation
- Item 3: ACTIVE → still on consignment
- Item 4: SOLD → invoice generated, settlement pending
- Item 5: ACTIVE → still on consignment

The memo remains open as long as any item is active. It closes when all items are resolved.

---

## 4.3 Signatures

### 4.3.1 Signature Requirements

**Non-negotiable:** Every memo requires two signatures before it becomes active:
1. The creator's signature (drawn on screen at time of creation)
2. The other party's signature (drawn on screen when they review the link)

Signatures cannot be typed, selected, or auto-generated. They must be drawn with a finger or stylus.

### 4.3.2 Signature Properties

Each signature captures:
- The drawn signature image (PNG, losslessly stored)
- Full name of signer (as registered in their account)
- Date and time (device clock + server clock, both stored)
- Device information (phone model, OS version)
- IP address at time of signing
- App version

### 4.3.3 Signature Locking

Once both parties have signed:
- The memo content is locked (cannot be edited)
- Signatures are cryptographically hashed and stored
- Any attempt to modify the memo breaks the hash (detected immediately)
- The original signed memo is preserved forever in audit history

### 4.3.4 Amendments

If terms need to change after signing (e.g., extend the due date):
- Creator proposes an amendment with the specific change
- Amendment generates a new signature block
- Both parties must re-sign the amendment
- The original memo + all amendments are preserved in the audit trail
- The memo displays current state + full amendment history

### 4.3.5 Disputed Signatures

If a party claims they did not sign:
- The app displays: signature image, full name match, date/time, device, IP
- This data is immutable and was captured at signing
- Users are responsible for the security of their own devices and accounts
- The app does not arbitrate disputes but provides the complete evidence record

---

## 4.4 Settlement

### 4.4.1 What Settlement Means

Settlement is the resolution of financial obligation between the two parties when items are sold:

- Party B sells Item 1 from Party A's memo
- Party B owes Party A the agreed amount for that item
- Settlement = the payment of that obligation (or the formal agreement to defer/offset it)

**The app does not process payments.** It tracks the obligation and records when the parties agree it has been settled. How and when they settle is entirely their business.

### 4.4.2 Settlement Options

When generating a settlement:
- **Settle now:** Record as "Paid" with payment method (bank transfer, cash, check, or offset)
- **Offset against another memo:** "We'll count this against what you sent me last week"
- **Defer:** "We'll settle next time we meet" — records obligation as pending
- **Dispute:** "I disagree with this amount" — opens a negotiation thread

### 4.4.3 Settlement Memo

When one or more items are sold, the app can generate a formal Settlement Memo:
- Lists which items were sold
- Shows agreed price per item (visible to both parties)
- Shows amount owed (if applicable)
- Both parties sign the settlement memo
- Settlement memo is attached to the original memo in history

### 4.4.4 Partial Settlement

Settlement is per-item, not per-memo. You can settle 2 sold items today and hold the others for later. The memo tracks each item's settlement state independently.

---

## 4.5 Invoicing

### 4.5.1 Invoice Generation

When any item is marked sold, the user who sold it can generate an invoice:
- Invoice auto-fills from memo data: item specs, date, parties
- Sale price is entered at time of generating the invoice
- Invoice is distinct from the memo — it is between the seller and the end buyer

**Privacy:** The end buyer's invoice does not show what the seller paid/owes the original consignor. These are two separate financial relationships.

### 4.5.2 Invoice Contents

- Invoice number (auto-generated, sequential)
- Seller details (name, contact, company if applicable)
- Buyer details (name, contact — entered at time of sale)
- Item description (pulled from memo specs)
- Date of sale
- Price (entered at time of sale)
- Payment terms (due immediately / net 30 / etc.)
- Company logo (if white-label account)
- Optional notes

### 4.5.3 Sending an Invoice

From the invoice screen:
- **Email to buyer:** Enter buyer's email, app sends formatted PDF invoice
- **WhatsApp to buyer:** Sends link to invoice (viewable without app)
- **Copy link:** User copies the link and shares manually
- **Download PDF:** For printing or attaching elsewhere

### 4.5.4 Invoice Tracking

The app tracks each invoice:
- Sent: Date and method
- Viewed: When the recipient opened it
- Status: Unpaid / Paid / Overdue
- Payment record: Date paid, method (manually updated by sender)

---

## 4.6 Reminders & Notifications

### 4.6.1 Automatic Reminders (FOR ME — items I'm holding)

| Trigger | Notification |
|---|---|
| 7 days before due date | "You have items due to return to [name] in 7 days" |
| 3 days before due date | "Return deadline approaching: [name]'s [X] items" |
| 1 day before due date | "Tomorrow: [name]'s items are due for return or settlement" |
| Due date | "Today is the return date for [name]'s items. Have you settled?" |
| 1 day overdue | "Overdue: [name]'s items were due yesterday" |
| 3 days overdue | "3 days overdue: [name]'s items. Follow up?" |
| 7 days overdue | "One week overdue: [name]'s items. Urgent follow-up needed." |

### 4.6.2 Automatic Reminders (BY ME — items others are holding)

| Trigger | Notification |
|---|---|
| 7 days before due date | "Your items at [name] are due back in 7 days" |
| Due date | "[name] has your items and they're due today" |
| 1 day overdue | "Your items at [name] are 1 day overdue" |
| 7 days overdue | "Your items at [name] are 7 days overdue. Recommended: reach out" |

### 4.6.3 Notification Channels

Each reminder can be delivered via:
- In-app push notification
- WhatsApp message (if number linked)
- Email (if email provided)

Users configure their preference per channel. Can have all three, or just one.

### 4.6.4 Reminder Customization

Per memo or per contact:
- Adjust reminder frequency ("only remind me 1 day before")
- Mute reminders ("I'll handle this manually")
- Escalate reminders ("remind me every day once overdue")

---

## 4.7 Document Attachments

### 4.7.1 What Can Be Attached

Any document can be attached at the item level or memo level:
- Photos (JPG/PNG — compressed on device before upload)
- Certificates (GIA, HRD, IGI — PDF)
- Appraisals (PDF)
- Insurance documents (PDF)
- Any file up to 10MB per document

### 4.7.2 Attachment Levels

**Item-level attachment:** Photo of the specific diamond, its GIA cert, its appraisal
**Memo-level attachment:** General agreement document, shipping invoice, purchase order

### 4.7.3 Attachment Visibility

When sharing a memo with the other party:
- Creator chooses: Share all attachments | Share selected | Share none
- Attachments marked "Internal" are never shared automatically
- Other party can see shared attachments when they open the memo

### 4.7.4 Attachment in Signed Memo

Attachments added before signing are part of the locked memo record. Attachments added after signing are appended (with timestamp) but do not break the signature lock.

---

## 4.8 Multi-Language Support

### 4.8.1 UI Language

Every user selects their language in settings. The entire app interface renders in that language. Supported at launch: English, Dutch (Flemish), French, Hebrew, Hindi, Arabic, Spanish, Italian, German. Additional languages added in Phase 2.

### 4.8.2 Memo Translation

When sending a memo to a partner who uses a different language:
1. Creator creates memo in their language
2. App detects the recipient's language preference
3. App offers: "Translate this memo to English before sending?"
4. If yes: Both the original and translated version are stored
5. Recipient receives it in their language
6. Both versions are signed (they are equivalent)
7. Translation log is preserved: "Auto-translated from Dutch to English on [date] by system"

### 4.8.3 Legal Note on Translation

The app appends to every translated memo: *"This memo was automatically translated. In the event of a dispute, the original language version is the reference document."* Both versions are always accessible.

### 4.8.4 Currencies

Users select their primary currency at setup. When a memo involves two parties using different currencies:
- Memo price is stored in the currency of the creator
- Recipient sees the price in that currency (or optionally converted, with disclaimer)
- Exchange rate at time of memo creation is logged (for reference only, not enforcement)
- App uses live exchange rate data (updated daily from public API)

---

---

# SECTION 5: USER FLOWS

## 5.1 Flow A — Creating and Sending a Memo (BY ME)

```
USER ACTION                    SYSTEM RESPONSE
─────────────────              ────────────────────────────────────

Tap "New Memo"
                               Show: "FOR ME or BY ME?"
Tap "BY ME"
                               Show: memo creation form
Enter other party name         Auto-suggest from contact history
                               Pull up their profile if existing user

Add Item #1
                               Show: item type selector
Select "Natural Diamond"
                               Show: natural diamond fields
                               (carat, color, clarity, cut, fluor,
                                cert body, cert number)
Fill in specs
                               Validate fields (carat must be number,
                               color must be D-Z, etc.)
Enter price
                               Price encrypted — other party will not
                               see your price unless you share it
Tap "Add Item"
                               Item saved to memo
                               Show: "Add another item?" prompt

(repeat for all items)

Set due date
                               Show: calendar picker
                               Suggest common terms: 30/60/90 days
Enter terms note (optional)    Free text: "Return or settle by Aug 15"

Tap "Review Memo"
                               Show: memo preview (looks like physical memo)
                               Shows: all items, terms, party names
                               Does NOT show price (hidden by default)
                               Option: "Show my price to other party?"

Tap "Sign Memo"
                               Show: signature pad (full screen, white)
User draws signature
                               Capture signature + timestamp + device + IP
Tap "Done"
                               Lock creator's signature
                               Generate shareable link

                               Show: "How do you want to send this?"
                               Options: In-app | WhatsApp | Email | Copy link

Tap "WhatsApp"
                               Compose WhatsApp message:
                               "Hi [Name], I've created a memo for you.
                               Please review and sign:
                               [link]
                               Takes 30 seconds."
                               Open WhatsApp with pre-composed message
User sends the message
                               Memo status: AWAITING SIGNATURE
                               Creator notified when other party opens/signs
```

## 5.2 Flow B — Receiving and Signing a Memo (FOR ME)

```
USER ACTION                    SYSTEM RESPONSE
─────────────────              ────────────────────────────────────

Receive WhatsApp from Person A
Tap link
                               Open in app (or prompt to install if new user)
                               If new user: quick registration (name + phone)
                               then proceed to memo

                               Show: full memo (page view)
                               - Person A's details
                               - All items (specs visible, prices per settings)
                               - Terms and due date
                               - Person A's signature (visible, locked)
                               - "Review & Sign" button

User reads memo
                               Allow scroll through all items
                               Allow tap on each item for detail
                               Allow view of attached documents (if shared)

Tap "Sign Memo"
                               Show: signature pad
User draws signature
                               Capture signature + timestamp
                               Both signatures now present

                               Memo status → ACTIVE
                               Memo appears in user's FOR ME page
                               Person A notified: "[Your name] signed Memo #X"
                               Both parties receive a copy of the signed memo
```

## 5.3 Flow C — Selling an Item (Partial Fulfillment)

```
USER ACTION                    SYSTEM RESPONSE
─────────────────              ────────────────────────────────────

Open memo in FOR ME page
Tap item to sell
                               Show: item detail view
Tap "Mark as Sold"
                               Show: sale form
                               - Buyer name
                               - Buyer email/phone (optional)
                               - Sale price (your price to buyer, not cost)
                               - Sale date (default: today)
                               - Notes (optional)

Fill in sale details
Tap "Confirm Sale"
                               Item status → SOLD
                               Memo status → "Partially Active" (if other items remain)

                               Show: "Would you like to generate an invoice?"
Tap "Yes"
                               Show: invoice preview
                               Auto-filled: your details, buyer, item specs, price
                               Note: consignor's info NOT shown on invoice

Review invoice
Tap "Send Invoice"
                               Show: "Send to:"
                               - Buyer's email (pre-filled if entered)
                               - WhatsApp
                               - Copy link

Tap "Email"
                               Invoice sent to buyer
                               Invoice logged in memo history

                               Show: "Notify [consignor] about this sale?"
Tap "Yes"
                               Auto-notification sent to Person A:
                               "Item #1 from your Memo #X has been sold.
                               Settlement: [to be discussed]"

                               Settlement pending item created in dashboard
```

## 5.4 Flow D — Generating a Settlement

```
USER ACTION                    SYSTEM RESPONSE
─────────────────              ────────────────────────────────────

Open memo in FOR ME page
                               Show: memo status
                               "3 items sold, 2 items active
                               Pending settlement: [consignor name]"

Tap "Generate Settlement"
                               Show: settlement summary
                               - 3 items sold (details)
                               - Amount owed to consignor: [calculated]
                               - Payment method options
                               - Settlement memo preview

Review settlement
                               User can add note: "Paid by bank transfer on [date]"
                               Or: "We agreed to offset against Memo #Y"

Tap "Send Settlement to [name]"
                               Show: channel options (in-app / WhatsApp / email)
Tap "In-App"
                               Settlement memo sent to consignor within app
                               Consignor receives notification

Consignor reviews
                               [On consignor's device]
                               See: "Settlement offer received from [name]"
                               See: summary of what was sold, what's owed

Consignor taps "Accept"
                               Both parties notified: "Settlement accepted"
                               Settlement memo signed by both parties
                               Items marked: SETTLED
                               Memo updated: "3/5 items settled, 2 active"
```

## 5.5 Flow E — Amendment to a Signed Memo

```
USER ACTION                    SYSTEM RESPONSE
─────────────────              ────────────────────────────────────

Open signed memo
Tap "Request Amendment"
                               Show: amendment form
                               "What needs to change?"

Select: "Extend due date"
                               Show: new date picker
Pick new date
Add reason (optional)          "Requested by both parties"

Tap "Send Amendment to [name]"
                               Amendment sent to other party
                               Other party notified

Other party reviews
Taps "Accept Amendment"
                               Amendment signature blocks appear
Both parties sign amendment
                               Original memo preserved unchanged
                               Amendment appended (with signatures)
                               Due date updated to new date
                               Reminder schedule updated automatically
```

---

---

# SECTION 6: DATA MODEL

## 6.1 Entity Relationship Overview

```
USER ──────────────── TEAM (optional)
  │                     │
  │ creates/receives     │ belongs to
  ▼                     ▼
MEMO ─────────────── MEMO
  │
  ├── ITEMS (1 to many)
  │     ├── DOCUMENTS (1 to many)
  │     └── SALE_RECORD (0 or 1)
  │
  ├── SIGNATURES (exactly 2 when active)
  │
  ├── AMENDMENTS (0 to many)
  │     └── SIGNATURES (exactly 2 per amendment)
  │
  ├── SETTLEMENTS (0 to many)
  │     └── SETTLEMENT_ITEMS (1 to many)
  │
  └── INVOICES (0 to many)
```

## 6.2 Core Data Tables

### USERS

```sql
users (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email             VARCHAR(255) UNIQUE,
  phone             VARCHAR(30) UNIQUE,
  display_name      VARCHAR(100) NOT NULL,
  language          VARCHAR(10) DEFAULT 'en',
  timezone          VARCHAR(50) DEFAULT 'Europe/Brussels',
  currency          VARCHAR(3) DEFAULT 'EUR',
  team_id           UUID REFERENCES teams(id),
  team_role         ENUM('manager', 'staff', 'limited') DEFAULT NULL,
  whatsapp_number   VARCHAR(30),
  notification_prefs JSONB DEFAULT '{"push": true, "whatsapp": true, "email": true}',
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  last_active_at    TIMESTAMPTZ
)
```

### TEAMS

```sql
teams (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name              VARCHAR(200) NOT NULL,
  logo_url          VARCHAR(500),
  primary_color     VARCHAR(7),
  memo_prefix       VARCHAR(10),
  address           TEXT,
  phone             VARCHAR(30),
  email             VARCHAR(255),
  website           VARCHAR(255),
  footer_text       TEXT,
  created_at        TIMESTAMPTZ DEFAULT NOW()
)
```

### MEMOS

```sql
memos (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_number  VARCHAR(30) UNIQUE NOT NULL,
  direction         ENUM('for_me', 'by_me') NOT NULL,
  status            ENUM('draft', 'awaiting_signature', 'active',
                         'partially_settled', 'settled', 'closed',
                         'disputed') DEFAULT 'draft',
  creator_id        UUID NOT NULL REFERENCES users(id),
  partner_id        UUID REFERENCES users(id),
  partner_name_raw  VARCHAR(200),
  partner_email_raw VARCHAR(255),
  partner_phone_raw VARCHAR(30),
  due_date          DATE,
  terms_text        TEXT,
  currency          VARCHAR(3) NOT NULL,
  original_language VARCHAR(10) NOT NULL,
  internal_note     TEXT,
  creator_signed_at TIMESTAMPTZ,
  partner_signed_at TIMESTAMPTZ,
  is_locked         BOOLEAN DEFAULT FALSE,
  content_hash      VARCHAR(64),
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
)
```

### ITEMS

```sql
items (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  memo_id           UUID NOT NULL REFERENCES memos(id),
  sequence          INTEGER NOT NULL,
  item_type         ENUM('natural_diamond', 'lab_diamond',
                         'parcel', 'jewelry') NOT NULL,
  status            ENUM('active', 'sold', 'returned',
                         'disputed', 'written_off') DEFAULT 'active',
  specs             JSONB NOT NULL,
  price_encrypted   BYTEA,
  price_currency    VARCHAR(3),
  price_visible_to_partner BOOLEAN DEFAULT FALSE,
  internal_note     TEXT,
  sold_at           TIMESTAMPTZ,
  returned_at       TIMESTAMPTZ,
  created_at        TIMESTAMPTZ DEFAULT NOW()
)
```

### SIGNATURES

```sql
signatures (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  memo_id           UUID NOT NULL REFERENCES memos(id),
  amendment_id      UUID REFERENCES amendments(id),
  signer_id         UUID NOT NULL REFERENCES users(id),
  signer_name       VARCHAR(200) NOT NULL,
  signature_image   BYTEA NOT NULL,
  signature_hash    VARCHAR(64) NOT NULL,
  signed_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  device_info       JSONB,
  ip_address        INET,
  app_version       VARCHAR(20),
  is_valid          BOOLEAN DEFAULT TRUE
)
```

### AMENDMENTS

```sql
amendments (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  memo_id           UUID NOT NULL REFERENCES memos(id),
  sequence          INTEGER NOT NULL,
  change_type       VARCHAR(50),
  change_description TEXT NOT NULL,
  previous_value    JSONB,
  new_value         JSONB,
  proposed_by_id    UUID NOT NULL REFERENCES users(id),
  proposed_at       TIMESTAMPTZ DEFAULT NOW(),
  accepted_at       TIMESTAMPTZ,
  status            ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending'
)
```

### SETTLEMENTS

```sql
settlements (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  memo_id           UUID NOT NULL REFERENCES memos(id),
  reference         VARCHAR(30),
  status            ENUM('draft', 'sent', 'accepted', 'disputed', 'paid') DEFAULT 'draft',
  total_amount      DECIMAL(15,2),
  currency          VARCHAR(3),
  payment_method    ENUM('bank_transfer', 'cash', 'check',
                         'memo_offset', 'crypto', 'tbd'),
  payment_note      TEXT,
  created_by_id     UUID NOT NULL REFERENCES users(id),
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  accepted_at       TIMESTAMPTZ,
  paid_at           TIMESTAMPTZ
)
```

### SETTLEMENT_ITEMS

```sql
settlement_items (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  settlement_id     UUID NOT NULL REFERENCES settlements(id),
  item_id           UUID NOT NULL REFERENCES items(id),
  agreed_amount     DECIMAL(15,2) NOT NULL,
  currency          VARCHAR(3) NOT NULL,
  notes             TEXT
)
```

### INVOICES

```sql
invoices (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_number  VARCHAR(30) UNIQUE NOT NULL,
  item_id           UUID NOT NULL REFERENCES items(id),
  memo_id           UUID NOT NULL REFERENCES memos(id),
  seller_id         UUID NOT NULL REFERENCES users(id),
  buyer_name        VARCHAR(200) NOT NULL,
  buyer_email       VARCHAR(255),
  buyer_phone       VARCHAR(30),
  buyer_company     VARCHAR(200),
  sale_price        DECIMAL(15,2) NOT NULL,
  currency          VARCHAR(3) NOT NULL,
  payment_terms     VARCHAR(100),
  status            ENUM('draft', 'sent', 'viewed', 'paid', 'overdue') DEFAULT 'draft',
  sent_at           TIMESTAMPTZ,
  viewed_at         TIMESTAMPTZ,
  paid_at           TIMESTAMPTZ,
  notes             TEXT,
  created_at        TIMESTAMPTZ DEFAULT NOW()
)
```

### DOCUMENTS

```sql
documents (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  item_id           UUID REFERENCES items(id),
  memo_id           UUID REFERENCES memos(id),
  uploader_id       UUID NOT NULL REFERENCES users(id),
  file_name         VARCHAR(255) NOT NULL,
  file_type         VARCHAR(50),
  file_size_bytes   INTEGER,
  storage_url       VARCHAR(500) NOT NULL,
  is_shared         BOOLEAN DEFAULT TRUE,
  is_internal       BOOLEAN DEFAULT FALSE,
  added_before_signing BOOLEAN NOT NULL,
  notes             TEXT,
  created_at        TIMESTAMPTZ DEFAULT NOW()
)
```

### AUDIT_LOG

```sql
audit_log (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type       VARCHAR(50) NOT NULL,
  entity_id         UUID NOT NULL,
  actor_id          UUID REFERENCES users(id),
  action            VARCHAR(100) NOT NULL,
  previous_state    JSONB,
  new_state         JSONB,
  metadata          JSONB,
  created_at        TIMESTAMPTZ DEFAULT NOW()
)
```

---

---

# SECTION 7: ITEM TYPE SCHEMAS

## 7.1 Natural Diamond

```json
{
  "type": "natural_diamond",
  "carat_weight": 1.23,
  "color": "D",
  "clarity": "VVS1",
  "cut": "Excellent",
  "fluorescence": "None",
  "polish": "Excellent",
  "symmetry": "Excellent",
  "shape": "Round",
  "measurements": "6.23 x 6.27 x 3.87",
  "certification": {
    "body": "GIA",
    "certificate_number": "2356789123",
    "issue_date": "2025-03-12"
  },
  "additional_characteristics": "",
  "internal_notes": ""
}
```

**Mandatory fields:** carat_weight, color, clarity
**Optional fields:** cut, fluorescence, polish, symmetry, shape, measurements, certification, additional_characteristics

## 7.2 Lab-Grown Diamond

```json
{
  "type": "lab_diamond",
  "carat_weight": 2.01,
  "color": "E",
  "clarity": "VS1",
  "cut": "Excellent",
  "fluorescence": "None",
  "growth_method": "CVD",
  "lab_name": "GIA",
  "lab_certificate_number": "LGLD-2025-4567",
  "post_growth_treatment": "None",
  "internal_notes": ""
}
```

**Mandatory fields:** carat_weight, color, clarity, growth_method
**Optional fields:** cut, fluorescence, lab_name, lab_certificate_number, post_growth_treatment

**CRITICAL SYSTEM RULE:** Natural diamonds and lab-grown diamonds must never appear in the same item entry. The type field is immutable after creation. On every display surface where a diamond appears, its type must be shown prominently (Natural Diamond / Lab-Grown Diamond).

## 7.3 Parcel (Bulk Lot)

```json
{
  "type": "parcel",
  "stone_type": "natural_diamond",
  "total_carat_weight": 5.40,
  "number_of_stones": 120,
  "size_range": "0.03-0.07ct",
  "color_range": "G-H",
  "clarity_range": "SI1-SI2",
  "cut_quality": "Good-Very Good",
  "shape": "Round",
  "lot_description": "Melee parcel, well-matched",
  "internal_notes": ""
}
```

**Mandatory fields:** stone_type, total_carat_weight, number_of_stones
**Optional fields:** size_range, color_range, clarity_range, cut_quality, shape, lot_description

## 7.4 Jewelry

```json
{
  "type": "jewelry",
  "category": "Ring",
  "description": "18k white gold diamond solitaire ring",
  "metal_type": "Gold",
  "metal_purity": "18k",
  "metal_color": "White",
  "total_weight_grams": 4.2,
  "gemstones": [
    {
      "type": "natural_diamond",
      "carat_weight": 1.05,
      "color": "F",
      "clarity": "VS2",
      "cut": "Excellent",
      "cert_number": "GIA-1234567"
    }
  ],
  "ring_size": "52",
  "condition": "New",
  "hallmark": "750",
  "brand": "",
  "internal_notes": ""
}
```

**Mandatory fields:** category, description, metal_type, metal_purity
**Optional fields:** metal_color, total_weight_grams, gemstones (array), ring_size, condition, hallmark, brand

---

---

# SECTION 8: SIGNATURE PROTOCOL

## 8.1 Signature Capture Flow

1. Full-screen white canvas appears
2. User draws signature with finger or stylus
3. Minimum stroke validation (must draw at least 3 strokes — prevents accidental taps)
4. User can clear and redo
5. On confirm: signature is captured as PNG at 2x device resolution
6. Timestamp recorded from both device clock and server clock
7. SHA-256 hash generated from: signature_bytes + memo_content + timestamp + user_id
8. Hash stored separately from signature (allows integrity verification)

## 8.2 Signature Verification

Any time a memo is displayed:
- App silently verifies that content_hash still matches memo content
- If hash mismatch detected → memo flagged as "INTEGRITY COMPROMISED"
- Both parties notified
- Memo locked from further edits

## 8.3 Signature Display

On the signed memo view:
```
╔════════════════════════════════════╗
║ SIGNATURES                         ║
║                                    ║
║ [Signature image — Person A]       ║
║ Person A                           ║
║ Signed: June 21, 2026 at 10:47 AM ║
║ ✓ Verified                         ║
║                                    ║
║ [Signature image — Person B]       ║
║ Person B                           ║
║ Signed: June 21, 2026 at 11:12 AM ║
║ ✓ Verified                         ║
╚════════════════════════════════════╝
```

## 8.4 Legal Consideration

The app should display this notice at first sign-up and when first signing a memo:

> "By signing this memo, you confirm that you have read and agreed to its contents. Your digital signature, combined with your verified identity, timestamp, and device information, constitutes your agreement to the terms of this consignment."

---

---

# SECTION 9: AI SPECIFICATIONS

## 9.1 Analytics AI

### Purpose
Surface patterns and insights that the user would otherwise have to calculate manually. The Analytics AI is a read-only intelligence layer — it never takes action, it only provides information.

### Data Sources
The Analytics AI has access to (and only to) the requesting user's own data:
- All their memos (FOR ME and BY ME), current and historical
- Item specs, prices (decrypted for computation, never exposed in raw form), statuses
- Sale records, settlement history
- Partner interaction history (how long each partner takes, their reliability)

**CRITICAL:** The Analytics AI never shares data between users. It cannot benchmark a user against others (no peer comparison features at this stage).

### Insights Generated

**Portfolio Overview (always visible on dashboard):**
- Total items FOR ME (with value)
- Total items BY ME (with value)
- Overdue count (both sides)
- Pending settlement amounts
- Items sold this month vs. last month

**Partner Insights (per contact):**
- Average time held before selling or returning
- Settlement reliability (pays on time, always late, etc.)
- Most common item types they receive from you
- Most common item types you receive from them
- Total value transacted (all time, this year)

**Item Insights (per item type):**
- Average selling time (natural diamonds: X days, lab-grown: Y days)
- Price range achieved on historical sales
- Which partners move these items fastest

**Actionable Suggestions (pushed proactively):**
- "You haven't offered natural diamonds to [name] in 3 months. Last time you did, they sold within 2 weeks."
- "Lab-grown parcels over 2ct have been sitting longer than usual. Consider adjusting terms or contact."
- "Your [name] memo has been active for 60 days. Historical average for this partner is 45 days."

### AI Response Format

The AI must respond in natural language, in the user's preferred language. It must not use jargon the user wouldn't recognize. It must be specific, not generic.

**Good:** "Rajesh took an average of 23 days to sell your diamond parcels last year. This current parcel has been with him for 31 days, which is 8 days longer than usual. You might want to follow up."

**Bad:** "Based on historical data patterns, consignment velocity metrics suggest deviation from mean settlement timelines for this counterparty."

### Analytics AI — System Prompt Template

```
You are the analytics assistant for a jewelry and diamond consignment platform. 
Your job is to help the user understand patterns in their business.

You have access to the following user data:
[USER_MEMOS_JSON]

The user's preferred language is: [LANGUAGE]
The user's primary currency is: [CURRENCY]

Answer questions about their data directly and specifically. 
Use their partner names, actual numbers, and real dates.
Never be vague. Never use generic business language.
Never compare this user's data to other users.
If you don't have enough data to give a meaningful insight, say so clearly.
```

---

## 9.2 Secretary AI

### Purpose
The Secretary AI handles the communication and administrative work that currently takes dealers hours per day. It drafts, suggests, and executes (with approval) actions on behalf of the user.

**Cardinal rule: The Secretary AI never takes any action without explicit user approval.** It drafts and suggests. The user approves or edits before anything is sent or recorded.

### Capabilities

**Drafting Communications:**
- Follow-up messages for overdue memos
- Settlement offer drafts
- Memo extension requests
- Invoice follow-ups (payment reminders to buyers)
- "Items available" notifications to partners (if the AI suggests a sale opportunity)

**Suggested Actions:**
- "Rajesh's memo is 5 days overdue. Would you like me to draft a follow-up?"
- "You have 3 unsettled items sold to customers this month. Want me to draft payment reminders?"
- "You received a jewelry parcel from [name] 45 days ago. Terms were 30 days. Shall I propose an extension or ask for return?"

**Negotiation Assistance:**
- Draft counter-offers on settlement terms
- Suggest extension fee language ("Extend by 30 days with a 1% holding fee")
- Flag unusual requests ("This partner is asking for a 90-day extension but historically they sell within 14 days — unusual")

**Daily Summary (optional, user preference):**
- Morning briefing: "You have 2 overdue items, 3 settlements pending, 1 invoice unpaid."
- Suggested today: "Follow up with Rajesh, check on Sameer's return, and consider offering the 0.8ct stone to Zara."

### Secretary AI — Approval Flow

```
SECRETARY SUGGESTION:
───────────────────────────────────────────
"Rajesh's memo is 8 days overdue.
I've drafted a follow-up message:

───────────────────────────────────────────
'Hi Rajesh, I wanted to follow up on the
5-diamond parcel from June 1st. It was due
on July 1st. Would you like to settle the
sold items or arrange a return? Let me know
what works best.'
───────────────────────────────────────────

[Edit message]  [Send via WhatsApp]  [Send via Email]  [Dismiss]"
```

User taps "Send via WhatsApp" → message sent, logged in memo history.
User taps "Edit message" → opens editable draft, user modifies, then sends.
User taps "Dismiss" → suggestion dismissed, can be recalled from history.

### Secretary AI — System Prompt Template

```
You are the executive assistant for a jewelry and diamond consignment professional.
Your job is to help them manage their consignment relationships professionally and efficiently.

You have access to the following context:
- Active memos: [MEMOS_JSON]
- Partner history: [PARTNER_HISTORY_JSON]
- Today's date: [DATE]
- User's language: [LANGUAGE]
- User's name: [USER_NAME]

When drafting messages:
- Write in [LANGUAGE]
- Be professional but warm — this is an industry built on relationships
- Be specific (mention exact items, dates, amounts)
- Never threaten legal action or create adversarial tone
- Keep messages short (under 100 words)
- Write in the first person as if you are the user

Never:
- Send anything without explicit user approval
- Make promises about payment amounts
- Commit to terms the user hasn't confirmed
- Reveal the user's cost basis or margin

Always:
- Present the draft to the user for review
- Allow the user to edit before sending
- Log all sent communications in the memo history
```

---

---

# SECTION 10: INTEGRATION SPECIFICATIONS

## 10.1 WhatsApp Integration

### Method
WhatsApp Business API via Twilio (or direct Meta Business API, subject to access approval).

### What Gets Sent via WhatsApp

| Trigger | WhatsApp Content |
|---|---|
| Memo sent to partner | "Hi [name], [sender] has sent you a consignment memo to review and sign. [link]" |
| Reminder: 7 days before due | "[name]'s consignment is due in 7 days. [link to memo]" |
| Overdue alert | "OVERDUE: [name]'s consignment was due [X] days ago. [link]" |
| Item sold (notify consignor) | "Your item from Memo #X has been sold. A settlement will follow. [link]" |
| Secretary draft approved | [The drafted message, as approved by user] |
| Invoice sent | "[link] — Invoice from [user] for [item description]" |

### Two-Way Messaging

If the recipient replies to a WhatsApp message sent from the app:
- Their reply is captured via Twilio webhook
- Reply is logged in the memo's communication history
- User is notified in-app: "New reply from [name]"
- Reply is visible in memo timeline

### No Automated Replies

The app does not auto-reply to WhatsApp messages. All replies from the app side require user approval (Secretary AI flow).

## 10.2 Email Integration

### Method
SendGrid for transactional email. Users can optionally connect their own email via SMTP credentials (for firm accounts using company email).

### What Gets Sent via Email

| Trigger | Email Content |
|---|---|
| Memo sent to partner | Formatted memo PDF as attachment + signing link |
| Invoice to buyer | Invoice PDF as attachment |
| Settlement memo | Settlement PDF as attachment |
| Reminder | Plain text reminder + memo link |
| Secretary draft approved | Formatted email as composed by Secretary AI |

### Email Branding

Default: App branding (Memo logo, neutral header)
With white-label account: Company logo, company colors, custom footer

### Email Tracking

- Open events tracked via 1px tracking pixel
- Click events tracked on links
- Data stored in invoices.viewed_at and logged in audit_log
- Users can see "Invoice opened by buyer on [date]"

---

---

# SECTION 11: TEAM MANAGEMENT & WHITE-LABEL

## 11.1 Team Account Structure

A team account represents an organization (firm, store, trading house). It has:
- One or more manager accounts (full permissions)
- Zero or more staff accounts (restricted permissions)
- A team identity (logo, name, colors, prefix)

All memos created by team members are signed as "[Staff Name] on behalf of [Team Name]" unless the manager disables this.

## 11.2 Role Permissions Matrix

| Permission | Manager | Staff | Limited |
|---|---|---|---|
| Create memos | ✅ | ✅ | ✅ |
| View all team memos | ✅ | ❌ | ❌ |
| View own memos only | ✅ | ✅ | ✅ |
| See prices on memos | ✅ | Configurable | ❌ |
| Generate invoices | ✅ | ✅ | ❌ |
| Generate settlements | ✅ | Configurable | ❌ |
| Approve Secretary AI actions | ✅ | ✅ | ❌ |
| Invite team members | ✅ | ❌ | ❌ |
| Modify branding | ✅ | ❌ | ❌ |
| View audit log | ✅ | ❌ | ❌ |
| Export data | ✅ | ❌ | ❌ |
| Delete memos | ✅ | ❌ | ❌ |

"Configurable" means the Manager can individually toggle this per staff member.

## 11.3 White-Label Branding Configuration

From the team settings screen, a manager can configure:

```
BRANDING SETTINGS
─────────────────────────────────────────
Company logo:        [Upload PNG/SVG]
Company name:        [Text field]
Address:             [Multi-line text]
Phone:               [Text field]
Email:               [Text field]
Website:             [Text field]
Memo prefix:         [Text field — e.g. RJS]
Primary color:       [Color picker — used for accents]
Footer text:         [Text field — e.g. legal disclaimer]
Email signature:     [Text field — below all emails]
```

When configured, every memo shows:
```
╔═══════════════════════════════════════════╗
║   [COMPANY LOGO]                          ║
║   RAJESH & SONS TRADING                   ║
║   123 Diamond Street, Antwerp, Belgium    ║
║   +32 3 123 4567 | info@rajeshsons.com    ║
╠═══════════════════════════════════════════╣
║   CONSIGNMENT MEMO — RJS-2026-0047        ║
║   Antwerp, June 21, 2026                  ║
║ ...                                       ║
╚═══════════════════════════════════════════╝
```

---

---

# SECTION 12: TECHNICAL ARCHITECTURE

## 12.1 Platform Summary

| Layer | Technology | Rationale |
|---|---|---|
| iOS app | React Native (Expo) | Single codebase, native performance |
| Android app | React Native (Expo) | Same codebase as iOS |
| Web app | React (Next.js) | SSR for fast initial load, same component library |
| API | Node.js + Express | REST API, battle-tested, fast iteration |
| Database | PostgreSQL 15 | Relational integrity critical for financial data |
| Cache | Redis | Session tokens, real-time notifications |
| File storage | AWS S3 (or equivalent) | Signatures, documents, photos |
| Real-time | WebSocket (Socket.io) | Live memo updates, signature events |
| AI | OpenAI GPT-4 API | Analytics + Secretary AI features |
| Translation | Google Translate API | 100+ languages, fast, accurate |
| WhatsApp | Twilio WhatsApp Business API | Two-way messaging, webhooks |
| Email | SendGrid | Transactional email, tracking, PDF attachments |
| Auth | JWT + refresh tokens | Stateless, mobile-friendly |
| Encryption | AES-256 (prices) + TLS (transit) | Industry standard |

## 12.2 API Design Principles

- RESTful endpoints with consistent naming
- All responses in JSON
- Pagination on all list endpoints (default: 25 per page)
- Versioning via URL prefix: `/api/v1/`
- Rate limiting: 100 req/min per authenticated user
- All errors return: `{ error: { code, message, field? } }`

## 12.3 Core API Endpoints

```
AUTH
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh
POST   /api/v1/auth/forgot-password

USERS
GET    /api/v1/users/me
PATCH  /api/v1/users/me
GET    /api/v1/users/search?q=

MEMOS
GET    /api/v1/memos               # all memos (both sides)
GET    /api/v1/memos/for-me        # FOR ME memos only
GET    /api/v1/memos/by-me         # BY ME memos only
POST   /api/v1/memos               # create new memo
GET    /api/v1/memos/:id           # get single memo
PATCH  /api/v1/memos/:id           # update draft memo
DELETE /api/v1/memos/:id           # delete draft only
POST   /api/v1/memos/:id/publish   # publish memo (creator signature)
POST   /api/v1/memos/:id/sign      # partner signature
POST   /api/v1/memos/:id/amend     # propose amendment

ITEMS
POST   /api/v1/memos/:id/items           # add item to memo
GET    /api/v1/memos/:id/items           # list items in memo
GET    /api/v1/memos/:id/items/:itemId   # get single item
PATCH  /api/v1/memos/:id/items/:itemId   # update item (pre-sign only)
POST   /api/v1/memos/:id/items/:itemId/sell    # mark sold
POST   /api/v1/memos/:id/items/:itemId/return  # mark returned

DOCUMENTS
POST   /api/v1/memos/:id/items/:itemId/documents   # attach document to item
GET    /api/v1/memos/:id/items/:itemId/documents   # list documents
DELETE /api/v1/memos/:id/items/:itemId/documents/:docId

SETTLEMENTS
POST   /api/v1/memos/:id/settlements        # create settlement
GET    /api/v1/memos/:id/settlements        # list settlements
POST   /api/v1/settlements/:id/accept       # accept settlement
POST   /api/v1/settlements/:id/dispute      # dispute settlement

INVOICES
POST   /api/v1/items/:itemId/invoices    # generate invoice
GET    /api/v1/invoices                  # list all invoices
GET    /api/v1/invoices/:id              # get invoice
POST   /api/v1/invoices/:id/send         # send invoice
POST   /api/v1/invoices/:id/mark-paid    # mark as paid

AI
POST   /api/v1/ai/analytics/query        # ask analytics AI
GET    /api/v1/ai/analytics/insights     # get proactive insights
POST   /api/v1/ai/secretary/suggest      # get secretary suggestion
POST   /api/v1/ai/secretary/send         # approve and send suggestion

TEAMS
POST   /api/v1/teams                     # create team
GET    /api/v1/teams/me                  # get my team
PATCH  /api/v1/teams/me                  # update team settings
POST   /api/v1/teams/me/members          # invite member
PATCH  /api/v1/teams/me/members/:userId  # update member role
DELETE /api/v1/teams/me/members/:userId  # remove member
```

## 12.4 Offline Architecture

The app uses a local-first approach:

1. All memo data is stored locally in SQLite (mobile) / IndexedDB (web)
2. User can create memos, add items, and view all data offline
3. When network is available, a sync queue processes pending operations
4. Conflicts are resolved by: server wins for signatures, last-write wins for drafts
5. Signature events are queued and processed in order (never lost)
6. Document uploads queue for when connectivity resumes

---

---

# SECTION 13: UI/UX SPECIFICATION

## 13.1 Navigation Structure

```
BOTTOM TAB BAR (mobile)
├── [Home]        Dashboard overview (FOR ME + BY ME summary)
├── [For Me]      All memos where I am holding items
├── [By Me]       All memos where others are holding my items
├── [AI]          Secretary AI + Analytics AI interface
└── [Settings]    Account, notifications, team, branding

TOP NAV (web)
├── Logo / Home
├── For Me
├── By Me
├── Analytics
├── Secretary AI
└── Settings / Team
```

## 13.2 The Memo Book UI (Core Experience)

### List View (per tab)
- Each memo shown as a card (compact)
- Card shows: partner name, memo number, due date, status badge, item count
- Status color coding: Active (blue), Overdue (red), Due Soon (amber), Settled (green)
- Swipe left on card → quick actions (remind, settle, view)
- Tap card → open memo page view

### Memo Page View (The Book Experience)

When a memo is opened, it expands to fill the screen in portrait mode:

```
╔══════════════════════════════════════╗
║ MEMO #RJS-2026-0047          [Close] ║
╠══════════════════════════════════════╣
║     Antwerp, June 21, 2026           ║
║                                      ║
║  Name: Rajesh Patel                  ║
║  ──────────────────────────────────  ║
║  Received on COMMISSION basis,       ║
║  the following goods from:           ║
║  Rajesh & Sons Trading               ║
║  ──────────────────────────────────  ║
║  These goods are for sale ONLY WITH  ║
║  OUR AGREEMENT, or have to be        ║
║  returned on request.                ║
║  ──────────────────────────────────  ║
║                                      ║
║  N° │ Description  │ Price │ Status  ║
║  ───┼──────────────┼───────┼───────  ║
║  1  │ 1.2ct D VVS1 │ [🔒]  │ Active  ║
║  2  │ 0.8ct F VS1  │ [🔒]  │ SOLD ✓  ║
║  3  │ 1.5ct G SI1  │ [🔒]  │ Active  ║
║  4  │ 0.5ct H VS2  │ [🔒]  │ Active  ║
║  5  │ 1.0ct E VVS2 │ [🔒]  │ Active  ║
║  ──────────────────────────────────  ║
║                                      ║
║  Due: August 15, 2026                ║
║  Terms: Return or settle by due date ║
║                                      ║
║  ✓ Signed by You — June 21, 2026     ║
║  ✓ Signed by Rajesh — June 21, 2026  ║
╠══════════════════════════════════════╣
║ [SELL] [RETURN] [SETTLE] [SHARE] [+] ║
╚══════════════════════════════════════╝
```

### Page Flip Animation

- Swiping left → opens next memo (right-to-left page flip animation)
- Swiping right → returns to previous memo
- The animation resembles a physical book page turning
- Implementation: React Native Reanimated 2 with shared element transitions

## 13.3 Item Detail View

Tapping any item in the memo opens a detail overlay:

```
ITEM #1 — NATURAL DIAMOND
══════════════════════════════════

Carat weight:    1.20 ct
Color:           D
Clarity:         VVS1
Cut:             Excellent
Fluorescence:    None

Certification:   GIA — 2356789123
                 Issued: March 12, 2025

Price:           🔒 (hidden)     [Show]

Status:          ACTIVE

Attachments:
  📄 GIA Certificate.pdf
  📸 Photo — Front view.jpg
  📸 Photo — Side view.jpg

                    [SELL ITEM]  [MARK RETURNED]
```

## 13.4 Signature Screen

```
╔═════════════════════════════════════════╗
║              SIGN HERE                  ║
║                                         ║
║  ┌─────────────────────────────────┐   ║
║  │                                 │   ║
║  │     [drawing area]              │   ║
║  │                                 │   ║
║  │                                 │   ║
║  │_________________________________│   ║
║                                         ║
║  [Clear]              [Confirm Sign]   ║
╚═════════════════════════════════════════╝
```

- Full white canvas
- Finger/stylus draws in black ink
- Minimum stroke validation before "Confirm Sign" activates
- After confirm: animate signature into the memo footer

## 13.5 Dashboard Widgets (Home Screen)

```
FOR ME                        BY ME
──────────────                ──────────────
12 active memos               8 active memos
🔴 3 overdue                  🔴 1 overdue
🟡 5 due this week            🟡 2 due this week

──────────────────────────────────────────
QUICK ACTIONS
[+ New Memo]   [Pending Signatures]   [AI Brief]

──────────────────────────────────────────
SECRETARY AI
💡 "Rajesh's memo is 3 days overdue.
    Shall I draft a follow-up?"
[Draft message]  [Dismiss]

──────────────────────────────────────────
RECENT ACTIVITY
• Item #2 from Memo #RJS-0047 sold — 2h ago
• Zara signed Memo #RJS-0049 — yesterday
• Settlement from Sameer received — 2 days ago
```

---

---

# SECTION 14: PRIVACY & SECURITY

## 14.1 Data Ownership

- All memo data belongs to the user who created it
- Neither the platform nor any third party can access memo contents
- Users can export all their data at any time (GDPR right to portability)
- Users can delete their account and all associated data (GDPR right to erasure)

## 14.2 Price Privacy

- Prices entered into the app are encrypted at rest using AES-256
- The user's price for an item is never transmitted to the other party unless the user explicitly toggles "Show price to partner"
- Even the platform servers store prices in encrypted form

## 14.3 Cross-User Privacy

- Users cannot search for or access another user's memos unless they are a party to that memo
- The platform does not aggregate or sell user data
- No cross-user benchmarking or market data is exposed (this is a future feature if consensual opt-in is built)

## 14.4 Audit Trail

Every action in the system is logged to the audit_log table:
- Create, edit, publish, sign, amend, sell, return, settle, invoice
- These logs are immutable (INSERT only, no UPDATE/DELETE)
- Accessible to the user and their team manager
- Never accessible to other users

## 14.5 GDPR Compliance

- Cookie consent implemented (Europe-standard)
- Privacy policy covers all data handling
- User data never shared with ad networks
- No behavioral tracking for advertising purposes
- Data processing agreement available for firm accounts

## 14.6 Infrastructure Security

- All traffic over HTTPS/TLS 1.3
- Database not publicly accessible (VPC private subnet)
- API behind rate limiting and DDoS protection (Cloudflare)
- Regular automated backups (daily, encrypted, 90-day retention)
- Penetration testing before launch
- Secrets management via environment variables (never in code)

---

---

# SECTION 15: IMPLEMENTATION ROADMAP

## Phase 1 — Core Memo Book (MVP)
**Target Duration:** 10 weeks  
**Goal:** Replace the physical memo book with a digital equivalent

### Deliverables
- [ ] User registration and authentication (email + phone)
- [ ] FOR ME page (receive memos, view items, sign)
- [ ] BY ME page (create memos, add items, send for signature)
- [ ] Item creation (natural diamond, lab-grown diamond, jewelry, parcel)
- [ ] Digital signature flow (draw, capture, lock, verify)
- [ ] Memo sharing (in-app link, WhatsApp, email, copy)
- [ ] Partner registration via link (new users invited by memo link)
- [ ] Mark items sold / returned (partial fulfillment)
- [ ] Basic reminders (due date, overdue — push notifications)
- [ ] Memo page-flip UI (swipe navigation, book feel)
- [ ] Document attachments (photos + PDFs per item)
- [ ] Audit trail (all actions logged)
- [ ] Offline support (create/view offline, sync online)
- [ ] Basic dashboard (FOR ME + BY ME overview)

### Not in Phase 1
- Invoicing, settlements, AI, translations, team features

---

## Phase 2 — Complete Workflow
**Target Duration:** 10 weeks (after Phase 1 launch)  
**Goal:** Add the remaining workflow features

### Deliverables
- [ ] Invoice generation (from sold items)
- [ ] Email invoicing (SendGrid integration + PDF)
- [ ] WhatsApp invoicing (Twilio)
- [ ] Settlement tracking and settlement memo generation
- [ ] Settlement acceptance / dispute flow
- [ ] Amendment flow (propose + re-sign)
- [ ] Multi-language UI (English, Dutch, French, Hebrew, Arabic, Hindi at minimum)
- [ ] Auto-translate memos (Google Translate API)
- [ ] Smart reminders (configurable per memo / contact)
- [ ] Analytics AI (pattern recognition, portfolio insights)
- [ ] Export to PDF / Excel
- [ ] In-app notification center
- [ ] Contact history (all memos with a given partner, relationship summary)

---

## Phase 3 — AI Secretary & Team
**Target Duration:** 10 weeks (after Phase 2 launch)  
**Goal:** Add AI automation and enterprise features

### Deliverables
- [ ] Secretary AI (draft communications, suggest actions, approve-to-send flow)
- [ ] Secretary AI daily briefing (morning summary)
- [ ] Team accounts (create firm, invite staff)
- [ ] Role-based permissions (manager / staff / limited)
- [ ] Per-memo access control
- [ ] White-label branding (logo, header, footer, colors, prefix)
- [ ] Branded email templates
- [ ] Team audit log
- [ ] Manager dashboard (firm-wide overview)
- [ ] Advanced analytics (firm-level insights)
- [ ] Web companion (desktop view for offices)
- [ ] API access (for integrations with accounting software)

---

---

# SECTION 16: OPEN DECISIONS

The following decisions need to be made before or during Phase 1 development:

| # | Decision | Options | Recommended |
|---|---|---|---|
| 1 | Mobile launch sequence | iOS first / Android first / Simultaneous | Simultaneous (React Native) |
| 2 | Launch languages | English only / English + Dutch + Hebrew | English + Dutch + Hebrew |
| 3 | Offline duration limit | 24 hours / 7 days / Unlimited | 7 days before forced sync |
| 4 | Memo number format | Sequential / Year-prefixed / Custom | Year-prefixed default, custom for teams |
| 5 | Partner invite UX | Link only / Link + SMS / Link + WhatsApp | Link + WhatsApp |
| 6 | Price visibility default | Hidden / Visible | Hidden by default |
| 7 | Secretary AI trigger | Proactive (push) / On-demand only | Both (user configurable) |
| 8 | Team size limit | 5 / 10 / 25 / Unlimited | Unlimited |
| 9 | Backup frequency | Daily / Hourly / Real-time | Hourly with real-time WAL |
| 10 | White-label domain | Subdomain only / Custom domain | Subdomain at launch, custom domain Phase 3 |
| 11 | Analytics opt-in | Opt-out by default / Opt-in | Opt-out by default (GDPR safe) |

---

---

# SECTION 17: GLOSSARY

| Term | Definition |
|---|---|
| FOR ME | Memos where the user is holding goods on consignment — received from another party |
| BY ME | Memos where the user's goods are held by another party on consignment |
| Memo | A consignment agreement documenting goods transferred between two parties on a temporary basis |
| Consignment | The practice of placing goods with another party for sale, with title remaining with the original owner |
| Settlement | The resolution of the financial obligation arising when a consigned item is sold |
| Amendment | A formally signed change to an existing memo's terms |
| Partial Fulfillment | When some items in a memo are resolved (sold or returned) while others remain active |
| Secretary AI | The AI assistant that drafts communications and suggests actions on the user's behalf |
| Analytics AI | The AI that surfaces patterns and insights from the user's historical memo data |
| White-Label | The team feature that allows a firm to customize the app's visual identity with their own brand |
| Audit Trail | The immutable log of all actions taken on any memo or item in the system |
| Signature Lock | The state in which a signed memo's content cannot be modified without breaking the cryptographic hash |
| GIA | Gemological Institute of America — the most widely used diamond grading authority |
| HRD | Hoge Raad voor Diamant — Belgian diamond grading authority, widely used in Antwerp |
| IGI | International Gemological Institute — widely used lab-grown diamond grading authority |
| Natural Diamond | A diamond formed naturally in the earth |
| Lab-Grown Diamond | A diamond created in a laboratory environment, chemically identical to natural but distinct in origin |
| HPHT | High Pressure High Temperature — one of the two lab-grown diamond creation methods |
| CVD | Chemical Vapour Deposition — one of the two lab-grown diamond creation methods |
| Parcel | A bulk lot of multiple small stones, typically priced and traded by total carat weight |

---

**END OF DOCUMENT**

---

*This document is the complete specification for the Memo consignment platform. It is intended as a handover to the development team, design team, and any relevant stakeholders. All decisions documented herein represent the final direction for the product as agreed upon in the product definition phase.*

*Version history:*
*v1.0 — Initial draft*
*v2.0 — Revised to unified product (no tiers)*
*v3.0 — Final: user-agnostic model, FOR ME / BY ME duality, complete professional handover*
