import { ASSURANCE_ITEMS } from '@/config/standards';

export function AssuranceStrip() {
  return (
    <section
      aria-label="Batch 01 specification"
      className="border-y border-[var(--color-border-hairline)] bg-canvas-deep"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-[auto_repeat(3,1fr)]">
          <div className="flex flex-col justify-center border-b border-[var(--color-border-hairline)] py-7 lg:border-b-0 lg:border-r lg:pr-10">
            <span className="folio mb-2.5 text-sage">Specimen</span>
            <span className="max-w-[22ch] font-display text-[21px] font-normal leading-[1.2]">
              The Batch 01 specification
            </span>
          </div>
          {ASSURANCE_ITEMS.map((item, index) => (
            <div
              key={item.metric}
              className="border-b border-[var(--color-border-hairline)] py-7 lg:border-b-0 lg:border-r lg:px-10 lg:last:border-r-0"
            >
              <span className="folio mb-3 block text-ink-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="mb-2.5 font-display text-[26px] font-normal leading-none tracking-[-0.02em]">
                {item.metric}
              </div>
              <div className="whitespace-pre-line font-mono text-[10px] uppercase leading-[1.6] tracking-[0.12em] text-ink-muted">
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
