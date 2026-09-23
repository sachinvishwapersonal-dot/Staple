import type { ReactNode } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import type { SpecRow } from '@/types/product';

interface SplitSectionProps {
  id: string;
  folio: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  specs: SpecRow[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
  imageAlt: string;
  caption: string;
  tone: 'am' | 'pm';
  flip?: boolean;
}

export function SplitSection({
  id,
  folio,
  eyebrow,
  title,
  body,
  specs,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  caption,
  tone,
  flip = false,
}: SplitSectionProps) {
  return (
    <section id={id} className="container-page">
      <div className="grid grid-cols-1 items-center gap-10 pt-[clamp(56px,6vw,88px)] lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className={flip ? 'lg:order-2' : undefined}>
          <div className="mb-5 flex items-baseline gap-4">
            <span className="folio text-ink-muted">{folio}</span>
            <span className="h-px w-8 bg-[var(--color-border-mid)]" aria-hidden />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="mb-5 font-display text-[clamp(32px,3.6vw,52px)] font-normal leading-[1.05] tracking-[-0.03em]">
            {title}
          </h2>
          <p className="max-w-[46ch] text-[17px] leading-[1.65] text-ink-soft">{body}</p>

          <dl className="mt-9 border-t border-[var(--color-border-mid)]">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--color-border-hairline)] py-3.5"
              >
                <dt className="text-sm text-ink-soft">{spec.label}</dt>
                <dd className="text-right font-mono text-sm font-medium tracking-[-0.01em] text-ink">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button href={primaryCta.href} variant="dark">
              {primaryCta.label}
              <ArrowRight className="h-[15px] w-[15px]" aria-hidden />
            </Button>
            <Button href={secondaryCta.href} variant="ghost">
              {secondaryCta.label}
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal
          className={`group relative flex items-center justify-center overflow-hidden rounded-[20px] border border-[var(--color-border-hairline)] transition-colors duration-300 hover:border-[var(--color-border-strong)] ${
            tone === 'am' ? 'bg-lemon-wash' : 'bg-pink-wash'
          } ${flip ? 'lg:order-1' : ''}`}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={600}
            height={750}
            className="aspect-[4/5] w-full object-contain p-10"
          />
          <span className="absolute bottom-4 left-4 rounded-[var(--radius-pill)] border border-[var(--color-border-hairline)] bg-white/90 px-4 py-[7px] font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft backdrop-blur-[6px]">
            {caption}
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
}
