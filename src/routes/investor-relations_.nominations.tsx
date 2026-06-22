import { createFileRoute } from "@tanstack/react-router";
import { Mail, FileSignature, CalendarClock, CheckCircle2 } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { IR_EMAIL } from "@/lib/market";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/investor-relations_/nominations")({
  head: () => ({
    meta: [
      { title: "Board Nominations — East Pipes" },
      {
        name: "description",
        content:
          "Board of Directors nominations for the 2025–2029 term at East Pipes, following the company's public listing on Tadawul.",
      },
    ],
  }),
  component: Nominations,
});

const steps = [
  { icon: FileSignature, t: "Eligibility & forms", d: "Review the nomination requirements and complete the official forms." },
  { icon: CalendarClock, t: "Submission window", d: "Submit candidacy within the announced nomination period." },
  { icon: CheckCircle2, t: "Review & disclosure", d: "Candidacies are reviewed and disclosed in line with regulations." },
];

function Nominations() {
  return (
    <InfoPage
      image={EP_MEDIA.glance1}
      eyebrow="Investor Relations · Nominations"
      title="Board nominations 2025–2029."
      sub="Following its public listing on the Saudi Exchange, East Pipes initiated Board of Directors nominations for the 2025–2029 term."
      stats={[
        { value: "2025–2029", label: "Board term" },
        { value: "Tadawul 1321", label: "Listed" },
        { value: "Governance", label: "CMA-aligned" },
        { value: "Open", label: "Process" },
      ]}
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="accent-bar" />
            <p className="lede text-balance font-medium text-foreground">
              As a publicly listed company, East Pipes follows a transparent, regulated process for
              nominating and electing its Board of Directors.
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Shareholders and prospective candidates can find nomination requirements, forms and
              timelines through the company's official disclosures. For queries, please contact our
              Board Nominations &amp; Investor Relations team.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="The Process" title="How nominations work." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.t} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="lift h-full rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="mt-5 text-sm font-semibold text-brand">{`0${i + 1}`}</div>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white md:p-14">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <SectionHeading tone="dark" eyebrow="Get in Touch" title="Board Nominations & IR." />
            </div>
            <a
              href={`mailto:${IR_EMAIL}`}
              className="group flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-brand/60"
            >
              <Mail className="h-7 w-7 text-brand" />
              <div>
                <div className="text-sm text-white/55">Email us</div>
                <div className="font-medium text-white">{IR_EMAIL}</div>
              </div>
            </a>
          </div>
        </div>
      </Section>

      <Parallax
        image={EP_MEDIA.story2}
        eyebrow="Governance"
        title="Independent, accountable, transparent."
        body="A governance framework built to the standards expected of a listed enterprise."
        cta={{ label: "Company governance", to: "/our-story/company-governance" }}
      />
    </InfoPage>
  );
}
