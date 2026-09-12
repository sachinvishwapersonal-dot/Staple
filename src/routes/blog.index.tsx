import { createFileRoute, Link } from "@tanstack/react-router";

import { blogPosts } from "../lib/blog-posts";

const title = "Knowledge Base: Clear Notes on Supplements | Staple Wellness";
const description =
  "Plain-language notes on supplement forms, dosages, labels and testing, written to be checked, not believed. The Staple Wellness knowledge base.";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

const accentBar: Record<string, string> = {
  lemon: "bg-lemon",
  lavender: "bg-lavender",
  neutral: "bg-foreground",
};

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between border-b border-border px-5 py-5 sm:px-8 md:px-12 md:py-6">
        <Link to="/" className="text-xl font-extrabold tracking-tighter">
          STAPLE
        </Link>
        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.16em] text-warmgrey sm:gap-8 sm:text-[11px] sm:tracking-[0.2em]">
          <Link to="/omega-3" className="transition-colors hover:text-foreground">
            Omega-3
          </Link>
          <Link to="/magnesium" className="transition-colors hover:text-foreground">
            Magnesium
          </Link>
          <span className="text-foreground">Knowledge</span>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 pb-12 sm:pb-16 pt-12 sm:pt-16 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warmgrey">
          Knowledge base
        </p>
        <h1 className="mt-3 sm:mt-4 max-w-2xl text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          What we know, written so you can check it.
        </h1>
        <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-warmgrey">
          Short, evidence-led notes on forms, dosages, labels and testing. No miracle
          claims, no clinical lecture: just the reasoning behind the products, in plain
          language.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 pb-20 sm:pb-24">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border grid-cols-1 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col bg-background p-6 sm:p-8 transition-colors duration-300 hover:bg-secondary/60 md:p-10"
            >
              <div className={`h-1 w-10 rounded-full ${accentBar[post.accent]}`} />
              <p className="mt-5 sm:mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-warmgrey">
                {post.category} · {post.readingTime}
              </p>
              <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold leading-snug tracking-tight">
                {post.title}
              </h2>
              <p className="mt-3 sm:mt-4 flex-1 text-sm leading-relaxed text-warmgrey">
                {post.excerpt}
              </p>
              <p className="mt-6 sm:mt-8 text-sm font-semibold underline decoration-accent decoration-2 underline-offset-8">
                Read the note
              </p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 sm:px-8 md:px-12 py-10 md:flex-row md:items-center">
          <p className="text-sm font-extrabold tracking-[0.18em]">STAPLE</p>
          <div className="flex flex-wrap gap-5 text-xs font-medium text-warmgrey">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <Link to="/omega-3" className="hover:text-foreground">
              Omega-3
            </Link>
            <Link to="/magnesium" className="hover:text-foreground">
              Magnesium
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
