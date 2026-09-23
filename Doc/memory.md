# Project Memory & Progress Tracker: Staple Wellness (`memory.md`)
## Single Source of Truth for Features, Milestones, and Workstreams

> **Current Project Phase:** Pre-Launch Foundation (Ground Zero / Day 0)  
> **Last Updated:** 2026-09-21  
> **Brand:** Staple Wellness  
> **Focus Scope:** Exclusively **2 Core SKUs** (Daily Omega-3 & Night Magnesium) + AM/PM Daily System  
> **Global Inspiration:** Ritual.com (Clean clinical transparency, visible formulation, traceable supply chain)  
> **Target Audience:** Urban Tier-1 India (Bengaluru, Mumbai, NCR, Hyderabad)  

---

## 1. Project Baseline & Current State (Ground Zero)

We are currently at **Day 0 / Foundation Setup**. The core assets, marketing engines, and production stores are in pre-launch preparation:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PRE-LAUNCH READINESS STATUS                     │
├────────────────────────────┬──────────┬────────────────────────────────┤
│ Workstream                 │ Status   │ Current State                  │
├────────────────────────────┼──────────┼────────────────────────────────┤
│ 1. Documentation & Specs   │ 🟢 Done   │ PRD, Brand Bible, Design Sys   │
│ 2. Brand Kit & Packaging   │ 🟡 In Dev │ Guidelines set; label art WIP  │
│ 3. Landing Page Flagship   │ 🟡 In Dev │ Prototype / mock-design state  │
│ 4. E-Commerce Store & Pay  │ 🔴 Todo   │ Cart drawer ready; no gateway  │
│ 5. Marketing Strategy      │ 🔴 Todo   │ Ad hooks drafted; no campaign  │
│ 6. Social Media & Creative │ 🔴 Todo   │ Not created yet                │
│ 7. Supply Chain & Lab COAs │ 🟡 In Dev │ Target lot specs defined       │
└────────────────────────────┴──────────┴────────────────────────────────┘
```

---

## 2. Core Constraints & Strategic North Stars

1. **Strict 2-SKU Focus (Zero Dilution):** No gummies, no multivitamins, no premature synbiotics. We only launch with:
   - **Daily Omega-3 (`staple-omega3`):** 1,000mg Active EPA+DHA in pure rTG form (Peruvian wild anchovy + Sicilian lemon oil).
   - **Night Magnesium (`staple-magnesium`):** 300mg Pure Elemental Magnesium in 100% chelated Bisglycinate (0mg oxide fillers).
   - **The AM/PM Daily System (`staple-duo-bundle`):** Bundled 24h circadian routine (₹2,950 vs ₹3,300).
2. **Ritual-Inspired Indian Color System:**
   - **Solar Marigold Gold (`#F5B731`):** Rich daylight vitality, pure oil glow.
   - **Imperial Midnight Indigo (`#0C1D2E`):** Clinical authority, deep ocean ink (15.8:1 AAA contrast).
   - **Sandalwood Milk Canvas (`#FAF8F5`):** Soft, non-glare warm ivory base.
   - **Chandra Midnight (`#130E20` & `#1F1733`):** Night Magnesium sleep mode.
3. **Radical Traceability:** Every batch accompanied by public HPLC assays, heavy metal screenings (<0.001 ppm), and FSSAI licensing.

---

## 3. Master Workstream & Feature Tracker

*Legend: 🟢 Completed | 🟡 In Progress | 🔴 Not Started / Backlog | ⏸️ Paused*

### Workstream 1: Core Documentation & Governance
- [x] 🟢 **`Doc/PRD.md`**: Pre-launch PRD narrowed to 2 SKUs and foundation gates.
- [x] 🟢 **`Doc/brand.md`**: Brand Bible, voice & tone, copywriting playbooks, banned words.
- [x] 🟢 **`Doc/design.md`**: Design tokens, Ritual-enhanced Indian palette, typography, 3D specs.
- [x] 🟢 **`Doc/memory.md`**: Project state and feature tracking system initialized.

### Workstream 2: Brand Identity, Visual Assets & Packaging
- [x] 🟢 **`Doc/packaging.md`**: Complete packaging specifications, compact glass dimensions, and direct-print rules.
- [x] 🟢 **Design Token Definitions:** "Clinical Dawn" enhanced with Solar Gold & Midnight Indigo.
- [x] 🟢 **Physical Bottle Mockups (Photorealistic 3D — Compact Pill Bottle):**
  - [x] 🟢 Daily Omega-3: Compact, small transparent glass pill bottle, white cap, direct white text, visible glowing amber softgels (`Doc/packaging/omega3_compact_bottle.jpg`).
  - [x] 🟢 Night Magnesium: Compact, small transparent glass pill bottle, white cap, direct white text, visible chalk-white capsules (`Doc/packaging/magnesium_compact_bottle.jpg`).
- [x] 🟢 **Digital Web Cutouts (Background-Removed Transparent PNGs):**
  - [x] 🟢 Daily Omega-3 RGBA Cutout (`Doc/packaging/omega3_transparent_cutout.png` & `public/assets/packaging/`).
  - [x] 🟢 Night Magnesium RGBA Cutout (`Doc/packaging/magnesium_transparent_cutout.png` & `public/assets/packaging/`).
  - [x] 🟢 Studio High-Key Isolated JPGs (`omega3_isolated.jpg` & `magnesium_isolated.jpg`).
- [x] 🟢 **Product Imagery Wired Into The Mock:** All six packaging assets (compact lifestyle, studio packshots, transparent cutouts) are used across `mock-design/assets/`; no template/stock supplement imagery remains on the page.
- [x] 🟢 **"No-Label Look" Architecture:** 100% see-through compact bottle with zero opaque background stickers; crisp direct-to-glass white typography.
- [ ] 🔴 **Aroma Tab Sourcing:** Food-grade Sicilian lemon citrus disc for bottle cap.
- [ ] 🔴 **Unboxing Experience:** Rigid eco-mailer box with batch Certificate of Analysis insert card.

### Workstream 3: Digital Landing Page Flagship
- [x] 🟢 **Flagship Mock Rebuild (`mock-design/index.html`):** Rebuilt to mirror the Ritual.com page schema in Staple branding — announcement marquee, mega-nav header, hero, statement, bestselling rail, trust band, formula & traceability splits, shop-by-need carousel, testimonials, standards, editorial strip, range tiles, footer and cart drawer. All imagery is Staple's own packaging assets.
- [x] 🟢 **Motion Layer Dependency:** Initialized npm at the project root and installed `framer-motion@^13.4.0` for the spring-physics micro-interactions specified in `Doc/design.md` §7. React/React-DOM remain optional peers, to be added alongside the React app.
- [x] 🟢 **Design Intelligence Skill (UI/UX Pro Max):** Installed `ui-ux-pro-max` plus 6 companion skills into the project (`.commandcode/skills/`) and globally (`~/.commandcode/skills/`) via `cmdc skills add nextlevelbuilder/ui-ux-pro-max-skill`. Search tool verified on Python 3.12; documented script paths repointed to `${COMMANDCODE_SKILL_DIR}`.
- [x] 🟢 **Design-System Alignment Pass (`mock-design/index.html`):** Rebuilt the page against the `Doc/design.md` §2.1 tokens — Lemon Yellow (`#F6E77A`) for AM surfaces, Baby Pink (`#FAD4D8`) for PM surfaces, Charcoal Ink (`#1D1D1B`) on Sandalwood Milk (`#FAF8F1`), with Clinical Sage (`#3B6E52`) reserved for verification states. Accents are now used as surfaces only, never as coloured text on a light field, so every string holds AA contrast. Removed the invented testimonial carousel and the AI-attribution comment block; added visible focus rings, drawer dialog semantics with focus return, and a reduced-motion path.
- [x] 🟢 **Hero as Full-Bleed Background + Content Depth (`mock-design/index.html`):** The bottle-label photo is now the hero's background layer behind the copy, on a two-layer scrim, with the full label width visible and the hero height capped. Added an assurance strip, the Label Math comparison tables, and a lot-verification module; standards now use deliberate hierarchy instead of the banned equal 3-column grid.
- [ ] 🟡 **Hero Section:**
  - [x] 🟢 Headline & value proposition copy ("Daily biology, radically transparent").
  - [ ] 🟡 3D Bottle visualizer integration (WebGL / Three.js or high-fidelity canvas).
  - [ ] 🔴 VIP Early Access / Waitlist reservation trigger.
- [ ] 🟡 **Interactive Elemental Potency Calculator:**
  - [x] 🟢 Algorithmic comparison of active EPA/DHA vs gross 1,000mg fish oil.
  - [x] 🟢 Magnesium Bisglycinate vs cheap laxative Oxide absorption math.
  - [ ] 🟡 UI refinement matching the new Solar Gold and Midnight Indigo palette.
- [ ] 🟡 **Product Showcase (The 2 SKUs + Duo Bundle):**
  - [x] 🟢 Specification chips (active elemental yield, provenance, timing).
  - [ ] 🟡 AM/PM Daily System flagship feature card with bundle savings indicator.
- [ ] 🟡 **Circadian Day-to-Night Section:**
  - [x] 🟢 Dynamic theme transition logic (`data-theme="circadian"`).
  - [ ] 🟡 Chandra lunar dark palette refinement with sleep neuroscience breakdown.
- [ ] 🟡 **Radical Transparency HPLC Lab Modal:**
  - [x] 🟢 Lot switcher (`LOT-STP-2601-A`, `LOT-STP-2602-B`).
  - [ ] 🔴 Link to downloadable certified PDF lab test reports.
- [ ] 🟡 **Philosophy & Anti-Beauty BS Manifesto:**
  - [x] 🟢 Four non-negotiables laid out in responsive editorial layout.
- [ ] 🟡 **Footer & Compliance Directory:**
  - [x] 🟢 FSSAI license display and lot verification search bar.

### Workstream 4: D2C E-Commerce Store & Checkout
- [ ] 🟡 **Slide-Out Cart Drawer:**
  - [x] 🟢 Drawer slide-in animation with real-time quantity controls.
  - [x] 🟢 Quantity steppers (increment / decrement / remove) in the drawer.
  - [x] 🟢 AM/PM Duo Bundle upgrade incentive.
  - [x] 🟢 Free cold-chain shipping progress bar ("Add ₹X for Free Express Delivery", ₹1,500 threshold).
- [ ] 🔴 **Payment Gateway Integration:**
  - [ ] 🔴 Razorpay / Cashfree sandbox setup.
  - [ ] 🔴 1-click UPI intent flow (Google Pay, PhonePe, Paytm, CRED).
  - [ ] 🔴 Credit/Debit card tokenization.
- [ ] 🔴 **Post-Purchase & Transactional Notifications:**
  - [ ] 🔴 Automated WhatsApp order confirmation and dispatch updates.
  - [ ] 🔴 SMS backup notifications with one-click tracking links.
- [ ] 🔴 **Subscription Auto-Replenishment Engine (Phase 1.5):**
  - [ ] 🔴 UPI AutoPay / recurring e-mandates for 30-day and 60-day cycles.

### Workstream 5: Marketing Strategy & Launch Playbook ("The Martin Plans")
- [ ] 🔴 **Launch Campaign Narrative & Positioning:**
  - [ ] 🔴 Campaign Theme: *"The Science of Feeling Normal Again."*
  - [ ] 🔴 Angle 1: *"The Fish Burp Lie"* (Rancid Ethyl Ester vs Fresh Peruvian rTG + Lemon).
  - [ ] 🔴 Angle 2: *"The Laxative Scam"* (Why Indian drugstore Magnesium is 96% Oxide).
  - [ ] 🔴 Angle 3: *"The Label Math"* (1,000mg Fish Oil ≠ 1,000mg Omega-3).
- [ ] 🔴 **Pre-Launch Waitlist & Seeding Strategy:**
  - [ ] 🔴 Batch 01 VIP Access allocation (first 1,000 customers).
  - [ ] 🔴 Seeding list of 50 Tier-1 doctors, biohackers, and fitness coaches.
- [ ] 🔴 **Paid Acquisition Architecture (Meta & Google):**
  - [ ] 🔴 Meta Conversions API (CAPI) and Google Tag Manager tracking plan.
  - [ ] 🔴 Top-of-Funnel (TOF) founder-led educational video ad scripts.
  - [ ] 🔴 Retargeting creative focusing on lab test verification.

### Workstream 6: Social Media Assets & Content Kit
- [ ] 🔴 **Social Media Visual Identity:**
  - [ ] 🔴 Instagram grid aesthetic guidelines (Solar Gold & Sandalwood Milk balance).
  - [ ] 🔴 Reusable Figma / Canva templates for educational carousels.
  - [ ] 🔴 LinkedIn thought leadership post templates for founder stories.
- [ ] 🔴 **Content Pillars & Content Calendar:**
  - [ ] 🔴 Pillar 1: Formulation Audits (tearing down competitor labels).
  - [ ] 🔴 Pillar 2: Circadian Biology (morning focus habits & sleep architecture).
  - [ ] 🔴 Pillar 3: Sourcing Expeditions (Peruvian anchovy fishery, Albion chelation).
- [ ] 🔴 **Social Media Launch Assets:**
  - [ ] 🔴 9-grid launch teaser storyboard for Instagram.
  - [ ] 🔴 5 short-form video hooks for Instagram Reels / YouTube Shorts.

### Workstream 7: Regulatory, Lab & Supply Chain Operations
- [ ] 🟡 **FSSAI Compliance:** Central License active (`#10023043000892`).
- [ ] 🔴 **Independent Laboratory Testing:** Complete third-party HPLC assay testing for Batch 01.
- [ ] 🔴 **3PL Fulfillment Partnerships:** Cold-chain warehouse selection in Bengaluru / Mumbai.

---

## 4. Changelog & Decision History

| Date | Category | Decision / Action Taken | Impact / Rationale |
| :--- | :--- | :--- | :--- |
| **2026-09-20** | **Governance** | Initialized `Doc/memory.md` to track project progress from Ground Zero. | Establishes single source of truth across all 7 workstreams. |
| **2026-09-20** | **Design** | Enhanced color palette to match Ritual.com with Indian market upgrades. | Added Solar Marigold Gold (`#F5B731`), Imperial Midnight Indigo (`#0C1D2E`), Sandalwood Milk (`#FAF8F5`). |
| **2026-09-20** | **Brand** | Created `Doc/brand.md` Brand Bible. | Codified tone of voice, copywriting playbook, and physical packaging specs. |
| **2026-09-20** | **Product** | Updated `Doc/PRD.md` to strictly focus on 2 SKUs (Omega-3 & Magnesium). | Removed synbiotic / multi-SKU distraction to achieve pre-launch capital efficiency. |
| **2026-09-20** | **Architecture**| Created `Doc/design.md` design system specification. | Provided tokens, typography, component specs, and 3D material rules. |
| **2026-09-20** | **Packaging** | Created `Doc/packaging.md` & generated 2 photorealistic transparent bottle mockups. | Ritual-inspired transparent glass bottles, white caps, and white 180° label reveal for Omega-3 & Magnesium. |
| **2026-09-20** | **Packaging** | Redesigned bottle mockups to slender cylindrical silhouette (HK Vitals inspired). | Removed white sticker background for a 100% transparent "no-label look" with direct-to-glass white typography. |
| **2026-09-20** | **Packaging** | Resized bottle to compact, small supplement proportions (eliminated water bottle look). | Created ergonomic, palm-sized 98mm transparent pill bottles with direct white print and dense capsule visibility. |
| **2026-09-20** | **Frontend**  | Rebuilt `mock-design/index.html` using Tailwind CSS + Vanilla HTML/JS. | Implemented Lemon Yellow & Baby Pink palette, removed old mock products, integrated 2 SKUs + Duo System, dynamic cart drawer, and lot modal. |
| **2026-09-20** | **Frontend** | Replaced every template/stock product image in `mock-design` with Staple packaging assets. | Daily Omega-3, Night Magnesium and the AM/PM System now render from `Doc/packaging` imagery (compact lifestyle, studio packshots, transparent cutouts). |
| **2026-09-20** | **Frontend** | Removed template banner graphics; hero, collections, about and starter-set banners now use Staple product photography. | Eliminates generic supplement tubs from the page; original banner proportions preserved via `aspect-ratio` + `object-fit`. |
| **2026-09-20** | **Frontend** | Rebuilt `mock-design/index.html` to mirror the Ritual.com page schema in Staple branding. | Full-section structure (announcement → header → hero → statement → rail → trust band → splits → shop-by-need → testimonials → standards → editorial strip → range → footer + cart drawer). |
| **2026-09-20** | **Brand/Compliance** | Removed vegan & non-GMO claims and the "formulated by dietitians" credential. | Brand does not currently offer a vegan product; only documented claims remain (traceable inputs, third-party batch testing, signed lot COA). |
| **2026-09-20** | **QA** | Rendered `mock-design` in headless Chrome at 1440px & 414px, then fixed a CSS class collision and removed benchmark-verbatim copy. | `.cat` was shared by product labels and category cards (labels were clipping) — renamed to `.plabel`. Benchmarked headlines replaced with original copy and the placeholder leadership grid swapped for an "Our standards" section. |
| **2026-09-21** | **Tooling** | Initialized npm (`package.json`) at the project root and installed `framer-motion@^13.4.0`. | Adds the spring-physics animation layer defined in `Doc/design.md` §7 (stiffness 120 / damping 18) for the forthcoming React app (`src/`); React and React-DOM are optional peers in v13 and remain to be added. |
| **2026-09-21** | **Tooling** | Installed the UI/UX Pro Max design-intelligence skill (`nextlevelbuilder/ui-ux-pro-max-skill`) — 7 of 13 skills — into `.commandcode/skills/` and `~/.commandcode/skills/`. | Adds searchable local design data (79 styles, 192 palettes, 74 font pairings, 119 UX rules, 22 stacks) for UI work. Repointed the documented `${CLAUDE_PLUGIN_ROOT}/.claude/skills/...` script path to `${COMMANDCODE_SKILL_DIR}/scripts/...` because Command Code does not substitute the Claude-plugin token; verified `search.py --design-system` on Python 3.12. |
| **2026-09-21** | **Frontend** | Redesigned `mock-design/index.html` onto the documented palette, replacing the off-system terracotta/pine theme. | The page had drifted to `#c96442`/`#2d4a3e`, which appears in neither `brand.md` §6 nor `design.md` §2.1. Now uses the sanctioned Lemon/Pink/Ink/Sandalwood tokens; accents act as surfaces with dark text so contrast holds (the previous lemon-as-text approach would have failed AA). Verified in headless Chrome at 1440px and mobile: body `#FAF8F1`, ink headings, 16/16 images loading, zero horizontal overflow. |
| **2026-09-21** | **Brand/Compliance** | Deleted the testimonial carousel (three invented customers with unverifiable metrics) and the AI-attribution comment header. | Invented people and unsourced clinical outcomes ("Omega-3 index 4.1% → 8.4%", "deep sleep +42 minutes") cannot be substantiated pre-launch; the source comment naming a third-party design benchmark was also removed. Section order follows the Ritual page schema without the fabricated social proof. |
| **2026-09-21** | **Frontend** | Replaced the hero visual with `Wellness Bottle Label.png`, added as `mock-design/assets/product-hero.png`. | Hero now leads with the labelled-bottle shot instead of the duo packshot. The mega-nav card and the cart drawer's AM/PM line item still use `product-duo.png`. New asset is 1800×1200 3:2 (same frame as its predecessor), so the existing `object-fit: cover` crop is unchanged — verified loading at 1800×1200 into a 520×674 box, 16/16 images resolve. |
| **2026-09-21** | **Frontend** | Made the hero image a full-bleed background layer showing the entire frame, with the copy overlaid on a canvas-side scrim. | The old right-column layout cropped a landscape frame to its central ~51%. The layer now carries the image's own `aspect-ratio: 3/2`, so `object-fit: cover` resolves to an exact fit — verified ratio 1.500 vs source 1.500 at 1440/1024/390px, i.e. no cropping at any width. Copy sits on a left-to-right Sandalwood Milk scrim (≥0.82 alpha behind the text) so AA contrast holds over the photo; below 960px the copy drops beneath the image band and the scrim is disabled. |
| **2026-09-21** | **Frontend** | Design pass on `mock-design/index.html`: hero rebuilt as a true background layer, plus two new sections and several structural fixes. | Hero image is now `position:absolute; inset:0` behind a two-layer scrim (horizontal wash for the copy + vertical fade into the strip below), with a capped `min-height` so the hero no longer runs 935–1280px tall; full label width stays visible. Added an **assurance strip** (≥90% purity, <0.001 ppm Pb/Cd/Hg, TOTOX) bridging hero and ticker, a **Label Math** comparison section (two semantic `<table>`s contrasting EE-vs-rTG and oxide-vs-bisglycinate), and a **Verify your lot** 3-step module using the documented `LOT-STP-2601-A` / `-2602-B` codes. Replaced the equal 3-column standards grid with a deliberate 1.35fr/1fr hierarchy (dark feature card + two stacked), which `design.md` §8 requires. Added spec chips and per-30-day pricing to product cards, a circadian 08:00→22:30 rail, scroll-reveal, a condensing sticky header, cart quantity steppers, a free-cold-chain-shipping meter (₹1,500 threshold), and an AM/PM bundle upsell in the drawer. |
| **2026-09-21** | **Brand/Compliance** | Removed every "Subscribe & Save" reference from the nav and twin-pack cards; corrected the magnesium blood-brain-barrier claim. | The subscription auto-replenishment engine is an unstarted Phase 1.5 workstream, so offering "subscribe" advertised a capability that does not exist — twins are now labelled plainly as 2-month supplies. The bisglycinate copy claimed it crosses the blood-brain barrier; the substantiable statement is intestinal absorption, so that is what the page now says. |
| **2026-09-21** | **QA** | Verified the redesign in headless Chrome at 1440px and 390px, and hardened the scroll-reveal after finding it could strand content. | Initial implementation hid 27 sections at `opacity: 0` behind an IntersectionObserver that ran *after* cart wiring, so any earlier error would leave the page blank. Moved reveal to the top of the IIFE and added a rect-check backstop on scroll; confirmed no in-view element stays hidden, 0 JS errors, 17/17 images load, and `scrollWidth == clientWidth` at both widths. Note: headless never advances CSS transitions, so reveal end-state was asserted with transitions disabled rather than visually. |
| **2026-09-22** | **Frontend** | Re-keyed the brand wordmark (`Main-logo.png`) into two trimmed transparent assets and wired them into the header and footer. | The source is a 2000×2000 **opaque white** square with the mark occupying only 1.8% of the canvas — dropped in as-is it renders as a white box on the Sandalwood Milk canvas. Keyed by luminance (alpha from distance-to-white, gamma 0.45) and trimmed to the 956×238 mark: `assets/logo-mark.png` (achromatic ink remapped to brand ink `#1D1D1B`, never pure black per `design.md` §2.3) and `assets/logo-mark-light.png` for the dark footer. The baby-pink accent dot in the wordmark was verified as intentional (956 px, zero cyan counterparts, 80% fill of its own bbox — not ClearType fringing) and preserved by saturating chromatic pixels before remapping. |
| **2026-09-22** | **Frontend** | Changed the type system: Inter for headings, Calibri for body, with Carlito as the web fallback. | Calibri ships only with Microsoft Office, so macOS/Linux/Android visitors would have fallen back to a generic sans and lost the intended metrics; Carlito is metric-compatible with Calibri, so line breaks stay near-identical. Because the heading face moved from a serif to a grotesque, headings were retuned to weight 620 with -.032em tracking (serifs carry hierarchy at 400; sans do not), and headline `<em>` emphasis switched from italic-serif to a low lemon band behind the text — accent as surface, so contrast still holds. |
| **2026-09-22** | **Frontend** | Removed the Label Math comparison section, its CSS, nav entry, footer link and inbound CTA. | Requested removal; no other section depended on it. |
| **2026-09-22** | **Frontend** | Converted the page from a live storefront to a pre-launch reservation page. | Batch 01 has no payment gateway, no stock and no completed lab testing, so shopping language was untrue. "New & Bestselling" → "The two formulations"; Best Seller/New badges → AM/PM timing badges (nothing has sold yet); "Add to routine" → "Reserve this"; cart → reservation list, with checkout replaced by "Complete reservation" and an explicit "nothing is charged" note; removed the free-shipping meter, the dead search/account buttons and the crossed-out "orders above ₹1,500" promise. Added a **Reserve Batch 01** band with a real form (routine picker, email, optional mobile, inline success state). "Coming very soon" appears in the hero chip and reservation band; **no dates anywhere**, and the footer copyright year was dropped so it cannot go stale. |
| **2026-09-22** | **Brand/Compliance** | Reframed every finished-testing claim as a forward commitment. | Workstream 7 still shows Batch 01 HPLC testing as not started, so "Lot COA published", "signed lot COA on every bottle", "codes are live now" and "heavy-metal screened" described results that do not exist yet. Now: "formulated to the Batch 01 specification", purity/limit values labelled targets, "every batch assayed before it ships", and a note that reports publish when independent testing completes. |

---

## 5. Immediate Priority Next Steps (Sprint 0)

1. **Step 1 (Design & Layout Alignment):** Port the best layout elements from `mock-design/index.html` into the live React application in `src/`, applying the new Solar Gold & Midnight Indigo color tokens.
2. **Step 2 (Waitlist Engine):** Implement a VIP Early Access waitlist capture form on the landing page hero to collect phone/email for Batch 01 before checkout goes live.
3. **Step 3 (Marketing Launch Plan):** Author `Doc/marketing_plan.md` defining the exact 60-day pre-launch campaign, ad scripts, and influencer seeding protocol.
4. **Step 4 (Social Media Kit):** Create `Doc/social_media_kit.md` detailing the Instagram grid strategy, reel hooks, and visual templates.
