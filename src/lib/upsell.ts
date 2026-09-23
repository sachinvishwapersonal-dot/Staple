import { BUNDLE_NAME, BUNDLE_SAVINGS, SINGLE_SKUS } from '@/config/commerce';
import type { CartLine, UpsellEligibility } from '@/types/reservation';

export function computeUpsell(items: CartLine[]): UpsellEligibility {
  if (items.some((line) => line.name === BUNDLE_NAME)) {
    return { eligible: false, savings: 0 };
  }

  const heldSingles = items
    .filter((line) => (SINGLE_SKUS as readonly string[]).includes(line.name))
    .map((line) => line.name);

  if (heldSingles.length === 1) {
    const missing = SINGLE_SKUS.find((name) => name !== heldSingles[0]);
    return { eligible: true, missingSKU: missing, savings: BUNDLE_SAVINGS };
  }

  return { eligible: false, savings: 0 };
}
