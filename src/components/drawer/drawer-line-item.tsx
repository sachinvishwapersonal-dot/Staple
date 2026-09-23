'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import type { CartLine } from '@/types/reservation';

interface DrawerLineItemProps {
  line: CartLine;
  index: number;
  onIncrease: (index: number) => void;
  onDecrease: (index: number) => void;
  onRemove: (index: number) => void;
}

export function DrawerLineItem({ line, index, onIncrease, onDecrease, onRemove }: DrawerLineItemProps) {
  return (
    <div className="mb-3 flex items-center gap-3.5 rounded-[14px] border border-[var(--color-border-hairline)] bg-surface p-3">
      <Image
        src={line.image}
        alt=""
        width={60}
        height={60}
        className="h-[60px] w-[60px] rounded-[10px] bg-subtle object-contain p-1"
      />
      <div className="flex-1">
        <h4 className="mb-0.5 text-sm font-semibold">{line.name}</h4>
        <p className="text-xs text-ink-muted">Batch 01 · Coming soon</p>
      </div>
      <div className="inline-flex items-center gap-0.5 rounded-[var(--radius-pill)] border border-[var(--color-border-mid)] p-0.5">
        <button
          type="button"
          onClick={() => onDecrease(index)}
          aria-label={`Decrease ${line.name} quantity`}
          className="flex h-[26px] w-[26px] items-center justify-center rounded-full text-ink-soft hover:bg-subtle hover:text-ink"
        >
          −
        </button>
        <span className="min-w-5 text-center font-mono text-xs">{line.qty}</span>
        <button
          type="button"
          onClick={() => onIncrease(index)}
          aria-label={`Increase ${line.name} quantity`}
          className="flex h-[26px] w-[26px] items-center justify-center rounded-full text-ink-soft hover:bg-subtle hover:text-ink"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={() => onRemove(index)}
        aria-label={`Remove ${line.name} from reservation`}
        className="self-start p-2 text-ink-muted hover:text-ink"
      >
        <X className="h-3.5 w-3.5" aria-hidden />
      </button>
    </div>
  );
}
