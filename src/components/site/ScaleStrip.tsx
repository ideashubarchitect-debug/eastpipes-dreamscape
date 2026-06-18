import { Reveal } from "@/lib/reveal";
import { Eyebrow } from "./primitives";

const stats = [
  { v: "1M+", l: "Tons annual capacity" },
  { v: "50+", l: "Countries served" },
  { v: "1.9B", l: "SAR order backlog" },
  { v: "2,400+", l: "Engineers & operators" },
  { v: "15+", l: "Years of excellence" },
  { v: "API 5L", l: "Certified mill" },
];

export function ScaleStrip() {
  return (
    <section className="bg-ink text-white grain">
      <div className="container-wide section-pad">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-end">
          <div>
            <Eyebrow className="text-signal">Scale in numbers</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-balance">
              Industrial scale. Investor-grade discipline.
            </h2>
          </div>
          <p className="text-white/65 text-lg leading-relaxed">
            Continuous investment in capacity, technology and people — translated into measurable
            outcomes for customers, partners and shareholders.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 60}>
              <div className="border-t border-white/15 pt-5">
                <div className="font-display text-4xl md:text-5xl tracking-tight">{s.v}</div>
                <div className="mt-3 text-sm text-white/60 leading-snug">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
