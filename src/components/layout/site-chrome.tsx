'use client';

import { useState } from 'react';
import { SiteHeader } from './site-header';
import { MobileNav } from './mobile-nav';
import { ReservationDrawer } from '@/components/drawer/reservation-drawer';

export function SiteChrome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SiteHeader onOpenMenu={() => setMenuOpen(true)} />
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ReservationDrawer />
    </>
  );
}
