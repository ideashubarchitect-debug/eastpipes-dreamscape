import { TickerPillLight } from "./primitives";

const items = [
  "Tadawul Listed · 1321",
  "API 5L Certified",
  "ISO 9001 · 14001 · 45001",
  "Vision 2030 Industrial Partner",
  "50+ Countries Served",
  "1M+ Tons Annual Capacity",
];

export function ProofBar() {
  return (
    <section className="border-y border-border bg-background">
      <div className="container-wide py-6 flex flex-wrap items-center gap-x-8 gap-y-3 justify-between">
        <TickerPillLight />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-foreground/55">
          {items.map((i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-brand" />{i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
