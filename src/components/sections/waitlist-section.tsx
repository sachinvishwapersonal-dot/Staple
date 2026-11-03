'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { WAITLIST } from '@/config/site';
import { cn } from '@/lib/utils';

const INTERESTS = ['Omega-3', 'Magnesium', 'Both'] as const;

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
  phone: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const INPUT =
  'h-[50px] w-full rounded-xl border border-[var(--color-border-mid)] bg-surface px-4 text-[15px] text-ink transition-colors placeholder:text-ink-muted hover:border-ink-muted focus:border-ink focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ink';

export function WaitlistSection() {
  const [interest, setInterest] = useState<(typeof INTERESTS)[number]>('Both');
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
      id="waitlist"
      aria-labelledby="waitlist-title"
      className="bg-lemon-wash py-[clamp(56px,7vw,112px)]"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <ScrollReveal>
            <h2
              id="waitlist-title"
              className="mb-5 font-display text-[clamp(40px,6vw,88px)] font-normal leading-[1] tracking-[-0.035em]"
            >
              {WAITLIST.title}
            </h2>
            <p className="max-w-[44ch] text-[17px] leading-[1.65] text-ink-soft">
              {WAITLIST.body}
            </p>
          </ScrollReveal>

          <ScrollReveal className="rounded-[28px] border border-[var(--color-border-hairline)] bg-surface p-[clamp(24px,3vw,40px)]">
            {submitted ? (
              <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border-mid)] bg-lemon-wash p-4 text-sm leading-[1.55] text-ink-soft">
                <Check className="mt-px h-[18px] w-[18px] flex-shrink-0 text-ink" aria-hidden />
                <span>
                  <b className="font-semibold text-ink">{WAITLIST.done}</b>
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <p className="mb-3 text-sm font-medium text-ink-soft">
                  {WAITLIST.interestLabel}
                </p>
                <div role="group" aria-label={WAITLIST.interestLabel} className="mb-5 flex flex-wrap gap-2">
                  {INTERESTS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={interest === option}
                      onClick={() => setInterest(option)}
                      className={cn(
                        'min-h-[46px] flex-1 rounded-[100px] border px-4 py-2 text-sm font-medium transition-colors',
                        interest === option
                          ? 'border-ink bg-ink text-white'
                          : 'border-[var(--color-border-mid)] text-ink-soft hover:border-ink hover:text-ink',
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="wEmail"
                    className="mb-2 block text-sm font-medium text-ink-soft"
                  >
                    Email
                  </label>
                  <input
                    id="wEmail"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className={INPUT}
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
                    htmlFor="wPhone"
                    className="mb-2 block text-sm font-medium text-ink-soft"
                  >
                    Mobile <span aria-hidden>(optional)</span>
                  </label>
                  <input
                    id="wPhone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91"
                    className={INPUT}
                    {...register('phone')}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-[52px] w-full items-center justify-center rounded-[var(--radius-pill)] border-[1.5px] border-ink bg-ink px-7 text-sm font-semibold text-white transition-colors hover:border-ink-soft hover:bg-ink-soft"
                >
                  {WAITLIST.submit}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
