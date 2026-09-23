import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';

const RITUALS = [
  {
    tone: 'am' as const,
    image: '/assets/omega3_transparent_cutout.png',
    alt: 'Staple Daily Omega-3 morning routine',
    badge: '08:00 · AM',
    time: 'Take with breakfast',
    name: 'Daily Omega-3',
    dose: '1,000mg active EPA+DHA · rTG form · Wild anchovy',
  },
  {
    tone: 'pm' as const,
    image: '/assets/magnesium_transparent_cutout.png',
    alt: 'Staple Night Magnesium+ evening routine',
    badge: '22:30 · PM',
    time: 'Take 45 min before sleep',
    name: 'Night Magnesium+',
    dose: '300mg elemental Mg · 100% bisglycinate chelate',
  },
];

export function RitualSection() {
  return (
    <section id="ritual" className="container-page pt-[clamp(56px,6vw,88px)]">
      <ScrollReveal className="mb-14">
        <SectionHeading
          align="center"
          folio="02"
          eyebrow="The daily system"
          title={
            <span className="text-[clamp(36px,4.2vw,60px)]">Morning and night.</span>
          }
          sub="Two formulations, one circadian habit. Each dose timed to its biochemical window."
        />
      </ScrollReveal>

      <ScrollReveal
        aria-hidden
        className="mx-auto mb-10 flex max-w-[620px] items-center gap-[18px] font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted"
      >
        <span className="inline-flex items-center gap-2.5 text-ink-soft">
          <span className="h-[9px] w-[9px] rounded-full border border-ink/20 bg-lemon" />
          08:00 · with food
        </span>
        <span className="h-px flex-1 bg-[repeating-linear-gradient(90deg,var(--color-border-mid)_0_6px,transparent_6px_12px)]" />
        <span className="inline-flex items-center gap-2.5 text-ink-soft">
          <span className="h-[9px] w-[9px] rounded-full border border-ink/20 bg-pink" />
          22:30 · before sleep
        </span>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {RITUALS.map((ritual) => (
          <ScrollReveal
            key={ritual.name}
            className="group relative flex aspect-[5/6] items-end overflow-hidden rounded-[20px] border border-[var(--color-border-hairline)] bg-subtle transition-colors duration-300 hover:border-[var(--color-border-strong)]"
          >
            <Image
              src={ritual.image}
              alt={ritual.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-10"
            />
            <span
              className={`absolute right-6 top-6 z-[2] rounded-[var(--radius-pill)] px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] ${
                ritual.tone === 'am' ? 'bg-lemon text-ink' : 'bg-pink text-ink'
              }`}
            >
              {ritual.badge}
            </span>
            <div className="relative z-[1] w-full bg-[linear-gradient(to_top,rgba(29,29,27,0.74)_0%,transparent_100%)] px-8 pb-9 pt-8">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
                {ritual.time}
              </div>
              <div className="mb-1 font-display text-[32px] font-normal text-white">{ritual.name}</div>
              <div className="font-mono text-[13px] tracking-[0.06em] text-white/80">{ritual.dose}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
