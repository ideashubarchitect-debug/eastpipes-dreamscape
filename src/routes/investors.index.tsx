import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { Reveal } from "@/lib/reveal";
import { Eyebrow, PrimaryButton, GhostButton, TickerPillLight } from "@/components/site/primitives";
import { StockChart } from "@/components/site/StockChart";
import { kpis, disclosures, reports } from "@/data/ir";
import { CtaBand } from "@/components/site/CtaBand";
import { ArrowUpRight, Download, FileText, Users, Megaphone, LineChart } from "lucide-react";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investor Relations — East Pipes (Tadawul: 1321)" },
      { name: "description", content: "Stock performance, financial reports, governance and disclosures for East Pipes Integrated Co., listed on the Saudi Exchange." },
      { property: "og:title", content: "East Pipes Investor Relations" },
      { property: "og:description", content: "Disciplined capital allocation. Expanding export markets. Engineered to compound shareholder value." },
    ],
  }),
  component: Investors,
});

const quickLinks = [
  { to: "/investors/stock", icon: LineChart, label: "Stock & performance", desc: "Live price, charts, key ratios" },
  { to: "/investors/reports", icon: FileText, label: "Financial reports", desc: "Annual, quarterly, presentations" },
  { to: "/investors/governance", icon: Users, label: "Corporate governance", desc: "Board, committees, policies" },
  { to: "/investors/announcements", icon: Megaphone, label: "Announcements", desc: "Tadawul disclosures & press" },
];

function Investors() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1554260570-9140fd3b7614?w=2000&q=80"
        eyebrow="Investor Relations · Tadawul 1321"
        title={<>A listed leader. <span className="text-white/55">Built for compounding value.</span></>}
        intro="Transparent disclosure, disciplined execution and a strategy engineered for long-term shareholder return."
      >
        <PrimaryButton to="/investors/reports" invert>Latest annual report</PrimaryButton>
        <GhostButton to="/investors/contact" invert>Contact IR</GhostButton>
      </SectionHero>

      {/* At a glance */}
      <section className="bg-background">
        <div className="container-wide section-pad">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <Eyebrow>At a glance · FY 2025</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-ink">Performance, by the numbers.</h2>
            </div>
            <TickerPillLight />
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {kpis.map((k, i) => (
              <Reveal key={k.label} delay={i * 40} className="bg-card p-8">
                <div className="eyebrow text-foreground/45">{k.label}</div>
                <div className="mt-3 font-display text-4xl tracking-tight text-ink">{k.value}</div>
                <div className="mt-1 text-xs font-mono text-emerald-600">{k.delta}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stock chart */}
      <section className="bg-secondary">
        <div className="container-wide section-pad">
          <Eyebrow>Stock performance</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight text-ink mb-10">EASTP on the Saudi Exchange.</h2>
          <StockChart />
          <div className="mt-6">
            <Link to="/investors/stock" className="text-sm font-medium text-brand inline-flex items-center gap-1">
              Full stock page <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-background">
        <div className="container-wide section-pad">
          <Eyebrow>Resources</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight text-ink mb-10">Everything investors need, one click away.</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((q, i) => (
              <Reveal key={q.to} delay={i * 60}>
                <Link to={q.to} className="group block h-full rounded-2xl border border-border bg-card p-6 hover:border-brand transition">
                  <q.icon className="h-7 w-7 text-brand" />
                  <h3 className="mt-6 text-xl font-medium text-ink">{q.label}</h3>
                  <p className="mt-2 text-foreground/60 text-sm">{q.desc}</p>
                  <ArrowUpRight className="mt-6 h-5 w-5 text-foreground/40 group-hover:text-brand group-hover:translate-x-1 transition" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest disclosures + reports */}
      <section className="bg-secondary">
        <div className="container-wide section-pad grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Latest disclosures</Eyebrow>
            <h3 className="mt-4 text-2xl font-medium text-ink mb-6">Tadawul announcements</h3>
            <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
              {disclosures.slice(0, 5).map((d) => (
                <li key={d.title} className="p-5 hover:bg-secondary transition">
                  <div className="flex items-center gap-3 text-xs font-mono text-foreground/55">
                    <span>{d.date}</span><span className="text-brand">{d.tag}</span>
                  </div>
                  <div className="mt-1 text-ink">{d.title}</div>
                </li>
              ))}
            </ul>
            <Link to="/investors/announcements" className="mt-4 inline-flex text-sm font-medium text-brand items-center gap-1">
              All announcements <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <Eyebrow>Recent reports</Eyebrow>
            <h3 className="mt-4 text-2xl font-medium text-ink mb-6">Downloads</h3>
            <ul className="space-y-3">
              {reports.slice(0, 5).map((r) => (
                <li key={r.title}>
                  <a href="#" className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 hover:border-brand transition">
                    <div>
                      <div className="text-xs font-mono text-brand">{r.type} · {r.year}</div>
                      <div className="mt-1 text-ink">{r.title}</div>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-foreground/55">
                      <span>{r.size}</span>
                      <Download className="h-4 w-4 text-foreground/50 group-hover:text-brand" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <Link to="/investors/reports" className="mt-4 inline-flex text-sm font-medium text-brand items-center gap-1">
              All reports <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Investor contact"
        title="Talk to our Investor Relations team."
        primary={{ label: "Contact IR", to: "/investors/contact" }}
        secondary={{ label: "Governance", to: "/investors/governance" }}
      />
    </PageShell>
  );
}
