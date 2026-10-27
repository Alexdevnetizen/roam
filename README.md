# ROAM

A single-page site for a fictional premium travel brand — built as a frontend study in art direction, editorial layout and restrained motion.

**The world, a little closer.**

ROAM is not a real company. There is no backend, no booking flow and nothing for sale. The page exists to be looked at, read and tabbed through.

---

## What's on the page

Nine sections, in order, on one scroll:

| Section | What it does |
| --- | --- |
| Nav | Anchor navigation, responsive menu, "Explore escapes" CTA |
| Hero | Full-bleed photograph, headline, scroll cue, live local clocks |
| Philosophy | Editorial spread — a photograph and a single idea |
| Destinations | Amalfi Coast, Marrakech, the Dolomites; asymmetric composition, each opens a reading panel |
| Curated Escapes | Slow Mornings, Into the Wild, Coastal Living — scroll-snap gallery, arrows, keyboard, swipe |
| The ROAM Difference | Four principles, typography-led |
| Travel Journal | Three stories, each opening a full reading overlay |
| Closing CTA | Charcoal section — "Somewhere is calling." |
| Footer | Wordmark, nav, newsletter, photography credits |

Destination notes and journal pieces open in native `<dialog>` panels, so focus trapping, Escape handling, inert background and focus return come from the platform rather than a library.

## Honesty constraints

This is the part worth reading if you are evaluating the build:

- **No invented proof.** No testimonials, awards, partnerships, statistics, prices or availability. Nothing is for sale.
- **No dead controls.** Every link and button does something real — no `href="#"`, no placeholder handlers.
- **The newsletter does not subscribe anyone.** It validates locally and says plainly that nothing was sent. It never claims success.
- **Social links go to the platforms, not to accounts that do not exist**, and the footer says so in small print.
- **Photography is credited.** Sources and licences are in [`public/images/CREDITS.md`](public/images/CREDITS.md) and in the footer's credits disclosure.

## Stack

- **Vite + React + TypeScript**, Tailwind CSS v4 via `@tailwindcss/vite`
- **Motion for React** (`motion`) for short reveals; CSS for hover and focus
- **lucide-react** for the handful of icons
- No router — one page, anchor navigation
- No data fetching: all copy lives in typed modules under `src/data/`

Design tokens (ivory `#F6F3EC`, forest charcoal `#242B24`, sage `#A8AD91`, terracotta `#C68D65`, sand `#E7E0D4`) live in `src/index.css` under `@theme`. Fonts — Cormorant Garamond and Manrope — are self-hosted in `public/fonts/`, latin subsets only.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build  (also the typecheck)
npm run preview  # http://localhost:4173
npm run lint     # oxlint
```

Requires Node 20+. On Windows PowerShell, `npm` may be blocked by execution policy — use `npm.cmd`.

`__preview.html` is a development-only harness for reviewing the page at an exact width (`?w=1440&h=900&y=<scrollTop>`). Vite builds only `index.html`, so it never reaches `dist/`.

## Structure

```
src/
  components/
    layout/     Navbar, Footer
    sections/   Hero, Philosophy, Destinations, Experiences,
                Difference, Journal, ClosingCTA, HorizonBand
    ui/         Plate, Button, Reveal, Panel, Newsletter
  data/         destinations, escapes, journal, site, types
  hooks/        useLocalClocks, useRetained
  index.css     tokens, @font-face, base resets, component classes
```

Two conventions that matter if you edit the CSS:

1. **Base resets belong in `@layer base`.** Unlayered CSS outranks every cascade layer regardless of specificity — an unlayered `button { color: inherit }` once blanked the label on every filled button.
2. **Every image sits in a `Plate`**, which sets an intrinsic aspect ratio, lazy-loads below the fold, and renders a labelled fallback if the file fails to decode.

## Accessibility

Semantic landmarks and heading order, visible keyboard focus on every control, accessible names on all controls, comfortable touch targets, and no hover-only affordances — image zoom is gated behind `@media (hover: hover)` and never the only way to read anything. `prefers-reduced-motion` collapses transitions and reveals; the page is complete with animation off.

Checked at 320, 375, 414, 768, 1024 and 1440 px: no horizontal overflow, no dead links, no unnamed controls, all images with `alt`, dialog focus traps and Escape, newsletter validation, and a full-page WCAG contrast sweep (AA body text on every surface). Tested by driving headless Chrome over CDP — not by eye.

## Photography

Fifteen images, all sourced from Wikimedia Commons, each run through one grade so they read as a single body of work. The graded derivatives remain **CC BY-SA**; see [`public/images/CREDITS.md`](public/images/CREDITS.md) for each source, author and licence.

The site code is the author's own work.
