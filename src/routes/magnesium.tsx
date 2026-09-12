import { createFileRoute } from "@tanstack/react-router";

import { ProductPage } from "../components/ProductPage";
import magnesiumImg from "../assets/staple-magnesium.jpg";

const title = "STAPLE MAGNESIUM: Bisglycinate, Fully Documented | Staple Wellness";
const description =
  "Staple Magnesium uses magnesium bisglycinate for calm and recovery, with the form, dosage, source and batch testing details published for every pack.";

export const Route = createFileRoute("/magnesium")({
  component: MagnesiumPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/magnesium" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/magnesium" }],
  }),
});

function MagnesiumPage() {
  return (
    <ProductPage
      name="STAPLE MAGNESIUM"
      descriptor="Magnesium Bisglycinate"
      tone="Calm / recovery"
      image={magnesiumImg}
      alt="Staple Magnesium bottle with capsules in a ceramic dish"
      accentClass="bg-lavender"
      badgeClass="bg-lavender-soft text-foreground"
      intro="Magnesium is where form matters most. We state the exact form used (bisglycinate) because different magnesium compounds behave differently, and that difference belongs on the label."
      role="Its role in the portfolio is calm and recovery: the product you reach for around rest and training, distinct from the daily foundation."
      facts={[
        { label: "Active", value: "Magnesium bisglycinate" },
        { label: "Product role", value: "Calm / recovery" },
        { label: "Accent colour", value: "Soft Lavender" },
        { label: "Dosage & pack size", value: "Published at launch" },
        { label: "Documentation", value: "QR product passport on pack" },
      ]}
      passport={[
        {
          title: "What is inside",
          body: "The magnesium form and its elemental dosage: stated on the label in plain language, so comparison is possible.",
        },
        {
          title: "Where it comes from",
          body: "Source and supplier information for the material in your pack, traceable from package back to origin.",
        },
        {
          title: "What we test",
          body: "Batch testing data and certificates, accessible for the exact pack in your hand via the on-pack QR code.",
        },
      ]}
    />
  );
}
