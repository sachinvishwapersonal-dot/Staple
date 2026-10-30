import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { STATUS } from '@/config/site';

export function StatusSection() {
  return (
    <section id="status" className="container-page pb-[clamp(64px,8vw,120px)]">
      <div className="grid gap-[clamp(28px,5vw,80px)] lg:grid-cols-[1fr_1.2fr]">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(36px,4.6vw,64px)] font-normal leading-[1.04] tracking-[-0.03em]">
            {STATUS.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <ul className="border-t border-[var(--color-border-mid)]">
            {STATUS.items.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between gap-6 border-b border-[var(--color-border-hairline)] py-5"
              >
                <span className="text-[17px]">{item.label}</span>
                <span
                  className={
                    item.state === 'In progress' ? 'text-[15px] font-medium text-ink' : 'text-[15px] text-ink-muted'
                  }
                >
                  {item.state}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.65] text-ink-soft">{STATUS.note}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
