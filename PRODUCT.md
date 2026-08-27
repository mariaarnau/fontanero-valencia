# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS (vanilla), no backend, no database, no build step. No heavy external libraries; Tailwind CDN is the maximum allowed external dependency, plain CSS is preferred. Confirmed by user in the initial brief.

## Users

Residents and businesses in Valencia city experiencing an urgent plumbing problem (leaks, blockages, no water/hot water, burst pipes) who search Google for a local plumber and want to act immediately — call or WhatsApp — rather than fill out a form or browse.

## Product Purpose

A rank & rent local-SEO landing site for "Fontanero Valencia": rank in Google local search for urgent-plumber intent in Valencia, and convert visits into phone calls or WhatsApp messages to 611 49 25 92. Success = calls/WhatsApp opens, not pageviews or time on site.

## Positioning

Not a real company's corporate site — it's a single-purpose local-intent capture page: urgency ("24h", "urgente") + immediate contact (two sticky mobile CTAs: call and WhatsApp) + local trust signals (barrios cubiertos, LocalBusiness schema) built for local pack / mobile search conversion.

## Operating Context

- 80% of traffic is mobile — mobile performance and thumb-reachable CTAs are the primary design constraint, not desktop.
- No forms, no backend, no analytics/database mentioned — all conversion happens via `tel:` and `wa.me` links.
- Single page (or single-page-feeling) site; no CMS, no user accounts.

## Capabilities and Constraints

- Primary phone/WhatsApp number: 611 49 25 92 (Spain, +34).
- Two persistent floating mobile CTAs: 📞 Llamar and 💬 WhatsApp.
- Sections required: Hero (H1), Servicios, Por qué elegirnos, Testimonios, Zona de cobertura, Footer.
- Coverage neighborhoods: assistant selects representative, credible Valencia barrios (e.g. Ruzafa, El Carmen, Benimaclet, Patraix, Extramurs, Camins al Grau) — user delegated this choice.
- Business identity for footer/schema.org: generic brand "Fontanero Valencia" with a generic Valencia city address — this is a rank & rent site, not a registered company. No invented NIF/legal name. User explicitly confirmed this is acceptable.
- Testimonials: 3 fictional but credible-sounding reviews — explicitly requested and approved by the user as a rank & rent convention, not to be treated as a fabrication risk to flag.
- SEO technical requirements: title "Fontanero Valencia 24h | Urgencias y Averías ☎ 611 49 25 92", optimized meta description, JSON-LD LocalBusiness schema, single H1 / correct heading hierarchy.

## Brand Commitments

- Name: "Fontanero Valencia".
- Palette: azul oscuro + naranja de urgencia + blanco.
- Typography: Inter or similar clean/legible sans-serif.
- Tone: urgent, trustworthy, local.

## Evidence on Hand

No real testimonials, case studies, certifications, or company registration data exist. Testimonials in this site are fictional by explicit user request (rank & rent convention). No real street address exists — footer uses a generic Valencia city reference, not a fabricated precise address implying a physical registered office.

## Product Principles

1. Every design decision serves one outcome: get a mobile visitor to tap call or WhatsApp within seconds.
2. Speed is a feature — no heavy assets, no render-blocking scripts, no layout shift on mobile.
3. Local trust signals (barrios, urgency, guarantees) matter more than corporate polish.
4. One clear H1 and CTA hierarchy; never make the visitor think or scroll to find the phone number.
5. SEO structure (schema, headings, meta) is as load-bearing as the visual design — this site's job is to rank, then convert.

## Site Map (as of this build)

`index.html` (home) + 3 service pages (`desatascos-valencia.html`, `averias-fugas-valencia.html`, `instalaciones-fontaneria-valencia.html`) + 12 barrio pages (one per `areaServed` neighborhood, each with genuinely differentiated local content — not a templated find/replace — plus its own `Plumber`+`BreadcrumbList` schema) + 3 legal pages (`aviso-legal.html`, `privacidad.html`, `cookies.html`). All cross-linked from the home services grid, coverage list, header nav, and footer. `sitemap.xml` lists all 19 URLs.

**Before this goes live:** `aviso-legal.html` and `privacidad.html` have bracketed placeholders (`[Nombre completo o razón social]`, `[NIF/CIF]`, `[Dirección completa]`, `[Email de contacto]`) — publishing fabricated legal-identity data would be a real LSSI/RGPD problem, so these were deliberately left for the site owner to fill in with real data, not invented. `cookies.html` currently states no analytics cookies are set; if/when GA4 is wired in, a cookie-consent banner is required before that tag fires (not yet built) and `cookies.html` needs its cookie table filled in.

The lead-click tracking scaffold (`script.js`) pushes `lead_click` events to `window.dataLayer` on every call/WhatsApp tap already, tagged by placement (`header`, `hero`, `subpage_hero`, `final_cta`, `floating_bar`) — ready to feed GA4/GTM the moment a property exists.

**Photos:** user explicitly wants real photos of people doing the work (hero + the 4 service-card slots: urgencias/averías/desatascos/instalaciones), not stock or illustration. This execution environment's network policy blocks all external image hosts (confirmed against Unsplash, Pexels, Pixabay, picsum.photos, Google — all 403 at the proxy), so photos cannot be fetched by the assistant; they must come from the user (pasted/uploaded in chat) or be added directly to the repo by the site owner. Until real photos exist, `.hero__photo` is a neutral CSS gradient placeholder (no image) and the 4 service cards keep hand-authored on-brand SVG line-art illustrations (`.service-illustration`) as a non-empty placeholder — swap both for `<img>` the moment real photos land.

## Reusable Base

This site is the template for the next rank & rent niche sites (electricista, fisioterapeuta, …). To retheme: swap the CSS custom properties in `styles.css` (`--navy-*`, `--orange-*`), swap the icon set (currently plumbing-themed: droplet, wrench), and rewrite the copy/FAQ/schema per niche. Layout, reveal-on-scroll, floating CTA bar, and the hero visual/canvas system are niche-agnostic and meant to carry over unchanged.

## SEO Strategy

Primary keyword: "fontanero urgente Valencia". Supporting long-tail variants worked into copy and the FAQ section (not stuffed): "fontanero 24 horas Valencia", "fontanero económico Valencia", "desatascos Valencia". Technical SEO: `robots.txt` + `sitemap.xml`, `Plumber` LocalBusiness schema, `FAQPage` schema (targets "People Also Ask" / rich results for the FAQ questions), single H1, one H2 per section.

## Accessibility & Inclusion

No specific standard mandated by the user; apply baseline good practice (tap target sizes ≥44px for CTAs, sufficient color contrast for the orange/blue palette, semantic HTML) since a meaningful share of visitors will be stressed/rushed mobile users.
