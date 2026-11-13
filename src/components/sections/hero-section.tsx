'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HERO } from '@/config/site';
import { cn } from '@/lib/utils';

/*
 * Hero carousel: the headline stays put while the photograph behind it changes
 * every five seconds, Omega-3 on the yellow set, then Magnesium on the moon set.
 * Slides crossfade; with reduced motion on they swap without the fade.
 * On phones the Magnesium bottle sits below the buttons instead of behind the text.
 * Omega-3 photo: Unsplash (see public/assets/stock/CREDITS.md).
 */
const INTERVAL = 5000;

type Slide = {
  id: string;
  src: string;
  alt: string;
  position: string;
  bg: string;
  scrim: string;
  /** Phone-only image placed in the lower part of the hero, below the buttons. */
  mobileSrc?: string;
};

const SLIDES: Slide[] = [
  {
    id: 'omega-3',
    src: '/assets/stock/softgel-on-yellow.jpg',
    alt: 'An omega-3 softgel on a yellow set',
    position: 'object-[62%_70%]',
    bg: 'bg-lemon',
    scrim:
      'bg-[linear-gradient(90deg,rgba(255,214,0,0.92)_0%,rgba(255,214,0,0.7)_38%,rgba(255,214,0,0)_68%)] max-md:bg-[linear-gradient(180deg,rgba(255,214,0,0.92)_0%,rgba(255,214,0,0.75)_55%,rgba(255,214,0,0.2)_100%)]',
  },
  {
    id: 'magnesium',
    src: '/assets/hero/magnesium-hero-wide.jpg',
    alt: 'The Staple Magnesium bottle on a grey-blue set',
    position: 'object-[80%_50%]',
    bg: 'bg-[#C3C6D2]',
    scrim:
      'bg-[linear-gradient(90deg,rgba(195,198,210,0.85)_0%,rgba(195,198,210,0.5)_36%,rgba(195,198,210,0)_56%)]',
    mobileSrc: '/assets/hero/magnesium-hero-mobile.jpg',
  },
];

// "The science of feeling normal again." → "The science of" / "feeling" + accent.
const lead = HERO.title.slice(0, HERO.title.lastIndexOf(HERO.accent)).trim();
const line1 = lead.slice(0, lead.lastIndexOf(' '));
const line2 = lead.slice(lead.lastIndexOf(' ') + 1);

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      className={cn(
        'relative isolate overflow-hidden transition-colors duration-700',
        SLIDES[index].bg,
      )}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 -z-[1] transition-opacity duration-[900ms] ease-out',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              'object-cover transition-transform duration-[6000ms] ease-out',
              slide.position,
              slide.mobileSrc && 'max-md:hidden',
              i === index ? 'scale-100' : 'scale-[1.04]',
            )}
          />
          <div
            aria-hidden
            className={cn('absolute inset-0', slide.scrim, slide.mobileSrc && 'max-md:hidden')}
          />
          {slide.mobileSrc && (
            <div className="absolute inset-x-0 bottom-0 h-[44%] md:hidden">
              <Image
                src={slide.mobileSrc}
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-[50%_100%]"
              />
            </div>
          )}
        </div>
      ))}

      <div className="container-page flex min-h-[clamp(560px,80svh,820px)] flex-col justify-center py-[clamp(72px,9vw,120px)] text-ink max-md:min-h-[clamp(720px,92svh,860px)] max-md:justify-start max-md:pt-16">
        {/* Editorial stack: two sans lines, the last phrase in the italic serif,
            set optically larger so both faces share one cap height. */}
        <h1
          id="hero-title"
          className="mb-[clamp(28px,3.4vw,44px)] font-display text-[clamp(44px,7vw,108px)] font-medium leading-[0.9] tracking-[-0.052em] [font-kerning:normal] [text-rendering:optimizeLegibility]"
        >
          <span className="block">{line1}</span>
          <span className="block">
            {line2}{' '}
            <span className="accent inline-block pr-[0.06em] text-[1.1em] leading-[0.82] tracking-[-0.035em]">
              {HERO.accent}
            </span>
          </span>
        </h1>
        <div className="flex flex-wrap gap-3">
          <Button
            href="#waitlist"
            variant="dark"
            className="h-[56px] px-8 text-[16px] tracking-[-0.005em]"
          >
            {HERO.primary}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button
            href="#guides"
            variant="outline"
            className="h-[56px] border-2 px-8 text-[16px] tracking-[-0.005em]"
          >
            {HERO.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
