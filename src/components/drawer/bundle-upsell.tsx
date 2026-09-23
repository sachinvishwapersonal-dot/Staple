'use client';

interface BundleUpsellProps {
  missingSKU: string;
  savings?: number;
  onSwap: () => void;
}

export function BundleUpsell({ missingSKU, onSwap }: BundleUpsellProps) {
  return (
    <div className="mb-3 rounded-[14px] border border-dashed border-[var(--color-border-mid)] bg-lemon-wash p-4">
      <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
        Complete the rhythm
      </p>
      <p className="mb-3.5 text-sm font-semibold leading-[1.45]">
        Hold {missingSKU} as the AM/PM System for full circadian AM/PM coverage.
      </p>
      <button
        type="button"
        onClick={onSwap}
        className="inline-flex h-[42px] items-center justify-center rounded-[var(--radius-pill)] border-[1.5px] border-lemon bg-lemon px-[22px] text-[13px] font-semibold text-ink transition-colors hover:border-lemon-hover hover:bg-lemon-hover"
      >
        Switch to the bundle
      </button>
    </div>
  );
}
