import { DUO_IMAGE } from './products';

export const BUNDLE_NAME = 'The AM/PM Daily System';
export const BUNDLE_ID = 'stp-bundle-ampm';
export const BUNDLE_PRICE = 2950;
export const BUNDLE_WAS = 3300;
export const BUNDLE_SAVINGS = BUNDLE_WAS - BUNDLE_PRICE;

export const SINGLE_SKUS = ['Daily Omega-3', 'Night Magnesium+'] as const;

export const BUNDLE_LINE = {
  id: BUNDLE_ID,
  name: BUNDLE_NAME,
  price: BUNDLE_PRICE,
  image: DUO_IMAGE,
  qty: 1,
};
