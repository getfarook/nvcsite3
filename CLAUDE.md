# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

There are no tests configured in this project.

## Architecture

This is a **Next.js App Router** marketing website for NOVIZCO INFOTECH, a technology services company.

### Pages & Routes

- `/` — Home (hero, services overview, welcome popup)
- `/about` — Company mission, vision, values
- `/services` — Service offerings (AI, mobile, web, cloud, data engineering)
- `/contact` — Contact form
- `/blog` and `/blog/[slug]` — Blog listing and individual posts
- `/careers` — Job listings
- `/ai-labs` — AI labs showcase
- `/hire-resource` — Resource staffing/hiring

### API Routes

All three form-submission endpoints send emails via **Nodemailer** using env vars (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`):

- `POST /api/contact` — Contact form
- `POST /api/careers` — Job applications (includes resume file upload)
- `POST /api/hire-resource` — Resource hiring requests

### Data Layer

Static content (services, blog posts, careers, team info, etc.) lives in `/lib/constants/` as TypeScript files. There is no CMS or database — all page data is hardcoded constants. Blog posts are stored in `/lib/constants/blog.tsx` and served via `/lib/services/blog.ts`.

### Key Directories

- `app/` — Next.js App Router pages and layouts
- `components/` — React components; `components/ui/` contains shadcn/ui primitives
- `lib/constants/` — All static page data
- `lib/email-templates.ts` — HTML email templates for form submissions
- `lib/types/` — Shared TypeScript interfaces
- `public/` — Static assets

### Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss` (PostCSS plugin, not the webpack plugin)
- **shadcn/ui** (New York style) with Lucide icons — component config in `components.json`
- Dark/light mode via `next-themes` (`ThemeProvider` in root layout)
- CSS variable-based theming; use `cn()` from `lib/utils` for conditional class merging

### Fonts

- **SonySketch** (`public/Sony_Sketch_EF.ttf`) is registered as `font-family: "SonySketch"` in `app/globals.css` via `@font-face` — use `style={{ fontFamily: "SonySketch" }}` inline to apply it; no Tailwind class exists for it
- Body font is `font-sans` (Geist) loaded via `next/font/google` in `app/layout.tsx`

### Background Components

There are three pairs of animated background components — a full-page version and a side-margin version for each style:

| Full-page | Side-margin | Used on |
|---|---|---|
| `NeuralNetworkBackground` | `NeuralNetworkSideMargins` (`neural-network-margin.tsx`) | Most pages + hero |
| `ScatteredBackground` | — | Root layout (all pages, fixed) |
| `AINodesBackground` | `AINodesMargin` (`ai-nodes-margin.tsx`) | — |

- `NeuralNetworkBackground` accepts `spreadNearText?: boolean` — when `true`, shrinks the center exclusion zone so networks drift closer to text content
- `ScatteredBackground` is purely static (CSS blur glows, no animation, no canvas)
- All canvas-based components use `requestAnimationFrame` and clean up via the `useEffect` return

### Notable Patterns

- `next.config.mjs` disables image optimization (`unoptimized: true`) and ignores TypeScript build errors — do not rely on build errors catching type issues
- **Google Analytics** is loaded via inline `<script>` tags in `app/layout.tsx` (not via GTM component)
- Popup modals (`WelcomePopup`, `ContactPopup`) use `useState` with localStorage to control display frequency
- The navbar logo renders "NOVIZCO / INFOTECH" as two `<span>` elements with `fontFamily: "SonySketch"` and manual `letterSpacing` to match widths — avoid changing font size without recalculating letter-spacing
