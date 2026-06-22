import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Droplets, Leaf, Recycle, Sun } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — East Pipes" },
      {
        name: "description",
        content:
          "East Pipes' sustainability strategy: decarbonisation, water stewardship, circular materials and alignment with Saudi Vision 2030.",
      },
    ],
  }),
  component: Sustainability,
});

const targets = [
  { to: 30, suffix: "%", label: "Carbon intensity reduction target by 2030" },
  { to: 85, suffix: "%", label: "Process water recycled" },
  { to: 95, suffix: "%", label: "Steel scrap recovered & reused" },
  { to: 0, suffix: "", prefix: "Net ", label: "Zero ambition aligned to 2060" },
];

const pillars = [
  {
    icon: Leaf,
    title: "Decarbonisation",
    desc: "Energy-efficient mills, renewable power integration and a clear roadmap to lower emissions per tonne.",
  },
  {
    icon: Droplets,
    title: "Water stewardship",
    desc: "Closed-loop water systems that recycle the vast majority of process water in a water-scarce region.",
  },
  {
    icon: Recycle,
    title: "Circular materials",
    desc: "Maximising scrap recovery and responsible sourcing across the steel value chain.",
  },
  {
    icon: Sun,
    title: "Vision 2030 aligned",
    desc: "Enabling the Kingdom's water, energy and infrastructure ambitions with local content.",
  },
];

function Sustainability() {
  return (
    <div className="bg-background">
      <Header />
      <main className="brand-theme">
        <PageHero
          image={EP_MEDIA.sustainability}
          eyebrow="Sustainability"
          title="Building the future without compromising it."
          sub="Sustainability is engineered into our operations — from the energy we use to the water we recycle and the steel we recover."
        />

        {/* Targets */}
        <section className="bg-ink py-16 text-white">
          <div className="container-wide grid grid-cols-2 gap-8 lg:grid-cols-4">
            {targets.map((t, i) => (
              <Reveal key={t.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="text-4xl font-semibold tabular-nums text-white md:text-5xl">
                  {t.to === 0 ? <span>Net 0</span> : <Counter to={t.to} suffix={t.suffix} />}
                </div>
                <div className="mt-3 text-sm text-white/60">{t.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pillars */}
        <section className="py-24 md:py-32">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Our Approach"
              title="Four pillars of responsible industry."
              intro="A focused strategy that creates value for shareholders while protecting the environment and communities we operate in."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={((i % 2) + 1) as 1 | 2}>
                    <div className="flex h-full gap-6 rounded-2xl border border-border bg-card p-8">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">{p.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 md:pb-32">
          <div className="container-wide">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-secondary p-10 md:flex-row md:items-center md:p-14">
              <div>
                <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                  Read our ESG disclosures
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Detailed metrics and governance are published in our annual ESG report.
                </p>
              </div>
              <Link
                to="/investors"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-brand"
              >
                Go to Investor Relations <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
