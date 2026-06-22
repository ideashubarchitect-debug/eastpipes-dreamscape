import { createFileRoute } from "@tanstack/react-router";
import { Factory, Link2, PaintBucket, Anchor } from "lucide-react";
import { InfoPage, Section, FactGrid } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/our-story_/at-a-glance")({
  head: () => ({
    meta: [
      { title: "At a Glance — East Pipes" },
      {
        name: "description",
        content:
          "East Pipes at a glance — a state-of-the-art HSAW pipe manufacturer founded in 2010 in Dammam, with 500,000 MT capacity across a 223,000 m² campus.",
      },
    ],
  }),
  component: Glance,
});

const units = [
  { icon: Factory, name: "HSAW Pipe Manufacturing", desc: "Four high-capacity lines producing up to 500,000 MT/year." },
  { icon: Link2, name: "Double Jointing", desc: "Extended double-jointed pipes of up to 26 metres." },
  { icon: PaintBucket, name: "Pipe Coating", desc: "Up to 4.5M m²/year of protective coatings." },
];

function Glance() {
  return (
    <InfoPage
      image={EP_MEDIA.glance1}
      eyebrow="Our Story"
      title="At a Glance"
      sub="A state-of-the-art manufacturer of Helical Submerged Arc Welded (HSAW) pipes, founded in 2010 in the Second Industrial City of Dammam, Kingdom of Saudi Arabia."
      stats={[
        { value: "2010", label: "Established" },
        { value: "500K MT", label: "Annual capacity" },
        { value: "223K m²", label: "Campus" },
        { value: "50%+", label: "Saudi market share" },
      ]}
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Who We Are" title="Integrated pipe solutions from a single facility." />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              With over a decade of engineering excellence and a production capacity of up to
              500,000 metric tons per annum, East Pipes is one of the largest and most fully
              integrated pipe manufacturers in the region. Our 223,000 m² campus houses three core
              production units, enabling comprehensive end-to-end piping solutions.
            </p>
          </div>
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink">
              <img src={EP_MEDIA.glance2} alt="East Pipes facility" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading tone="dark" eyebrow="By the Numbers" title="Scale & track record." />
        <div className="mt-12">
          <FactGrid
            tone="dark"
            items={[
              { value: "2010", label: "Established" },
              { value: "500K MT", label: "Annual capacity" },
              { value: "223K m²", label: "Manufacturing campus" },
              { value: "50%+", label: "Saudi market share" },
              { value: "75+", label: "Projects completed" },
              { value: "480+", label: "Skilled workforce" },
              { value: "2M+ MT", label: "HSAW pipe supplied" },
              { value: "16M+ m²", label: "Coating supplied" },
            ]}
          />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Three Core Units" title="One integrated campus." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {units.map((u, i) => {
            const Icon = u.icon;
            return (
              <Reveal key={u.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="h-full rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{u.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-ink p-10 text-white md:flex-row md:items-center md:gap-10 md:p-14">
          <Anchor className="h-12 w-12 shrink-0 text-brand" />
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Strategically located for the world.</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Near King Abdulaziz Port in Dammam and Jubail Commercial Port — giving us exceptional
              logistical access to customers, suppliers and export routes across the region and beyond.
            </p>
          </div>
        </div>
      </Section>
    </InfoPage>
  );
}
