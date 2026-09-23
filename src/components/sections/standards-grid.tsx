import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { STANDARDS } from '@/config/standards';

const FEATURE_STATS = [
  { value: '≥ 90%', label: 'Omega-3 purity' },
  { value: '< 0.001 ppm', label: 'Pb · Cd · Hg' },
  { value: 'Every lot', label: 'No pooled sampling' },
];

export function StandardsGrid() {
  const feature = STANDARDS.find((standard) => standard.featured)!;
  const rest = STANDARDS.filter((standard) => !standard.featured);

  return (
    <section id="about" className="container-page pt-[clamp(56px,6vw,88px)]">
      <ScrollReveal className="mb-12">
        <SectionHeading
          folio="06"
          eyebrow="Our commitments"
          title={
            <>
              Three standards we
              <br />
              publish against.
            </>
          }
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr]">
        <ScrollReveal className="relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border border-ink bg-ink px-9 py-[38px] text-white">
          <div>
            <div className="mb-[22px] font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-lemon">
              {feature.index}
            </div>
            <h4 className="mb-3.5 font-display text-[clamp(28px,2.6vw,38px)] font-normal leading-[1.18]">
              {feature.title}
            </h4>
            <p className="max-w-[44ch] text-[15px] leading-[1.65] text-white/70">{feature.body}</p>
          </div>
          <div className="mt-[34px] flex flex-wrap gap-[34px] border-t border-white/14 pt-[22px]">
            {FEATURE_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="mb-1.5 font-display text-2xl font-normal leading-none">{stat.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/55">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-rows-2 gap-6">
          {rest.map((standard) => (
            <ScrollReveal
              key={standard.index}
              className="flex flex-col rounded-[var(--radius-card)] border border-[var(--color-border-hairline)] bg-surface px-9 py-[38px]"
            >
              <div className="mb-[22px] font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-sage">
                {standard.index}
              </div>
              <h4 className="mb-3.5 font-display text-2xl font-normal leading-[1.18]">
                {standard.title}
              </h4>
              <p className="text-[15px] leading-[1.65] text-ink-soft">{standard.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
