import { HeroSection } from '@/components/sections/hero-section';
import { AssuranceStrip } from '@/components/sections/assurance-strip';
import { ProductRail } from '@/components/sections/product-rail';
import { RitualSection } from '@/components/sections/ritual-section';
import { ScienceSplit } from '@/components/sections/science-split';
import { TransparencySplit } from '@/components/sections/transparency-split';
import { VerifySection } from '@/components/sections/verify-section';
import { StandardsGrid } from '@/components/sections/standards-grid';
import { RangeEssentials } from '@/components/sections/range-essentials';
import { ReserveSection } from '@/components/sections/reserve-section';
import { PRODUCTS } from '@/config/products';
import { SITE } from '@/config/site';

function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        identifier: SITE.fssai,
        hasCertification: SITE.certification,
      },
      ...PRODUCTS.filter((product) => product.circadianWindow !== 'ALL_DAY').map((product) => ({
        '@type': 'Product',
        name: product.name,
        description: product.description,
        sku: product.id,
        brand: { '@type': 'Brand', name: SITE.name },
        image: `${SITE.url}${product.image}`,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'INR',
          availability: 'https://schema.org/PreOrder',
        },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <HeroSection />
      <AssuranceStrip />
      <ProductRail />
      <RitualSection />
      <ScienceSplit />
      <TransparencySplit />
      <VerifySection />
      <StandardsGrid />
      <RangeEssentials />
      <ReserveSection />
    </>
  );
}
