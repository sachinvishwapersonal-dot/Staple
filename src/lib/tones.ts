// Product colour coding: Omega-3 is sunshine yellow, Magnesium is moon blue-grey.
// Class strings are written out in full so Tailwind can see them.

export type ProductTone = 'sun' | 'moon';

export const TONE = {
  sun: {
    solid: 'bg-lemon',
    wash: 'bg-lemon-wash',
    bar: 'before:bg-lemon',
    // Closing call-to-action band.
    band: 'bg-lemon text-ink',
    bandButton: 'dark',
  },
  moon: {
    solid: 'bg-moon',
    wash: 'bg-moon-wash',
    bar: 'before:bg-moon',
    band: 'bg-[linear-gradient(120deg,var(--color-ink)_0%,var(--color-dusk-violet)_62%,var(--color-dusk-ember)_100%)] text-white',
    bandButton: 'lemon',
  },
} as const satisfies Record<ProductTone, Record<string, string>>;
