import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Scale, Users, ShieldCheck, Landmark } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

const CDN = "https://www.eastpipes.com/wp-content/uploads";

const members = [
  { name: "Vipul Shiv Sahai Mathur", role: "Chairman", tag: "Non-Executive", img: `${CDN}/2025/11/vipul.webp` },
  { name: "Yazeed Abdulrahman Nasser Altoaimi", role: "Vice Chairman", tag: "Non-Executive", img: `${CDN}/2025/11/yazed.webp` },
  { name: "Fahad Mohammed Saleh Al-Hammadi", role: "Board Member", tag: "Non-Executive", img: `${CDN}/2025/11/fahad-267x300.webp` },
  { name: "Aziz Mohammed Mubarak Alqahtani", role: "Board Member", tag: "Non-Executive", img: `${CDN}/2025/11/aziz-267x300.webp` },
  { name: "Walid Abdullah Suliman Al-Zakri", role: "Board Member", tag: "Independent", img: `${CDN}/2025/11/walid-267x300.webp` },
  { name: "Faris Abdulrahman Ibrahim Alfaris", role: "Board Member", tag: "Non-Executive", img: `${CDN}/2025/11/faris-261x300.webp` },
  { name: "Suhail Amin Nathani", role: "Board Member", tag: "Non-Executive", img: `${CDN}/2025/11/suhail-267x300.webp` },
  { name: "Viswanathan Hariharan Kollengode", role: "Board Member", tag: "Non-Executive", img: `${CDN}/2025/11/khv-267x300.webp` },
];

const committees = [
  { icon: Scale, name: "Audit Committee", desc: "Oversight of financial reporting, internal controls, audit and compliance." },
  { icon: Users, name: "Nomination & Remuneration", desc: "Board composition, succession planning and executive compensation policy." },
  { icon: ShieldCheck, name: "Risk Committee", desc: "Enterprise risk framework, governance and the company's risk appetite." },
];

const principles = [
  { k: "Independent voice", v: "Independent directors safeguarding the interests of all shareholders." },
  { k: "Clear separation", v: "A non-executive Chairman, distinct from executive management." },
  { k: "Defined mandate", v: "A board term of 2025–2029 following the company's public listing." },
  { k: "Transparent disclosure", v: "Governance aligned with the standards expected of a listed company." },
];

export const Route = createFileRoute("/our-story_/leadership/bod")({
  head: () => ({
    meta: [
      { title: "Board of Directors — East Pipes" },
      {
        name: "description",
        content:
          "The Board of Directors of East Pipes Integrated Company (Tadawul: 1321) for the 2025–2029 term — experienced, independent stewardship.",
      },
    ],
  }),
  component: Bod,
});

function Bod() {
  return (
    <InfoPage
      image={EP_MEDIA.glance1}
      eyebrow="Leadership · Board of Directors"
      title="Stewardship you can trust."
      sub="An experienced board guiding East Pipes through its 2025–2029 term following the company's public listing on the Saudi Exchange."
      stats={[
        { value: "8", label: "Board members" },
        { value: "2025–2029", label: "Board term" },
        { value: "Independent", label: "Director representation" },
        { value: "Tadawul 1321", label: "Publicly listed" },
      ]}
    >
      {/* Lede */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="accent-bar" />
            <p className="lede text-balance font-medium text-foreground">
              Our Board brings together deep industrial, financial and capital-markets expertise to
              guide East Pipes with discipline, independence and a long-term view.
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              As a publicly listed company, robust corporate governance is central to how we
              operate. The Board sets strategy, oversees performance and risk, and safeguards the
              interests of all shareholders through its committees and a clear separation of
              responsibilities.
            </p>
          </div>
        </div>
      </Section>

      {/* Members */}
      <Section tone="muted">
        <SectionHeading eyebrow="Meet the Board" title="The Board of Directors." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="group lift media-zoom overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-ink to-brand/70">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                    {m.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold leading-snug text-foreground">{m.name}</h3>
                  <p className="mt-1 text-sm text-brand">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Parallax governance statement */}
      <Parallax
        image={EP_MEDIA.story2}
        eyebrow="Corporate Governance"
        title="Governance that earns confidence."
        body="A framework of board committees, transparent disclosure and disciplined oversight — the foundation of a trusted, listed enterprise."
        cta={{ label: "Company governance", to: "/our-story/company-governance" }}
      />

      {/* Committees */}
      <Section>
        <SectionHeading eyebrow="Board Committees" title="Structured oversight." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {committees.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="lift h-full rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{c.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Principles */}
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <SectionHeading tone="dark" eyebrow="How the Board Works" title="Principles of good governance." />
          </div>
          <div className="lg:col-span-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.k} delay={((i % 2) + 1) as 1 | 2} className="bg-ink">
                <div className="flex h-full gap-4 p-7">
                  <Landmark className="h-6 w-6 shrink-0 text-brand" />
                  <div>
                    <div className="font-semibold text-white">{p.k}</div>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">{p.v}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/our-story/leadership/executive-leadership"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
          >
            Executive leadership <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/investor-relations"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:border-white/60"
          >
            Investor relations <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </InfoPage>
  );
}
