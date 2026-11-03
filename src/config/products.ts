// Pre-launch product records. CLAIMS.md §9 blocks every dose, form, source,
// test-result, price and benefit statement until formulations are final, so
// these pages describe what the label will state, never the values.

export interface LabelField {
  field: string;
  note: string;
}

export interface ProductRecord {
  slug: string;
  name: string;
  image: string;
  position: string;
  imageAlt: string;
  summary: string;
  labelWillState: string[];
  label: LabelField[];
  compare: { title: string; body: string }[];
  faq: { q: string; a: string }[];
}

const PENDING = 'Published before orders open';

export const PRODUCT_LIST: ProductRecord[] = [
  {
    slug: 'omega-3',
    name: 'Omega-3',
    image: '/assets/products/catalog/omega3-catalog.jpg',
    position: 'object-[50%_55%]',
    imageAlt: 'Omega-3 pack concept on a stone slab',
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
      },
      {
        title: 'Omega-3 form',
        body: 'Omega-3 oil is sold as triglycerides, re-esterified triglycerides (rTG) or ethyl esters. The label should say which.',
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
    image: '/assets/products/catalog/magnesium-catalog.jpg',
    position: 'object-[60%_55%]',
    imageAlt: 'Magnesium pack concept on a lilac plinth',
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
      },
      {
        title: 'Blends hide amounts',
        body: 'A blend gives one total weight for several ingredients, not the amount of each.',
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
