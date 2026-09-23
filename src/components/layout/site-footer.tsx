import Image from 'next/image';
import { FOOTER_COLUMNS, SITE } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="mt-[clamp(64px,7vw,104px)] bg-ink pt-16 text-white">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-8 border-b border-white/12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.4fr] lg:gap-12">
          <div>
            <div className="mb-[18px] flex items-center leading-none">
              <Image
                src="/assets/logo-mark-light.png"
                alt="Staple Wellness"
                width={956}
                height={238}
                className="h-[30px] w-auto"
              />
            </div>
            <p className="mb-2.5 text-sm leading-[1.7] text-white/60">
              Verified supplement formulations with full supply chain transparency. Grounded in evidence,
              refined for daily life.
            </p>
            <p className="font-mono text-[11px] leading-[1.7] tracking-[0.04em] text-white/50">
              {SITE.fssai}
              <br />
              {SITE.certification}
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h4 className="mb-[18px] font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
                {column.heading}
              </h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label} className="mb-3">
                    <a href={link.href} className="text-sm text-white/[0.68] hover:text-lemon">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-[18px] font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
              Batch 01
            </h4>
            <p className="m-0 text-sm text-white/60">
              Coming very soon. Reservations hold a place in the run and get the lot codes with the release
              notice.
            </p>
            <p className="mt-4">
              <a
                href="#reserve"
                className="inline-flex border-b border-white/40 pb-0.5 text-sm font-semibold transition-colors hover:border-lemon hover:text-lemon"
              >
                Reserve your batch
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-7 font-mono text-[11px] tracking-[0.06em] text-white/45">
          <span>© Staple Wellness Pvt Ltd. All rights reserved.</span>
          <span>Privacy Policy · Terms of Sale · Certificates of Analysis</span>
        </div>

        <p className="mt-6 border-t border-white/10 pt-6 text-[11px] leading-[1.7] text-white/40">
          These statements have not been evaluated by the Food Safety and Standards Authority of India.
          Products are not intended to diagnose, treat, cure, or prevent any disease. Always consult a
          qualified healthcare professional before beginning any supplement regimen.
        </p>
      </div>
    </footer>
  );
}
