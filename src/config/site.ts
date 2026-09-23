export const SITE = {
  name: 'Staple Wellness',
  title: 'Staple Wellness | Verified Supplements, Formulated for Daily Life',
  description:
    'Staple Wellness delivers verified supplement formulations with full supply chain transparency. 1,000mg active rTG Omega-3 and 300mg chelated Magnesium Bisglycinate, documented down to the milligram.',
  motto: 'The science of feeling normal again.',
  url: 'https://staplewellness.in',
  fssai: 'FSSAI Central Mfg Lic. #10023043000892',
  certification: 'GMP & ISO 22000 certified laboratory',
} as const;

export const NAV_LINKS = [
  { label: 'Science', href: '#science' },
  { label: 'Traceability', href: '#verify' },
  { label: 'Our Standards', href: '#about' },
] as const;

export const FOOTER_COLUMNS = [
  {
    heading: 'The range',
    links: [
      { label: 'Daily Omega-3', href: '#products' },
      { label: 'Night Magnesium+', href: '#products' },
      { label: 'The AM/PM System', href: '#products' },
      { label: 'Twin Packs', href: '#products' },
    ],
  },
  {
    heading: 'Meet Staple',
    links: [
      { label: 'Our Standards', href: '#about' },
      { label: 'Formulation Science', href: '#science' },
      { label: 'Verify a Lot Code', href: '#verify' },
    ],
  },
] as const;
