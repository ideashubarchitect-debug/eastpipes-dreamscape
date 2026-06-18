import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { StockChart } from "@/components/site/StockChart";
import { Eyebrow } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/investors/stock")({
  head: () => ({
    meta: [
      { title: "Stock & Performance — East Pipes (Tadawul: 1321)" },
      { name: "description", content: "Live stock price, performance charts and key ratios for East Pipes on the Saudi Exchange." },
      { property: "og:title", content: "East Pipes Stock & Performance" },
      { property: "og:description", content: "EASTP price, charts, ratios and shareholder structure." },
    ],
  }),
  component: Stock,
});

const ratios = [
  ["52-week high", "SAR 44.10"],
  ["52-week low", "SAR 28.65"],
  ["Avg. daily volume", "1.42M shares"],
  ["Shares outstanding", "130.5M"],
  ["P/E (TTM)", "16.8×"],
  ["P/B", "3.1×"],
  ["Dividend yield", "3.14%"],
  ["Beta (3Y)", "0.92"],
];

const shareholders = [
  ["Public Investment Fund", "21.4%"],
  ["Saudi Aramco Pension", "9.8%"],
  ["Hassana Investment", "7.1%"],
  ["Free float", "61.7%"],
];

function Stock() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=2000&q=80"
        eyebrow="Stock · EASTP · 1321"
        title="Live price & performance"
        intro="Track EASTP on the Saudi Exchange in real time."
      />

      <section className="bg-background">
        <div className="container-wide section-pad">
          <StockChart />

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Key ratios</Eyebrow>
              <h2 className="mt-4 text-3xl font-medium text-ink mb-6">At a glance</h2>
              <dl className="grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
                {ratios.map(([k, v]) => (
                  <div key={k} className="bg-card p-5">
                    <dt className="text-xs font-mono uppercase tracking-wider text-foreground/55">{k}</dt>
                    <dd className="mt-2 font-display text-2xl text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <Eyebrow>Shareholder structure</Eyebrow>
              <h2 className="mt-4 text-3xl font-medium text-ink mb-6">Ownership</h2>
              <ul className="space-y-3">
                {shareholders.map(([n, p]) => (
                  <li key={n} className="rounded-xl border border-border bg-card p-5 flex items-center justify-between">
                    <span className="text-ink">{n}</span>
                    <span className="font-mono text-brand">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-foreground/50 font-mono">
                Illustrative placeholders — update with verified data from the latest disclosure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Stay informed"
        title="Subscribe to investor alerts and announcements."
        primary={{ label: "Contact IR", to: "/investors/contact" }}
        secondary={{ label: "Disclosures", to: "/investors/announcements" }}
      />
    </PageShell>
  );
}
