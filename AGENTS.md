# ROAM — Agent Notes

ROAM is a fictional premium travel brand. The deliverable is **one responsive, portfolio-quality, frontend-only landing page**. This file is the binding brief; the repo currently holds no other spec.

## Current repo state (verified 2026-10-18, after the build)

- **Built and passing.** `npm.cmd run lint` and `npm.cmd run build` both exit 0. `build` runs `tsc -b` before `vite build`, so it doubles as the typecheck.
- Windows + PowerShell, Node v24.19.0, npm 11.17.0.
- **`npm` is unusable in PowerShell** — the execution policy blocks `npm.ps1` (`SecurityError`). Use `npm.cmd` (verified) or `cmd /c npm …`. Same for `npx.cmd`.
- Scripts: `npm.cmd run dev` (port 5173), `build`, `preview` (port 4173), `lint`. Linting is **oxlint** via `.oxlintrc.json`, not eslint; the scaffold's `react(refs)` rule is on and satisfied.
- No test runner, and none is warranted. Verification is done with short-lived CDP scripts driving real headless Chrome — see "Verification tooling".
- Not a git repository; nothing is committed or staged.

## What exists now

- `src/index.css` holds every token, `@font-face`, and the component classes. Tailwind v4 via `@tailwindcss/vite`; tokens live in `@theme` so utilities like `bg-sage`/`text-ink/70` exist.
- Sections in `src/components/sections/`, chrome in `src/components/layout/{Navbar,Footer}.tsx`, primitives in `src/components/ui/{Plate,Button,Reveal,Panel,Newsletter}.tsx`, hooks in `src/hooks/`, all copy in typed `src/data/*.ts`.
- One page, anchor navigation, no router — nothing needed one.
- `__preview.html` is a **dev-only** width harness (`?w=1440&h=900&y=<scrollTop>`) that frames the real page at an exact width. Vite builds only `index.html`, so it never reaches `dist/`. Keep it or delete it; it is not part of the deliverable.


## Stack (do not substitute)

- Vite + React + TypeScript + Tailwind CSS. **Never Next.js.**
- Motion for React — the `motion` package (`import { motion } from "motion/react"`), not `framer-motion`.
- `lucide-react` for icons. `shadcn/ui` only where an accessible primitive is genuinely needed, restyled to ROAM tokens.
- React Router only if multiple client-side routes appear; otherwise a single page with anchor navigation.
- Prefer CSS for simple hover/focus effects; keep dependencies proportional. Preserve working config rather than upgrading gratuitously.

## Design tokens

CSS variables in `src/index.css`, exposed to Tailwind (v4: `@theme`; v3: config `theme.extend`).

| Token           | Hex       | Use                  |
| --------------- | --------- | -------------------- |
| Ivory           | `#F6F3EC` | page background      |
| Forest charcoal | `#242B24` | text, dark sections  |
| Sage            | `#A8AD91` | secondary accent     |
| Terracotta      | `#C68D65` | warm highlight       |
| Sand            | `#E7E0D4` | secondary surface    |
| White           | `#FFFFFF` | elevated surface     |

- Ivory canvas, charcoal text. Use sage/terracotta sparingly — the photography supplies the color.
- Display font: Cormorant Garamond or DM Serif Display. Interface font: Manrope or Inter. Fluid type with `clamp()`; load efficiently with sensible fallbacks.
- Width cap ~1440px. Gutters: 64–88px desktop, ~32px tablet, 20–24px mobile. Section spacing ~100–144px desktop.
- No arbitrary values where a token already covers it.

## Section order (copy in quotes is required)

1. **Nav** — ROAM wordmark; Destinations, Experiences, Our Story; CTA "Explore escapes". Minimal desktop nav + accessible mobile menu.
2. **Hero** — cinematic photo, headline "The world, a little closer.", concise support copy, exploration CTA, subtle scroll indicator. Restrained overlay only as needed for contrast.
3. **Philosophy** — spacious editorial composition with a photograph; headline "Not just places. Ways to feel somewhere."
4. **Destinations** — Amalfi Coast (Italy), Marrakech (Morocco), the Dolomites (Italy). Location labels, concise descriptions, working links. Prefer an asymmetric editorial composition over three identical cards.
5. **Curated Escapes** — Slow Mornings, Into the Wild, Coastal Living. Horizontal scroll/swipe gallery.
6. **The ROAM Difference** — four principles: Thoughtfully chosen / Travel at your pace / A local perspective / Made to remember. Typography-led or restrained icons.
7. **Travel Journal** — three story previews (photograph, title, short description, metadata). Topics: hidden corners of Marrakech, quiet coastal escapes, travelling slowly. Each must open a real detail view, route, or reading overlay.
8. **Closing CTA** — forest-charcoal section; headline "Somewhere is calling."; prominent "Find your escape" CTA.
9. **Footer** — wordmark, short brand statement, nav links, social links, newsletter UI, copyright. Understated.

## Interaction rules

- No dead controls: no `href="#"`, no placeholder buttons. This is the brief's most common failure mode — every visible control does something real.
- Mobile menu operable by keyboard and touch; gallery swipeable **and** keyboard-reachable (never drag-only).
- Image zoom on hover-capable devices only (`@media (hover: hover)`), never the sole affordance.
- Selective scroll-triggered reveals, not blanket animation.
- Newsletter form: client-side validation only. It is not connected to a service — say so in the UI and never claim a subscription succeeded.
- Destination and journal links must land on real in-app content, not a stub.

## Content and assets

- All copy lives in typed local modules (`src/data/*.ts`); no fetching, no CMS.
- Never invent testimonials, awards, partnerships, statistics, prices, or booking availability.
- Photography: local files under `public/images/`, one coherent visual identity. No hotlinked or unstable URLs, no broken assets; provide a graceful fallback if an image fails.
- Set intrinsic size (`width`/`height` or `aspect-ratio`) and lazy-load below the fold to avoid layout shift.
- Descriptive `alt` for meaningful images, empty `alt` for decorative ones.
- Voice: concise, evocative, human. No marketing clichés or exaggerated promises.

## Accessibility and motion

- Semantic HTML, visible keyboard focus, accessible names on every control.
- Never hover-only. Touch targets comfortably sized. No fixed heights that clip content, no horizontal overflow at any width (check down to ~320px).
- Motion: restrained fades, short vertical reveals, gentle image scaling. No parallax, scroll hijacking, long blocking entrances, or custom cursors.
- Honor `prefers-reduced-motion`; content must be complete with animation disabled.

## Scope boundaries — do not build

- No auth, database, backend API, booking, payment, or real newsletter subscription. Local TypeScript data + React state only.
- No admin UI or dashboards. No Next.js.
- Supabase and n8n MCP servers are configured globally in this environment; they are unrelated to ROAM — do not wire them in.

## Suggested structure (adapt, don't duplicate)

`public/images/`, `src/components/layout/{Navbar,Footer}.tsx`, `src/components/sections/{Hero,Philosophy,Destinations,Experiences,Difference,Journal,ClosingCTA}.tsx`, `src/components/ui/`, `src/data/{destinations,journal}.ts`, `src/hooks/`, `src/lib/`, `App.tsx`, `main.tsx`, `index.css`.

## Decisions already made (don't relitigate)

- **Cascade layers matter here.** Base resets live in `@layer base` and component classes in `@layer components`. Never leave an element reset unlayered: unlayered CSS outranks every layer regardless of specificity, and a bare `button { color: inherit }` once blanked out every `.btn--ink` label (charcoal text on charcoal fill).
- Fonts are self-hosted in `public/fonts/` — Cormorant Garamond (display) + Manrope (interface), latin subsets, ~158 KB total, `@font-face` in `index.css` and the two critical faces preloaded in `index.html`.
- Photography is 15 local files in `public/images/`, all run through one ffmpeg grade so they read as one identity. Sources are Wikimedia Commons; the graded derivatives stay **CC BY-SA**, attributed in the footer's photography-credits `<details>` and in `public/images/CREDITS.md`.
- Panels are native `<dialog>` with `@starting-style` + `allow-discrete` transitions (`ui/Panel.tsx`) — the platform supplies the focus trap, inert background, Escape handling and focus return. Panel content pre-renders against the first entry so the heading that `aria-labelledby` points at always exists, even while closed.
- The newsletter validates locally and says plainly that nothing was sent. It must never claim a subscription.
- The hero/footer clocks are real, computed from the device's own `Intl` timezone data — so they are only as correct as the visitor's browser tz database.
- Grid/intrinsic sizes and `loading="lazy"` are set on every plate; `Plate` renders a labelled fallback panel if an image fails.

## Verification tooling (throwaway, lives outside the repo)

Screenshotting through the MCP browser tool needs a visible desktop window, which is not available here — so verification runs through small CDP scripts in `%LOCALAPPDATA%\Temp\opencode\`, driving real headless Chrome with `Emulation.setDeviceMetricsOverride` / `setEmulatedMedia`:

- `cdp-shot.mjs <config.json>` — batch screenshots at exact widths with real waits (forces `loading="eager"` and `decode()` before capture; `--virtual-time-budget` alone does **not** wait for images and silently produces blank photos).
- `cdp-audit.mjs` — overflow, dead links, accessible names, heading order, alt text, touch-target sizes, keyboard tab traversal, dialog open/Escape, newsletter validation, reduced-motion.
- `cdp-contrast.mjs` — full-page WCAG contrast sweep (handles `rgb()`, `color(srgb …)` and `oklab()`; a parser that only knows `rgb()` silently reports clean, so check that the "checked" count is non-zero).
- `cdp-probe.mjs <url>` / `cdp-verify.mjs` / `cdp-gallery2.mjs` — production-bundle probe, interaction states, gallery end-states.
- `sheet.ps1 <dir> <out> <cols> <cellW> <cellH> <names…>` — System.Drawing contact sheets for reviewing many captures in one image.

## Working agreement

- Stage the work: tokens and global styles → static sections → interactions → polish. Visual foundation before advanced animation.
- Make reasonable design decisions independently; don't ask for approval on ordinary choices.
- Verify at ~375px, ~768px, and ~1440px, then tab through with the keyboard and re-check under reduced motion.
- Never report a check as passing unless you actually ran it; state what you ran and what stayed unverified.
- Done means: all nine sections present and on-brand, no dead controls, no overflow, images load with correct `alt`, keyboard and reduced-motion paths work, `npm.cmd run lint` and `npm.cmd run build` pass, and `index.html` carries proper page metadata.
