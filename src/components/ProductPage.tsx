import { Link } from "@tanstack/react-router";

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
          </nav>
          <Link
            to="/"
            hash="notify"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get notified
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-16">
        <nav className="text-xs font-medium text-warmgrey">
          <Link to="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{props.name}</span>
        </nav>

        <div className="mt-10 grid items-start gap-12 md:grid-cols-2">
          <div className="animate-fade-in relative overflow-hidden rounded-3xl border border-border shadow-[0_24px_60px_-24px_rgba(29,29,27,0.25)]">
            <img
              src={props.image}
              alt={props.alt}
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <span
              className={`absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-semibold ${props.badgeClass}`}
            >
              {props.tone}
            </span>
          </div>

          <div className="animate-fade-up delay-150">
            <div className={`h-1 w-10 rounded-full ${props.accentClass}`} />
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
              {props.name}
            </h1>
            <p className="mt-3 text-sm font-medium text-warmgrey">{props.descriptor}</p>
            <p className="mt-7 max-w-md text-base leading-relaxed text-warmgrey">
              {props.intro}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-warmgrey">
              {props.role}
            </p>

            <dl className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border">
              {props.facts.map((fact) => (
                <div key={fact.label} className="flex gap-6 bg-card px-6 py-4">
                  <dt className="w-40 shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-warmgrey">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm font-semibold">
              Coming soon:
              <span className="ml-2 font-normal text-warmgrey">
                verified dosage and pack details published at launch.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warmgrey">
            Product passport
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight">
            Everything this pack will tell you.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {props.passport.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_16px_40px_-20px_rgba(29,29,27,0.25)]"
              >
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warmgrey">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-primary px-8 py-14 text-primary-foreground md:flex-row md:items-center md:px-14">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Want this at launch?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              We publish formulation, source and testing details before the first pack
              ships.
            </p>
          </div>
          <Link
            to="/"
            hash="notify"
            className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Notify me at launch
          </Link>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-extrabold tracking-[0.18em]">STAPLE</p>
            <p className="mt-1 text-xs text-warmgrey">
              Wellness, made in India. Clear by default.
            </p>
          </div>
          <nav className="flex gap-6 text-xs font-medium text-warmgrey">
            <Link to="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <Link to="/omega-3" className="transition-colors hover:text-foreground">
              Omega-3
            </Link>
            <Link to="/magnesium" className="transition-colors hover:text-foreground">
              Magnesium
            </Link>
          </nav>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-6 py-5 text-[11px] leading-relaxed text-warmgrey">
            These statements have not been evaluated by the Food Safety and Standards
            Authority of India. Products are not intended to diagnose, treat, cure, or
            prevent any disease.
          </p>
        </div>
      </footer>
    </div>
  );
}
