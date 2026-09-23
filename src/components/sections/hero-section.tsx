import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CANVAS = '245,245,220';

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[clamp(520px,78svh,820px)] items-end overflow-hidden bg-canvas"
    >
      <Image
        src="/assets/product-hero.png"
        alt="Staple Wellness Omega-3 and Magnesium+ bottles"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-[70%_center]"
      />
      {/* Soft floor fade only — keeps the bottles fully visible */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(to top, rgb(${CANVAS}) 0%, rgba(${CANVAS},0.45) 10%, rgba(${CANVAS},0) 28%), linear-gradient(105deg, rgba(${CANVAS},0.94) 0%, rgba(${CANVAS},0.78) 28%, rgba(${CANVAS},0.28) 48%, rgba(${CANVAS},0) 62%)`,
        }}
      />

      <span className="absolute right-[max(20px,calc((100%-1280px)/2+20px))] top-[clamp(20px,4vw,34px)] z-[3] flex items-center gap-2.5 rounded-[var(--radius-pill)] border border-[var(--color-border-hairline)] bg-white/90 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft backdrop-blur-[8px]">
        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" aria-hidden />
        Batch 01 · Coming soon
      </span>

      <div className="container-page relative z-[2] pb-[clamp(56px,8vw,100px)] pt-[clamp(100px,14vw,160px)]">
        <div className="max-w-[560px]">
          <p className="mb-5 flex items-center gap-4">
            <span className="folio text-ink-muted">00</span>
            <span className="h-px w-8 bg-[var(--color-border-mid)]" aria-hidden />
            <span className="eyebrow">Clinical transparency · India</span>
          </p>
          <h1
            id="hero-title"
            className="mb-5 font-display text-[clamp(48px,6.5vw,88px)] font-semibold leading-[1.02] tracking-[-0.03em]"
          >
            The science of
            <br />
            feeling normal again.
          </h1>
          <p className="mb-8 max-w-[36ch] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-ink-soft">
            Two formulations. One daily rhythm. Documented to the milligram.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Button href="#reserve" variant="dark">
              Reserve Batch 01
              <ArrowRight className="h-[15px] w-[15px]" aria-hidden />
            </Button>
            <Button href="#products" variant="ghost">
              See the range
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
