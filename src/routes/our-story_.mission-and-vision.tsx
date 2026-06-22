import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/lab-quality.jpg";

const values = [
  { t: "Accountability", d: "We take ownership of our commitments and deliver on our promises." },
  { t: "Integrity", d: "We uphold the highest ethical standards in all our business dealings." },
  { t: "Excellence", d: "We pursue quality and continuous improvement in everything we do." },
  { t: "Leadership", d: "We set the standard in pipe manufacturing and industry best practice." },
  { t: "Teamwork", d: "We collaborate to achieve shared goals and deliver for our customers." },
  { t: "Diversity", d: "We value and respect our people's diverse backgrounds and perspectives." },
];

export const Route = createFileRoute("/our-story_/mission-and-vision")({
  head: () => ({
    meta: [
      { title: "Mission, Vision & Values — East Pipes" },
      {
        name: "description",
        content: "The mission, vision and values of East Pipes Integrated Company.",
      },
    ],
  }),
  component: () => (
    <InfoPage image={hero} eyebrow="Our Story" title="Mission, Vision & Values">
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-10">
            <span className="eyebrow text-brand">Our Vision</span>
            <p className="mt-5 text-xl leading-relaxed text-foreground">
              To become a global leader in pipe manufacturing technology — recognised among the
              world's foremost manufacturing companies for our quality, reliability and innovation.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-10">
            <span className="eyebrow text-brand">Our Mission</span>
            <p className="mt-5 text-xl leading-relaxed text-foreground">
              To invest our expertise and capabilities to provide customers with a wide selection of
              premium products, best-in-class service, and integrated piping solutions that
              consistently exceed expectations.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="dark">
        <SectionHeading tone="dark" eyebrow="Our Values" title="What we stand for." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-lg font-semibold text-brand">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </InfoPage>
  ),
});
