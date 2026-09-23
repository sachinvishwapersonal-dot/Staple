import { OMEGA_CAPSULE } from '@/config/products';
import { PRODUCTS } from '@/config/products';
import { SplitSection } from './split-section';

const omega = PRODUCTS.find((product) => product.slug === 'omega-3')!;

export function ScienceSplit() {
  return (
    <SplitSection
      id="science"
      folio="03"
      eyebrow="Formulation science"
      title={
        <>
          Formulated to be
          <br />
          absorbed.
        </>
      }
      body="Most Omega-3s in India use Ethyl Ester form, yielding far less active fatty acid than the label suggests. We use re-esterified Triglyceride (rTG) for 3.4× better absorption."
      specs={omega.specs}
      primaryCta={{ label: 'See how we test', href: '#verify' }}
      secondaryCta={{ label: 'Read an assay method', href: '#verify' }}
      image={OMEGA_CAPSULE}
      imageAlt="Staple Daily Omega-3 rTG softgel capsule"
      caption="AM · rTG Omega-3"
      tone="am"
    />
  );
}
