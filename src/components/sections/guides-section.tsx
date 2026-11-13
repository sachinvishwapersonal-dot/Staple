import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { AccentTitle } from '@/components/ui/accent-title';
import { GUIDES } from '@/config/site';
import { cn } from '@/lib/utils';

// Same order as GUIDES.items: two omega-3 guides, one magnesium, one general.
// Demo photos: Unsplash (see public/assets/stock/CREDITS.md).
const GUIDE_STYLE = [
  { bg: 'bg-lemon-wash', image: '/assets/stock/softgels-on-grey.jpg' },
  { bg: 'bg-lemon-wash', image: '/assets/stock/softgels-scattered.jpg' },
  { bg: 'bg-moon-wash', image: '/assets/stock/powder-scoop.jpg' },
  { bg: 'bg-mist', image: '/assets/stock/capsule-jar-blank.jpg' },
];

export function GuidesSection() {
  return (
    <section id="guides" className="container-page pb-[clamp(64px,8vw,120px)]">
      <ScrollReveal className="mb-[clamp(28px,4vw,48px)] flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <h2 className="max-w-[18ch] font-display text-[clamp(36px,4.6vw,64px)] font-medium leading-[1.04] tracking-[-0.03em]">
          <AccentTitle text={GUIDES.title} accent={GUIDES.accent} />
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {GUIDES.items.map((item, index) => {
          const style = GUIDE_STYLE[index] ?? { bg: 'bg-mist', image: undefined };
          return (
            <ScrollReveal key={item.title} delay={index * 0.05} className="h-full">
              <article className={cn('grid h-full grid-cols-1 overflow-hidden sm:grid-cols-[1fr_0.8fr]', style.bg)}>
                <div className="dash flex flex-col p-[clamp(24px,3vw,40px)]">
                  <h3 className="mb-3 font-display text-[clamp(24px,2.4vw,32px)] font-medium leading-[1.12]">
                    {item.title}
                  </h3>
                  <p className="max-w-[48ch] text-[16px] leading-[1.65] text-ink-soft">{item.body}</p>
                </div>
                {style.image && (
                  <div className="relative min-h-[200px]">
                    <Image src={style.image} alt="" fill sizes="(max-width: 768px) 100vw, 20vw" className="object-cover" />
                  </div>
                )}
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
