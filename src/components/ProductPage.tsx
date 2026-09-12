import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronRight } from "lucide-react";

export type ProductPageProps = {
  name: string;
  descriptor: string;
  tone: string;
  image: string;
  alt: string;
  accentClass: string;
  badgeClass: string;
  intro: string;
  role: string;
  facts: { label: string; value: string }[];
  passport: { title: string; body: string }[];
};

export function ProductPage(props: ProductPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 md:px-12">
          <Link to="/" className="text-lg font-extrabold tracking-[0.18em]">
            STAPLE
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-warmgrey md:flex">
            <Link to="/" hash="principles" className="transition-colors hover:text-foreground">
              Principles
            </Link>
            <Link to="/" hash="products" className="transition-colors hover:text-foreground">
              Products
            </Link>
            <Link to="/" hash="transparency" className="transition-colors hover:text-foreground">
              Transparency
            </Link>
            <Link to="/blog" className="transition-colors hover:text-foreground">
              Knowledge
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              hash="notify"
              className="hidden rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
            >
              Get notified
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground transition-colors hover:bg-secondary md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="animate-fade-in border-b border-border bg-background/95 px-6 py-6 backdrop-blur-xl md:hidden shadow-2xl">
            <nav className="flex flex-col gap-4 border-b border-border pb-5">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-foreground hover:text-warmgrey"
              >
                Home
              </Link>
              <Link
                to="/"
                hash="principles"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-foreground hover:text-warmgrey"
              >
                Principles
              </Link>
              <Link
                to="/"
                hash="products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-foreground hover:text-warmgrey"
              >
                All Products
              </Link>
              <Link
                to="/"
                hash="transparency"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-foreground hover:text-warmgrey"
              >
                Transparency
              </Link>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-foreground hover:text-warmgrey"
              >
                Knowledge base
              </Link>
            </nav>

            <div className="py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warmgrey">
                Products
              </p>
              <div className="mt-2.5 flex flex-col gap-2">
                <Link
                  to="/omega-3"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-lemon" />
                    <span>Staple Omega-3</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-warmgrey" />
                </Link>
                <Link
                  to="/magnesium"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-3 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-lavender" />
                    <span>Staple Magnesium</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-warmgrey" />
                </Link>
              </div>
            </div>

            <div className="pt-3">
              <Link
                to="/"
                hash="notify"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-full bg-primary text-xs font-bold uppercase tracking-widest text-primary-foreground"
              >
                Get notified at launch
              </Link>
            </div>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 pb-16 pt-8 sm:pt-10 md:pt-16">
        <nav className="text-xs font-medium text-warmgrey">
          <Link to="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{props.name}</span>
        </nav>

        <div className="mt-8 sm:mt-10 grid items-start gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">
          <div className="animate-fade-in relative overflow-hidden rounded-3xl border border-border shadow-[0_24px_60px_-24px_rgba(29,29,27,0.25)]">
            <img
              src={props.image}
              alt={props.alt}
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <span
              className={`absolute left-4 top-4 sm:left-5 sm:top-5 rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs font-semibold ${props.badgeClass}`}
            >
              {props.tone}
            </span>
          </div>

          <div className="animate-fade-up delay-150">
            <div className={`h-1 w-10 rounded-full ${props.accentClass}`} />
            <h1 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight">
              {props.name}
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm font-medium text-warmgrey">{props.descriptor}</p>
            <p className="mt-5 sm:mt-7 max-w-md text-sm sm:text-base leading-relaxed text-warmgrey">
              {props.intro}
            </p>
            <p className="mt-4 sm:mt-5 max-w-md text-sm sm:text-base leading-relaxed text-warmgrey">
              {props.role}
            </p>

            {/* Responsive specification list */}
            <dl className="mt-8 sm:mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border">
              {props.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 bg-card px-5 py-3.5 sm:px-6 sm:py-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-warmgrey sm:w-44 sm:shrink-0">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 sm:mt-8 text-xs sm:text-sm font-semibold">
              Coming soon:
              <span className="ml-1.5 font-normal text-warmgrey">
                verified dosage and pack details published at launch.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warmgrey">
            Product passport
          </p>
          <h2 className="mt-3 sm:mt-4 max-w-xl text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Everything this pack will tell you.
          </h2>
          <div className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
            {props.passport.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_16px_40px_-20px_rgba(29,29,27,0.25)]"
              >
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-warmgrey">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:gap-8 rounded-3xl bg-primary px-6 py-10 sm:px-10 sm:py-14 md:flex-row md:items-center md:px-14 text-primary-foreground">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Want this at launch?
            </h2>
            <p className="mt-2.5 sm:mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-primary-foreground/70">
              We publish formulation, source and testing details before the first pack
              ships.
            </p>
          </div>
          <Link
            to="/"
            hash="notify"
            className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Notify me at launch
          </Link>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:px-12 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-extrabold tracking-[0.18em]">STAPLE</p>
            <p className="mt-1 text-xs text-warmgrey">
              Wellness, made in India. Clear by default.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-warmgrey">
            <Link to="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <Link to="/omega-3" className="transition-colors hover:text-foreground">
              Omega-3
            </Link>
            <Link to="/magnesium" className="transition-colors hover:text-foreground">
              Magnesium
            </Link>
            <Link to="/blog" className="transition-colors hover:text-foreground">
              Knowledge
            </Link>
          </nav>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 py-5 text-[11px] leading-relaxed text-warmgrey">
            These statements have not been evaluated by the Food Safety and Standards
            Authority of India. Products are not intended to diagnose, treat, cure, or
            prevent any disease.
          </p>
        </div>
      </footer>
    </div>
  );
}
