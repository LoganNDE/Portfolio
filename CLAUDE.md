# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Files to ignore

Ignore `.git/`, `node_modules/`, `public/` (static assets only), `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`. Focus exclusively on `app/` and `app/data/`.

## Architecture

Single-page portfolio (Spanish language) built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Motion (Framer Motion)** for component-level animations, **GSAP + ScrollTrigger** for scroll-triggered reveals, **Lucide React** for UI icons, and **React Icons (`react-icons/si`)** for brand/tech logos.

### Page layout (`app/page.tsx`)

Sections in order, each with a numbered label ("01 Sobre mí", "02 Servicios", etc.):
1. `Navbar` — fixed floating pill, links to anchor IDs
2. `Hero` — fullscreen `hero-video.mp4` background + `ScrambleText` heading
3. `Strip` — GSAP-animated horizontal marquee ticker
4. `AboutStack` — merged About + Tech Stack (left: bio + stats; right: animated stack grid)
5. `Services` — 3-column grid using data from `app/data/service.ts`
6. `Projects` — full-width responsive drag/swipe carousel (card width adapts to viewport)
7. `Contact` — email CTA + socials + footer

### Component organization

- `app/components/sections/` — full-page sections
- `app/components/ui/` — `Navbar.tsx`
- `app/components/blocks/` — `Service-block.jsx` (intentionally untyped `.jsx` — keep as `.jsx`)
- `app/components/effects/` — `Scramble.tsx` wraps `use-scramble`
- `app/data/service.ts` — services static array
- `app/data/stack.ts` — tech stack data organized by category

### Animation conventions

- **motion/react** — hover, tap, and mount transitions on individual elements
- **GSAP + ScrollTrigger** — scroll-triggered reveals; always register plugins at module level with `gsap.registerPlugin(ScrollTrigger)`; always clean up with `gsap.context().revert()` in useEffect cleanup
- **use-scramble** — text scramble effect on Hero heading only

### Design system

- Background: `#000000` / `#0a0a0a`, cards: `#0d0d0d`, borders: `#1a1a1a`
- Text: `#f4f0eb` (primary), `#555`–`#666` (body), `#333`–`#444` (meta)
- Accent orange: `#e8642a`, accent blue: `#4f6ef7`, accent purple: `#533483`
- Fonts: `Unbounded` (`font-unbounded`) for headings, `Roboto` (`font-roboto`) for body paragraphs, `Bebas Neue` for large display numbers
- Tailwind v4: no `tailwind.config.js` — theme tokens live in `globals.css` under `@theme inline`

### Responsive breakpoints

- Mobile-first; Projects carousel is near-full-width on mobile (`window.innerWidth - 48px`), 360px on tablet, 480px on desktop
- Navbar collapses to hamburger on `md:` breakpoint
- Section max-width container: `mx-auto w-[92%] sm:w-[90%] lg:w-[80%] xl:w-[75%] max-w-[1200px]`
