import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'dark' | 'ghost' | 'lemon';
type Size = 'md' | 'sm';

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-pill)] font-body text-sm font-semibold tracking-[0.02em] whitespace-nowrap transition-[background,border-color,color,transform] duration-[260ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  dark: 'border-[1.5px] border-ink bg-ink text-white hover:border-sage hover:bg-sage',
  ghost:
    'border-[1.5px] border-[var(--color-border-mid)] bg-transparent text-ink hover:border-ink hover:bg-subtle',
  lemon:
    'border-[1.5px] border-lemon bg-lemon text-ink hover:border-lemon-hover hover:bg-lemon-hover',
};

const sizes: Record<Size, string> = {
  md: 'h-[52px] px-[30px]',
  sm: 'h-[42px] px-[22px] text-[13px]',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonProps | LinkProps) {
  const { variant = 'dark', size = 'md', className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof (rest as LinkProps).href === 'string') {
    const { href, ...anchorRest } = rest as LinkProps;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
