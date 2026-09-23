import { MAGNESIUM_CAPSULE, PRODUCTS } from '@/config/products';
import { SplitSection } from './split-section';

const magnesium = PRODUCTS.find((product) => product.slug === 'magnesium')!;

export function TransparencySplit() {
  return (
    <SplitSection
      id="transparency"
      folio="04"
      eyebrow="Ingredient traceability"
      title={
        <>
          Traceable to the
          <br />
          milligram.
        </>
      }
      body="Most drugstore magnesium uses Magnesium Oxide, which is poorly absorbed. Our 100% bisglycinate chelate crosses the intestinal wall intact, without the usual GI side effects."
      specs={magnesium.specs}
      primaryCta={{ label: 'Verify your bottle', href: '#verify' }}
      secondaryCta={{ label: 'Read our standards', href: '#about' }}
      image={MAGNESIUM_CAPSULE}
      imageAlt="Staple Night Magnesium+ bisglycinate capsule"
      caption="PM · Bisglycinate"
      tone="pm"
      flip
    />
  );
}
