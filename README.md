# Staple Wellness | Web Application

Pre-launch site for **Staple Wellness**, an omega-3 and magnesium supplement brand for India. Formulations are not final, so the site publishes no dose, form, source, test or benefit claims. See `Doc/` and the workspace `CLAIMS.md` before changing any copy.

## Tech Stack

- **Framework**: Next.js 15 (App Router), React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Fonts**: Fraunces, Inter, JetBrains Mono (`next/font/google`)
- **Hosting**: Vercel, deployed from `main`

## Getting Started

Node.js 18+ (20+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

- `npm run dev`: development server.
- `npm run build`: production build. A preflight guard aborts it while a dev server is running.
- `npm run start`: serve the production build.
- `npm run typecheck`: TypeScript check.

## Project Structure

```
src/
  app/                    layout, global styles, home page, products/[slug]
  components/
    layout/               header, mobile nav, footer
    sections/             hero, why, publish, products, guides, status, faq, waitlist
    ui/                   button, scroll-reveal
  config/
    site.ts               all home page copy and navigation
    products.ts           product records and label declarations
  hooks/                  reduced motion, scroll state
  lib/                    class names, motion variants
public/assets/
  brand/                  logo variants and mark
  products/catalog/       product photos
  video/                  hero video
research/                 market research, prompts, brand guidelines, logo sources, data
Doc/                      PRD, brand, design, architecture and packaging notes
scripts/                  build guard
```

Page copy lives in `src/config/site.ts`. Product pages read `src/config/products.ts`.

## Compliance

Until formulations are final, no page may state a dose, form, source, test result, certification, price or health benefit. The FSSAI licence number is not shown on the site.

## License

ISC © Staple Wellness
