import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Ruler, Gauge, Layers } from "lucide-react";
import { InfoPage, Section, SpecTable } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/what-we-do_/products-and-services_/coating")({
  head: () => ({
    meta: [
      { title: "Pipe Coating — East Pipes" },
      {
        name: "description",
        content:
          "Protective pipe coatings — 3LPE, 3LPP, FBE, DFBE, ARO and rough coating — up to 4.5M m²/year, OD 2–120 inches, to Saudi Aramco, SWCC and international standards.",
      },
    ],
  }),
  component: Coating,
});

const kpis = [
  { icon: Ruler, value: "2–120", unit: '"', label: "Outside diameter" },
  { icon: Gauge, value: "4.5", unit: "M m²", label: "Annual capacity" },
  { icon: Layers, value: "26", unit: " m", label: "Max pipe length" },
];

const coatings = [
  { code: "3LPE", name: "3-Layer Polyethylene", desc: "Robust multi-layer protection for buried pipelines in demanding soils." },
  { code: "3LPP", name: "3-Layer Polypropylene", desc: "High-temperature resistance for elevated-temperature service." },
  { code: "FBE", name: "Fusion Bonded Epoxy", desc: "Single-layer corrosion protection with excellent adhesion." },
  { code: "DFBE", name: "Dual-Layer FBE", desc: "Added abrasion resistance for trenchless and harsh installs." },
  { code: "ARO", name: "Anti-Rust Outer", desc: "Protective outer layer guarding against surface corrosion." },
  { code: "Rough", name: "Rough Coating", desc: "Enhanced surface profile for concrete weight-coat adhesion." },
];

function Coating() {
  return (
    <InfoPage
      image={EP_MEDIA.coating}
      eyebrow="Products & Services"
      title="Pipe Coating"
      sub="A full range of protective coatings for pipes of all sizes, including those for the harshest and most corrosive environments."
      cta={{ label: "Request a quote", to: "/get-quote" }}
      stats={[
        { value: "4.5M m²", label: "Annual capacity" },
        { value: '2–120"', label: "Outside diameter" },
        { value: "26 m", label: "Max length" },
        { value: "6", label: "Coating systems" },
      ]}
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Overview" title="Protection engineered to last." />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              East Pipes offers coating solutions to most international standards. Our plant is
              equipped with the latest manufacturing and testing technologies to ensure compliance
              with customers' specifications and requirements — with coated pipe deployed across a
              wide range of applications, including severe environmental conditions.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-secondary p-5">
              <ShieldCheck className="h-8 w-8 shrink-0 text-brand" />
              <div>
                <div className="text-2xl font-semibold text-foreground">
                  <Counter to={4.5} decimals={1} suffix="M m²" /> / year
                </div>
                <div className="text-sm text-muted-foreground">Annual coating capacity</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {kpis.map((k, i) => {
              const Icon = k.icon;
              return (
                <Reveal key={k.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="h-full rounded-2xl border border-border bg-card p-5 text-center">
                    <Icon className="mx-auto h-6 w-6 text-brand" />
                    <div className="mt-3 text-xl font-semibold tabular-nums text-foreground">
                      {k.value}
                      <span className="text-sm font-normal text-muted-foreground">{k.unit}</span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{k.label}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Coating systems */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Coating Systems"
          title="Six systems for every environment."
          intro="From buried transmission lines to abrasive, high-temperature service — a coating engineered for the job."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coatings.map((c, i) => (
            <Reveal key={c.code} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-white">
                  {c.code}
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Uses + notable projects */}
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading tone="dark" eyebrow="Uses" title="Where our coatings perform." />
            <ul className="mt-6 space-y-3">
              {[
                "Buried oil & gas transmission pipelines",
                "Potable and bulk water networks",
                "Harsh, corrosive and high-temperature service",
                "Trenchless and abrasive installation environments",
              ].map((u) => (
                <li key={u} className="flex items-start gap-3 text-white/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="leading-relaxed">{u}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading tone="dark" eyebrow="Notable Projects" title="Protection at scale." />
            <div className="mt-6 space-y-4">
              {[
                { client: "Saudi Aramco", scope: "3LPE/FBE-coated line pipe for sour and corrosive service." },
                { client: "SWCC", scope: "Coated large-diameter pipe for water transmission networks." },
              ].map((p) => (
                <div key={p.client} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-xs font-medium uppercase tracking-widest text-brand">Client</div>
                  <h3 className="mt-2 font-semibold text-white">{p.client}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{p.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Specifications" title="Coating range & standards." />
          <div className="mt-8">
            <SpecTable
              rows={[
                ["Outside diameter", "2 – 120 inches"],
                ["Annual capacity", "4.5 million square metres"],
                ["Maximum pipe length", "Up to 26 metres"],
                ["External coating", "3LPE, 3LPP, FBE (single & dual layer), ARO, Rough"],
                ["Standards", "Saudi Aramco, SWCC & most international standards"],
              ]}
            />
          </div>
        </div>
      </Section>
    </InfoPage>
  );
}
