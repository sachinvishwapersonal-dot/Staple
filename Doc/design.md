# Design System Specification: Staple Wellness (`design.md`)
## "Clinical Dawn" Digital Design System & UI Architecture

> **Document:** Design System (`design.md`)  
> **Brand:** Staple Wellness  
> **Version:** 1.0 (Pre-Launch Foundation)  
> **Theme:** Clinical Dawn & Circadian Night Shift  
> **Status:** Draft / Ready for Customization  

---

## 1. Visual Theme & Atmosphere: "The Ritual for India"

### 1.1 Aesthetic Vibe & Mood: Solar Clarity & Scientific Truth
Inspired directly by the legendary visual identity of **Ritual.com**—clean, optimistic sunshine transparency, high-contrast typography, and visible pill purity—elevated with warm, prestigious undertones tailored for the Indian audience.

In India, gold, sunshine, and marigold represent vitality, purity, and life force (*Surya*), while deep midnight indigo represents clinical authority, deep oceanic clean waters, and serene restorative stillness (*Chandra*). The interface rejects cheap, acidic fluorescent yellows and sterile pharma whites in favor of an **institutional, solar-golden luxury aesthetic**.

### 1.2 Density & Variance Matrix
- **Information Density:** `Medium-Low (Level 4/10)` — Luminous breathing room, high negative space, editorial typography.
- **Layout Variance:** `High (Level 7/10)` — Ritual-style split screens, bold asymmetric hero displays, interactive transparency calculators, and circadian night shifts.
- **Motion Energy:** `Fluid Tactile (Level 6/10)` — Spring-physics buttons, smooth day-to-night theme crossfades, and floating translucent amber softgels.

---

## 2. Color System & Semantic Tokens: Lemon Yellow & Baby Pink Combination

### 2.1 The Dual-Accent Core Palette (Lemon Yellow + Baby Pink)
A vibrant, warm, editorial harmony inspired by Pinterest wellness aesthetics and Ritual's clean transparency:

| Token Name | Hex Code | Purpose & Application | Contrast & Harmony |
| :--- | :--- | :--- | :--- |
| `--color-lemon` | `#F6E77A` | **Lemon Yellow (Solar AM):** Daytime focus, active rTG Omega-3 softgels, morning vitality, primary CTA buttons, and highlight pills. | High-visibility daytime solar energy |
| `--color-lemon-light` | `#FEF9C3` | Soft sunny ambient wash for morning protocol containers and badges. | Warm background tint |
| `--color-lemon-hover` | `#EED956` | Interactive hover state for lemon buttons. | 3.6:1 against Ink |
| `--color-babypink` | `#FAD4D8` | **Baby Pink (Lunar PM):** Evening calm, Night Magnesium, restful restoration, gentle announcement bars, and secondary pills. | Serene, calming tactile comfort |
| `--color-babypink-surface` | `#FCE4E8` | Elevated nighttime card wash and drawer accent backgrounds. | Delicate restorative tint |
| `--color-babypink-hover` | `#F7BDC4` | Interactive hover state for baby pink buttons. | Tactile interactive feedback |
| `--color-ink` | `#1D1D1B` | **Deep Charcoal Ink:** High-authority editorial headlines, razor-sharp architectural borders, and crisp body typography. | 16.2:1 against Canvas (AAA) |
| `--color-ink-soft` | `#57534E` | Secondary body text and clinical explanatory paragraphs. | 7.8:1 (AAA) |
| `--color-ink-muted` | `#8A857D` | Monospace batch codes, metadata, and fine-print specifications. | 4.6:1 (AA) |
| `--bg-canvas` | `#FAF8F1` | **Sandalwood Milk / Warm Ivory:** Soft, glare-free architectural canvas that complements both lemon and baby pink. | Base Canvas |
| `--bg-surface` | `#F4EFE6` | **Oat Surface / Warm Parchment:** Card backgrounds, HUD calculators, and dividers. | 1.15:1 Soft Elevation |
| `--bg-card` | `#FFFFFF` | **Laboratory White:** High-contrast card surfaces for compact transparent bottle displays. | Pure Clinical Elevation |
| `--color-sage` | `#3B6E52` | **Clinical Assay Green:** FSSAI compliance badges, heavy metal non-detect indicators, and HPLC pass stamps. | Clinical Trust |

### 2.2 The Circadian Dual Dynamic: AM Lemon & PM Baby Pink
The interface actively pairs Lemon Yellow and Baby Pink to mirror human circadian biology:
- **AM Mode (Surya / Focus):** Led by Lemon Yellow (`#F6E77A`), representing active Peruvian rTG Omega-3, cellular focus, and Mediterranean lemon aroma.
- **PM Mode (Chandra / Sleep):** Led by Baby Pink (`#FAD4D8`), representing pure Magnesium Bisglycinate chelate, GABA receptor activation, and delta-wave sleep.
- **The System Blend (24-Hour Balance):** Gradient blends of Lemon Yellow and Baby Pink create luminous, soft wellness gradients for flagship bundle displays and hero backdrops.

### 2.3 Color Guardrails & Explicit Bans
- ❌ **Banned:** Acidic, neon highlighter green or fluorescent yellow (`#FFFF00` / `#E2F952`). Always use the calibrated **Lemon Yellow (`#F6E77A`)**.
- ❌ **Banned:** Hot neon magenta or Barbie pink. Always use the soft, soothing **Baby Pink (`#FAD4D8`)**.
- ❌ **Banned:** Dead jet black (`#000000`). Always use **Deep Charcoal Ink (`#1D1D1B`)**.

---

## 3. Typographic Architecture

### 3.1 Font Stacks
- **Editorial & Headlines:** `Plus Jakarta Sans`, `Satoshi`, or system-fallback `sans-serif`
  - *Weights:* Bold (`700`), Semibold (`600`), Medium (`500`)
  - *Tracking:* Tight (`tracking-tight` / `-0.02em` to `-0.04em`)
- **Technical HUD & Elemental Specs:** `JetBrains Mono`, `Space Mono`, or `monospace`
  - *Weights:* Medium (`500`), Regular (`400`)
  - *Case:* All-caps (`uppercase`)
  - *Tracking:* Widest (`tracking-widest` / `0.08em` to `0.15em`)

### 3.2 Type Scale Hierarchy
| Level | Font Family | Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | Editorial | `clamp(2.5rem, 5vw, 4.5rem)` | `700` | `1.08` | Main page value proposition |
| **Section Title (H2)** | Editorial | `clamp(1.75rem, 3.5vw, 2.75rem)`| `600` | `1.15` | Major section milestones |
| **Card Title (H3)** | Editorial | `1.25rem – 1.5rem` | `600` | `1.25` | SKU titles, module headers |
| **Body (Lead)** | Editorial | `1.125rem` | `400` | `1.6` | Hero lead copy, philosophy text |
| **Body (Regular)** | Editorial | `0.9375rem – 1.0rem` | `400` | `1.55` | General product descriptions |
| **HUD / Spec (Mono)**| Monospace | `0.75rem – 0.8125rem` | `500` | `1.4` | `[ 1,000MG ACTIVE EPA+DHA ]`, lot codes |

---

## 4. Spacing, Grid & Layout Principles

### 4.1 Spacing Scale
- Base unit: `4px` grid (`0.25rem`)
- Section vertical rhythm: `clamp(4rem, 8vw, 8rem)`
- Container max-width: `1280px` centered with fluid horizontal gutter padding (`clamp(1.25rem, 4vw, 3rem)`).

### 4.2 Layout Rules
- **Split-Screen Asymmetry:** Avoid centering entire hero sections. Place copy and technical proof points on the left; place the 3D bottle interactive canvas on the right.
- **Strict Single-Column Collapse:** Multi-column grids must cleanly stack into a single column on viewports `< 768px` with zero horizontal overflow.
- **No Overlapping Clutter:** Text and 3D visual assets must maintain strict spatial zones.

---

## 5. Component Library Specifications

### 5.1 Buttons
- **Primary High-Impact CTA (Solar Accent):**
  - *Styling:* Background **Solar Marigold Gold (`#F5B731`)**, Text **Imperial Midnight Indigo (`#0C1D2E`)**, `font-semibold`, `rounded-md` (`6px` to `8px`), padding `14px 28px`.
  - *Interaction:* Hover transitions to **Deep Saffron Glow (`#E5A620`)**. Active state applies tactile `-1px` Y-axis depression with subtle inner shadow.
- **Institutional Authority Button:**
  - *Styling:* Background **Imperial Midnight Indigo (`#0C1D2E`)**, Text **Warm Ivory (`#FAF8F5`)**, `rounded-md`.
  - *Interaction:* Hover transitions to Midnight Indigo with 10% opacity Solar Gold border illumination.
- **Secondary / Ghost Button:**
  - *Styling:* 1px border `rgba(12, 29, 46, 0.18)`, background transparent, text Imperial Midnight Indigo (`#0C1D2E`).
  - *Interaction:* Hover background `rgba(245, 183, 49, 0.15)` with crisp border accent.

### 5.2 Product & Feature Cards
- **Construction:** Background **Oat Surface (`#F3EFE6`)** or Crisp Laboratory White (`#FFFFFF`), 1px subtle architectural border `rgba(12, 29, 46, 0.08)`, `rounded-xl` (`12px` to `16px`).
- **Pill Preview Badge:** Inline simulated softgel/capsule visualizer with ambient amber glow (`rgba(217, 119, 6, 0.35)`).
- **Specification Chips:** Monospace tags encased in subtle border `rgba(12, 29, 46, 0.1)`.

### 5.3 Interactive Modals & Drawers
- **Slide-Out Cart Drawer:** Slide in from the right edge with backdrop blur (`backdrop-filter: blur(14px)`), displaying real-time bundle savings calculation in Solar Gold.
- **HPLC Lab Assay Modal:** Centered dialog with tabbed lot numbers (`LOT-STP-2601-A`, `LOT-STP-2602-B`), downloadable PDF report link, and heavy metal test readouts.

---

## 6. 3D WebGL & Canvas Material Guidelines

### 6.1 Bottle Material Specs (Ritual-Inspired)
- **Glass Transparency:** High transmission (`transmission: 0.95`), minimal roughness (`roughness: 0.05`), physical index of refraction (`ior: 1.52`).
- **50% Wrap Label:** Matte paper material in **Warm Sandalwood Cream (`#F5EFE0`)** with **Solar Gold (`#F5B731`)** vertical ribbon accent, zero metallicity, and crisp SVG typography in Midnight Indigo.

### 6.2 Pill Materials
- **Omega-3 Softgel:** Pure Peruvian rTG amber translucent volume (`color: #D97706`, `transmission: 0.88`, `roughness: 0.08`). Emits an internal warm sunlight reflection.
- **Magnesium Capsule:** Matte vegetarian shell (`color: #FAF8F5`, `roughness: 0.55`, `clearcoat: 0.15`).

---

## 7. Motion & Micro-Interactions

- **Spring Physics:** Weighty and tactile animations (`stiffness: 120`, `damping: 18`). Avoid rigid linear easings.
- **Ambient 3D Floating:** Pills in the 3D canvas gently oscillate on an infinite smooth sine-wave loop (`duration: 4s`, `ease: easeInOut`).
- **Hardware Acceleration:** All animations must use `transform` and `opacity` exclusively to preserve 60 FPS on mobile devices.

---

## 8. Anti-Patterns & Explicit Bans

- ❌ **No Emojis:** Never use emoji icons in professional HUD specs or product copy. Use clean SVGs.
- ❌ **No Generic Stock Names:** Avoid placeholder names like *"Product 1"* or *"Demo User"*.
- ❌ **No Neon Outer Glows:** Avoid generic AI cyber-gradients and purple neon box-shadows.
- ❌ **No Generic 3-Column Equal Grids:** Feature cards must use deliberate hierarchy (Hero bundle card highlighted with special badge).
- ❌ **No Fake Urgency Banners:** No countdown timers (*"Offer ends in 04:59"*).
