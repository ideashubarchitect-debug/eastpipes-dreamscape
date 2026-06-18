import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { Reveal } from "@/lib/reveal";
import { Eyebrow } from "@/components/site/primitives";
import { board } from "@/data/ir";
import { Download, Shield, Scale, FileCheck } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/investors/governance")({
  head: () => ({
    meta: [
      { title: "Corporate Governance — East Pipes" },
      { name: "description", content: "Board of Directors, committee composition, governance framework and downloadable policies." },
      { property: "og:title", content: "East Pipes Corporate Governance" },
    ],
  }),
  component: Governance,
});

const committees = [
  { name: "Audit Committee", chair: "Maha Al-Dossary", members: 3 },
  { name: "Nomination & Remuneration", chair: "Hessa Al-Otaibi", members: 3 },
  { name: "Risk & Compliance", chair: "Abdullah Al-Sharif", members: 4 },
];

const policies = [
  "Code of Conduct", "Board Charter", "Audit Committee Charter",
  "Whistleblower Policy", "Related-Party Transactions Policy", "Disclosure Policy",
];

function Governance() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=2000&q=80"
        eyebrow="Corporate Governance"
        title="Accountable. Independent. Investor-aligned."
        intro="A governance framework engineered for transparency and long-term value creation."
      />

      {/* Pillars */}
      <section className="bg-background">
        <div className="container-wide section-pad grid gap-10 md:grid-cols-3">
          {[
            { i: Shield, t: "Independent oversight", d: "Majority-independent board with experienced non-executive directors." },
            { i: Scale, t: "Rigorous controls", d: "Three-lines-of-defence risk model audited by Big-Four assurance partners." },
            { i: FileCheck, t: "Full transparency", d: "Aligned with CMA Corporate Governance Regulations and IFRS reporting." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <p.i className="h-7 w-7 text-brand" />
              <h3 className="mt-6 text-xl font-medium text-ink">{p.t}</h3>
              <p className="mt-2 text-foreground/65">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Board */}
      <section className="bg-secondary">
        <div className="container-wide section-pad">
          <Eyebrow>Board of Directors</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium text-ink mb-10">Leadership steering East Pipes.</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <div className="rounded-2xl bg-card border border-border overflow-hidden">
                  <div className="aspect-[4/5] bg-muted overflow-hidden">
                    <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-mono text-brand">{m.since}</div>
                    <h3 className="mt-2 text-xl font-medium text-ink">{m.name}</h3>
                    <p className="text-foreground/65">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Committees + Policies */}
      <section className="bg-background">
        <div className="container-wide section-pad grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Committees</Eyebrow>
            <h3 className="mt-4 text-2xl font-medium text-ink mb-6">Specialised oversight</h3>
            <ul className="space-y-3">
              {committees.map((c) => (
                <li key={c.name} className="rounded-xl border border-border bg-card p-5">
                  <div className="text-ink font-medium">{c.name}</div>
                  <div className="mt-1 text-sm text-foreground/65">Chair: {c.chair} · {c.members} members</div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Policies & charters</Eyebrow>
            <h3 className="mt-4 text-2xl font-medium text-ink mb-6">Download</h3>
            <ul className="space-y-3">
              {policies.map((p) => (
                <li key={p}>
                  <a href="#" className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 hover:border-brand transition">
                    <span className="text-ink">{p}</span>
                    <Download className="h-4 w-4 text-foreground/50 group-hover:text-brand" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Questions on governance?"
        title="Reach our Company Secretary and IR team."
        primary={{ label: "Contact IR", to: "/investors/contact" }}
      />
    </PageShell>
  );
}
