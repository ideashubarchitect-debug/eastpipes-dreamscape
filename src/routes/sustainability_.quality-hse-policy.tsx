import { createFileRoute } from "@tanstack/react-router";
import { Award, HeartPulse, HardHat, FlaskConical } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/sustainability_/quality-hse-policy")({
  head: () => ({
    meta: [
      { title: "Quality & HSE Policy — East Pipes" },
      {
        name: "description",
        content:
          "East Pipes' Quality, Health, Safety & Environment commitments — internationally certified systems and an ISO 17025 laboratory.",
      },
    ],
  }),
  component: Qhse,
});

const certs = [
  "API 5L — Line Pipe",
  "API Spec Q1 — Quality Management Systems",
  "ISO 9001:2015 — Quality Management",
  "ISO 45001:2018 — Occupational Health & Safety",
  "ISO 14001:2015 — Environmental Management",
  "ISO/IEC 17025:2017 — Laboratory Testing Competence",
];

const qhse = [
  {
    icon: Award,
    tag: "Quality",
    title: "Certified excellence",
    body: "An extensive portfolio of internationally recognised certifications and an ISO 17025 laboratory supporting product development, quality assurance and conformity assessment.",
  },
  {
    icon: HeartPulse,
    tag: "Health",
    title: "A healthy workplace",
    body: "We are firmly committed to providing a safe and healthy workplace for all employees and contractors, with a strong, monitored culture of wellbeing.",
  },
  {
    icon: HardHat,
    tag: "Safety",
    title: "Safety, without compromise",
    body: "Emergency and critical incidents are reported within 12 hours to activate response plans; all incidents are investigated to capture lessons learned and prevent recurrence.",
  },
];

function Qhse() {
  return (
    <InfoPage
      image={EP_MEDIA.glance1}
      eyebrow="Sustainability · QHSE"
      title="Quality, Health, Safety & Environment."
      sub="An uncompromising commitment to manufacturing excellence, safety and environmental responsibility — independently certified to international standards."
      stats={[
        { value: "6", label: "Core certifications" },
        { value: "ISO 17025", label: "Certified lab" },
        { value: "12 hr", label: "Incident reporting" },
        { value: "Monthly", label: "Compliance reporting" },
      ]}
    >
      <Section>
        <SectionHeading eyebrow="QHSE Framework" title="Three disciplines, one standard." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {qhse.map((q, i) => {
            const Icon = q.icon;
            return (
              <Reveal key={q.tag} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="lift h-full rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-brand">
                    {q.tag}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{q.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{q.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Certifications */}
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <SectionHeading tone="dark" eyebrow="Certifications" title="Independently certified." />
          </div>
          <div className="lg:col-span-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {certs.map((c, i) => (
              <Reveal key={c} delay={((i % 2) + 1) as 1 | 2} className="bg-ink">
                <div className="flex items-center gap-4 p-6">
                  <Award className="h-6 w-6 shrink-0 text-brand" />
                  <span className="text-sm font-medium text-white/85">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Lab parallax */}
      <Parallax
        image={EP_MEDIA.story2}
        eyebrow="Laboratory Services"
        title="Verified, to the highest standards."
        body="Our fully equipped, ISO 17025-certified laboratory tests pipe and coating products — evaluating material properties, dimensional tolerances and coating performance."
      />

      {/* Continuous improvement */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Continuous Improvement" title="Audited and accountable." />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We conduct periodic management audits and performance reviews, with findings tracked
              through to closure. Monthly reporting consolidates all incident and compliance data
              for transparency and continuous improvement across the organisation.
            </p>
          </div>
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink">
              <img src={EP_MEDIA.ancillary} alt="Laboratory testing" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>
    </InfoPage>
  );
}
