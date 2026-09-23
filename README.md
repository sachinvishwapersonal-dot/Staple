# Staple Wellness | Web Application

Production web storefront for **Staple Wellness**, delivering verified supplement formulations with full supply chain transparency.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS v4 + Radix UI Primitives
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18+ (Node 20+ recommended)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the production bundle.
- `npm run start`: Runs the built production server.
- `npm run typecheck`: Validates TypeScript types across the project.
- `npm run lint`: Runs Next.js ESLint checks.

## Architecture & Project Structure

- `src/app/` : Next.js App Router root layout, metadata, and pages.
- `src/components/layout/` : Header, navigation, and footer chrome.
- `src/components/sections/` : Modular landing page sections (Hero, Product Rail, Science, Traceability, Range Essentials, Reserve).
- `src/components/drawer/` : Radix-powered accessible reservation drawer & line items.
- `src/components/ui/` : Atomic design tokens, buttons, badges, chips, and scroll reveals.
- `src/config/` : Product catalogue, circadian timings, and site configuration.
- `src/types/` : TypeScript interfaces for products and reservations.
- `Doc/` : Architectural specifications, PRDs, brand voice, and packaging documentation.

## License

ISC © Staple Wellness
