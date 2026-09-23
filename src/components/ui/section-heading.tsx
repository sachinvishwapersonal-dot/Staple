import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  /** Magazine folio marker, e.g. "03". */
  folio?: string;
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  folio,
  eyebrow,
  title,
  sub,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={cn(centered && 'text-center', className)}>
      <div className={cn('mb-5 flex items-baseline gap-4', centered && 'justify-center')}>
        {folio && <span className="folio text-ink-muted">{folio}</span>}
        <span className="h-px w-8 bg-[var(--color-border-mid)]" aria-hidden />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="font-display text-[clamp(32px,3.6vw,54px)] font-normal leading-[1.06] tracking-[-0.03em]">
        {title}
      </h2>
      {sub && (
        <p className={cn('mt-4 max-w-[52ch] text-base leading-[1.65] text-ink-soft', centered && 'mx-auto')}>
          {sub}
        </p>
      )}
    </div>
  );
}
