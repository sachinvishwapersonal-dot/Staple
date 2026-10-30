import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { LABEL_DECLARATIONS, PRODUCT_LIST, getProduct } from '@/config/products';
import { PRODUCTS, SITE, STATUS } from '@/config/site';
import { cn } from '@/lib/utils';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCT_LIST.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};

  const title = `${product.name} | ${SITE.name}`;
  return {
    title,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title, description: product.summary, url: `/products/${product.slug}`, images: [product.image] },
  };
}

const SECTION_TITLE = 'font-display text-[clamp(32px,4vw,56px)] font-normal leading-[1.04] tracking-[-0.03em]';

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const other = PRODUCT_LIST.find((item) => item.slug !== product.slug);
  const wash = product.wash === 'lemon' ? 'bg-lemon-wash' : 'bg-pink-wash';

  return (
    <>
      <section className="container-page pb-[clamp(56px,7vw,104px)] pt-[clamp(112px,12vw,148px)]">
        <Link
          href="/#products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All products
        </Link>

        <div className="grid grid-cols-1 items-start gap-[clamp(32px,5vw,80px)] lg:grid-cols-[1.05fr_1fr]">
          <ScrollReveal>
            <div className={cn('relative aspect-[4/4.4] overflow-hidden rounded-[28px]', wash)}>
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className={cn('object-cover', product.position)}
              />
            </div>
            <p className="mt-4 text-sm text-ink-muted">{PRODUCTS.caption}</p>
          </ScrollReveal>

          <ScrollReveal className="lg:sticky lg:top-[112px]">
            <h1 className="mb-6 font-display text-[clamp(44px,6vw,88px)] font-normal leading-[1] tracking-[-0.035em]">
              {product.name}
            </h1>
            <p className="mb-10 max-w-[46ch] text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-ink-soft">
              {product.summary}
            </p>

            <h2 className="mb-3 font-body text-[15px] font-medium tracking-normal text-ink-muted">
              Label will state
            </h2>
            <ul className="mb-10 border-t border-[var(--color-border-mid)]">
              {product.labelWillState.map((line) => (
                <li
                  key={line}
                  className="border-b border-[var(--color-border-hairline)] py-3.5 text-[16px] text-ink"
                >
                  {line}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3.5">
              <Button href="/#waitlist" variant="dark">
                Join the waitlist
                <ArrowRight className="h-[15px] w-[15px]" aria-hidden />
              </Button>
              <Button href="#label" variant="ghost">
                See the label
              </Button>
            </div>
            <p className="mt-5 text-sm text-ink-muted">{PRODUCTS.intro} No payment is taken.</p>
          </ScrollReveal>
        </div>
      </section>

      <section id="label" className="bg-surface py-[clamp(64px,8vw,120px)]">
        <div className="container-page grid gap-[clamp(28px,5vw,80px)] lg:grid-cols-[1fr_1.4fr]">
          <ScrollReveal>
            <h2 className={SECTION_TITLE}>The label, as text</h2>
            <p className="mt-6 max-w-[40ch] text-[16px] leading-[1.65] text-ink-soft">
              The full label goes here before orders open, so you can read it before you buy. Nothing is filled in
              yet because the formulation is not final.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">{product.name} label fields</caption>
              <thead>
                <tr className="border-b border-[var(--color-border-mid)] text-sm text-ink-muted">
                  <th scope="col" className="pb-3 font-medium">
                    Field
                  </th>
                  <th scope="col" className="pb-3 text-right font-medium">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.label.map((row) => (
                  <tr key={row.field} className="border-b border-[var(--color-border-hairline)]">
                    <th scope="row" className="py-4 pr-4 text-[16px] font-normal text-ink">
                      {row.field}
                    </th>
                    <td className="py-4 text-right text-[15px] text-ink-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="mb-4 mt-12 font-body text-[15px] font-medium tracking-normal text-ink-muted">
              Also printed on the pack
            </h3>
            <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {LABEL_DECLARATIONS.map((line) => (
                <li
                  key={line}
                  className="border-b border-[var(--color-border-hairline)] py-3 text-[15px] text-ink-soft"
                >
                  {line}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-page py-[clamp(64px,8vw,120px)]">
        <ScrollReveal className="mb-[clamp(28px,4vw,48px)]">
          <h2 className={SECTION_TITLE}>What to compare</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {product.compare.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.05} className="h-full">
              <article
                className={cn(
                  'flex h-full flex-col rounded-[24px] p-[clamp(24px,3vw,40px)]',
                  index === 0 ? wash : 'bg-subtle',
                )}
              >
                <h3 className="mb-3 font-display text-[clamp(24px,2.4vw,32px)] font-normal leading-[1.12]">
                  {item.title}
                </h3>
                <p className="max-w-[48ch] text-[16px] leading-[1.65] text-ink-soft">{item.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container-page pb-[clamp(64px,8vw,120px)]">
        <div className="grid gap-[clamp(28px,5vw,80px)] lg:grid-cols-[1fr_1.2fr]">
          <ScrollReveal>
            <h2 className={SECTION_TITLE}>Before orders open</h2>
            <p className="mt-6 max-w-[40ch] text-[16px] leading-[1.65] text-ink-soft">
              Each batch gets an independent lab certificate of analysis, linked here by batch number.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <ul className="border-t border-[var(--color-border-mid)]">
              {STATUS.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-6 border-b border-[var(--color-border-hairline)] py-5"
                >
                  <span className="text-[17px]">{item.label}</span>
                  <span
                    className={
                      item.state === 'In progress' ? 'text-[15px] font-medium text-ink' : 'text-[15px] text-ink-muted'
                    }
                  >
                    {item.state}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-page pb-[clamp(64px,8vw,120px)]">
        <div className="grid gap-[clamp(28px,5vw,80px)] lg:grid-cols-[1fr_1.2fr]">
          <ScrollReveal>
            <h2 className={SECTION_TITLE}>Questions</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="border-t border-[var(--color-border-mid)]">
              {product.faq.map((item) => (
                <details key={item.q} className="group border-b border-[var(--color-border-hairline)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-medium [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <Plus
                      className="h-[18px] w-[18px] flex-none text-ink-muted transition-transform duration-300 group-open:rotate-45"
                      aria-hidden
                    />
                  </summary>
                  <p className="max-w-[56ch] pb-6 text-[16px] leading-[1.65] text-ink-soft">{item.a}</p>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {other && (
        <section className="container-page pb-[clamp(64px,8vw,120px)]">
          <ScrollReveal>
            <Link
              href={`/products/${other.slug}`}
              className="group flex items-center justify-between gap-6 border-y border-[var(--color-border-mid)] py-[clamp(24px,3vw,40px)]"
            >
              <span className="font-display text-[clamp(28px,3.4vw,48px)] leading-[1.05] tracking-[-0.02em]">
                Next: {other.name}
              </span>
              <ArrowRight
                className="h-7 w-7 flex-none text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
                aria-hidden
              />
            </Link>
          </ScrollReveal>
        </section>
      )}
    </>
  );
}
