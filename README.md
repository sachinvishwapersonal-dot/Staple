# Staple Wellness | Web Application

Production web storefront for **Staple Wellness**, delivering verified supplement formulations with full supply chain transparency.

## Tech Stack

- **Framework**: React 19 + TanStack Start (SSR)
- **Routing**: TanStack Router (File-based routing under `src/routes/`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Radix UI Primitives
- **Data & State**: TanStack Query
- **Bundler**: Vite 8

## Getting Started

```sh
npm install
npm run dev
```

The dev server will start on [http://localhost:8080](http://localhost:8080).

## Project Structure

- `src/routes/` : File-based application routes (`index.tsx`, `omega-3.tsx`, `magnesium.tsx`, `blog.*`)
- `src/components/` : Modular UI components and Radix primitives
- `src/lib/` : Brand definitions and content records
- `src/assets/` : High-resolution product and lifestyle photography
