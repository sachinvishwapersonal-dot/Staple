import type { ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { blogPosts, getPost } from "../lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Note unavailable | Staple Wellness" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const title = `${post.title} | Staple Wellness`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
    };
  },
  notFoundComponent: NoteNotFound,
  component: BlogPostPage,
});

const accentBar: Record<string, string> = {
  lemon: "bg-lemon",
  lavender: "bg-lavender",
  neutral: "bg-foreground",
};

function Chrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between border-b border-border px-5 py-5 sm:px-8 md:px-12 md:py-6">
        <Link to="/" className="text-xl font-extrabold tracking-tighter">
          STAPLE
        </Link>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.16em] text-warmgrey sm:gap-6 sm:text-[11px] sm:tracking-[0.2em]">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <Link
            to="/blog"
            className="text-foreground underline decoration-accent decoration-2 underline-offset-8"
          >
            Knowledge base
          </Link>
        </div>
      </header>
      {children}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-4 px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:flex-row md:items-center">
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
            <Link to="/blog" className="hover:text-foreground">
              All notes
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NoteNotFound() {
  return (
    <Chrome>
      <section className="mx-auto max-w-3xl px-5 sm:px-8 md:px-12 py-16 sm:py-24">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">This note is unavailable.</h1>
        <p className="mt-4 text-warmgrey">
          The note you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
        >
          Browse the knowledge base
        </Link>
      </section>
    </Chrome>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <Chrome>
      <article className="mx-auto max-w-3xl px-5 sm:px-8 md:px-12 pb-16 sm:pb-20 pt-10 sm:pt-16 md:pt-24">
        <div className={`h-1 w-12 rounded-full ${accentBar[post.accent]}`} />
        <p className="mt-5 sm:mt-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-warmgrey">
          {post.category} · {post.date} · {post.readingTime}
        </p>
        <h1 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          {post.title}
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg font-light leading-relaxed text-foreground">
          {post.excerpt}
        </p>
        <div className="mt-10 sm:mt-12 space-y-6 border-t border-border pt-8 sm:pt-10">
          {post.body.map((para) => (
            <p key={para.slice(0, 32)} className="text-sm sm:text-base leading-[1.85] text-warmgrey">
              {para}
            </p>
          ))}
        </div>
      </article>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 md:px-12 py-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warmgrey">
            More notes
          </p>
          <ul className="mt-6 sm:mt-8 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: other.slug }}
                  className="block bg-background p-5 sm:p-6 transition-colors hover:bg-secondary/70"
                >
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-warmgrey">
                    {other.category}
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-sm sm:text-base font-bold tracking-tight">
                    {other.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Chrome>
  );
}
