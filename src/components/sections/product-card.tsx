'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Chip } from '@/components/ui/chip';
import { MAGNESIUM_IMAGE, OMEGA_IMAGE } from '@/config/products';
import { useCartStore } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';
import type { ProductSKU } from '@/types/product';

interface ProductCardProps {
  product: ProductSKU;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const isAm = product.circadianWindow === 'AM';
  const isPm = product.circadianWindow === 'PM';
  const isDuo = product.circadianWindow === 'ALL_DAY';

  const mediaBg = isAm ? 'bg-lemon-wash' : isPm ? 'bg-pink-wash' : 'bg-subtle';
  const badgeTone = isAm ? 'lemon' : isPm ? 'sage' : 'ink';

  return (
    <article className="group flex w-[calc((100%-60px)/4)] flex-none snap-start flex-col rounded-[var(--radius-card)] border border-[var(--color-border-hairline)] bg-surface p-3.5 transition-colors duration-300 hover:border-[var(--color-border-strong)] max-[1100px]:w-[calc((100%-40px)/3)] max-[640px]:w-[calc((100%-20px)/2)]">
      <div
        className={cn(
          'relative mb-[18px] flex aspect-square items-center justify-center overflow-hidden rounded-[10px]',
          isDuo
            ? 'bg-[linear-gradient(120deg,var(--color-lemon-wash),var(--color-pink-wash))]'
            : mediaBg,
        )}
      >
        {product.badge && (
          <Badge tone={badgeTone} className="absolute left-3 top-3 z-10">
            {product.badge}
          </Badge>
        )}
        {isDuo ? (
          <>
            <Image
              src={OMEGA_IMAGE}
              alt="Daily Omega-3"
              width={300}
              height={300}
              className="h-[80%] w-[55%] object-contain"
            />
            <Image
              src={MAGNESIUM_IMAGE}
              alt="Night Magnesium+"
              width={300}
              height={300}
              className="h-[80%] w-[55%] object-contain"
            />
          </>
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="h-[85%] w-[85%] object-contain"
          />
        )}
      </div>

      <h3 className="mb-1 font-display text-[21px] font-normal">{product.name}</h3>
      <p className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
        {product.subtitle}
      </p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {product.chips.map((chip) => (
          <Chip key={chip.label} variant={chip.variant}>
            {chip.label}
          </Chip>
        ))}
      </div>
      <div className="mb-3.5 mt-auto flex items-baseline justify-between border-t border-[var(--color-border-hairline)] pt-3.5">
        <span className="font-display text-[21px] font-normal tracking-[-0.01em] text-ink">Coming soon</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">Batch 01</span>
      </div>
      <button
        type="button"
        onClick={() =>
          addItem({ id: product.id, name: product.name, price: product.price, image: product.image })
        }
        className="h-[46px] w-full rounded-[var(--radius-pill)] border-[1.5px] border-[var(--color-border-mid)] text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
      >
        Reserve this
      </button>
    </article>
  );
}
