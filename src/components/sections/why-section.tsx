import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { WHY } from '@/config/site';

export function WhySection() {
  return (
    <section id="why" className="container-page py-[clamp(64px,8vw,120px)]">
      <div className="grid gap-[clamp(28px,5vw,80px)] lg:grid-cols-[1fr_1.2fr]">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(36px,4.6vw,64px)] font-normal leading-[1.04] tracking-[-0.03em]">
            {WHY.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="mb-10 max-w-[52ch] text-[clamp(18px,1.6vw,22px)] leading-[1.55]">{WHY.intro}</p>
          <h3 className="mb-4 text-[15px] font-medium text-ink-muted">
            {WHY.listTitle}
          </h3>
          <ul className="mb-10 border-t border-[var(--color-border-mid)]">
            {WHY.found.map((line) => (
              <li
                key={line}
                className="border-b border-[var(--color-border-hairline)] py-4 text-[17px] leading-[1.5] text-ink-soft"
              >
                {line}
              </li>
            ))}
          </ul>
          <p className="max-w-[52ch] font-display text-[clamp(22px,2vw,28px)] leading-[1.3]">{WHY.close}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
