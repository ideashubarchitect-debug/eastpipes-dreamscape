import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert, TrendingUp, FileWarning, Scale } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/investor-relations_/disclaimer")({
  head: () => ({
    meta: [
      { title: "Investor Relations Disclaimer — East Pipes" },
      { name: "description", content: "Important information and disclaimer regarding investor materials on this website." },
    ],
  }),
  component: Disclaimer,
});

const points = [
  {
    icon: FileWarning,
    t: "Information only",
    d: "Content in the Investor Relations section is for general information only and does not constitute an offer, invitation or recommendation to buy, sell or subscribe for any securities, nor investment advice.",
  },
  {
    icon: TrendingUp,
    t: "Forward-looking statements",
    d: "Certain statements may be forward-looking. They are not guarantees of future performance and involve risks and uncertainties; actual results may differ materially.",
  },
  {
    icon: ShieldAlert,
    t: "Third-party & delayed data",
    d: "Share-price and analyst information is indicative, may be delayed, and is sourced from third parties. For official information, refer to the Saudi Exchange (Tadawul) and the company's official disclosures.",
  },
  {
    icon: Scale,
    t: "No liability",
    d: "East Pipes Integrated Company for Industry accepts no liability for any loss arising from reliance on the information contained on this website.",
  },
];

function Disclaimer() {
  return (
    <InfoPage
      image={EP_MEDIA.story2}
      eyebrow="Investor Relations · Disclaimer"
      title="Important information."
      sub="Please read the following before relying on any investor materials presented on this website."
    >
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.t} delay={((i % 2) + 1) as 1 | 2}>
                <div className="lift flex h-full gap-5 rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{p.t}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          By using this website you acknowledge and accept the terms of this disclaimer. For
          official disclosures, please refer to the Saudi Exchange (Tadawul) under symbol 1321.
        </p>
      </Section>
    </InfoPage>
  );
}
