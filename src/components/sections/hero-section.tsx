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

      <div className="container-page relative z-[1] flex justify-center pb-[clamp(48px,7vw,104px)] pt-[clamp(140px,16vw,200px)]">
        <div className="flex max-w-[720px] flex-col items-center rounded-[32px] bg-white/80 px-[clamp(24px,4vw,56px)] py-[clamp(32px,4vw,52px)] text-center text-ink shadow-[0_20px_60px_rgba(29,29,27,0.12)] backdrop-blur-md">
          <h1
            id="hero-title"
            className="mb-5 max-w-[16ch] font-display text-[clamp(36px,5.2vw,72px)] font-normal leading-[1.02] tracking-[-0.03em]"
          >
            {HERO.title}
          </h1>
          <p className="mb-8 max-w-[46ch] text-[clamp(15px,1.3vw,18px)] leading-[1.6] text-ink-soft">
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
      </div>
    </section>
  );
}
