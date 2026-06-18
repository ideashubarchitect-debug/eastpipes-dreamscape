import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { SustainabilityTeaser } from "@/components/site/SustainabilityTeaser";
import { Reveal } from "@/lib/reveal";
import { Eyebrow } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — East Pipes" },
      { name: "description", content: "ESG strategy, decarbonisation pathway and measurable progress at East Pipes." },
      { property: "og:title", content: "East Pipes Sustainability" },
    ],
  }),
  component: Sustainability,
});

const metrics = [
  { v: "−30%", l: "Scope-1 emissions vs 2020" },
  { v: "98%", l: "Steel scrap recyclability" },
  { v: "96%", l: "Process water recovered" },
  { v: "22%", l: "Plant load from on-site solar" },
  { v: "0.4M", l: "Local jobs supported (direct + indirect)" },
  { v: "100%", l: "Tier-1 suppliers ESG-screened" },
];

function Sustainability() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=2000&q=80"
        eyebrow="Sustainability"
        title={<>Engineered to <span className="text-white/55">decarbonise infrastructure.</span></>}
        intro="A measurable, audited pathway to net-zero — disclosed to investors and customers."
      />

      <section className="bg-background">
        <div className="container-wide section-pad">
          <Eyebrow>ESG metrics</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium text-ink mb-12">Progress, measured.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {metrics.map((m, i) => (
              <Reveal key={m.l} delay={i * 40} className="bg-card p-8">
                <div className="font-display text-5xl tracking-tight text-ink">{m.v}</div>
                <div className="mt-3 text-foreground/65">{m.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SustainabilityTeaser />

      <CtaBand
        eyebrow="ESG disclosures"
        title="Download our latest sustainability report."
        primary={{ label: "Financial & ESG reports", to: "/investors/reports" }}
      />
    </PageShell>
  );
}
