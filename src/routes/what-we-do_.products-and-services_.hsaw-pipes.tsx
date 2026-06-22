import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Droplets, Flame, Factory, Check, Ruler, Layers3, Gauge, Award } from "lucide-react";
import { InfoPage, Section, SpecTable } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/what-we-do_/products-and-services_/hsaw-pipes")({
  head: () => ({
    meta: [
      { title: "HSAW Pipes — East Pipes" },
      {
        name: "description",
        content:
          "Helical Submerged Arc Welded (HSAW) steel pipes for water, oil and gas — 500,000 MT/year across four lines, API 5L up to grade X-80.",
      },
    ],
  }),
  component: HsawPipes,
});

const specKpis = [
  { icon: Ruler, value: "20–100", unit: '"', label: "Outer diameter" },
  { icon: Layers3, value: "1", unit: '" max', label: "Wall thickness" },
  { icon: Gauge, value: "8–18", unit: " m", label: "Pipe length" },
  { icon: Factory, value: "4", unit: " lines", label: "Production lines" },
];

const applications = [
  { icon: Droplets, name: "Water", desc: "Potable water distribution and bulk transmission networks across the Kingdom." },
  { icon: Flame, name: "Oil & Gas", desc: "High-pressure transmission pipelines up to API 5L grade X-80." },
  { icon: Factory, name: "Industrial", desc: "Structural and process piping engineered to demanding project specifications." },
];

const advantages = [
  "Dual overlapping inner and outer spiral welds that significantly enhance rigidity and pressure-bearing capacity.",
  "Submerged arc welding process delivering superior impact toughness and structural integrity.",
  "Flexible diameter production from a single strip width, reducing material waste.",
  "Tight dimensional tolerances achieved without post-weld sizing or straightening.",
];

const standards = ["API 5L (to X-80)", "API Spec Q1", "ASTM", "AWWA", "EN", "ISO", "Saudi Aramco"];

function HsawPipes() {
  return (
    <InfoPage
      image={EP_MEDIA.hsaw}
      eyebrow="Products & Services"
      title="HSAW Pipes"
      sub="Helical Submerged Arc Welded steel pipes for water, oil and gas — engineered to the world's most demanding standards."
      cta={{ label: "Request a quote", to: "/get-quote" }}
      stats={[
        { value: "500K MT", label: "Annual capacity" },
        { value: "4", label: "Production lines" },
        { value: '100"', label: "Max diameter" },
        { value: "X-80", label: "API 5L grade" },
      ]}
    >
      {/* Intro + KPI cards */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Overview"
              title="500,000 MT a year, across four lines."
            />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The factory has an annual production capacity of 500,000 metric tons across four
              production lines capable of producing steel pipes for water, oil and gas applications,
              powered by state-of-the-art capabilities to meet our customers' expectations. East
              Pipes is American Petroleum Institute (API) approved to produce high-grade steel pipes.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-secondary p-5">
              <Award className="h-8 w-8 shrink-0 text-brand" />
              <div>
                <div className="text-2xl font-semibold text-foreground">
                  <Counter to={500} suffix="K MT" /> / year
                </div>
                <div className="text-sm text-muted-foreground">Annual HSAW production capacity</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {specKpis.map((k, i) => {
              const Icon = k.icon;
              return (
                <Reveal key={k.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <Icon className="h-6 w-6 text-brand" />
                    <div className="mt-4 text-2xl font-semibold tabular-nums text-foreground">
                      {k.value}
                      <span className="text-base font-normal text-muted-foreground">{k.unit}</span>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{k.label}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section tone="muted">
        <SectionHeading eyebrow="Applications" title="Built for the Kingdom's critical infrastructure." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {applications.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="h-full rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{a.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Notable projects */}
      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="Notable Projects"
          title="Pipe that carries the Kingdom's water and energy."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { client: "Saline Water Conversion Corporation (SWCC)", scope: "Large-diameter HSAW for potable water transmission networks." },
            { client: "Saudi Aramco", scope: "API 5L line pipe up to grade X-80 for oil & gas transmission." },
            { client: "National Infrastructure", scope: "HSAW pipe supplied to irrigation and major infrastructure programmes." },
          ].map((p, i) => (
            <Reveal key={p.client} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="lift h-full rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="text-xs font-medium uppercase tracking-widest text-brand">Client</div>
                <h3 className="mt-2 font-semibold text-white">{p.client}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{p.scope}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Technical advantages + image */}
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={EP_MEDIA.hsawAlt} alt="HSAW pipe production" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeading tone="dark" eyebrow="The HSAW Edge" title="Engineered to outperform." />
            <ul className="mt-8 space-y-4">
              {advantages.map((a, i) => (
                <Reveal key={i} as="li" delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand" />
                  <span className="text-white/80">{a}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Specs + standards */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Specifications" title="Full HSAW range." />
            <div className="mt-8">
              <SpecTable
                rows={[
                  ["Outer diameter", "20 – 100 inches"],
                  ["Wall thickness", "Up to 25.4 mm (1 inch)"],
                  ["Pipe length", "8 – 18 metres"],
                  ["Annual capacity", "Up to 500,000 metric tons"],
                  ["Grade", "API 5L up to X-80"],
                ]}
              />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Standards" title="Certified & compliant." />
            <div className="mt-8 flex flex-wrap gap-3">
              {standards.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/what-we-do/products-and-services/double-jointing"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-brand"
              >
                Double Jointing <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/what-we-do/products-and-services/coating"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition hover:border-brand hover:text-brand"
              >
                Coating <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </InfoPage>
  );
}
