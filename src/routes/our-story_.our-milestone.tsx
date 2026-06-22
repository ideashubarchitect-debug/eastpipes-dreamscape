import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/spiral-mill.jpg";

const journey = [
  {
    year: "2010",
    text: "Established as Welspun Middle East Pipes LLC — three spiral pipe lines commissioned.",
  },
  {
    year: "2011",
    text: "Three additional spiral pipe plants installed; pipe coating plant commissioned.",
  },
  {
    year: "2014",
    text: "Double Jointing plant installed, expanding end-to-end solution capabilities.",
  },
  {
    year: "2019",
    text: "Fourth spiral mill commissioned; annual capacity expanded from 350,000 to 500,000 metric tons.",
  },
  {
    year: "2020",
    text: "Rebranded as East Pipes Integrated Company for Industry; converted to a Closed Joint Stock Company.",
  },
  {
    year: "2025",
    text: "Initiated Board of Directors nominations for the 2025–2029 term following public listing on Tadawul.",
  },
];

export const Route = createFileRoute("/our-story_/our-milestone")({
  head: () => ({
    meta: [
      { title: "Our Milestone — East Pipes" },
      {
        name: "description",
        content: "Key milestones in the East Pipes journey from 2010 to a listed regional leader.",
      },
    ],
  }),
  component: () => (
    <InfoPage
      image={hero}
      eyebrow="Our Story"
      title="Our Milestone"
      sub="From our founding in 2010 to becoming a publicly listed regional leader."
    >
      <Section>
        <SectionHeading eyebrow="Our Journey" title="Milestones that define us." />
        <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
          {journey.map((j, i) => (
            <Reveal key={j.year} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5} className="bg-card">
              <div className="flex flex-col gap-2 p-7 md:flex-row md:items-center md:gap-10">
                <div className="text-3xl font-semibold tabular-nums text-brand md:w-32">
                  {j.year}
                </div>
                <p className="text-muted-foreground md:flex-1">{j.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </InfoPage>
  ),
});
