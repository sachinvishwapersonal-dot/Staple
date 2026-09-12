import { createFileRoute, Link } from "@tanstack/react-router";

import heroImg from "../assets/hero-fullbleed.jpg";
import omegaImg from "../assets/staple-omega3.jpg";
import magnesiumImg from "../assets/staple-magnesium.jpg";
import { blogPosts } from "../lib/blog-posts";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Staple Wellness | Transparent, Evidence-Backed Supplements" },
      {
        name: "description",
        content:
          "Staple Wellness is a premium Indian wellness brand delivering verified supplement formulations, full supply chain transparency, and direct product communication.",
      },
      { property: "og:title", content: "Staple Wellness | Transparent, Evidence-Backed Supplements" },
      {
        property: "og:description",
        content:
          "Verified supplement formulations with full supply chain transparency. Omega-3 and Magnesium, formulated for everyday use.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Staple Wellness",
          description:
            "Premium Indian wellness brand delivering verified supplement formulations and full supply chain transparency.",
        }),
      },
    ],
  }),
});

const principles = [
  {
    title: "Clear, not complicated",
    body: "Plain language, visible information and straightforward product architecture.",
  },
  {
    title: "Evidence-led, not clinical",
    body: "The basis for every product, shown without turning it into a medical lecture.",
  },
  {
    title: "Confident, not loud",
    body: "Formulation, quality and proof create the authority. No exaggerated wellness language.",
  },
  {
    title: "Human, not corporate",
    body: "Authoritative, accessible communication that earns trust on every touchpoint.",
  },
];

const products = [
  {
    name: "STAPLE OMEGA-3",
    descriptor: "EPA + DHA",
    tone: "Daily foundation",
    image: omegaImg,
    alt: "Staple Omega-3 bottle with golden softgel capsules",
    accentClass: "bg-lemon",
    badgeClass: "bg-lemon-soft text-foreground",
    to: "/omega-3" as const,
  },
  {
    name: "STAPLE MAGNESIUM",
    descriptor: "Magnesium Bisglycinate",
    tone: "Calm / recovery",
    image: magnesiumImg,
    alt: "Staple Magnesium bottle with capsules in a ceramic dish",
    accentClass: "bg-lavender",
    badgeClass: "bg-lavender-soft text-foreground",
    to: "/magnesium" as const,
  },
];

const transparencyPath = [
  {
    step: "01",
    title: "What is inside",
    body: "Every ingredient, its form, and its dosage: stated on the label in plain language.",
  },
  {
    step: "02",
    title: "Where it comes from",
    body: "Source and supplier information for each active, traceable from package to origin.",
  },
  {
    step: "03",
    title: "What we test",
    body: "Batch testing data and certificates, accessible for the exact pack in your hand.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero: full bleed */}
      <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
        {/* Background image + scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Staple Omega-3 and Staple Magnesium bottles on a warm stone surface in soft daylight"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/10 to-background/80" />
        </div>

        {/* Nav */}
        <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <a href="#top" className="text-xl font-extrabold tracking-tighter md:text-2xl">
            STAPLE
          </a>
          <nav className="hidden items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-warmgrey md:flex">
            <a href="#principles" className="transition-colors hover:text-foreground">
              Principles
            </a>
            <a href="#products" className="transition-colors hover:text-foreground">
              Products
            </a>
            <a href="#transparency" className="transition-colors hover:text-foreground">
              Transparency
            </a>
            <Link to="/blog" className="transition-colors hover:text-foreground">
              Knowledge
            </Link>
          </nav>
          <a
            href="#notify"
            className="rounded-full bg-primary px-6 py-2 text-[11px] font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-warmgrey"
          >
            Get notified
          </a>
        </header>

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
          <div className="mx-auto w-full max-w-screen-2xl">
            <div className="animate-fade-up mb-8 flex flex-wrap gap-3">
              <Link
                to="/omega-3"
                className="group flex items-baseline gap-3 bg-accent px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
              >
                <span>01 Omega-3</span>
                <span className="font-bold tracking-[0.18em] opacity-70">
                  EPA + DHA · 60 capsules
                </span>
              </Link>
              <Link
                to="/magnesium"
                className="group flex items-baseline gap-3 bg-lavender px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-foreground transition-opacity hover:opacity-90"
              >
                <span>02 Magnesium</span>
                <span className="font-bold tracking-[0.18em] opacity-70">
                  Bisglycinate · 60 capsules
                </span>
              </Link>
            </div>

            <h1 className="animate-fade-up delay-150 -ml-1 text-[13vw] font-extrabold leading-[0.85] tracking-tighter md:-ml-2 md:text-[10rem]">
              STAPLE
              <br />
              <span className="text-warmgrey/40">WELLNESS</span>
            </h1>

            <div className="animate-fade-up delay-300 mt-12 flex flex-col justify-between gap-8 md:mt-16 md:flex-row md:items-end">
              <p className="max-w-md text-lg font-light leading-relaxed text-foreground md:text-xl">
                Verified supplement formulations with full supply chain transparency.
                Grounded in evidence, refined for daily life.
              </p>
              <div className="flex flex-col items-start gap-4 md:items-end">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-foreground" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-warmgrey">
                    Clear by default
                  </span>
                </div>
                <a
                  href="#products"
                  className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-foreground"
                >
                  <span>See the products</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-accent" />
      </section>

      {/* Principles */}
      <section id="principles" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warmgrey">
            Brand principles
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight">
            Quietly confident. Clear by default.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div
                key={p.title}
                className="group bg-background p-8 transition-colors duration-300 hover:bg-lemon-soft/40"
              >
                <div className="h-1 w-8 rounded-full bg-accent transition-all duration-300 group-hover:w-12" />
                <h3 className="mt-5 text-base font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warmgrey">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warmgrey">
          Initial portfolio
        </p>
        <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight">
          One brand system, distinct product roles.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.name}
              to={product.to}
              className="group block overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-24px_rgba(29,29,27,0.28)]"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span
                  className={`absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-semibold ${product.badgeClass}`}
                >
                  {product.tone}
                </span>
              </div>
              <div className="p-8">
                <div className={`h-1 w-10 rounded-full ${product.accentClass}`} />
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{product.name}</h3>
                <p className="mt-2 text-sm font-medium text-warmgrey">{product.descriptor}</p>
                <p className="mt-5 text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-8">
                  View the product
                </p>
                <p className="mt-4 text-sm text-warmgrey">
                  Coming soon: verified dosage and pack details published at launch.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Transparency */}
      <section id="transparency" className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warmgrey">
                Transparency system
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Here is what is inside.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-warmgrey">
                Transparency is a repeatable standard, not a campaign. Every product
                carries the same three-part information path, paired with a QR code that opens
                its digital product passport: batch information, source and supplier
                details, testing documents, and formulation evidence.
              </p>
            </div>
            <ol className="grid gap-6 sm:grid-cols-3">
              {transparencyPath.map((item) => (
                <li
                  key={item.step}
                  className="rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_16px_40px_-20px_rgba(29,29,27,0.25)]"
                >
                  <span className="inline-block rounded-full bg-accent/70 px-3 py-1 text-xs font-bold tracking-[0.2em] text-accent-foreground">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warmgrey">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Knowledge base */}
      <section id="knowledge" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warmgrey">
              Knowledge base
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight">
              What we know, written so you can check it.
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-sm font-bold uppercase tracking-widest underline decoration-accent decoration-2 underline-offset-8"
          >
            All notes
          </Link>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="flex flex-col bg-background p-8 transition-colors duration-300 hover:bg-secondary/60"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-warmgrey">
                {post.category} · {post.readingTime}
              </p>
              <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-warmgrey">
                {post.excerpt}
              </p>
              <p className="mt-6 text-sm font-semibold">Read the note</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Statement + notify */}
      <section id="notify" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
            Launching soon
          </p>
          <h2 className="text-balance mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            A clear, modern approach to everyday supplementation.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            Product transparency is our operational standard across packaging, testing
            disclosure, and every customer touchpoint.
          </p>
          <a
            href="mailto:getfit@staplewellness.com?subject=Notify%20me%20at%20launch"
            className="mt-9 inline-block rounded-full bg-accent px-8 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Notify me at launch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-extrabold tracking-[0.18em]">STAPLE</p>
            <p className="mt-1 text-xs text-warmgrey">
              Wellness, made in India. Clear by default.
            </p>
          </div>
          <nav className="flex gap-6 text-xs font-medium text-warmgrey">
            <a href="#principles" className="transition-colors hover:text-foreground">
              Principles
            </a>
            <Link to="/omega-3" className="transition-colors hover:text-foreground">
              Omega-3
            </Link>
            <Link to="/magnesium" className="transition-colors hover:text-foreground">
              Magnesium
            </Link>
            <a href="#transparency" className="transition-colors hover:text-foreground">
              Transparency
            </a>
            <Link to="/blog" className="transition-colors hover:text-foreground">
              Knowledge
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
