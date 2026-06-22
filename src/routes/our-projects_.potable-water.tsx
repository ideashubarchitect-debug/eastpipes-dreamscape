import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Droplets, Ruler, Link2, ShieldCheck } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/our-projects_/potable-water")({
  head: () => ({
    meta: [
      { title: "Potable Water Projects — East Pipes" },
      {
        name: "description",
        content:
          "Large-diameter HSAW pipe for potable water distribution networks and irrigation, supplied to SWCC and national water programmes.",
      },
    ],
  }),
  component: PotableWater,
});

const uses = [
  "Potable water distribution networks",
  "Bulk and strategic water transmission",
  "Irrigation and agricultural water systems",
  "Desalinated water conveyance",
];

const capabilities = [
  { icon: Ruler, t: "Up to 100\" diameter", d: "Large-diameter HSAW for bulk water transmission." },
  { icon: ShieldCheck, t: "Certified coatings", d: "Cement-compatible and protective coatings to SWCC standards." },
  { icon: Link2, t: "Double jointing", d: "Joints up to 26 m to cut field welds and speed installation." },
];

const projects = [
  { client: "Saline Water Conversion Corporation (SWCC)", scope: "Large-diameter HSAW pipe for potable water transmission networks.", metric: "Up to 100\" dia" },
  { client: "National Water Programmes", scope: "Coated pipe supporting the Kingdom's water-security agenda.", metric: "Vision 2030" },
  { client: "Irrigation Infrastructure", scope: "Durable pipe systems for large-scale agricultural water networks.", metric: "Coated HSAW" },
];

function PotableWater() {
  return (
    <InfoPage
      image={EP_MEDIA.glance2}
      eyebrow="Our Projects · Potable Water"
      title="Carrying water to communities."
      sub="Large-diameter HSAW pipe for the strategic water networks and irrigation systems that serve the Kingdom."
      stats={[
        { value: '100"', label: "Max diameter" },
        { value: "SWCC", label: "Trusted by" },
        { value: "26 m", label: "Double-jointed" },
        { value: "Vision 2030", label: "Aligned" },
      ]}
    >
      {/* Overview */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="accent-bar" />
            <p className="lede text-balance font-medium text-foreground">
              In alignment with Vision 2030, East Pipes plays a key role in supplying high-quality
              HSAW pipe for potable water distribution networks and irrigation systems across the
              Kingdom.
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Key clients include the Saline Water Conversion Corporation (SWCC), among other
              leading organisations in the water sector — supporting the Kingdom's water-security
              ambitions with reliable, certified pipe.
            </p>
          </div>
        </div>
      </Section>

      {/* Uses */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Uses" title="Built for water security." />
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
        image={EP_MEDIA.story1}
        eyebrow="National Impact"
        title="Water security, engineered."
        body="From desalination plants to communities — our pipe forms the arteries of the Kingdom's strategic water networks."
      />

      {/* Notable projects */}
      <Section>
        <SectionHeading eyebrow="Notable Projects" title="Where our pipe performs." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.client} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="lift h-full overflow-hidden rounded-2xl border border-border bg-card">
                <div className="bg-gradient-to-br from-ink to-brand/70 p-6 text-white">
                  <Droplets className="h-7 w-7 text-white/90" />
                  <div className="mt-4 text-xs uppercase tracking-widest text-white/60">Client</div>
                  <h3 className="text-lg font-semibold leading-snug">{p.client}</h3>
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
            to="/our-projects/oil-and-gas"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition hover:border-brand hover:text-brand"
          >
            Oil &amp; gas projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </InfoPage>
  );
}
