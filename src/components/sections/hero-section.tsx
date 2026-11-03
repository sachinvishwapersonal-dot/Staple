import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HERO } from '@/config/site';
import { HeroVideo } from './hero-video';

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[clamp(580px,92svh,900px)] items-end overflow-hidden bg-ink text-white"
    >
      <HeroVideo />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.3)_45%,rgba(255,255,255,0)_75%)]"
      />

      <div className="container-page relative z-[1] flex flex-col items-center pb-[clamp(48px,7vw,104px)] pt-[clamp(140px,16vw,200px)] text-center text-ink">
        <h1
          id="hero-title"
          className="mb-6 max-w-[16ch] font-display text-[clamp(38px,6.4vw,92px)] font-normal leading-[1.02] tracking-[-0.035em] [text-shadow:0_0_28px_rgba(255,255,255,0.7)]"
        >
          {HERO.title}
        </h1>
        <p className="mb-9 max-w-[46ch] text-[clamp(16px,1.4vw,19px)] font-medium leading-[1.6] text-ink [text-shadow:0_0_14px_rgba(255,255,255,0.9),0_0_4px_rgba(255,255,255,0.8)]">
          {HERO.body}
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Button href="#waitlist" variant="lemon">
            {HERO.primary}
            <ArrowRight className="h-[15px] w-[15px]" aria-hidden />
          </Button>
          <Button href="#guides" variant="ghost">
            {HERO.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
