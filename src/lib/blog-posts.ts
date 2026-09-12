export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
  accent: "lemon" | "lavender" | "neutral";
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "reading-a-supplement-label",
    title: "How to read a supplement label without guessing",
    excerpt:
      "Form, dosage, and what is deliberately left unsaid: a plain-language guide to the panel on the back of the pack.",
    category: "Fundamentals",
    readingTime: "5 min read",
    date: "12 September 2026",
    accent: "neutral",
    body: [
      "Most supplement labels are legible but not clear. The words are readable; what they mean in practice is often left to the reader. This guide walks through the panel from top to bottom, so you can tell a documented formulation from a vague one.",
      "Start with form, not the headline number. Magnesium, for example, is never on a label by itself: it is bound to something, and that binding decides how much of it is usable. A label that states the exact compound is telling you something. A label that only says 'magnesium' is not.",
      "Then look at elemental versus total weight. A capsule can contain a large amount of a compound and a much smaller amount of the active element inside it. Both numbers are legitimate; only one answers the question you are actually asking.",
      "Blends deserve particular attention. When several ingredients share a single combined weight, the individual amounts are hidden by design. There may be reasons for that, but it means the label cannot tell you whether any single ingredient is present in a meaningful quantity.",
      "Finally, look for what connects the pack in your hand to a document: a batch code, a testing reference, a way to check. A label that ends at claims is a marketing surface. A label that points to evidence is a record.",
    ],
  },
  {
    slug: "epa-and-dha-explained",
    title: "EPA and DHA: what the two letters actually change",
    excerpt:
      "Omega-3 is a category, not an ingredient. Here is what sits inside it, and why the split on the label matters more than the total.",
    category: "Omega-3",
    readingTime: "6 min read",
    date: "5 September 2026",
    accent: "lemon",
    body: [
      "Omega-3 is a family of fatty acids, not a single ingredient. Two of them, EPA and DHA, are what most omega-3 research is concerned with, and they are the two you should expect to see quantified separately on a label.",
      "A total 'omega-3' figure can include fatty acids that are not EPA or DHA at all, along with the oil they are carried in. That is why two products showing the same headline number can differ substantially in the amount of EPA and DHA they actually deliver.",
      "Because of that, the useful question is not how much fish oil a capsule contains, but how much EPA and how much DHA. Those two numbers, stated individually, let you compare two products directly.",
      "Freshness is the second half of the story. Fatty acids oxidise, and oxidation is measurable rather than a matter of opinion. Batch-level testing is what turns 'fresh' from a claim into a documented figure.",
      "Our position is straightforward: state the form, state EPA and DHA separately, publish where the oil came from, and make the batch testing for your specific pack available. Nothing about that requires interpretation.",
    ],
  },
  {
    slug: "magnesium-forms-compared",
    title: "Why magnesium bisglycinate, and what the forms differ on",
    excerpt:
      "Oxide, citrate, bisglycinate: the same mineral, delivered very differently. A short, non-clinical comparison.",
    category: "Magnesium",
    readingTime: "5 min read",
    date: "28 August 2026",
    accent: "lavender",
    body: [
      "Magnesium is always bound to another molecule, and that partner is what most of the practical difference comes down to: how much elemental magnesium a dose carries, and how well it tends to be tolerated.",
      "Oxide carries a high proportion of elemental magnesium by weight but is poorly absorbed, which is why it frequently appears in inexpensive products with impressive-looking figures on the front of the pack.",
      "Citrate is better absorbed and widely used. It is also known for a noticeable digestive effect at higher doses, which is a reason some people move away from it.",
      "Bisglycinate binds magnesium to the amino acid glycine. It carries less elemental magnesium per gram, so the capsule count and dose need to be honest, and it is generally well tolerated. We chose it for the everyday, ongoing use case our range is built around.",
      "None of these forms is universally correct. What matters is that the label names the form, states the elemental amount, and does not use one number to imply the other.",
    ],
  },
  {
    slug: "what-a-product-passport-contains",
    title: "What a digital product passport actually contains",
    excerpt:
      "Scanning a code should return records, not a landing page. Here is the information we publish for every batch.",
    category: "Transparency",
    readingTime: "4 min read",
    date: "20 August 2026",
    accent: "neutral",
    body: [
      "A QR code on a pack is only as useful as what it returns. Too often it opens a marketing page that repeats the front of the label. A product passport should return records tied to the pack in your hand.",
      "Batch information comes first: the batch code, when it was produced, and how it maps to the pack you scanned. Without that link, everything downstream is generic.",
      "Source and supplier information comes next: where each active originated and who supplied it. This is the part of the supply chain that is normally invisible to the person taking the product.",
      "Then testing: the certificates and results for that batch, published as documents rather than summarised into a reassuring sentence.",
      "Finally, the formulation basis: why the product contains what it contains, in the form and amount stated. Evidence-led, not clinical: enough for you to check the reasoning without reading a paper.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
