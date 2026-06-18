import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { Eyebrow } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — East Pipes" },
      { name: "description", content: "Join the team building the steel arteries of the next era. Careers at East Pipes." },
      { property: "og:title", content: "Careers at East Pipes" },
    ],
  }),
  component: Careers,
});

const roles = [
  { t: "Senior Welding Engineer", d: "Dammam · Full-time" },
  { t: "Quality Manager — LSAW Mill", d: "Dammam · Full-time" },
  { t: "Investor Relations Analyst", d: "Riyadh · Full-time" },
  { t: "ESG & Sustainability Lead", d: "Dammam · Full-time" },
  { t: "International Sales Director", d: "Dubai · Full-time" },
];

function Careers() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=2000&q=80"
        eyebrow="Careers"
        title={<>Build a career that <span className="text-white/55">builds the world.</span></>}
        intro="2,400+ engineers, operators and specialists. One ambition."
      />
      <section className="bg-background">
        <div className="container-wide section-pad">
          <Eyebrow>Open roles</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium text-ink mb-10">Now hiring.</h2>
          <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
            {roles.map((r) => (
              <li key={r.t} className="p-6 flex items-center justify-between hover:bg-secondary transition">
                <div>
                  <div className="text-lg text-ink">{r.t}</div>
                  <div className="text-sm text-foreground/55 font-mono">{r.d}</div>
                </div>
                <a href="#" className="text-sm font-medium text-brand">Apply →</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand
        eyebrow="Don't see your role?"
        title="Send us your CV. We're always meeting exceptional people."
        primary={{ label: "Contact talent", to: "/contact" }}
      />
    </PageShell>
  );
}
