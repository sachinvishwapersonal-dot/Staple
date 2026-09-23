import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CANVAS = '245,245,220';

const HERO_STATS = [
  { value: '1,000mg', label: 'Active EPA+DHA · rTG form' },
  { value: '300mg', label: 'Elemental Mg · 100% bisglycinate' },
  { value: '3.4×', label: 'Absorption vs ethyl ester' },
];

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[clamp(480px,72svh,760px)] items-center overflow-hidden bg-canvas"
    >
      <Image
        src="/assets/product-hero.png"
        alt="Staple Wellness bottle photographed so the printed label is legible"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-[center_42%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(to top, rgb(${CANVAS}) 0%, rgba(${CANVAS},0.55) 13%, rgba(${CANVAS},0) 34%), linear-gradient(96deg, rgb(${CANVAS}) 0%, rgba(${CANVAS},0.97) 30%, rgba(${CANVAS},0.86) 48%, rgba(${CANVAS},0.5) 64%, rgba(${CANVAS},0) 82%)`,
        }}
      />

      <span className="absolute right-[max(20px,calc((100%-1280px)/2+20px))] top-[clamp(20px,4vw,34px)] z-[3] flex items-center gap-2.5 rounded-[var(--radius-pill)] border border-[var(--color-border-hairline)] bg-white/90 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft backdrop-blur-[8px]">
        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" aria-hidden />
        Batch 01 Specification
      </span>

      <div className="container-page relative z-[2] py-[clamp(48px,6vw,84px)]">
        <div className="max-w-[640px]">
          <p className="mb-7 flex items-center gap-4">
            <span className="folio text-ink-muted">00</span>
            <span className="h-px w-8 bg-[var(--color-border-mid)]" aria-hidden />
            <span className="eyebrow">Evidence-backed supplementation in India</span>
          </p>
          <h1
            id="hero-title"
            className="mb-6 font-display text-[clamp(44px,6vw,84px)] font-normal leading-[1.03] tracking-[-0.015em]"
          >
            The science of feeling
            <br />
            normal again.
          </h1>
          <p className="mb-8 max-w-[48ch] text-[clamp(16px,1.3vw,18px)] leading-[1.62] text-ink-soft">
            1,000mg active rTG Omega-3 each morning. 300mg chelated Magnesium Bisglycinate each night.
            Documented down to the milligram.
          </p>
          <div className="mb-11 flex flex-wrap gap-3.5">
            <Button href="#reserve" variant="dark">
              Reserve Batch 01
              <ArrowRight className="h-[15px] w-[15px]" aria-hidden />
            </Button>
            <Button href="#science" variant="ghost">
              Read the formulation
            </Button>
          </div>
          <dl className="m-0 flex flex-wrap border-t border-[var(--color-border-mid)] pt-8">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.value}
                className="border-l border-[var(--color-border-hairline)] pr-[clamp(24px,3vw,44px)] pl-[clamp(24px,3vw,44px)] first:border-l-0 first:pl-0"
              >
                <dt className="mb-2 font-display text-[clamp(26px,2.4vw,34px)] font-normal leading-none tracking-[-0.02em]">
                  {stat.value}
                </dt>
                <dd className="m-0 max-w-[19ch] font-mono text-[11px] uppercase leading-[1.5] tracking-[0.09em] text-ink-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
