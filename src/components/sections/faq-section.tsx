import { Plus } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FAQ } from '@/config/site';

export function FaqSection() {
  return (
    <section id="faq" className="container-page pb-[clamp(64px,8vw,120px)]">
      <div className="grid gap-[clamp(28px,5vw,80px)] lg:grid-cols-[1fr_1.2fr]">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(36px,4.6vw,64px)] font-normal leading-[1.04] tracking-[-0.03em]">
            {FAQ.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border-t border-[var(--color-border-mid)]">
            {FAQ.items.map((item) => (
              <details key={item.q} className="group border-b border-[var(--color-border-hairline)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-medium [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus
                    className="h-[18px] w-[18px] flex-none text-ink-muted transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="max-w-[56ch] pb-6 text-[16px] leading-[1.65] text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
