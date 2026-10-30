import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GUIDES } from '@/config/site';
import { cn } from '@/lib/utils';

export function GuidesSection() {
  return (
    <section id="guides" className="container-page pb-[clamp(64px,8vw,120px)]">
      <ScrollReveal className="mb-[clamp(28px,4vw,48px)] flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <h2 className="max-w-[18ch] font-display text-[clamp(36px,4.6vw,64px)] font-normal leading-[1.04] tracking-[-0.03em]">
          {GUIDES.title}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {GUIDES.items.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.05} className="h-full">
            <article
              className={cn(
                'flex h-full flex-col rounded-[24px] p-[clamp(24px,3vw,40px)]',
                index % 3 === 0 ? 'bg-lemon-wash' : index % 3 === 1 ? 'bg-pink-wash' : 'bg-subtle',
              )}
            >
              <h3 className="mb-3 font-display text-[clamp(24px,2.4vw,32px)] font-normal leading-[1.12]">
                {item.title}
              </h3>
              <p className="max-w-[48ch] text-[16px] leading-[1.65] text-ink-soft">{item.body}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
