import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BadgeTone = 'ink' | 'lemon' | 'sage' | 'pink';

const tones: Record<BadgeTone, string> = {
  ink: 'bg-ink text-white',
  lemon: 'bg-lemon text-ink',
  sage: 'bg-sage text-white',
  pink: 'bg-pink text-ink',
};

interface BadgeProps {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}

export function Badge({ tone = 'ink', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-pill)] px-[11px] py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.1em]',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
