import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/our-story_/ceo-message")({
  head: () => ({
    meta: [
      { title: "CEO Message — East Pipes" },
      {
        name: "description",
        content:
          "A message from Mr. Mohammed Saleh Darweesh, CEO Interim & CFO of East Pipes Integrated Company for Industry.",
      },
    ],
  }),
  component: CeoMessage,
});

function CeoMessage() {
  return (
    <InfoPage image={EP_MEDIA.glance1} eyebrow="Our Story" title="Message from the CEO">
      {/* Pull quote opener */}
      <Section>
        <Reveal className="mx-auto max-w-4xl text-center">
          <Quote className="mx-auto h-12 w-12 text-brand" />
          <p className="lede mt-8 text-balance font-medium text-foreground">
            “Since its inception in 2010, East Pipes has adopted a customer-centric model to become
            the preferred pipe solutions supplier in the Kingdom and the wider region.”
          </p>
        </Reveal>
      </Section>

      {/* Portrait + message */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <div className="lift media-zoom group relative overflow-hidden rounded-3xl bg-ink">
              <div className="aspect-[4/5]">
                <img
                  src={EP_MEDIA.ceo}
                  alt="Mr. Mohammed Saleh Darweesh"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-7 pt-20">
                <div className="text-xl font-semibold text-white">Mr. Mohammed Saleh Darweesh</div>
                <div className="text-sm text-brand">CEO Interim & CFO</div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="accent-bar" />
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Today's world is fast-paced and rapidly evolving. The Kingdom's market continues to
                transform in response to national initiatives under Vision 2030, as well as new
                infrastructure growth opportunities and advanced manufacturing trends that place
                innovation, excellence and sustainability at the forefront.
              </p>
              <p>
                For a business to thrive in an increasingly competitive landscape, it must learn to
                capitalise on these opportunities. Since its inception in 2010, East Pipes has
                adopted a customer-centric model to become the preferred pipe solutions supplier in
                the Kingdom and the wider region.
              </p>
              <p>
                Today, we are one of the largest fully integrated manufacturers of HSAW pipes in the
                region, holding a market share of over 50% in Saudi Arabia over the past three
                years. We take pride in our state-of-the-art facilities, robust corporate
                governance, strong delivery track record and experienced workforce.
              </p>
              <p>
                As a responsible and ethical business, we are committed to protecting the
                environment, ensuring a safe and healthy workplace for our people, and contributing
                meaningfully to the communities in which we operate.
              </p>
              <p className="text-xl font-medium text-foreground">
                Building on our success, we look forward to opening a new chapter of growth — one
                defined by continued manufacturing excellence, sustainable long-term shareholder
                returns, and expanding our footprint across new markets.
              </p>
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <div className="text-lg font-semibold text-foreground">Mr. Mohammed Saleh Darweesh</div>
              <div className="text-sm text-muted-foreground">CEO Interim & CFO, East Pipes Integrated Company</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Proof points */}
      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="A New Chapter of Growth"
          title="Backed by scale and a record of delivery."
        />
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {[
            { to: 2010, suffix: "", label: "Founded in Dammam", plain: true },
            { to: 50, suffix: "%+", label: "Saudi market share" },
            { to: 500, suffix: "K MT", label: "Annual capacity" },
            { to: 480, suffix: "+", label: "Skilled workforce" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="bg-ink">
              <div className="p-8">
                <div className="text-3xl font-semibold tabular-nums text-white md:text-4xl">
                  {s.plain ? "2010" : <Counter to={s.to} suffix={s.suffix} />}
                </div>
                <div className="mt-2 text-sm text-white/60">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/our-story/our-strategy"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
          >
            Explore our strategy <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </InfoPage>
  );
}
