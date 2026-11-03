'use client';

import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = usePrefersReducedMotion();

  // Hold on the first frame when the visitor asks for reduced motion.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (reduced) video.pause();
    else void video.play().catch(() => {});
  }, [reduced]);

  return (
    <video
      ref={ref}
      src="/assets/video/Final_hero_section_video.mp4"
      className="absolute inset-0 h-full w-full object-cover"
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    />
  );
}
