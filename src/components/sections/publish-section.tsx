import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { PUBLISH } from '@/config/site';

export function PublishSection() {
  return (
    <section id="publish" className="bg-night py-[clamp(56px,7vw,104px)] text-white">
      <div className="container-page">
        <ScrollReveal className="mb-[clamp(32px,4vw,56px)] max-w-[22ch]">
          <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal leading-[1.06] tracking-[-0.03em]">
            {PUBLISH.title}
          </h2>
        </ScrollReveal>

        <ol className="grid grid-cols-1 border-t border-[var(--color-night-line)] sm:grid-cols-2 lg:grid-cols-4">
          {PUBLISH.items.map((item, index) => (
            <li
              key={item.title}
              className="border-b border-[var(--color-night-line)] py-8 sm:pr-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <ScrollReveal delay={index * 0.06}>
                <h3 className="mb-3 font-display text-[24px] font-normal leading-[1.15]">{item.title}</h3>
                <p className="text-[15px] leading-[1.65] text-white/65">{item.body}</p>
              </ScrollReveal>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm leading-[1.7] text-white/55">
          {PUBLISH.note}
        </p>
      </div>
    </section>
  );
}
