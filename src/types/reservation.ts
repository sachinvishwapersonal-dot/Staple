import type { ProductSKU } from './product';

export interface CartLine {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
}

export interface UpsellEligibility {
  eligible: boolean;
  missingSKU?: string;
  savings: number;
}

export interface ReservationFormValues {
  email: string;
  phone?: string;
  routine: string;
}

export type ReservationProduct = Pick<ProductSKU, 'id' | 'name' | 'price' | 'image'>;
