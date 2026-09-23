import type { Variants, Transition } from 'framer-motion';

export const EASE_STD = [0.25, 0.1, 0.25, 1] as const;

export const springPhysics: Transition = {
  type: 'spring',
  damping: 24,
  stiffness: 260,
  mass: 0.8,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_STD },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const drawerSlide: Variants = {
  closed: { x: '100%' },
  open: {
    x: 0,
    transition: { type: 'spring', damping: 28, stiffness: 280 },
  },
};

export const scrimFade: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.25 } },
};
