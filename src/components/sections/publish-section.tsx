import { FileText, FlaskConical, Hash, Microscope, type LucideIcon } from 'lucide-react';
import { AccentTitle } from '@/components/ui/accent-title';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { PUBLISH } from '@/config/site';
import { cn } from '@/lib/utils';

// One thin line icon per published item, in the same order as PUBLISH.items.
const ICONS: LucideIcon[] = [Hash, FlaskConical, FileText, Microscope];

export function PublishSection() {
  return (
    <section id="publish" className="border-y border-[var(--color-border-hairline)] py-[clamp(64px,8vw,120px)]">
      <div className="container-page">
        <ScrollReveal className="mx-auto mb-[clamp(40px,5vw,72px)] max-w-[30ch] text-center">
          <h2 className="font-display text-[clamp(32px,4vw,56px)] font-medium leading-[1.06] tracking-[-0.03em]">
            <AccentTitle text={PUBLISH.title} accent={PUBLISH.accent} />
          </h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-[clamp(17px,1.5vw,20px)] font-medium leading-[1.5] text-ink-soft">
            {PUBLISH.lead}
          </p>
        </ScrollReveal>

        <ol className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PUBLISH.items.map((item, index) => {
            const Icon = ICONS[index] ?? Hash;
            return (
              <li key={item.title} className="text-center">
                <ScrollReveal delay={index * 0.06}>
                  <span
                    className={cn(
                      'mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full',
                      index % 2 === 0 ? 'bg-lemon' : 'bg-moon',
                    )}
                  >
                    <Icon className="h-[28px] w-[28px] text-ink" strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="mb-2 font-display text-[22px] font-medium leading-[1.2]">{item.title}</h3>
                  <p className="mx-auto max-w-[28ch] text-[15px] leading-[1.6] text-ink-soft">{item.body}</p>
                </ScrollReveal>
              </li>
            );
          })}
        </ol>

        <p className="mt-12 text-center text-sm leading-[1.7] text-ink-muted">{PUBLISH.note}</p>
      </div>
    </section>
  );
}
