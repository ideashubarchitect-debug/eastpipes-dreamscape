import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, FileCheck, ShieldCheck, Scale, Users, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/facility-flag.jpg";

export const Route = createFileRoute("/our-story_/company-governance")({
  head: () => ({
    meta: [
      { title: "Governance & Leadership — East Pipes" },
      {
        name: "description",
        content:
          "Institutional-grade governance: board composition, executive leadership, board committees, compliance certifications and ESG commitments at East Pipes.",
      },
    ],
  }),
  component: Governance,
});

const leadership = [
  { name: "Chairman of the Board", role: "Non-Executive Chairman", initials: "CB" },
  { name: "Chief Executive Officer", role: "Executive Director", initials: "CE" },
  { name: "Chief Financial Officer", role: "Executive Management", initials: "CF" },
  { name: "Chief Operating Officer", role: "Executive Management", initials: "CO" },
];

const committees = [
  {
    icon: Scale,
    name: "Audit Committee",
    desc: "Oversight of financial reporting, internal controls and external audit.",
  },
  {
    icon: Users,
    name: "Nomination & Remuneration",
    desc: "Board composition, succession and executive compensation policy.",
  },
  {
    icon: ShieldCheck,
    name: "Risk Committee",
    desc: "Enterprise risk framework, compliance and cybersecurity posture.",
  },
];

const certifications = [
  { code: "API 5L", label: "Line pipe standard" },
  { code: "API Spec Q1", label: "Quality management systems" },
  { code: "ISO 9001:2015", label: "Quality management" },
  { code: "ISO 45001:2018", label: "Occupational health & safety" },
  { code: "ISO 14001:2015", label: "Environmental management" },
  { code: "ISO/IEC 17025:2017", label: "Laboratory testing competence" },
];

const esg = [
  {
    letter: "E",
    title: "Environment",
    points: [
      "Emissions reduction roadmap",
      "Water recycling & efficiency",
      "Responsible steel sourcing",
    ],
  },
  {
    letter: "S",
    title: "Social",
    points: ["Saudization & local talent", "World-class HSE record", "Community investment"],
  },
  {
    letter: "G",
    title: "Governance",
    points: ["Independent board majority", "Transparent disclosure", "Robust risk controls"],
  },
];

function Governance() {
  return (
    <div className="bg-background">
      <Header />
      <main className="brand-theme">
        <PageHero
          image={hero}
          eyebrow="Governance"
          title="Institutional-grade trust, by design."
          sub="As a publicly listed company, accountability and transparency are built into how we operate — from boardroom to shop floor."
        />

        {/* Trust signal strip */}
        <section className="border-b border-border py-10">
          <div className="container-wide flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" /> Listed on Tadawul (1321)
            </span>
            <span className="flex items-center gap-2">
              <FileCheck className="h-4 w-4 text-brand" /> API-approved manufacturer
            </span>
            <span className="flex items-center gap-2">
              <Award className="h-4 w-4 text-brand" /> ISO 9001 · 45001 · 14001 certified
            </span>
            <span className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-brand" /> Board term 2025–2029
            </span>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 md:py-32">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Leadership"
              title="Experienced stewardship."
              intro="Our board and executive team bring deep industrial, financial and capital-markets expertise."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leadership.map((m, i) => (
                <Reveal key={m.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="group rounded-2xl border border-border bg-card p-6">
                    <div className="flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-ink to-brand/70 text-3xl font-semibold text-white">
                      {m.initials}
                    </div>
                    <h3 className="mt-5 font-semibold text-foreground">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Committees */}
        <section className="bg-secondary py-24 md:py-32">
          <div className="container-wide">
            <SectionHeading eyebrow="Board Committees" title="Structured oversight." />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {committees.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                    <div className="h-full rounded-2xl border border-border bg-card p-8">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold text-foreground">{c.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 md:py-32">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Compliance & Certifications"
              title="Audited, certified, accountable."
              intro="Our quality, environmental and safety systems are independently certified to international standards."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((c, i) => (
                <Reveal key={c.code} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ink text-xs font-semibold text-white">
                      {c.code.split(" ")[0]}
                    </span>
                    <div>
                      <div className="font-semibold text-foreground">{c.code}</div>
                      <div className="text-sm text-muted-foreground">{c.label}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ESG */}
        <section className="bg-ink py-24 text-white md:py-32">
          <div className="container-wide">
            <SectionHeading
              tone="dark"
              eyebrow="ESG Commitments"
              title="Building responsibly, for the long term."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {esg.map((e, i) => (
                <Reveal key={e.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-2xl font-semibold text-brand-foreground">
                      {e.letter}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{e.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {e.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-white/70">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-12">
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
              >
                Explore our sustainability strategy <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
