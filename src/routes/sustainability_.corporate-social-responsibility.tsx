import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Users, HeartHandshake, ShieldCheck } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/sustainability_/corporate-social-responsibility")({
  head: () => ({
    meta: [
      { title: "Corporate Social Responsibility — East Pipes" },
      {
        name: "description",
        content:
          "East Pipes' commitment to its people, local content and the communities in which it operates.",
      },
    ],
  }),
  component: Csr,
});

const pillars = [
  { icon: GraduationCap, t: "People & training", d: "Regular internal and external training programmes that grow technical skills and uphold safety." },
  { icon: Users, t: "Local talent", d: "Developing a 480-strong workforce and supporting Saudization and local capability." },
  { icon: HeartHandshake, t: "Community", d: "Contributing meaningfully to the communities in which we operate." },
  { icon: ShieldCheck, t: "Local content", d: "An active supporter of the Kingdom's local-content programmes and Vision 2030." },
];

function Csr() {
  return (
    <InfoPage
      image={EP_MEDIA.glance2}
      eyebrow="Sustainability · Social"
      title="Investing in our people and communities."
      sub="Our workforce is our greatest asset — and we are committed to contributing meaningfully to the communities and the Kingdom we are part of."
      stats={[
        { value: "480+", label: "Workforce" },
        { value: "Local content", label: "Prioritised" },
        { value: "Training", label: "Continuous" },
        { value: "Vision 2030", label: "Aligned" },
      ]}
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="accent-bar" />
            <p className="lede text-balance font-medium text-foreground">
              Our workforce is our greatest asset. East Pipes invests in regular training
              programmes — both internal and through external providers — to develop skills, uphold
              safety and keep pace with industry developments.
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              As a leading Saudi manufacturer, we actively support the Kingdom's local-content
              programmes and contribute to national industrial development — reinforcing our role
              in the communities we serve.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Our Commitments" title="People, talent and community." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.t} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="lift h-full rounded-2xl border border-border bg-card p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-semibold text-foreground">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Parallax
        image={EP_MEDIA.story1}
        eyebrow="Our People"
        title="A team that builds nations."
        body="From engineers to operators, our people take pride in manufacturing the infrastructure that powers the Kingdom."
        cta={{ label: "Join our team", to: "/career" }}
      />
    </InfoPage>
  );
}
