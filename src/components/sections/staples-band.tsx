import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { cn } from '@/lib/utils';

/*
 * Two photographic tiles, one per product, in the product colours:
 * Each tile shows the final bottle visual for that product (pack concept).
 */
const TILES = [
  {
    name: 'Omega-3',
    href: '/products/omega-3',
    image: '/assets/products/final/omega3-bottle-final.jpg',
    position: 'object-[50%_45%]',
    note: 'EPA + DHA, stated per serving',
    text: 'text-ink',
    scrim: 'bg-[linear-gradient(180deg,rgba(255,214,0,0)_45%,rgba(255,214,0,0.85)_100%)]',
  },
  {
    name: 'Magnesium',
    href: '/products/magnesium',
    image: '/assets/products/final/magnesium-bottle-final.jpg',
    position: 'object-[50%_45%]',
    note: 'Elemental magnesium, stated per serving',
    text: 'text-white',
    scrim: 'bg-[linear-gradient(180deg,rgba(20,43,111,0)_50%,rgba(20,43,111,0.8)_100%)]',
  },
] as const;

export function StaplesBand() {
  return (
    <section aria-label="The two staples" className="px-3 pt-3 sm:px-5 lg:px-8">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {TILES.map((tile, index) => (
          <ScrollReveal key={tile.name} delay={index * 0.08}>
            <Link
              href={tile.href}
              className="group relative isolate flex aspect-[4/3] items-end overflow-hidden md:aspect-[5/4]"
            >
              <Image
                src={tile.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={cn('-z-[2] object-cover transition-transform duration-700 group-hover:scale-[1.03]', tile.position)}
              />
              <div aria-hidden className={cn('absolute inset-0 -z-[1]', tile.scrim)} />
              <div className={cn('flex w-full items-end justify-between gap-4 p-[clamp(20px,3vw,36px)]', tile.text)}>
                <div>
                  <p className="mb-1 text-sm font-medium opacity-80">In development</p>
                  <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium leading-none tracking-[-0.03em]">
                    {tile.name}
                  </h2>
                  <p className="mt-2 text-[15px] font-medium">{tile.note}</p>
                </div>
                <ArrowRight
                  className="h-7 w-7 flex-none transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
