import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { Reveal } from "@/lib/reveal";
import { Eyebrow } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — East Pipes" },
      { name: "description", content: "LSAW pipes, HSAW pipes and advanced coatings & linings — engineered for critical service across energy, water and infrastructure." },
      { property: "og:title", content: "East Pipes — Solutions" },
      { property: "og:description", content: "LSAW · HSAW · Coatings · Engineered for the world's most demanding operators." },
    ],
  }),
  component: Solutions,
});

const products = [
  { tag: "LSAW", t: "Longitudinal submerged-arc welded pipes", d: "Heavy-wall, large-diameter pipes for high-pressure crude, gas and water transmission. OD up to 60\".", img: "https://images.unsplash.com/photo-1605369572399-05d8d64a0f5a?w=1400&q=80" },
  { tag: "HSAW", t: "Helical submerged-arc welded pipes", d: "Efficient large-diameter pipes for trunkline water transmission and structural piling. OD up to 120\".", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80" },
  { tag: "Coatings", t: "3LPP / 3LPE / FBE coatings & linings", d: "Multi-layer external coatings and internal linings extending asset life by decades.", img: "https://images.unsplash.com/photo-1565793979206-6d99f1782ebe?w=1400&q=80" },
];

const sectors = [
  { t: "Oil & Gas", d: "Onshore and offshore transmission for the world's most demanding operators." },
  { t: "Water Transmission", d: "Nation-scale trunklines securing strategic water reserves." },
  { t: "Infrastructure", d: "Urban networks, district cooling and industrial estates." },
  { t: "Marine & Offshore", d: "Subsea trunklines and structural piling engineered for corrosive environments." },
];

function Solutions() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=2000&q=80"
        eyebrow="Solutions"
        title={<>Pipes engineered for <span className="text-white/55">critical service.</span></>}
        intro="Three product families. One uncompromising standard."
      />

      <section className="bg-background">
        <div className="container-wide section-pad space-y-24">
          {products.map((p, i) => (
            <Reveal key={p.tag}>
              <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>:first-child]:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <img src={p.img} alt="" className="h-full w-full object-cover" />
                </div>
                <div>
                  <Eyebrow>{p.tag}</Eyebrow>
                  <h2 className="mt-4 text-4xl md:text-5xl font-medium text-ink text-balance">{p.t}</h2>
                  <p className="mt-6 text-foreground/65 text-lg leading-relaxed">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-wide section-pad">
          <Eyebrow>Sectors</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium text-ink mb-12">Where our steel works.</h2>
          <div className="grid gap-px bg-border rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <Reveal key={s.t} delay={i * 50} className="bg-card p-8">
                <h3 className="text-xl font-medium text-ink">{s.t}</h3>
                <p className="mt-3 text-foreground/65">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Specifications & enquiries"
        title="Talk to a sales engineer about your next project."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={{ label: "View projects", to: "/projects" }}
      />
    </PageShell>
  );
}
