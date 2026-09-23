import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { RANGE_TILES } from '@/config/products';
import { cn } from '@/lib/utils';

export function RangeEssentials() {
  return (
    <section id="range" className="container-page pt-[clamp(56px,6vw,88px)]">
      <ScrollReveal className="mb-12">
        <SectionHeading
          folio="07"
          eyebrow="The range"
          title="The full range"
          sub="Two formulations. One daily rhythm. We would rather make two things properly than six things loosely."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.15fr]">
        {RANGE_TILES.map((tile) => (
          <ScrollReveal
            key={tile.id}
            className={cn(
              'flex flex-col items-center rounded-[var(--radius-card)] border border-[var(--color-border-hairline)] p-7 text-center transition-colors duration-300 hover:border-[var(--color-border-strong)]',
              tile.variant === 'am' && 'bg-lemon-wash',
              tile.variant === 'pm' && 'bg-pink-wash',
              tile.variant === 'duo' && 'bg-subtle sm:col-span-2 lg:col-span-1',
            )}
          >
            <div className="mb-4 flex h-[180px] w-full items-center justify-center gap-1.5">
              <Image
                src={tile.image}
                alt={tile.name}
                width={220}
                height={tile.variant === 'duo' ? 160 : 180}
                className={cn(
                  'object-contain',
                  tile.variant === 'duo' ? 'h-[160px] w-[47%]' : 'max-h-[180px] w-auto',
                )}
              />
              {tile.secondaryImage && (
                <Image
                  src={tile.secondaryImage}
                  alt=""
                  width={220}
                  height={160}
                  className="h-[160px] w-[47%] object-contain"
                />
              )}
            </div>
            <h4 className="font-display text-lg font-normal">{tile.name}</h4>
            <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
              {tile.tag}
            </div>
            <span className="mt-[18px] inline-flex items-center gap-2 border-b border-ink pb-0.5 text-[13px] font-semibold">
              {tile.priceLabel}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
