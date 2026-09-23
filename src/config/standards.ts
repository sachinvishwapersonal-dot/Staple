export interface StandardCommitment {
  index: string;
  title: string;
  body: string;
  featured?: boolean;
}

export const STANDARDS: StandardCommitment[] = [
  {
    index: '01 · Every batch',
    title: 'Third-party assayed, report public',
    body: 'HPLC potency, heavy metals and TOTOX are tested by an independent lab and filed against your lot code.',
    featured: true,
  },
  {
    index: '02 · Every input',
    title: 'Origin-traced inputs',
    body: 'Wild Peruvian anchovy oil and Albion-chelated minerals, each listed with origin and supplier.',
  },
  {
    index: '03 · Every dose',
    title: 'Elemental doses',
    body: 'We state the active yield — 1,000mg EPA+DHA and 300mg elemental Mg — not inflated compound weight.',
  },
];

export interface AssuranceItem {
  metric: string;
  note: string;
}

export const ASSURANCE_ITEMS: AssuranceItem[] = [
  { metric: '≥ 90%', note: 'Omega-3 purity target\nassayed by HPLC' },
  { metric: '< 0.001 ppm', note: 'Lead, cadmium, mercury\nscreening limit' },
  { metric: 'TOTOX', note: 'Oxidation value recorded\nagainst every lot code' },
];

export interface VerifyStep {
  step: string;
  title: string;
  body: string;
  meta?: string;
  codes?: string[];
}

export const VERIFY_STEPS: VerifyStep[] = [
  {
    step: '1',
    title: 'Find the lot code',
    body: 'Stamped on the underside of the cap, beside the fill date. Two codes are reserved for Batch 01.',
    codes: ['LOT-STP-2601-A', 'LOT-STP-2602-B'],
  },
  {
    step: '2',
    title: 'Open the report',
    body: 'The lot code opens the signed Certificate of Analysis for that production run.',
    meta: 'HPLC · ICP-MS · TOTOX',
  },
  {
    step: '3',
    title: 'Read the numbers',
    body: 'Potency, heavy metals and oxidation are stated as measured values.',
    meta: 'Pb · Cd · Hg < 0.001 ppm',
  },
];
