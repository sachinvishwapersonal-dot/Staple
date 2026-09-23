'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { cn } from '@/lib/utils';

const ROUTINES = [
  { id: 'The AM/PM Daily System', label: 'AM/PM System' },
  { id: 'Daily Omega-3', label: 'Omega-3 only' },
  { id: 'Night Magnesium+', label: 'Magnesium only' },
];

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
  phone: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ReserveSection() {
  const [routine, setRoutine] = useState(ROUTINES[0].id);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (_values: FormValues) => {
    setSubmitted(true);
  };

  return (
    <section
      id="reserve"
      aria-labelledby="reserve-title"
      className="mt-[clamp(56px,6vw,88px)] border-y border-[var(--color-border-hairline)] bg-subtle py-[clamp(48px,5vw,80px)]"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <ScrollReveal>
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="folio text-ink-muted">08</span>
              <span className="h-px w-8 bg-[var(--color-border-mid)]" aria-hidden />
              <span className="eyebrow">Batch 01</span>
              <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-border-mid)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" aria-hidden />
                Coming very soon
              </span>
            </div>
            <h2
              id="reserve-title"
              className="mb-5 font-display text-[clamp(34px,4vw,58px)] font-normal leading-[1.04] tracking-[-0.03em]"
            >
              Reserve Batch 01.
            </h2>
            <p className="max-w-[46ch] text-[17px] leading-[1.65] text-ink-soft">
              A fixed production run, assayed bottle by bottle. Reserve now and get the lot codes with the
              release notice.
            </p>
          </ScrollReveal>

          <ScrollReveal className="rounded-[20px] border border-[var(--color-border-mid)] bg-surface p-[30px] shadow-[0_8px_24px_rgba(29,29,27,0.06)]">
            <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-[var(--color-border-hairline)] pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                Batch 01 reservation
              </span>
              <span className="folio text-ink-muted">Form&nbsp;01</span>
            </div>

            {submitted ? (
              <div className="flex items-start gap-3 rounded-xl border border-sage/28 bg-sage/8 p-4 text-sm leading-[1.55] text-ink-soft">
                <Check className="mt-px h-[18px] w-[18px] flex-shrink-0 text-sage" aria-hidden />
                <span>
                  <b className="font-semibold text-ink">Reserved.</b> We will email the release notice and
                  your lot codes when Batch 01 clears testing.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                  Which routine are you reserving?
                </p>
                <div role="group" aria-label="Which routine are you reserving?" className="mb-5 flex flex-wrap gap-2">
                  {ROUTINES.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={routine === option.id}
                      onClick={() => setRoutine(option.id)}
                      className={cn(
                        'min-h-[46px] flex-1 rounded-[100px] border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors',
                        routine === option.id
                          ? 'border-ink bg-ink text-white'
                          : 'border-[var(--color-border-mid)] text-ink-soft hover:border-ink hover:text-ink',
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="rEmail"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft"
                  >
                    Email address
                  </label>
                  <input
                    id="rEmail"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="h-[50px] w-full rounded-xl border border-[var(--color-border-mid)] bg-canvas px-4 text-[15px] text-ink transition-colors placeholder:text-ink-muted hover:border-ink-muted focus:border-ink focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ink"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1.5 text-xs text-red-700">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="rPhone"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-soft"
                  >
                    Mobile number <span aria-hidden>(optional)</span>
                  </label>
                  <input
                    id="rPhone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="For dispatch updates only"
                    className="h-[50px] w-full rounded-xl border border-[var(--color-border-mid)] bg-canvas px-4 text-[15px] text-ink transition-colors placeholder:text-ink-muted hover:border-ink-muted focus:border-ink focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ink"
                    {...register('phone')}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-[52px] w-full items-center justify-center rounded-[var(--radius-pill)] border-[1.5px] border-ink bg-ink px-7 text-sm font-semibold text-white transition-colors hover:border-sage hover:bg-sage"
                >
                  Reserve my batch
                </button>
                <p className="mt-4 font-mono text-[10px] leading-[1.7] tracking-[0.04em] text-ink-muted">
                  No charge now. A reservation holds your place in the run and is cancelled if you do not
                  confirm it at release.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
