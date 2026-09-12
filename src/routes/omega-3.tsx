import { createFileRoute } from "@tanstack/react-router";

import { ProductPage } from "../components/ProductPage";
import omegaImg from "../assets/staple-omega3.jpg";

const title = "STAPLE OMEGA-3: EPA + DHA, Fully Documented | Staple Wellness";
const description =
  "Staple Omega-3 is our daily foundation product: EPA and DHA in a stated form and dosage, with source, supplier and batch testing details published for every pack.";

export const Route = createFileRoute("/omega-3")({
  component: Omega3Page,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/omega-3" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/omega-3" }],
  }),
});

function Omega3Page() {
  return (
    <ProductPage
      name="STAPLE OMEGA-3"
      descriptor="EPA + DHA"
      tone="Daily foundation"
      image={omegaImg}
      alt="Staple Omega-3 bottle with golden softgel capsules"
      accentClass="bg-lemon"
      badgeClass="bg-lemon-soft text-foreground"
      intro="Omega-3 is the foundation of the Staple range: the product most people take every day, for the longest time. That is exactly why its form, dosage, and origin are stated plainly rather than implied."
      role="Its role in the portfolio is steady, everyday supplementation. No loading protocols, no seasonal claims: one clear formulation you can keep taking."
      facts={[
        { label: "Actives", value: "EPA and DHA" },
        { label: "Product role", value: "Daily foundation" },
        { label: "Accent colour", value: "Butter Lemon" },
        { label: "Dosage & pack size", value: "Published at launch" },
        { label: "Documentation", value: "QR product passport on pack" },
      ]}
      passport={[
        {
          title: "What is inside",
          body: "Each active, its form, and its dosage: stated on the label in plain language, not hidden behind a proprietary blend.",
        },
        {
          title: "Where it comes from",
          body: "Source and supplier information for the oil used in your pack, traceable from package back to origin.",
        },
        {
          title: "What we test",
          body: "Batch testing data and certificates, accessible for the exact pack in your hand via the on-pack QR code.",
        },
      ]}
    />
  );
}
