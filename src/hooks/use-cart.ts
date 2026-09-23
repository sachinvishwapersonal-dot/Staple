'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartLine, UpsellEligibility } from '@/types/reservation';
import { BUNDLE_LINE, BUNDLE_NAME, BUNDLE_PRICE } from '@/config/commerce';
import { computeUpsell } from '@/lib/upsell';

interface CartState {
  isOpen: boolean;
  items: CartLine[];
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (product: { id: string; name: string; price: number; image: string }) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, delta: number) => void;
  swapForBundle: () => void;
  clearCart: () => void;
  totalCount: () => number;
  subtotal: () => number;
  getUpsellEligibility: () => UpsellEligibility;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      isOpen: false,
      items: [],

      openDrawer: () => set({ isOpen: true }),
      closeDrawer: () => set({ isOpen: false }),

      addItem: (product) => {
        const items = get().items.map((line) => ({ ...line }));
        const existing = items.find((line) => line.name === product.name);
        if (existing) {
          existing.qty += 1;
        } else {
          items.push({ ...product, qty: 1 });
        }
        set({ items, isOpen: true });
      },

      removeItem: (index) => {
        set({ items: get().items.filter((_, i) => i !== index) });
      },

      updateQuantity: (index, delta) => {
        const items = get().items.map((line) => ({ ...line }));
        const line = items[index];
        if (!line) return;
        line.qty += delta;
        if (line.qty <= 0) items.splice(index, 1);
        set({ items });
      },

      swapForBundle: () => set({ items: [{ ...BUNDLE_LINE }] }),

      clearCart: () => set({ items: [] }),

      totalCount: () => get().items.reduce((sum, line) => sum + line.qty, 0),
      subtotal: () => get().items.reduce((sum, line) => sum + line.price * line.qty, 0),

      getUpsellEligibility: () => computeUpsell(get().items),
    }),
    {
      name: 'staple_reservation_storage',
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

export { BUNDLE_NAME, BUNDLE_PRICE };
