'use client';

import Image from 'next/image';
import { Menu } from 'lucide-react';
import { NAV_LINKS } from '@/config/site';
import { useScrollState } from '@/hooks/use-scroll-state';
import { cn } from '@/lib/utils';

interface SiteHeaderProps {
  onOpenMenu: () => void;
}

export function SiteHeader({ onOpenMenu }: SiteHeaderProps) {
  const scrolled = useScrollState(16);

  return (
    <header className="sticky top-0 z-[100] -mb-[78px] px-3 pt-3 sm:px-5">
      <div
        className={cn(
          'mx-auto flex max-w-[1180px] items-center justify-between gap-4 rounded-[var(--radius-pill)] border border-[var(--color-border-hairline)] pl-6 pr-2 backdrop-blur-[16px] transition-[background,box-shadow,height] duration-[260ms]',
          scrolled
            ? 'h-[58px] bg-white/90 shadow-[0_12px_32px_-12px_rgba(29,29,27,0.18)]'
            : 'h-[66px] bg-white/70',
        )}
      >
        <a href="/" className="inline-flex items-center leading-none" aria-label="Staple Wellness home">
          <Image
            src="/assets/brand/staple-logo-header.png"
            alt="Staple Wellness"
            width={1678}
            height={459}
            priority
            className="h-[26px] w-auto"
          />
        </a>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex items-center rounded-full px-4 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-lemon-wash hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href="/#waitlist"
            className="inline-flex h-[42px] items-center rounded-full bg-ink px-5 text-[13px] font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            Join the waitlist
          </a>
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full text-ink lg:hidden"
          >
            <Menu className="h-[19px] w-[19px]" aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}
