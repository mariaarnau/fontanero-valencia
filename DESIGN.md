---
name: Fontanero Valencia
description: Urgent-plumber local-SEO landing page — authoritative navy paired with one urgency orange
colors:
  navy-950: "#071328"
  navy-900: "#0a1f3d"
  navy-800: "#0f2d52"
  navy-700: "#1a3d68"
  orange-700: "#c2410c"
  orange-600: "#ea580c"
  orange-500: "#f97316"
  white: "#ffffff"
  off-white: "#f6f8fb"
  ink: "#101828"
  muted: "#5b6b85"
  muted-on-navy: "#9fb0cc"
  line: "#e2e8f2"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.1rem, 5.6vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.6rem, 3.4vw, 2.35rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  body:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "10px"
  md: "16px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.orange-700}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.orange-600}"
  button-whatsapp:
    backgroundColor: "#1f9e57"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.6rem"
---

# Design System: Fontanero Valencia

## Overview

**Creative North Star: "The Night-Shift Dispatcher"**

This is a page built for one moment: someone standing over a leak at 11pm, phone in hand, deciding who to call. It refuses the soft, corporate-trust look most local-service sites default to (cream backgrounds, timid blue, apologetic small print). Instead it reads like a dispatch console — deep, authoritative navy as the working ground, with a single urgency orange reserved for the moment of action. Nothing here is decorative; every element either states a fact (barrio, guarantee, response time) or asks for a tap.

Density is generous, not cramped: this is a conversion page, not a brochure, so each section gets room to make its one point before the page moves on. The system rejects the "same-size icon-card grid" and "big-stat-number" templates common to this category — services are told as one featured urgency panel plus a short list, not four identical boxes; trust signals live inside real sentences, not isolated giant digits.

**Key Characteristics:**
- Deep navy ground, one urgency-orange accent, no secondary accent color.
- Inter, used with intention (tight tracking on display sizes, generous leading on body copy) rather than as an unconsidered default.
- Pill-shaped CTAs everywhere a tap is expected; rectangular, hairline-divided panels everywhere content is read.
- Motion is restrained and purposeful: entrance reveals, press feedback, nothing ornamental.

## Colors

A two-color system: authoritative navy carries structure, one urgency orange carries every call to action. No secondary accent exists — introducing one would dilute the CTA's visual monopoly.

### Primary
- **Urgency Orange** (`#c2410c` at rest, `#ea580c` on hover): the only color used for calls to action — the call/WhatsApp buttons, the floating mobile bar, the urgency strip, the final CTA banner. Its rarity everywhere else is what makes it read as "act now" instead of "brand color."

### Neutral
- **Authority Navy** (`#0a1f3d`, deep `#071328`): the hero, the "why choose us" list, and the footer. This is the page's resting state — it's what makes the orange feel urgent by contrast.
- **Ink** (`#101828`): body text on white/off-white surfaces.
- **Muted Slate** (`#5b6b85` on light surfaces, `#9fb0cc` on navy): secondary text. Always tinted from the surface's hue, never plain gray — this is why muted text keeps a warm/cool identity on both light and dark sections.
- **Off-White** (`#f6f8fb`): section backgrounds that need to sit quietly behind white cards (Services, Coverage).

### Named Rules
**The One Accent Rule.** Orange appears only on things the visitor can act on (buttons, the urgency strip, badge icons) or the final conversion banner. It never decorates a heading, a card border, or a bullet just because a spot needs color.

## Typography

**Display & Body Font:** Inter (system-sans fallback stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`)

**Character:** One face, two registers. Display text (H1/H2) is heavy (800) with tight negative tracking (-0.02em to -0.015em) so it reads as a confident, urgent statement rather than a polite label. Body text stays at 400 weight with open leading (1.55–1.6) for fast comprehension under stress — this page is often read by someone who is not calm.

### Hierarchy
- **Display / H1** (800, `clamp(2.1rem, 5.6vw, 3.6rem)`, line-height 1.05, tracking -0.02em): the single hero statement. One per page.
- **Heading / H2** (800, `clamp(1.6rem, 3.4vw, 2.35rem)`, line-height 1.12, tracking -0.015em): one per section, never paired with a kicker/eyebrow above it — the heading carries its own weight.
- **Title / H3** (700, 1.0625rem–1.3rem): card and list-item titles.
- **Body** (400, 0.9–1.1875rem, line-height 1.55–1.6): descriptions, testimonials, footer copy. Kept under ~75ch measure.
- **Label** (700, 0.8125rem, uppercase, tracking 0.06em–0.08em): footer column headers only.

### Named Rules
**The No-Kicker Rule.** No small eyebrow/label ever sits above an H1 or H2. If a heading needs context, that context is written into the heading or the lede paragraph beneath it, never as a separate label.

## Layout

Single-column, mobile-first flow, max content width 1160px, centered. Section vertical padding scales with viewport via `clamp(3.5rem, 7vw, 6rem)`. Every anchorable section carries `scroll-margin-top: 84px` so deep links and in-page navigation never hide content under the sticky header.

Two deliberately asymmetric layouts break the "equal grid" default: Services uses a 1fr/1.35fr split (one featured urgency panel beside a compact three-row list) instead of four equal cards, and mobile collapses this to a single stacked column, featured panel first. The floating dual-CTA bar is full-width and stacked at the true bottom on mobile (≤859px); above that it becomes two floating pill buttons anchored bottom-right, matching where a cursor-driven visitor's attention already sits.

## Elevation & Depth

Hybrid: flat, hairline-bordered surfaces at rest (cards, list containers, coverage chips); soft, colored elevation reserved for things that float above the page (buttons, the sticky floating CTA bar, the sticky translucent header). Elevation is declared once per element — a bordered surface never also carries a shadow at rest; shadow replaces the border on hover instead of stacking with it.

### Shadow Vocabulary
- **`--shadow-sm`** (`0 1px 2px rgba(10,31,61,.06), 0 1px 1px rgba(10,31,61,.04)`): subtle separation, rarely used directly.
- **`--shadow-md`** (`0 8px 24px rgba(10,31,61,.10), 0 2px 8px rgba(10,31,61,.06)`): service-card hover lift.
- **`--shadow-lg`** (`0 20px 48px rgba(10,31,61,.16), 0 4px 12px rgba(10,31,61,.08)`): the desktop floating CTA buttons.
- **`--shadow-orange`** (`0 10px 24px rgba(194,65,12,.28)`): the primary orange CTA button's resting shadow — a colored shadow only ever on the element the color itself belongs to.

### Named Rules
**The Declare-Once Rule.** An element's elevation is either a 1px border or a shadow, never both at the same time — a bordered card that also carries a soft shadow is the "ghost card" this system explicitly avoids.

## Shapes

Two radius steps only: `10px` (small controls: header call button on mobile, icon tiles) and `16px` (cards, list containers, feature panels). Pills (`999px`) are reserved for tappable controls — every button, badge, and coverage chip. Nothing uses a radius above 16px; large sweeping corners were deliberately avoided to keep the navy/orange system feeling precise rather than soft.

## Components

### Buttons
- **Shape:** pill (`border-radius: 999px`), never square or soft-rounded.
- **Primary (call):** `--orange-700` background, white text, `--shadow-orange`; hover shifts to `--orange-600` with a 1px lift.
- **WhatsApp:** `#1f9e57` background (WhatsApp's own brand green — the one deliberate exception to the two-color system, because a recolored WhatsApp action reads as broken, not restrained), white text.
- **Press feedback:** every button scales to `0.97` on `:active` over 160ms `ease-out` — instant, not delayed, tactile confirmation.
- **Secondary (header call, on mobile):** icon-only circle, transparent with a hairline border on the translucent header.

### Cards / Containers
- **Corner style:** 16px.
- **Background:** white on off-white sections (Services list, Testimonials), a `rgba(255,255,255,.05→.02)` gradient on navy (unused in the current build — the Why section uses flat navy rows instead, see below).
- **Shadow strategy:** none at rest; `--shadow-md` on hover for service-related cards only.
- **Border:** 1px, `--line` on light surfaces / `--line-on-navy` on dark.
- **Internal padding:** 1.4–2rem.

### Why Rows (signature pattern)
"Por Qué Elegirnos" rejects the icon-card-grid default in favor of a single bordered container with internal rows separated by 1px hairlines — icon left (fixed 42px tile), heading + description right. This reads as one connected list of commitments rather than three disconnected boxes.

### Service Photo Cards
Four equal cards (real photography, one per service), the one deliberate same-size grid in the system — explicitly requested to read as a coverage set, not a features list. 4:3 photo on top (`object-fit: cover`), a square icon badge overlapping the photo's bottom-left corner (navy, orange on the featured "Urgencias 24h" card), title + description below. Responsive: 4 across on desktop, 2×2 from tablet down through mobile — never collapses to one column, so the "4 real things we do" read survives on a phone. Photos are real stock photography (Unsplash), sourced per topic, not generic filler; each carries a real `alt` and `loading="lazy"` (the hero photo is the one exception — see Do's and Don'ts).

### Testimonial Avatars
Two-letter initials in a solid circle (navy or orange, alternating), never a photograph — the testimonials are illustrative/fictional, and pairing a fabricated quote with a real stranger's photo was rejected as needlessly deceptive. This is a deliberate constraint, not a placeholder-until-we-have-real-photos.

### Floating CTA Bar
- **Mobile (≤859px):** fixed, full-width, bottom of viewport, split exactly 50/50 between Llamar (orange) and WhatsApp (green), safe-area-aware padding for notched devices.
- **Desktop (≥860px):** two separate pill buttons, floating bottom-right, `--shadow-lg`.
- Always visible; it is never hidden by scroll position, since the CTA it carries is the page's entire purpose.

### Testimonials
- Off-white card, 16px radius, 1px border, star rating drawn as five inline SVG stars (never Unicode glyphs), quote in ink, name + neighborhood in muted caption below.

## Hero Visual (signature differentiator)

Desktop-only (≥960px) layered "3D-lite" badge to the right of the hero copy: a soft orange orb, a floating navy circle carrying the primary service icon, and small pill "chips" (response time, guarantee) plus an icon-only accent circle — all with independent idle float keyframes, and the whole container tilts on `rotateX`/`rotateY` toward the pointer (desktop pointer only, disabled under `prefers-reduced-motion`). This reads as an animated 3D scene without any WebGL/model asset weight: it's div/SVG layers, ~1.5KB of extra CSS and JS. Behind the full hero (all breakpoints) a lightweight canvas draws 12–22 slow-falling translucent orange droplets — capped particle count, paused on `visibilitychange`, skipped entirely under reduced motion. This pairing is the reusable "premium but fast" differentiator for future niche sites: swap the badge icon and chip copy per niche, keep the mechanism.

## Do's and Don'ts

### Do:
- **Do** keep orange exclusive to actionable elements and the urgency strip — the moment it decorates something non-actionable, its meaning dilutes.
- **Do** use the bordered-list-with-hairlines pattern for any new set of 3+ related items instead of a card grid.
- **Do** keep every icon as authored stroke-based SVG (1.5–1.7px stroke), consistent weight; WhatsApp's filled brand mark is the one sanctioned exception.
- **Do** give every anchorable section `scroll-margin-top` matching the sticky header's height.

### Don't:
- **Don't** add a kicker/eyebrow label above any heading — this was tried and explicitly removed during finishing.
- **Don't** render a "big number + small label" stat tile — the Why section deliberately embeds its numbers (30 min, 12 meses) inside sentence-form headings instead.
- **Don't** stack a border and a shadow on the same card at rest.
- **Don't** introduce a second accent color; the system's entire urgency read depends on orange staying singular.
- **Don't** use Unicode star/emoji glyphs as UI icons — draw them as SVG, matching the rest of the icon system.
- **Don't** lazy-load the hero photo — it's the LCP element; it loads eager with `fetchpriority="high"` and a `<link rel="preload">`. Only below-the-fold photography (the four service cards) gets `loading="lazy"`.
- **Don't** attach a real person's photo to a fictional testimonial — use the initials-avatar pattern instead.
