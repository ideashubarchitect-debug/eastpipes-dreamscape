import { createFileRoute } from "@tanstack/react-router";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { IR_EMAIL } from "@/lib/market";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/investor-relations_/faqs")({
  head: () => ({
    meta: [
      { title: "Investor FAQs — East Pipes" },
      { name: "description", content: "Frequently asked questions for investors in East Pipes Integrated Company (Tadawul: 1321)." },
    ],
  }),
  component: Faqs,
});

const groups = [
  {
    heading: "The Company",
    items: [
      { q: "Where is East Pipes listed and what is the ticker?", a: "East Pipes Integrated Company for Industry is listed on the Saudi Exchange (Tadawul) under symbol 1321." },
      { q: "What does East Pipes manufacture?", a: "HSAW pipes, plus double jointing and pipe coating, for the water, oil and gas sectors." },
      { q: "What is the company's market position?", a: "One of the largest fully integrated HSAW pipe manufacturers in the region, holding over 50% of the Saudi market over the past three years." },
    ],
  },
  {
    heading: "Operations & Clients",
    items: [
      { q: "What is the production capacity?", a: "Up to 500,000 MT of HSAW pipe per annum across four lines, plus 4.5 million m² of annual coating capacity." },
      { q: "Who are the major clients?", a: "Major clients include Saudi Aramco and the Saline Water Conversion Corporation (SWCC), among others." },
    ],
  },
  {
    heading: "Investor Contact",
    items: [
      { q: "How can I contact Investor Relations?", a: `You can reach our Board Nominations & Investor Relations team at ${IR_EMAIL}.` },
      { q: "Where can I find financial reports?", a: "Reports, presentations and results are available in the IR Resources section." },
    ],
  },
];

function Faqs() {
  return (
    <InfoPage
      image={EP_MEDIA.glance2}
      eyebrow="Investor Relations · FAQs"
      title="Answers for investors."
      sub="The questions investors and analysts ask most — about the company, our operations and how to reach us."
      stats={[
        { value: "Tadawul 1321", label: "Listing" },
        { value: "500K MT", label: "Capacity" },
        { value: "50%+", label: "Market share" },
        { value: "EFG Hermes", label: "Coverage" },
      ]}
    >
      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          {groups.map((g) => (
            <div key={g.heading}>
              <SectionHeading eyebrow="FAQ" title={g.heading} />
              <div className="mt-6 divide-y divide-border border-y border-border">
                {g.items.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
                      {f.q}
                      <span className="text-2xl leading-none text-brand transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Parallax
        image={EP_MEDIA.story1}
        eyebrow="Still Have Questions?"
        title="Talk to our IR team."
        body={`Reach our Investor Relations team directly at ${IR_EMAIL}.`}
        cta={{ label: "Investor relations hub", to: "/investor-relations" }}
        align="center"
      />
    </InfoPage>
  );
}
