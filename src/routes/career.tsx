import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, HeartPulse, ShieldCheck, Users } from "lucide-react";
import { InfoPage, Section, Prose } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/welding-sparks.jpg";

const benefits = [
  {
    icon: GraduationCap,
    t: "Training & development",
    d: "Regular internal and external programmes to grow your technical and professional skills.",
  },
  {
    icon: ShieldCheck,
    t: "World-class safety",
    d: "An uncompromising commitment to a safe and healthy workplace for everyone.",
  },
  {
    icon: Users,
    t: "Diverse team",
    d: "A workforce of 480+ professionals from diverse backgrounds and disciplines.",
  },
  {
    icon: HeartPulse,
    t: "Purposeful work",
    d: "Build the infrastructure that powers the Kingdom's water, oil and gas.",
  },
];

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — East Pipes" },
      {
        name: "description",
        content:
          "Build your career at East Pipes — join one of the region's leading HSAW pipe manufacturers.",
      },
    ],
  }),
  component: () => (
    <InfoPage
      image={hero}
      eyebrow="Careers"
      title="Build your career with us"
      sub="Our people are our greatest asset. Join a team engineering the arteries of the Kingdom's growth."
      cta={{ label: "Contact us", to: "/contact" }}
    >
      <Section>
        <Prose
          paragraphs={[
            "East Pipes invests in its people through continuous training, a strong safety culture and clear development pathways. We bring together engineers, operators and specialists who take pride in manufacturing excellence.",
          ]}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.t} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-semibold text-foreground">{b.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <Section tone="muted">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Interested in joining?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Send your CV and we'll be in touch about current openings.
            </p>
          </div>
          <a
            href="mailto:careers@eastpipes.com"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-brand"
          >
            Submit your CV
          </a>
        </div>
      </Section>
    </InfoPage>
  ),
});
