export type CircadianWindow = 'AM' | 'PM' | 'ALL_DAY';

export type ChipVariant = 'default' | 'sage';

export interface SpecRow {
  label: string;
  value: string;
}

export interface ProductChip {
  label: string;
  variant?: ChipVariant;
}

export interface ProductSKU {
  id: string;
  name: string;
  slug: string;
  circadianWindow: CircadianWindow;
  subtitle: string;
  routineTiming: string;
  activeYield: string;
  price: number;
  originalPrice?: number;
  servings: number;
  badge?: string;
  chips: ProductChip[];
  image: string;
  secondaryImage?: string;
  description: string;
  lotCodeReserved: string;
  specs: SpecRow[];
}

export interface RangeTile {
  id: string;
  name: string;
  tag: string;
  priceLabel: string;
  image: string;
  secondaryImage?: string;
  variant: 'am' | 'pm' | 'duo';
}
