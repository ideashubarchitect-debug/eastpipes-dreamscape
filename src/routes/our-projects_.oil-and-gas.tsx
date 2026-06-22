import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Flame, Gauge, ShieldCheck, Award } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/our-projects_/oil-and-gas")({
  head: () => ({
    meta: [
      { title: "Oil & Gas Projects — East Pipes" },
      {
        name: "description",
        content:
          "HSAW line pipe up to API 5L X-80 for oil and gas transmission, supplied to leading operators including Saudi Aramco.",
      },
    ],
  }),
  component: OilGas,
});

const uses = [
  "High-pressure hydrocarbon transmission pipelines",
  "Cross-country oil and gas networks",
  "Sour and corrosive service with protective coatings",
  "Gathering and export line pipe",
];

const capabilities = [
  { icon: Gauge, t: "API 5L up to X-80", d: "Among the highest grades available for oil & gas service." },
  { icon: ShieldCheck, t: "Sour-service ready", d: "3LPE, 3LPP and FBE coatings for corrosive environments." },
  { icon: Award, t: "API approved", d: "An API-approved direct manufacturer trusted by major operators." },
];

const projects = [
  { client: "Saudi Aramco", scope: "API 5L line pipe for oil & gas transmission across the Kingdom.", metric: "Up to X-80" },
  { client: "Regional Operators", scope: "Heavy-wall HSAW line pipe for high-pressure transmission.", metric: "20–100\" dia" },
  { client: "Energy Infrastructure", scope: "Coated pipe engineered for demanding, long-distance service.", metric: "3LPE / FBE" },
];

function OilGas() {
  return (
    <InfoPage
      image={EP_MEDIA.whatWeDo1}
      eyebrow="Our Projects · Oil & Gas"
      title="Pipe that moves the Kingdom's energy."
      sub="High-pressure HSAW line pipe up to API 5L grade X-80, engineered for the most demanding hydrocarbon transmission projects."
      stats={[
        { value: "X-80", label: "Max API 5L grade" },
        { value: '100"', label: "Max diameter" },
        { value: "API", label: "Approved manufacturer" },
        { value: "Aramco", label: "Trusted by" },
      ]}
    >
      {/* Overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="accent-bar" />
            <p className="lede text-balance font-medium text-foreground">
              East Pipes supplies high-quality HSAW pipe to leading oil and gas organisations,
              supporting the transmission pipelines that move hydrocarbons safely across long
              distances.
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our production capability extends to API 5L grade X-80 — among the highest available —
              and our status as an API-approved direct manufacturer makes us a preferred supplier
              for major clients including Saudi Aramco.
            </p>
          </div>
        </div>
      </Section>

      {/* Uses */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Uses" title="Engineered for demanding service." />
            <ul className="mt-8 space-y-3">
              {uses.map((u) => (
                <li key={u} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="leading-relaxed">{u}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.t} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="lift flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold text-foreground">{c.t}</div>
                      <div className="text-sm text-muted-foreground">{c.d}</div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Parallax */}
      <Parallax
        image={EP_MEDIA.story2}
        eyebrow="Proven at Scale"
        title="Trusted by the largest operators."
        body="An API-approved manufacturer able to fulfil large orders without subcontracting — the partner of choice for critical energy infrastructure."
      />

      {/* Notable projects */}
      <Section>
        <SectionHeading eyebrow="Notable Projects" title="Where our pipe performs." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.client} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="lift h-full overflow-hidden rounded-2xl border border-border bg-card">
                <div className="bg-gradient-to-br from-ink to-brand/70 p-6 text-white">
                  <Flame className="h-7 w-7 text-white/90" />
                  <div className="mt-4 text-xs uppercase tracking-widest text-white/60">Client</div>
                  <h3 className="text-lg font-semibold">{p.client}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.scope}</p>
                  <div className="mt-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                    {p.metric}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/what-we-do/products-and-services/hsaw-pipes"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-brand"
          >
            HSAW pipe specifications <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/our-projects/potable-water"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition hover:border-brand hover:text-brand"
          >
            Potable water projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </InfoPage>
  );
}
