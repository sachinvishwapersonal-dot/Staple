'use client';

import { useEffect, useRef } from 'react';

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    void ref.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src="/assets/video/hero.mp4"
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    />
  );
}
