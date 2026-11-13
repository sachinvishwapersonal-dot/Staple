import { HeroSection } from '@/components/sections/hero-section';
import { StaplesBand } from '@/components/sections/staples-band';
import { WhySection } from '@/components/sections/why-section';
import { PublishSection } from '@/components/sections/publish-section';
import { ProductsSection } from '@/components/sections/products-section';
import { GuidesSection } from '@/components/sections/guides-section';
import { FaqSection } from '@/components/sections/faq-section';
import { WaitlistSection } from '@/components/sections/waitlist-section';
import { SITE } from '@/config/site';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <HeroSection />
      <StaplesBand />
      <WhySection />
      <PublishSection />
      <ProductsSection />
      <GuidesSection />
      <FaqSection />
      <WaitlistSection />
    </>
  );
}
