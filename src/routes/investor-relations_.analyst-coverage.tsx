import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingUp, Target, BadgeCheck } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { ANALYST } from "@/lib/market";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/investor-relations_/analyst-coverage")({
  head: () => ({
    meta: [
      { title: "Analyst Coverage — East Pipes" },
      {
        name: "description",
        content:
          "Analyst coverage of East Pipes Integrated Company (Tadawul: 1321) — EFG Hermes BUY with a target price of SAR 185.",
      },
    ],
  }),
  component: AnalystCoverage,
});

const drivers = [
  { icon: TrendingUp, t: "Market leadership", d: "Over 50% of the Saudi HSAW market across the past three years." },
  { icon: Target, t: "Scale & capacity", d: "500,000 MT annual capacity across four integrated production lines." },
  { icon: BadgeCheck, t: "Proven delivery", d: "An API-approved manufacturer trusted by Saudi Aramco and SWCC." },
];

function AnalystCoverage() {
  return (
    <InfoPage
      image={EP_MEDIA.ipo}
      eyebrow="Investor Relations · Analyst Coverage"
      title="The street is positive."
      sub="Independent research coverage reflecting confidence in East Pipes' market position and growth prospects."
      stats={[
        { value: ANALYST.firm, label: "Coverage" },
        { value: ANALYST.rating, label: "Rating" },
        { value: ANALYST.target, label: "Target price" },
        { value: ANALYST.upside, label: "Implied upside" },
      ]}
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Initiating Coverage"
            title="A confident outlook."
            intro="East Pipes has received initiating analyst coverage, underlining the strength of its market leadership, scale and execution track record."
          />
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">{ANALYST.firm}</span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {ANALYST.rating}
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Target price</div>
                  <div className="mt-1 text-3xl font-semibold tabular-nums text-foreground">{ANALYST.target}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Implied upside</div>
                  <div className="mt-1 text-3xl font-semibold tabular-nums text-brand">{ANALYST.upside}</div>
                </div>
              </div>
              <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                {ANALYST.note}. Source: {ANALYST.source}. Analyst views are third-party opinions and
                do not constitute investment advice or a recommendation to buy or sell securities.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="What Underpins the View" title="The investment thesis." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {drivers.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.t} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="lift h-full rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{d.t}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{d.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Parallax
        image={EP_MEDIA.story2}
        eyebrow="The Opportunity"
        title="A listed leader, built for the long term."
        body="Explore the full East Pipes investment case and connect with our investor relations team."
        cta={{ label: "Investor relations hub", to: "/investor-relations" }}
      />
    </InfoPage>
  );
}
