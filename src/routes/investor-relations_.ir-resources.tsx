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
          "Investor relations resources — financial highlights, annual and quarterly reports, presentations, results, press releases and governance documents.",
      },
    ],
  }),
  component: IrResources,
});

const groups = [
  {
    icon: FileBarChart,
    heading: "Financial Reports",
    items: ["Annual Report", "Quarterly Consolidated Financials", "Financial Highlights", "Investor Report"],
  },
  {
    icon: FileText,
    heading: "Presentations & Results",
    items: ["Earnings Presentation", "Corporate Presentation", "Results Announcements", "IPO Prospectus"],
  },
  {
    icon: ScrollText,
    heading: "Governance & Policies",
    items: ["Corporate Governance Manual", "Quality Policy", "HSE Policy", "Board Charters"],
  },
];

function IrResources() {
  return (
    <InfoPage
      image={EP_MEDIA.glance2}
      eyebrow="Investor Relations · Resources"
      title="Everything in one place."
      sub="Financial reports, presentations, results and governance documents for investors and analysts."
      stats={[
        { value: "Reports", label: "Annual & quarterly" },
        { value: "Results", label: "& presentations" },
        { value: "Governance", label: "& policies" },
        { value: "Tadawul 1321", label: "Disclosures" },
      ]}
    >
      <Section>
        {groups.map((g, gi) => {
          const Icon = g.icon;
          return (
            <div key={g.heading} className={gi > 0 ? "mt-14" : ""}>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <SectionHeading eyebrow="Library" title={g.heading} />
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {g.items.map((item, i) => (
                  <Reveal key={item} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
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
