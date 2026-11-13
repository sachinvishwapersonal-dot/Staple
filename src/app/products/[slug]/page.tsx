import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, ChevronRight, Plus } from 'lucide-react';
import { ProductGallery } from '@/components/product/product-gallery';
import { AccentTitle } from '@/components/ui/accent-title';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { LABEL_DECLARATIONS, PRODUCT_LIST, getProduct } from '@/config/products';
import { PRODUCTS, SITE, STATUS } from '@/config/site';
import { TONE } from '@/lib/tones';
import { cn } from '@/lib/utils';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCT_LIST.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};

  const title = `${product.name} | ${SITE.name}`;
  return {
    title,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title, description: product.summary, url: `/products/${product.slug}`, images: [product.image] },
  };
}

// Steps can later be marked 'Done' in STATUS; widen the type so the page handles it.
type StepState = 'Done' | 'In progress' | 'Pending';
const STEPS: { label: string; state: StepState }[] = [...STATUS.items];

const SECTION_TITLE = 'font-display text-[clamp(32px,4vw,56px)] font-medium leading-[1.04] tracking-[-0.03em]';
const SECTIONS = [
  { id: 'label', label: 'The label' },
  { id: 'compare', label: 'What to compare' },
  { id: 'progress', label: 'Progress' },
  { id: 'questions', label: 'Questions' },
] as const;

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const tone = TONE[product.tone];
  const other = PRODUCT_LIST.find((item) => item.slug !== product.slug);
  const otherTone = other ? TONE[other.tone] : undefined;
  const servingField = product.label.find((row) => row.field === 'Serving size');
  const factRows = product.label.filter((row) => row.field !== 'Serving size');
  const stepsDone = STEPS.filter((item) => item.state === 'Done').length;
  const stepsActive = STEPS.filter((item) => item.state === 'In progress').length;

  return (
    <>
      {/* ---------- Hero: gallery + buy box ---------- */}
      <section className="container-page pb-[clamp(48px,6vw,88px)] pt-[clamp(20px,3vw,36px)]">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-ink-soft">
          <Link href="/#products" className="hover:text-ink">
            Products
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          <span aria-current="page" className="font-medium text-ink">
            {product.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 items-start gap-[clamp(32px,5vw,72px)] lg:grid-cols-[1.1fr_1fr]">
          <ScrollReveal>
            <ProductGallery images={product.gallery} wash={tone.wash} />
          </ScrollReveal>

          <ScrollReveal className="lg:sticky lg:top-[96px]">
            <span className={cn('inline-block h-[6px] w-14', tone.solid)} aria-hidden />
            <h1 className="mt-5 font-display text-[clamp(48px,6.4vw,96px)] font-medium leading-[0.95] tracking-[-0.04em]">
              {product.name}
            </h1>
            <p className="mt-3 text-[clamp(22px,2.2vw,30px)] leading-[1.2] tracking-[-0.02em]">
              <AccentTitle text={product.tagline} accent={product.taglineAccent} />
            </p>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-[1.6] text-ink-soft">{product.summary}</p>

            <div className="mt-8 border-t-[3px] border-ink">
              <p className="pb-1 pt-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                The label will state
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2">
                {product.labelWillState.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-2.5 border-b border-[var(--color-border-mid)] py-3 text-[15px] font-medium sm:odd:pr-4"
                  >
                    <span className={cn('grid h-5 w-5 flex-none place-items-center rounded-full', tone.solid)}>
                      <Check className="h-3 w-3 text-ink" strokeWidth={3} aria-hidden />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 bg-mist p-5">
              <div className="flex items-baseline justify-between gap-4 text-sm">
                <span className="font-semibold">Before orders open</span>
                <span className="text-ink-soft">
                  {stepsDone} of {STEPS.length} done{stepsActive ? `, ${stepsActive} in progress` : ''}
                </span>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-1.5" aria-hidden>
                {STEPS.map((item) => (
                  <span
                    key={item.label}
                    className={cn(
                      'h-1.5',
                      item.state === 'Done' ? 'bg-ink' : item.state === 'In progress' ? tone.solid : 'bg-[var(--color-border-mid)]',
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/#waitlist" variant="dark">
                Join the waitlist
                <ArrowRight className="h-[15px] w-[15px]" aria-hidden />
              </Button>
              <Button href="#label" variant="ghost">
                Read the label
              </Button>
            </div>
            <p className="mt-4 text-sm text-ink-muted">{PRODUCTS.intro} No payment is taken.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- In-page navigation ---------- */}
      <nav
        aria-label="On this page"
        className="sticky top-[60px] z-[50] border-y border-[var(--color-border-hairline)] bg-white/95 backdrop-blur-[10px]"
      >
        <ul className="container-page flex gap-1 overflow-x-auto py-2.5">
          {SECTIONS.map((section) => (
            <li key={section.id} className="flex-none">
              <a
                href={`#${section.id}`}
                className="inline-flex rounded-full px-4 py-2 text-[14px] font-medium text-ink-soft transition-colors hover:bg-mist hover:text-ink"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ---------- The label, as a supplement information panel ---------- */}
      <section id="label" className="bg-paper py-[clamp(64px,8vw,112px)]">
        <div className="container-page grid gap-[clamp(32px,5vw,80px)] lg:grid-cols-[1fr_1.15fr]">
          <ScrollReveal>
            <h2 className={SECTION_TITLE}>
              <AccentTitle text="The label, as text" accent="as text" />
            </h2>
            <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.65] text-ink-soft">
              Before orders open, the full label goes here as text, so you can read it before you buy. The values are
              blank because the formulation is not final.
            </p>
            <h3 className="mb-3 mt-10 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
              Also printed on the pack
            </h3>
            <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {LABEL_DECLARATIONS.map((line) => (
                <li key={line} className="flex gap-2.5 border-b border-[var(--color-border-mid)] py-2.5 text-[15px]">
                  <Check className="mt-1 h-3.5 w-3.5 flex-none text-ink-soft" strokeWidth={2.5} aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-[3px] border-ink bg-white p-[clamp(20px,3vw,32px)] shadow-[0_30px_60px_-40px_rgba(20,43,111,0.5)]">
              <div className="flex items-start justify-between gap-4 border-b-[10px] border-ink pb-3">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-soft">Health supplement</p>
                  <p className="mt-1 font-display text-[clamp(28px,3vw,40px)] font-medium leading-none tracking-[-0.02em]">
                    Supplement information
                  </p>
                </div>
                <span className={cn('flex-none rounded-full px-3 py-1 text-[12px] font-semibold', tone.solid)}>
                  Draft
                </span>
              </div>

              <div className="flex justify-between gap-4 border-b-[5px] border-ink py-3 text-[15px]">
                <span className="font-semibold">Serving size</span>
                <span className="text-ink-muted">{servingField ? 'To be published' : '—'}</span>
              </div>

              <table className="w-full border-collapse text-left">
                <caption className="sr-only">{product.name} label fields</caption>
                <thead>
                  <tr className="border-b-2 border-ink text-[12px] font-semibold uppercase tracking-[0.08em]">
                    <th scope="col" className="py-2.5">
                      Per serving
                    </th>
                    <th scope="col" className="py-2.5 text-right">
                      Amount
                    </th>
                    <th scope="col" className="w-[90px] py-2.5 text-right">
                      % RDA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {factRows.map((row) => (
                    <tr key={row.field} className="border-b border-[var(--color-border-mid)]">
                      <th scope="row" className="py-3 pr-3 text-[15px] font-medium">
                        {row.field}
                      </th>
                      <td className="py-3 text-right">
                        <span className="inline-block h-2.5 w-16 rounded-full bg-moon-wash align-middle" aria-hidden />
                        <span className="sr-only">To be published</span>
                      </td>
                      <td className="py-3 text-right">
                        <span className="inline-block h-2.5 w-9 rounded-full bg-moon-wash align-middle" aria-hidden />
                        <span className="sr-only">To be published</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="mt-4 text-[13px] leading-[1.5] text-ink-soft">
                Grey bars are values not yet published. % RDA is calculated against ICMR RDA. Batch number, dates and
                the lab certificate of analysis are added per batch.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- What to compare ---------- */}
      <section id="compare" className="container-page py-[clamp(64px,8vw,112px)]">
        <ScrollReveal className="mb-[clamp(28px,4vw,48px)] flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h2 className={SECTION_TITLE}>
            <AccentTitle text="What to compare" accent="compare" />
          </h2>
          <p className="max-w-[36ch] text-[15px] text-ink-soft">On any {product.name.toLowerCase()} label, ours included.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {product.compare.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.06} className="h-full">
              <article className="flex h-full flex-col border border-[var(--color-border-hairline)] bg-white">
                <div className={cn('relative aspect-[16/9] overflow-hidden', tone.wash)}>
                  <Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[15px] font-semibold">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-[clamp(22px,3vw,36px)]">
                  <h3 className="mb-3 font-display text-[clamp(24px,2.4vw,32px)] font-medium leading-[1.12] tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="max-w-[48ch] text-[16px] leading-[1.65] text-ink-soft">{item.body}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ---------- Progress before orders open ---------- */}
      <section id="progress" className="bg-mist py-[clamp(64px,8vw,112px)]">
        <div className="container-page">
          <ScrollReveal className="mb-[clamp(28px,4vw,48px)] max-w-[40ch]">
            <h2 className={SECTION_TITLE}>
              <AccentTitle text="Before orders open" accent="orders open" />
            </h2>
            <p className="mt-5 text-[17px] leading-[1.65] text-ink-soft">{STATUS.note}</p>
          </ScrollReveal>
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((item, index) => {
              const active = item.state === 'In progress';
              const done = item.state === 'Done';
              return (
                <li key={item.label}>
                  <ScrollReveal delay={index * 0.05} className="h-full">
                    <div className={cn('flex h-full flex-col bg-white p-6', active && 'outline outline-2 outline-ink')}>
                      <span
                        className={cn(
                          'grid h-10 w-10 place-items-center rounded-full text-[15px] font-semibold',
                          done ? 'bg-ink text-white' : active ? tone.solid : 'border-2 border-[var(--color-border-mid)] text-ink-muted',
                        )}
                      >
                        {done ? <Check className="h-4 w-4" strokeWidth={3} aria-hidden /> : index + 1}
                      </span>
                      <p className="mt-5 text-[18px] font-medium leading-[1.3]">{item.label}</p>
                      <p className={cn('mt-auto pt-6 text-[14px] font-semibold', active ? 'text-ink' : 'text-ink-muted')}>
                        {item.state}
                      </p>
                    </div>
                  </ScrollReveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ---------- Questions ---------- */}
      <section id="questions" className="container-page py-[clamp(64px,8vw,112px)]">
        <div className="grid gap-[clamp(28px,5vw,80px)] lg:grid-cols-[1fr_1.2fr]">
          <ScrollReveal>
            <h2 className={SECTION_TITLE}>
              <AccentTitle text="Questions" accent="Questions" />
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="border-t-[3px] border-ink">
              {product.faq.map((item) => (
                <details key={item.q} className="group border-b border-[var(--color-border-mid)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[18px] font-medium [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <Plus
                      className="h-[18px] w-[18px] flex-none text-ink-soft transition-transform duration-300 group-open:rotate-45"
                      aria-hidden
                    />
                  </summary>
                  <p className="max-w-[56ch] pb-6 text-[16px] leading-[1.65] text-ink-soft">{item.a}</p>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- Closing band in the product colour ---------- */}
      <section className="px-3 sm:px-5 lg:px-8">
        <div className={cn('flex flex-col items-start justify-between gap-6 p-[clamp(28px,5vw,64px)] md:flex-row md:items-center', tone.band)}>
          <div>
            <h2 className="font-display text-[clamp(32px,4.4vw,60px)] font-medium leading-[1] tracking-[-0.03em]">
              <AccentTitle text="Read the label first." accent="first." />
            </h2>
            <p className="mt-3 max-w-[48ch] text-[17px] leading-[1.55] opacity-85">
              One email when the {product.name} label and Batch 01 test results are published. No payment is taken.
            </p>
          </div>
          <Button href="/#waitlist" variant={tone.bandButton}>
            Join the waitlist
            <ArrowRight className="h-[15px] w-[15px]" aria-hidden />
          </Button>
        </div>
      </section>

      {/* ---------- Next product ---------- */}
      {other && otherTone && (
        <section className="container-page py-[clamp(48px,6vw,88px)]">
          <Link
            href={`/products/${other.slug}`}
            className="group grid grid-cols-[96px_1fr_auto] items-center gap-5 border-y border-[var(--color-border-mid)] py-6 sm:grid-cols-[140px_1fr_auto]"
          >
            <span className={cn('relative block aspect-square overflow-hidden', otherTone.wash)}>
              <Image src={other.image} alt="" fill sizes="140px" className={cn('object-cover', other.position)} />
            </span>
            <span>
              <span className="block text-sm text-ink-muted">Next</span>
              <span className="font-display text-[clamp(28px,3.4vw,48px)] font-medium leading-[1.05] tracking-[-0.02em]">
                {other.name}
              </span>
            </span>
            <ArrowRight
              className="h-7 w-7 text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
              aria-hidden
            />
          </Link>
        </section>
      )}
    </>
  );
}
