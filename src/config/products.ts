// Pre-launch product records. CLAIMS.md §9 blocks every dose, form, source,
// test-result, price and benefit statement until formulations are final, so
// these pages describe what the label will state, never the values.

import type { ProductTone } from '@/lib/tones';

export interface LabelField {
  field: string;
  note: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  /** Shown under the main image when this one is selected. */
  caption: string;
  position?: string;
}

export interface ProductRecord {
  slug: string;
  name: string;
  /** Short line under the name; `taglineAccent` is set in the italic serif. */
  tagline: string;
  taglineAccent: string;
  image: string;
  /** First item is the pack concept; the rest are illustrative stock photos. */
  gallery: GalleryImage[];
  /** Product colour: Omega-3 sun, Magnesium moon. */
  tone: ProductTone;
  position: string;
  imageAlt: string;
  summary: string;
  labelWillState: string[];
  label: LabelField[];
  compare: { title: string; body: string; image: string }[];
  faq: { q: string; a: string }[];
}

const PENDING = 'Published before orders open';

export const PRODUCT_LIST: ProductRecord[] = [
  {
    slug: 'omega-3',
    name: 'Omega-3',
    tagline: 'EPA and DHA, on the label.',
    taglineAccent: 'on the label.',
    image: '/assets/products/final/omega3-bottle-final.jpg',
    gallery: [
      { src: '/assets/products/final/omega3-bottle-final.jpg', alt: 'Staple Omega-3 bottle on a yellow set', caption: 'Pack concept. Formulation and label not final.', position: 'object-center' },
      { src: '/assets/stock/softgels-on-grey.jpg', alt: 'Golden softgels on a grey surface', caption: 'Illustrative stock photo. Not the final product.' },
      { src: '/assets/stock/lemon-on-yellow.jpg', alt: 'A lemon on a yellow background', caption: 'Illustrative stock photo.' },
    ],
    tone: 'sun',
    position: 'object-center',
    imageAlt: 'Staple Omega-3 bottle on a yellow set',
    summary:
      'An omega-3 supplement, in development. The label will give EPA and DHA per serving, the omega-3 form and the oil source. None of these are final yet.',
    labelWillState: [
      'EPA+DHA per serving',
      'Omega-3 form',
      'Oil source',
      'Servings per bottle',
      'Excipients',
    ],
    label: [
      { field: 'EPA per serving', note: PENDING },
      { field: 'DHA per serving', note: PENDING },
      { field: 'EPA+DHA per serving', note: PENDING },
      { field: 'Omega-3 form', note: PENDING },
      { field: 'Oil source', note: PENDING },
      { field: 'Serving size', note: PENDING },
      { field: 'Servings per bottle', note: PENDING },
      { field: 'Excipients', note: PENDING },
    ],
    compare: [
      {
        title: 'EPA and DHA, not oil weight',
        body: '"1000 mg fish oil" is oil weight. Only part is EPA and DHA. Compare EPA+DHA per serving.',
        image: '/assets/stock/softgels-on-grey.jpg',
      },
      {
        title: 'Omega-3 form',
        body: 'Omega-3 oil is sold as triglycerides, re-esterified triglycerides (rTG) or ethyl esters. The label should say which.',
        image: '/assets/stock/softgels-scattered.jpg',
      },
    ],
    faq: [
      {
        q: 'How much EPA and DHA will it have?',
        a: 'The formulation is not final. The number is published on this page before orders open.',
      },
      {
        q: 'What is the oil source?',
        a: 'Not decided yet. The label will name it.',
      },
      {
        q: 'What will it cost?',
        a: 'Prices follow the final label.',
      },
    ],
  },
  {
    slug: 'magnesium',
    name: 'Magnesium',
    tagline: 'Elemental magnesium, on the label.',
    taglineAccent: 'on the label.',
    image: '/assets/products/final/magnesium-bottle-final.jpg',
    gallery: [
      { src: '/assets/products/final/magnesium-bottle-final.jpg', alt: 'Staple Magnesium bottle on a grey-blue set', caption: 'Pack concept. Formulation and label not final.', position: 'object-center' },
      { src: '/assets/stock/powder-scoop.jpg', alt: 'A scoop of white powder', caption: 'Illustrative stock photo. Not the final product.' },
      { src: '/assets/stock/dusk-hills.jpg', alt: 'A dusk sky over hills', caption: 'Illustrative stock photo.' },
    ],
    tone: 'moon',
    position: 'object-center',
    imageAlt: 'Staple Magnesium bottle on a grey-blue set',
    summary:
      'A magnesium supplement, in development. The label will give elemental magnesium per serving and name the magnesium compound. Neither is final yet.',
    labelWillState: [
      'Elemental magnesium per serving',
      'Magnesium compound',
      'Servings per bottle',
      'Excipients',
    ],
    label: [
      { field: 'Elemental magnesium per serving', note: PENDING },
      { field: 'Magnesium compound', note: PENDING },
      { field: 'Serving size', note: PENDING },
      { field: 'Servings per bottle', note: PENDING },
      { field: 'Excipients', note: PENDING },
    ],
    compare: [
      {
        title: 'Elemental magnesium, not compound weight',
        body: 'Labels may list compound weight (bisglycinate, citrate, oxide). Only part of it is magnesium. Compare elemental magnesium per serving.',
        image: '/assets/stock/powder-scoop.jpg',
      },
      {
        title: 'Blends hide amounts',
        body: 'A blend gives one total weight for several ingredients, not the amount of each.',
        image: '/assets/stock/capsule-jar-blank.jpg',
      },
    ],
    faq: [
      {
        q: 'How much magnesium will it have?',
        a: 'The formulation is not final. Elemental magnesium per serving is published on this page before orders open.',
      },
      {
        q: 'Which magnesium compound?',
        a: 'Not decided yet. The label will name it.',
      },
      {
        q: 'What will it cost?',
        a: 'Prices follow the final label.',
      },
    ],
  },
];

export function getProduct(slug: string) {
  return PRODUCT_LIST.find((product) => product.slug === slug);
}

// Mandatory declarations per CLAIMS.md §3. The e-commerce rule requires the
// full label as text before sale, so the product page reserves this section.
export const LABEL_DECLARATIONS = [
  'Health supplement',
  'Not for medicinal use',
  'Nutrient amounts, with % of ICMR RDA',
  'Recommended usage',
  'Not to exceed the recommended daily usage',
  'Not to be used as a substitute for a varied diet',
  'Store out of reach of children',
  'Precautions and interactions, where applicable',
  'Nutrition information per serve',
] as const;
