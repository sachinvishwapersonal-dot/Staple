import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { AccentTitle } from '@/components/ui/accent-title';
import { PRODUCTS } from '@/config/site';
import { TONE } from '@/lib/tones';
import { cn } from '@/lib/utils';

export function ProductsSection() {
  return (
    <section id="products" className="container-page py-[clamp(64px,8vw,120px)]">
      <ScrollReveal className="mb-[clamp(28px,4vw,48px)] flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <h2 className="font-display text-[clamp(36px,4.6vw,64px)] font-medium leading-[1.04] tracking-[-0.03em]">
          <AccentTitle text={PRODUCTS.title} accent={PRODUCTS.accent} />
        </h2>
        <p className="text-[15px] text-ink-soft">{PRODUCTS.intro}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PRODUCTS.items.map((product, index) => (
          <ScrollReveal key={product.name} delay={index * 0.08} className="h-full">
            <article
              className={cn(
                'group relative flex h-full flex-col overflow-hidden border border-[var(--color-border-hairline)] bg-surface transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(20,43,111,0.25)]',
                // Product-colour bar along the top edge.
                "before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-[6px] before:content-['']",
                TONE[product.tone].bar,
              )}
            >
              <div className={cn('relative aspect-[4/3.4] overflow-hidden', TONE[product.tone].wash)}>
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={cn('object-cover transition-transform duration-500 group-hover:scale-[1.02]', product.position)}
                />
              </div>
              <div className="flex flex-1 flex-col p-[clamp(22px,3vw,36px)]">
                <h3 className="mb-5 flex items-center justify-between gap-4 font-display text-[clamp(28px,3vw,40px)] font-medium leading-[1.05] tracking-[-0.02em]">
                  <Link href={`/products/${product.slug}`} className="after:absolute after:inset-0 after:content-['']">
                    {product.name}
                  </Link>
                  <ArrowRight
                    className="h-6 w-6 flex-none text-ink-soft transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </h3>
                <p className="mb-3 text-[15px] font-medium text-ink-muted">
                  Label will state
                </p>
                <ul className="border-t border-[var(--color-border-hairline)]">
                  {product.labelWillState.map((line) => (
                    <li
                      key={line}
                      className="border-b border-[var(--color-border-hairline)] py-3 text-[15px] text-ink-soft"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <p className="mt-5 text-sm text-ink-muted">{PRODUCTS.caption}</p>
    </section>
  );
}
