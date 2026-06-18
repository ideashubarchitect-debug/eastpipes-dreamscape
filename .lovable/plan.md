
# East Pipes — Cinematic Multi-Page Flagship

Transform the current single-page site into an immersive, multi-page corporate + investor experience with a unified premium design system inspired by NEOM.

## 1. Design system upgrade (`src/styles.css`)

Lock a futuristic-yet-trustworthy token set used across every page:
- **Palette**: deep ink `oklch(0.14 0.03 250)`, brand blue `oklch(0.58 0.18 252)`, signal cyan accent `oklch(0.82 0.12 210)`, warm steel neutral, off-white paper. Replace any ad-hoc colors in existing components.
- **Type**: keep Inter Tight as display; add a refined mono (`JetBrains Mono`) for stats/tickers/figures to give an "industrial / financial terminal" feel.
- **Motion tokens**: standardized easings (`--ease-cinema: cubic-bezier(.2,.7,.2,1)`), reveal/fade-up/ken-burns/parallax keyframes, marquee, counter ticker.
- **Layout primitives**: `.section-pad`, `.eyebrow`, `.kpi`, `.rule`, `.chip`, full-bleed hero shell, dark/light section alternation.

## 2. Global chrome

- **Header**: NEOM-style mega-menu on hover (Company / Solutions / Projects / Sustainability / Investors / Newsroom / Careers / Contact) with featured-image columns. Persistent "Investors" CTA + live ticker pill `EASTP · SAR xx.xx ▲`. EN / عربي toggle.
- **Footer**: expanded sitemap, regulatory badges (Tadawul, ISO 9001, ISO 14001, API 5L), social, IR contact block, Arabic brand line.
- **Scroll progress bar**, in-view reveal hook (`useInView`), and a route-change page transition.

## 3. New routes (TanStack file routes under `src/routes/`)

```
/                       Cinematic homepage (rebuilt)
/company                Who we are, leadership, governance, ESG
/solutions              What we do — LSAW, HSAW, coatings, services
/projects               Case studies / impact stories
/sustainability         ESG narrative + metrics
/investors              IR hub (landing)
/investors/stock        Live price + performance charts
/investors/reports      Annual / quarterly / presentations (downloads)
/investors/governance   Board, committees, policies
/investors/announcements  Tadawul disclosures & press
/investors/contact      IR contact + analyst coverage
/newsroom               News & insights feed
/careers                Talent & culture
/contact                HQ, plants, inquiry form
```

Each route gets unique `head()` metadata (title, description, og:title/desc; og:image only at leaves).

## 4. Homepage rebuild (cinematic, scroll-driven)

Sections in order:
1. **Hero** — full-bleed video-style image stack, rotating headline ("Engineering the arteries of a new era"), ticker chip, dual CTAs (Explore Company / Investor Relations).
2. **Proof bar** — Tadawul listing, ticker, market cap, certifications, years of operation.
3. **Manifesto** — large editorial statement + scroll-pinned imagery.
4. **Scale in numbers** — animated KPI counters (capacity, exports, countries, employees).
5. **Solutions preview** — 3 large cards linking to /solutions.
6. **Projects strip** — horizontal scroll of flagship projects.
7. **Sustainability teaser** — dark section with ESG pillars.
8. **Investor spotlight** — mini stock card + "Why invest in East Pipes" + CTAs.
9. **Newsroom latest** — featured + 3 items.
10. **Global reach map** — country list + stats.
11. **Newsletter / Contact CTA**.

## 5. Investor Relations hub

- **/investors landing**: hero with ticker, "At a glance" KPI grid (revenue, EBITDA, dividend, market cap — mocked), quick links to each IR sub-page, latest disclosure feed, IR contact card.
- **/investors/stock**: stock card + SVG/Recharts performance chart (1M/3M/1Y/5Y mock data), volume bars, key ratios table.
- **/investors/reports**: filterable cards (Annual / Quarterly / Presentations / Factsheets) with download icons.
- **/investors/governance**: board grid, committee composition, downloadable policies.
- **/investors/announcements**: chronological Tadawul disclosure list.
- **/investors/contact**: IR officer card, email, phone, calendar-booking link, analyst coverage table.

Data lives in typed TS modules under `src/data/` (e.g. `ir.ts`, `reports.ts`, `board.ts`) so it's easy to swap later.

## 6. Other landing pages (consistent shell)

Each follows: cinematic hero → editorial intro → modular content blocks (split image/text, KPI strip, gallery, quote, CTA). Reuses shared section components so the brand feels seamless.

## 7. Shared components (`src/components/site/`)

New: `MegaMenu`, `TickerPill`, `ScrollProgress`, `Reveal`, `KpiCounter`, `SectionHero`, `StatGrid`, `Marquee`, `ProjectCard`, `ReportCard`, `BoardMember`, `StockCard`, `StockChart`, `DisclosureRow`, `CtaBand`, `PageTransition`.

## 8. Imagery

Reuse existing uploaded plant photos; supplement with high-quality Unsplash industrial/infrastructure imagery (pipelines, refineries, ports, board rooms, engineers) for sections without dedicated assets. All declared as URL strings to avoid asset-import churn.

## Technical notes

- Pure frontend; no backend needed. All IR figures are clearly mocked placeholders the client can replace.
- Charts via lightweight SVG (no new heavy deps); if needed, `recharts` is already common — will add only if necessary.
- Animations: CSS keyframes + IntersectionObserver hook (no Framer Motion dependency required, keeps bundle lean).
- All routes typed; `head()` per route; root keeps `<Outlet />`.
- Mobile-first: every section verified at 375px, 768px, 1280px.

## Out of scope (for now)

- Real Tadawul live feed integration (would need a paid API + edge function). Ticker uses a clearly-mocked value with a comment for later wiring.
- CMS for newsroom/reports — content authored in TS data files; can migrate to Lovable Cloud later.
- Multilingual Arabic content — only the EN/عربي toggle scaffolding; full Arabic copy is a follow-up.

## Rollout

Single pass: build design tokens → shared components → rebuild homepage → add Investor hub → add remaining landing pages → polish responsive + metadata. After this lands I'll show you the homepage + IR hub first, then we iterate.
