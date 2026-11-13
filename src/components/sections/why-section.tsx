import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { AccentTitle } from '@/components/ui/accent-title';
import { WHY } from '@/config/site';

export function WhySection() {
  return (
    <section id="why" className="container-page py-[clamp(64px,8vw,120px)]">
      <div className="grid gap-[clamp(28px,5vw,80px)] lg:grid-cols-[1fr_1.2fr]">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(36px,4.6vw,64px)] font-medium leading-[1.04] tracking-[-0.03em]">
            <AccentTitle text={WHY.title} accent={WHY.accent} />
          </h2>
        </ScrollReveal>

        <ScrollReveal className="dash flex flex-col gap-6 pt-2">
          {WHY.body.map((paragraph) => (
            <p key={paragraph} className="max-w-[52ch] text-[clamp(18px,1.6vw,22px)] leading-[1.55]">
              {paragraph}
            </p>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
