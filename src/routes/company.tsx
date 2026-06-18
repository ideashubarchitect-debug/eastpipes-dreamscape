import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { Reveal } from "@/lib/reveal";
import { Eyebrow } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — East Pipes" },
      { name: "description", content: "East Pipes Integrated Co. — a Saudi industrial leader engineering steel pipe systems for the world." },
      { property: "og:title", content: "East Pipes — Company" },
      { property: "og:description", content: "Heritage, leadership, governance and the people behind East Pipes." },
    ],
  }),
  component: Company,
});

const milestones = [
  { y: "2010", t: "Foundation in Dammam's Second Industrial City." },
  { y: "2014", t: "First LSAW line commissioned — 350,000 t capacity." },
  { y: "2017", t: "HSAW expansion · first international export deliveries." },
  { y: "2020", t: "ISO 45001 certification and digital-twin programme launch." },
  { y: "2023", t: "Listed on the Saudi Exchange (Tadawul: 1321)." },
  { y: "2025", t: "1 million tonnes annual capacity. 50+ countries served." },
];

function Company() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1565793979206-6d99f1782ebe?w=2000&q=80"
        eyebrow="Company"
        title={<>A Saudi industrial leader, <span className="text-white/55">engineered for the world.</span></>}
        intro="Built on decades of engineering rigour and a singular ambition: to manufacture the steel arteries of the next century."
      />

      <section className="bg-background">
        <div className="container-wide section-pad grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium text-ink text-balance">
              Precision-engineered steel pipe systems, made in the Kingdom.
            </h2>
            <p className="mt-6 text-foreground/65 text-lg leading-relaxed">
              From a single plant in Dammam to a multi-line industrial complex exporting
              to five continents, East Pipes has become a category leader in LSAW, HSAW
              and high-performance coatings for the world's most demanding operators.
            </p>
            <p className="mt-4 text-foreground/65 text-lg leading-relaxed">
              We are a publicly listed company aligned with Saudi Vision 2030 — investing
              in local content, advanced manufacturing, and the people who make it possible.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <img src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80" alt="" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-wide section-pad">
          <Eyebrow>Milestones</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium text-ink mb-12">From foundation to flagship.</h2>
          <ol className="grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-2">
            {milestones.map((m, i) => (
              <Reveal key={m.y} delay={i * 40} className="bg-card p-8">
                <div className="font-mono text-brand">{m.y}</div>
                <div className="mt-2 text-lg text-ink">{m.t}</div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        eyebrow="Discover more"
        title="Governance, leadership and the people behind East Pipes."
        primary={{ label: "Governance", to: "/investors/governance" }}
        secondary={{ label: "Sustainability", to: "/sustainability" }}
      />
    </PageShell>
  );
}
