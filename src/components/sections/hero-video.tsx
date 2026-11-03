'use client';

import { useEffect, useRef } from 'react';

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  // Some browsers ignore the autoPlay attribute until play() is called.
  useEffect(() => {
    void ref.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src="/assets/video/Final_hero_section_video.mp4"
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
