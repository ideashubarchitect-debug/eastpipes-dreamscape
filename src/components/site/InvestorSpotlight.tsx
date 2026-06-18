import { Reveal } from "@/lib/reveal";
import { Eyebrow, PrimaryButton, GhostButton, TickerPillLight } from "./primitives";
import { kpis } from "@/data/ir";

export function InvestorSpotlight() {
  return (
    <section className="bg-background">
      <div className="container-wide section-pad">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Investor relations</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight text-ink text-balance">
              A listed leader. Built for compounding value.
            </h2>
            <p className="mt-6 text-foreground/65 text-lg leading-relaxed max-w-xl">
              East Pipes is listed on the Saudi Exchange (Tadawul: 1321). Our strategy
              combines disciplined capital allocation, expanding export markets and
              continuous productivity gains — engineered to compound shareholder value
              cycle after cycle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/investors">Visit Investor Hub</PrimaryButton>
              <GhostButton to="/investors/reports">Latest report</GhostButton>
            </div>
            <div className="mt-8"><TickerPillLight /></div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {kpis.map((k, i) => (
              <Reveal key={k.label} delay={i * 50} className="bg-card p-6 md:p-8">
                <div className="eyebrow text-foreground/45">{k.label}</div>
                <div className="mt-3 font-display text-3xl md:text-4xl tracking-tight text-ink">{k.value}</div>
                <div className="mt-1 text-xs font-mono text-emerald-600">{k.delta}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
