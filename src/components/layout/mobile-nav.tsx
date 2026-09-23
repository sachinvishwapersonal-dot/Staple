'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { NAV_LINKS } from '@/config/site';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const ALL_LINKS = [{ label: 'Formulations', href: '#products' }, ...NAV_LINKS];

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[190] bg-ink/45 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.nav
            aria-label="Mobile navigation"
            className="fixed right-0 top-0 z-[191] flex h-full w-[min(340px,88vw)] flex-col bg-canvas p-6 shadow-[-24px_0_60px_rgba(29,29,27,0.18)]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">Menu</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-ink-soft hover:bg-subtle hover:text-ink"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {ALL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block border-b border-[var(--color-border-hairline)] py-4 font-display text-xl text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#reserve"
              onClick={onClose}
              className="mt-8 inline-flex h-[52px] items-center justify-center rounded-[var(--radius-pill)] bg-ink px-7 text-sm font-semibold text-white"
            >
              Reserve Batch 01
            </a>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
