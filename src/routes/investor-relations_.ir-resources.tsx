import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, FileBarChart, ScrollText } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { IR_EMAIL } from "@/lib/market";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/investor-relations_/ir-resources")({
  head: () => ({
    meta: [
      { title: "IR Resources — East Pipes" },
      {
        name: "description",
        content:
          "Investor relations resources — financial reports by year and governance documents for investors and analysts.",
      },
    ],
  }),
  component: IrResources,
});

// Financial reports organised by year. Each year holds the three interim
// quarters plus the Annual Report (Q4 is consolidated into the Annual Report).
const FINANCIAL_YEARS = [
  {
    year: "2026",
    items: ["Q1 Interim Report", "Q2 Interim Report", "Q3 Interim Report", "Annual Report"],
  },
  {
    year: "2025",
    items: ["Q1 Interim Report", "Q2 Interim Report", "Q3 Interim Report", "Annual Report"],
  },
  {
    year: "2024",
    items: ["Q1 Interim Report", "Q2 Interim Report", "Q3 Interim Report", "Annual Report"],
  },
];

const docGroups = [
  {
    icon: ScrollText,
    heading: "Governance & Policies",
    items: ["Corporate Governance Manual", "Quality Policy", "HSE Policy", "Board Charters"],
  },
];

function DocCard({ item, delay }: { item: string; delay: 1 | 2 | 3 | 4 }) {
  return (
    <Reveal delay={delay}>
      <a
        href="#"
        className="group lift flex h-full items-center justify-between gap-4 rounded-xl border border-border bg-card p-6 transition hover:border-brand/50"
      >
        <span className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-brand" />
          <span className="font-medium text-foreground">{item}</span>
        </span>
        <Download className="h-5 w-5 text-muted-foreground transition group-hover:text-brand" />
      </a>
    </Reveal>
  );
}

function IrResources() {
  return (
    <InfoPage
      image={EP_MEDIA.glance2}
      eyebrow="Investor Relations · Resources"
      title="Everything in one place."
      sub="Financial reports by year and governance documents for investors and analysts."
      stats={[
        { value: "Reports", label: "Annual & quarterly" },
        { value: "Governance", label: "& policies" },
        { value: "Tadawul 1321", label: "Disclosures" },
      ]}
    >
      <Section>
        {/* Financial Reports — organised by year */}
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
            <FileBarChart className="h-5 w-5" />
          </span>
          <SectionHeading eyebrow="Library" title="Financial Reports" />
        </div>
        <div className="mt-8 space-y-10">
          {FINANCIAL_YEARS.map((y) => (
            <div key={y.year}>
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold tabular-nums text-foreground">{y.year}</h3>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {y.items.map((item, i) => (
                  <DocCard key={item} item={item} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other document groups */}
        {docGroups.map((g) => {
          const Icon = g.icon;
          return (
            <div key={g.heading} className="mt-14">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <SectionHeading eyebrow="Library" title={g.heading} />
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {g.items.map((item, i) => (
                  <DocCard key={item} item={item} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} />
                ))}
              </div>
            </div>
          );
        })}

        <p className="mt-8 text-xs text-muted-foreground">
          Document links are placeholders. Connect to your document store or CMS to publish live
          files.
        </p>
      </Section>

      <Parallax
        image={EP_MEDIA.story1}
        eyebrow="Investor Enquiries"
        title="Need something specific?"
        body={`Our IR team is happy to help — reach us at ${IR_EMAIL}.`}
        cta={{ label: "Contact investor relations", to: "/investor-relations" }}
      />
    </InfoPage>
  );
}
