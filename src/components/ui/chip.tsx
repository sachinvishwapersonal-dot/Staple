import { cn } from '@/lib/utils';
import type { ChipVariant } from '@/types/product';

interface ChipProps {
  variant?: ChipVariant;
  className?: string;
  children: React.ReactNode;
}

export function Chip({ variant = 'default', className, children }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center whitespace-nowrap rounded-[var(--radius-pill)] border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em]',
        variant === 'sage'
          ? 'border-sage/35 text-sage'
          : 'border-[var(--color-border-mid)] text-ink-soft',
        className,
      )}
    >
      {children}
    </span>
  );
}
