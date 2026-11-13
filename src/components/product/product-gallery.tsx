'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/config/products';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: GalleryImage[];
  /** Tone wash behind the main image, e.g. `bg-lemon-wash`. */
  wash: string;
}

/** Main image with a row of thumbnails underneath. */
export function ProductGallery({ images, wash }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className={cn('relative aspect-[4/4.6] overflow-hidden', wash)}>
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              'object-cover transition-opacity duration-500',
              image.position,
              index === active ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
        <span className="absolute left-4 top-4 rounded-full bg-ink px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.04em] text-white">
          In development
        </span>
      </div>

      <div className="mt-3 flex items-start justify-between gap-4">
        <div role="tablist" aria-label="Product images" className="flex gap-2.5">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show image ${index + 1}: ${image.alt}`}
              onClick={() => setActive(index)}
              className={cn(
                'relative h-[68px] w-[68px] overflow-hidden border-2 transition-colors sm:h-[84px] sm:w-[84px]',
                index === active ? 'border-ink' : 'border-transparent opacity-70 hover:opacity-100',
              )}
            >
              <Image src={image.src} alt="" fill sizes="84px" className={cn('object-cover', image.position)} />
            </button>
          ))}
        </div>
        <p className="max-w-[24ch] pt-1 text-right text-[13px] leading-[1.45] text-ink-muted">{current.caption}</p>
      </div>
    </div>
  );
}
