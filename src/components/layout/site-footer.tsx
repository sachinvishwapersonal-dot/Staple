import Image from 'next/image';
import { FOOTER } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="bg-night pt-[clamp(56px,6vw,88px)] text-white">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 border-b border-white/12 pb-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/brand/staple-logo-light.png"
              alt="Staple Wellness"
              width={1200}
              height={468}
              className="mb-5 h-[56px] w-auto"
            />
            <p className="max-w-[34ch] text-sm leading-[1.7] text-white/60">{FOOTER.tagline}</p>
          </div>

          {FOOTER.columns.map((column) => (
            <div key={column.heading}>
              <h4 className="mb-[18px] text-sm font-medium text-white/50">
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
            <h4 className="mb-[18px] text-sm font-medium text-white/50">
              Waitlist
            </h4>
            <p className="m-0 text-sm text-white/60">{FOOTER.waitlist}</p>
            <p className="mt-4">
              <a
                href="/#waitlist"
                className="inline-flex border-b border-white/40 pb-0.5 text-sm font-semibold transition-colors hover:border-lemon hover:text-lemon"
              >
                Join
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 py-7 text-xs leading-[1.7] text-white/50">
          <span>© Staple Wellness Pvt Ltd</span>
          <span>{FOOTER.legal}</span>
        </div>
      </div>
    </footer>
  );
}
