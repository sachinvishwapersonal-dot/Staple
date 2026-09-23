'use client';

import Image from 'next/image';
import { Menu, Clock, ShoppingBag, ChevronDown, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/hooks/use-cart';
import { useScrollState } from '@/hooks/use-scroll-state';
import { useHydrated } from '@/hooks/use-hydrated';
import { cn } from '@/lib/utils';

const FORMULATIONS = [
  { label: 'Daily Omega-3', href: '#products' },
  { label: 'Night Magnesium+', href: '#products' },
  { label: 'The AM/PM Daily System', href: '#products' },
  { label: 'Twin Packs', href: '#products' },
];

const ROUTINES = [
  { label: 'Daily Focus & Heart Health', href: '#products' },
  { label: 'Sleep & Recovery', href: '#products' },
  { label: 'Batch Traceability', href: '#verify' },
];

interface SiteHeaderProps {
  onOpenMenu: () => void;
}

export function SiteHeader({ onOpenMenu }: SiteHeaderProps) {
  const scrolled = useScrollState(16);
  const hydrated = useHydrated();
  const count = useCartStore((state) => state.items.reduce((sum, line) => sum + line.qty, 0));
  const openDrawer = useCartStore((state) => state.openDrawer);

  return (
    <header
      className={cn(
        'sticky top-0 z-[100] border-b border-[var(--color-border-hairline)] backdrop-blur-[14px] transition-[background,border-color,box-shadow] duration-[260ms]',
        scrolled
          ? 'bg-white/95 shadow-[0_8px_24px_rgba(29,29,27,0.045)]'
          : 'bg-white',
      )}
    >
      <div
        className={cn(
          'container-page flex items-center justify-between gap-6 transition-[height] duration-[260ms] ease-[cubic-bezier(0.22,0.68,0,1.2)]',
          scrolled ? 'h-16' : 'h-[78px]',
        )}
      >
        <a href="#top" className="inline-flex items-center leading-none" aria-label="Staple Wellness Home">
          <Image
            src="/assets/logo-mark.png"
            alt="Staple Wellness"
            width={956}
            height={238}
            priority
            className="h-[27px] w-auto"
          />
        </a>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            <li className="group relative">
              <a
                href="#products"
                className="inline-flex items-center gap-1.5 px-3.5 py-7 text-[13px] font-semibold uppercase tracking-[0.05em] text-ink-soft transition-colors group-hover:text-ink group-hover:underline group-hover:decoration-[1.5px] group-hover:underline-offset-[7px]"
              >
                Formulations
                <ChevronDown className="h-3 w-3 opacity-60" aria-hidden />
              </a>
              <div className="invisible absolute left-1/2 top-full grid w-[min(860px,92vw)] -translate-x-1/2 translate-y-2.5 grid-cols-[1fr_1fr_1.2fr] gap-7 rounded-[18px] border border-[var(--color-border-hairline)] bg-surface p-6 opacity-0 shadow-[0_24px_60px_rgba(29,29,27,0.12)] transition-all duration-[260ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div>
                  <p className="mb-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                    By product
                  </p>
                  <ul>
                    {FORMULATIONS.map((item) => (
                      <li key={item.label} className="mb-2.5">
                        <a
                          href={item.href}
                          className="text-sm text-ink-soft hover:text-ink hover:underline hover:underline-offset-[3px]"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                    By routine
                  </p>
                  <ul>
                    {ROUTINES.map((item) => (
                      <li key={item.label} className="mb-2.5">
                        <a
                          href={item.href}
                          className="text-sm text-ink-soft hover:text-ink hover:underline hover:underline-offset-[3px]"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#products"
                  className="block overflow-hidden rounded-xl bg-subtle"
                >
                  <Image
                    src="/assets/product-duo.png"
                    alt="Staple Omega-3 and Magnesium bottles together"
                    width={400}
                    height={160}
                    className="h-40 w-full object-cover"
                  />
                  <span className="flex items-center gap-2 px-3.5 py-3 text-[13px] font-semibold">
                    The 2-SKU AM/PM System
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </a>
              </div>
            </li>
            <li>
              <a
                href="#science"
                className="inline-flex items-center px-3.5 py-7 text-[13px] font-semibold uppercase tracking-[0.05em] text-ink-soft transition-colors hover:text-ink hover:underline hover:decoration-[1.5px] hover:underline-offset-[7px]"
              >
                Science
              </a>
            </li>
            <li>
              <a
                href="#verify"
                className="inline-flex items-center px-3.5 py-7 text-[13px] font-semibold uppercase tracking-[0.05em] text-ink-soft transition-colors hover:text-ink hover:underline hover:decoration-[1.5px] hover:underline-offset-[7px]"
              >
                Traceability
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="inline-flex items-center px-3.5 py-7 text-[13px] font-semibold uppercase tracking-[0.05em] text-ink-soft transition-colors hover:text-ink hover:underline hover:decoration-[1.5px] hover:underline-offset-[7px]"
              >
                Our Standards
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="#reserve"
            aria-label="Reserve Batch 01"
            className="hidden h-11 w-11 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-subtle hover:text-ink sm:flex"
          >
            <Clock className="h-[19px] w-[19px]" aria-hidden />
          </a>
          <button
            type="button"
            onClick={openDrawer}
            aria-label="Open your reservation"
            aria-haspopup="dialog"
            className="relative flex h-11 w-11 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-subtle hover:text-ink"
          >
            <ShoppingBag className="h-[19px] w-[19px]" aria-hidden />
            <span className="absolute right-0.5 top-1 min-w-[17px] rounded-[9px] bg-ink px-1 text-center font-mono text-[9px] font-bold leading-[17px] text-white">
              {hydrated ? count : 0}
            </span>
          </button>
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          >
            <Menu className="h-[19px] w-[19px]" aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}
