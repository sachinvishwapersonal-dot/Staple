'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '@/config/products';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProductCard } from './product-card';

export function ProductRail() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('article');
    const step = card ? card.clientWidth + 20 : 320;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return;
    const track = trackRef.current;
    if (!track) return;
    drag.current = { down: true, moved: false, startX: event.clientX, startLeft: track.scrollLeft };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current.down) return;
    const dx = event.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    track.scrollLeft = drag.current.startLeft - dx;
  };

  const onPointerUp = () => {
    drag.current.down = false;
  };

  const onClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section id="products" className="container-page pt-[clamp(56px,6vw,88px)]">
      <ScrollReveal className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          folio="01"
          eyebrow="Formulations"
          title="The two formulations"
          sub="Made to be taken together morning and night. Nothing else is in the range."
        />
        <a
          href="#reserve"
          className="link-rule shrink-0 pb-0.5 text-sm font-semibold hover:text-sage"
        >
          Reserve Batch 01
        </a>
      </ScrollReveal>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onClickCapture={onClickCapture}
          className="flex cursor-grab gap-5 overflow-x-auto pb-1.5 [scrollbar-width:none] [scroll-snap-type:x_mandatory] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="mt-[22px] flex justify-end gap-2.5">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous products"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-mid)] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
        >
          <ChevronLeft className="h-[17px] w-[17px]" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next products"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-mid)] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
        >
          <ChevronRight className="h-[17px] w-[17px]" aria-hidden />
        </button>
      </div>
    </section>
  );
}
