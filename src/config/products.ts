import type { ProductSKU, RangeTile } from '@/types/product';

export const OMEGA_IMAGE = '/assets/omega3_transparent_cutout.png';
export const MAGNESIUM_IMAGE = '/assets/magnesium_transparent_cutout.png';
export const DUO_IMAGE = '/assets/product-duo.png';
export const OMEGA_CAPSULE = '/assets/omega3_capsule.png';
export const MAGNESIUM_CAPSULE = '/assets/magnesium_capsule.png';

export const PRODUCTS: ProductSKU[] = [
  {
    id: 'stp-omega3-30',
    name: 'Daily Omega-3',
    slug: 'omega-3',
    circadianWindow: 'AM',
    subtitle: 'Heart · Brain · Joints',
    routineTiming: '08:00 · Take with breakfast',
    activeYield: '1,000mg active EPA+DHA · rTG form',
    price: 1850,
    servings: 30,
    badge: 'AM',
    chips: [
      { label: 'rTG form' },
      { label: '550 EPA / 450 DHA' },
      { label: '30 servings' },
    ],
    image: OMEGA_IMAGE,
    description:
      'Wild Peruvian anchovy oil in re-esterified triglyceride form for 3.4× superior bio-availability.',
    lotCodeReserved: 'LOT-STP-2601-A',
    specs: [
      { label: 'Active EPA', value: '550 mg / serving' },
      { label: 'Active DHA', value: '450 mg / serving' },
      { label: 'Total active Omega-3', value: '1,000 mg (≥90% purity)' },
      { label: 'Triglyceride form', value: 'rTG (not EE)' },
      { label: 'Sourcing', value: 'Wild Peruvian anchovy' },
    ],
  },
  {
    id: 'stp-magnesium-30',
    name: 'Night Magnesium+',
    slug: 'magnesium',
    circadianWindow: 'PM',
    subtitle: 'Sleep · Restore · Recharge',
    routineTiming: '22:30 · Take 45 min before sleep',
    activeYield: '300mg elemental Mg · 100% bisglycinate chelate',
    price: 1450,
    servings: 30,
    badge: 'PM',
    chips: [
      { label: 'Bisglycinate' },
      { label: '0mg oxide' },
      { label: '30 servings' },
    ],
    image: MAGNESIUM_IMAGE,
    description:
      '100% chelated Magnesium Bisglycinate that crosses intestinal walls intact with zero digestive upset.',
    lotCodeReserved: 'LOT-STP-2602-B',
    specs: [
      { label: 'Elemental Magnesium', value: '300 mg / serving' },
      { label: 'Form', value: '100% bisglycinate chelate' },
      { label: 'Oxide fillers', value: '0 mg' },
      { label: 'Heavy metals', value: '< 0.001 ppm Pb · Cd · Hg' },
      { label: 'Third-party COA', value: 'Published by lot code' },
    ],
  },
  {
    id: 'stp-bundle-ampm',
    name: 'The AM/PM Daily System',
    slug: 'am-pm-system',
    circadianWindow: 'ALL_DAY',
    subtitle: 'Bundle · Both SKUs',
    routineTiming: 'Full 24-Hour Circadian Protocol',
    activeYield: 'Complete AM Focus & PM Recovery',
    price: 2950,
    originalPrice: 3300,
    servings: 30,
    badge: 'Daily System',
    chips: [
      { label: 'Full 24h routine', variant: 'sage' },
      { label: 'Both lot codes' },
    ],
    image: DUO_IMAGE,
    description:
      'The complete circadian protocol: Daily Omega-3 at sunrise, Night Magnesium+ before sleep.',
    lotCodeReserved: 'LOT-STP-2601-A & 2602-B',
    specs: [
      { label: 'Morning Protocol', value: '1,000mg active rTG Omega-3' },
      { label: 'Evening Protocol', value: '300mg chelated Magnesium' },
      { label: 'Total Assayed Servings', value: '30 AM + 30 PM' },
      { label: 'Circadian Protocol', value: 'Complete AM + PM routine' },
    ],
  },
  {
    id: 'stp-omega3-twin',
    name: 'Daily Omega-3 · Twin',
    slug: 'omega-3-twin',
    circadianWindow: 'AM',
    subtitle: 'Twin Pack: 2-month supply',
    routineTiming: '08:00 · Morning routine',
    activeYield: '2,000mg total monthly yield',
    price: 3330,
    originalPrice: 3700,
    servings: 60,
    badge: 'AM',
    chips: [
      { label: '60 servings' },
      { label: '2-month supply', variant: 'sage' },
    ],
    image: OMEGA_IMAGE,
    description:
      'Double volume of Daily Omega-3 for sustained cardiovascular and cognitive support.',
    lotCodeReserved: 'LOT-STP-2601-A',
    specs: [
      { label: 'Supply Duration', value: '60 days (2 bottles)' },
      { label: 'Active EPA+DHA', value: '1,000mg / serving' },
      { label: 'Packaging', value: 'Dual amber glass bottles' },
    ],
  },
  {
    id: 'stp-magnesium-twin',
    name: 'Night Magnesium+ · Twin',
    slug: 'magnesium-twin',
    circadianWindow: 'PM',
    subtitle: 'Twin Pack: 2-month supply',
    routineTiming: '22:30 · Night routine',
    activeYield: '600mg total monthly yield',
    price: 2610,
    originalPrice: 2900,
    servings: 60,
    badge: 'PM',
    chips: [
      { label: '60 servings' },
      { label: '2-month supply', variant: 'sage' },
    ],
    image: MAGNESIUM_IMAGE,
    description:
      'Double volume of Night Magnesium+ for long-term sleep architecture enhancement.',
    lotCodeReserved: 'LOT-STP-2602-B',
    specs: [
      { label: 'Supply Duration', value: '60 days (2 bottles)' },
      { label: 'Elemental Yield', value: '300mg / serving' },
      { label: 'Packaging', value: 'Dual amber glass bottles' },
    ],
  },
];

export const RANGE_TILES: RangeTile[] = [
  {
    id: 'tile-omega3',
    name: 'Daily Omega-3',
    tag: '1,000mg active · AM',
    priceLabel: 'Coming soon',
    image: OMEGA_IMAGE,
    variant: 'am',
  },
  {
    id: 'tile-magnesium',
    name: 'Night Magnesium+',
    tag: '300mg elemental · PM',
    priceLabel: 'Coming soon',
    image: MAGNESIUM_IMAGE,
    variant: 'pm',
  },
  {
    id: 'tile-bundle',
    name: 'The AM/PM Daily System',
    tag: 'Complete 24h routine',
    priceLabel: 'Coming soon',
    image: OMEGA_IMAGE,
    secondaryImage: MAGNESIUM_IMAGE,
    variant: 'duo',
  },
];

export const PRODUCT_IMAGES: Record<string, string> = Object.fromEntries(
  PRODUCTS.map((product) => [product.name, product.image]),
);
