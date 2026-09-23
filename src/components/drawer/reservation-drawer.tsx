'use client';

import { useMemo } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useCartStore } from '@/hooks/use-cart';
import { computeUpsell } from '@/lib/upsell';
import { DrawerLineItem } from './drawer-line-item';
import { BundleUpsell } from './bundle-upsell';

export function ReservationDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const items = useCartStore((state) => state.items);
  const closeDrawer = useCartStore((state) => state.closeDrawer);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const swapForBundle = useCartStore((state) => state.swapForBundle);
  const upsell = useMemo(() => computeUpsell(items), [items]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeDrawer()}>
      <Dialog.Portal forceMount>
        <AnimatePresence>
          {isOpen && (
            <>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-[200] bg-ink/45 backdrop-blur-[4px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount aria-describedby="drawer-note">
                <motion.aside
                  className="fixed right-0 top-0 z-[201] flex h-full w-[min(420px,100%)] flex-col bg-canvas"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                >
                  <div className="flex items-center justify-between border-b border-[var(--color-border-hairline)] bg-surface px-6 py-[22px]">
                    <Dialog.Title className="font-display text-[22px] font-semibold">
                      Your reservation
                    </Dialog.Title>
                    <Dialog.Close
                      aria-label="Close reservation"
                      className="flex h-11 w-11 items-center justify-center rounded-full text-ink-soft hover:bg-subtle hover:text-ink"
                    >
                      <X className="h-[19px] w-[19px]" aria-hidden />
                    </Dialog.Close>
                  </div>

                  <div className="flex-1 overflow-y-auto px-6 py-5">
                    {items.length === 0 ? (
                      <p className="px-0 py-[60px] text-center text-[15px] text-ink-muted">
                        Nothing held yet.
                        <br />
                        Reserve Omega-3 or Magnesium from the range above.
                      </p>
                    ) : (
                      <>
                        {items.map((line, index) => (
                          <DrawerLineItem
                            key={line.name}
                            line={line}
                            index={index}
                            onIncrease={(i) => updateQuantity(i, 1)}
                            onDecrease={(i) => updateQuantity(i, -1)}
                            onRemove={removeItem}
                          />
                        ))}
                        {upsell.eligible && upsell.missingSKU && (
                          <BundleUpsell
                            missingSKU={upsell.missingSKU}
                            savings={upsell.savings}
                            onSwap={swapForBundle}
                          />
                        )}
                      </>
                    )}
                  </div>

                  <div className="border-t border-[var(--color-border-hairline)] bg-surface px-6 py-[22px]">
                    <div className="mb-4 flex justify-between text-[17px] font-semibold">
                      <span>Batch 01 allocation</span>
                      <span aria-live="polite" className="font-mono text-xs uppercase tracking-[0.08em] text-sage font-medium">Coming soon</span>
                    </div>
                    <p id="drawer-note" className="mb-4 font-mono text-[11px] tracking-[0.04em] text-ink-muted">
                      Pricing and release details will be provided with Batch 01 test results.
                    </p>
                    <Dialog.Close className="inline-flex h-[52px] w-full items-center justify-center rounded-[var(--radius-pill)] border-[1.5px] border-ink bg-ink px-7 text-sm font-semibold text-white transition-colors hover:border-sage hover:bg-sage">
                      Complete reservation
                    </Dialog.Close>
                  </div>
                </motion.aside>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
