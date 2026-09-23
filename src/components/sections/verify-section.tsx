import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { VERIFY_STEPS } from '@/config/standards';

export function VerifySection() {
  return (
    <section id="verify" className="container-page pt-[clamp(56px,6vw,88px)]">
      <ScrollReveal className="mb-12">
        <SectionHeading
          folio="05"
          eyebrow="Radical traceability"
          title={
            <>
              Check the bottle
              <br />
              you own.
            </>
          }
          sub="Every bottle carries a lot code that resolves to its signed report."
        />
      </ScrollReveal>

      <ScrollReveal>
        <ol className="grid grid-cols-1 border-t border-[var(--color-border-mid)] lg:grid-cols-3">
          {VERIFY_STEPS.map((step, index) => (
            <li
              key={step.step}
              className={`border-[var(--color-border-hairline)] py-9 lg:pr-10 ${
                index === 0 ? '' : 'lg:border-l lg:pl-10'
              } ${index < VERIFY_STEPS.length - 1 ? 'border-b lg:border-b-0' : ''}`}
            >
              <span aria-hidden className="folio mb-6 block text-ink-muted">
                Step {step.step}
              </span>
              <h4 className="mb-3 font-display text-[22px] font-normal leading-[1.15]">{step.title}</h4>
              <p className="mb-3.5 max-w-[38ch] text-[15px] leading-[1.65] text-ink-soft">{step.body}</p>
              {step.codes && (
                <p className="m-0 flex flex-wrap gap-1.5">
                  {step.codes.map((code) => (
                    <span
                      key={code}
                      className="inline-flex items-center rounded-md bg-canvas-deep px-2.5 py-[6px] font-mono text-[11px] tracking-[0.1em] text-ink"
                    >
                      {code}
                    </span>
                  ))}
                </p>
              )}
              {step.meta && (
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                  {step.meta}
                </p>
              )}
            </li>
          ))}
        </ol>
      </ScrollReveal>

      <p className="mt-9 max-w-[84ch] border-t border-[var(--color-border-hairline)] pt-6 font-mono text-[11px] leading-[1.8] tracking-[0.04em] text-ink-muted">
        Batch 01 is in production and its reports publish when independent testing completes. Reserve below
        and the lot codes are sent to you with the release notice.
      </p>
    </section>
  );
}
