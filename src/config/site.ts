import { PRODUCT_LIST } from './products';

export const SITE = {
  name: 'Staple Wellness',
  title: 'Staple Wellness | Omega-3 and Magnesium Supplements, India',
  description:
    'Omega-3 and magnesium supplements for India, in development. Dose, form and lab results will be published. Formulations are not final.',
  url: 'https://staplewellness.in',
} as const;

// Root-relative anchors so the nav also works from product pages.
export const NAV_LINKS = [
  { label: 'Why Staple', href: '/#why' },
  { label: 'Products', href: '/#products' },
  { label: 'Guides', href: '/#guides' },
  { label: 'FAQ', href: '/#faq' },
] as const;

export const HERO = {
  title: 'The science of feeling normal again.',
  accent: 'normal again.',
  primary: 'Join the waitlist',
  secondary: 'Label guides',
} as const;

export const WHY = {
  title: 'Why Staple',
  accent: 'Staple',
  body: [
    'Many supplements sold in India are hard to compare. Omega-3 labels often give the weight of the fish oil rather than how much EPA and DHA it holds. Magnesium labels often give the weight of the compound rather than the magnesium in it. Blends list one total weight for several ingredients.',
    'Staple will sell two everyday supplements with these numbers stated clearly on the label, and will publish lab results for each batch once testing begins.',
  ],
} as const;

export const PUBLISH = {
  title: 'Published for each product',
  accent: 'each product',
  lead: 'Four things every Staple product page will show, before you buy.',
  items: [
    {
      title: 'Dose',
      body: 'EPA+DHA per serving. Elemental magnesium per serving. Not oil weight or compound weight.',
    },
    {
      title: 'Form',
      body: 'Omega-3 form and magnesium compound, named on the label.',
    },
    {
      title: 'Full label',
      body: 'Every mandatory detail, as text on the product page before purchase.',
    },
    {
      title: 'Batch tests',
      body: 'Independent lab certificate of analysis for each batch.',
    },
  ],
  note: 'Nothing is published yet. Formulations are not final.',
} as const;

export const PRODUCTS = {
  title: 'Products in development',
  accent: 'in development',
  intro: 'Prices follow the final label.',
  items: PRODUCT_LIST,
  caption: 'Pack concept. Formulation and label not final.',
} as const;

export const GUIDES = {
  title: 'Reading a label',
  accent: 'a label',
  items: [
    {
      title: 'EPA and DHA, not oil weight',
      body: '"1000 mg fish oil" is oil weight. Only part is EPA and DHA. Compare EPA+DHA per serving.',
    },
    {
      title: 'Omega-3 form',
      body: 'Omega-3 oil is sold as triglycerides, re-esterified triglycerides (rTG) or ethyl esters. The label should say which.',
    },
    {
      title: 'Elemental magnesium, not compound weight',
      body: 'Labels may list compound weight (bisglycinate, citrate, oxide). Only part of it is magnesium. Compare elemental magnesium per serving.',
    },
    {
      title: 'Blends hide amounts',
      body: 'A blend gives one total weight for several ingredients, not the amount of each.',
    },
  ],
} as const;

export const STATUS = {
  title: 'Status',
  items: [
    { label: 'Final formulation', state: 'In progress' },
    { label: 'FSSAI product approval', state: 'Pending' },
    { label: 'Batch 01 lab testing', state: 'Pending' },
    { label: 'Label review by a food regulatory consultant', state: 'Pending' },
  ],
  note: 'Orders open after all four. Dose, form and test results are published first.',
} as const;

export const FAQ = {
  title: 'FAQ',
  items: [
    {
      q: 'When can I buy?',
      a: 'Not yet. Orders open after the formulation is final, FSSAI approval is in place and Batch 01 has lab results. The waitlist gets an email.',
    },
    {
      q: 'Why no dose yet?',
      a: 'The formulation is not final. We will not publish a number that may change.',
    },
    {
      q: 'Is the full label shown before purchase?',
      a: 'Yes, as text on the product page, with the batch certificate of analysis.',
    },
    {
      q: 'Are these medicines?',
      a: 'No. Health supplements, not for medicinal use, not a substitute for a varied diet.',
    },
    {
      q: 'Where do you ship?',
      a: 'India only.',
    },
  ],
} as const;

export const WAITLIST = {
  title: 'Waitlist',
  body: 'You get an email when the label and Batch 01 test results are published. No payment is taken.',
  interestLabel: 'Interested in',
  submit: 'Join',
  done: 'You are on the list.',
} as const;

export const FOOTER = {
  tagline: 'Omega-3 and magnesium supplements for India. In development.',
  waitlist: 'Email when test results are published.',
  legal: 'Health supplements. Not medicines. Not for medicinal use. Not a substitute for a varied diet.',
  columns: [
    {
      heading: 'Site',
      links: [
        ...NAV_LINKS,
        ...PRODUCT_LIST.map((product) => ({ label: product.name, href: `/products/${product.slug}` })),
      ],
    },
  ],
} as const;
