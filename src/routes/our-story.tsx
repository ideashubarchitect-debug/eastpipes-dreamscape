import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Factory, Link2, PaintBucket } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StorySection } from "@/components/site/StorySection";
import { Parallax, SplitFeature } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — East Pipes Integrated Company" },
      {
        name: "description",
        content:
          "Established in 2010 in Dammam, East Pipes is one of the region's largest fully integrated HSAW pipe manufacturers, holding over 50% of the Saudi market.",
      },
    ],
  }),
  component: OurStory,
});

const units = [
  { icon: Factory, name: "HSAW Pipe Manufacturing", desc: "Four lines, up to 500,000 MT/year." },
  { icon: Link2, name: "Double Jointing", desc: "Extended joints up to 26 metres." },
  { icon: PaintBucket, name: "Pipe Coating", desc: "Up to 4.5M m²/year of protection." },
];

const stats = [
  { to: 500, suffix: "K MT", label: "Annual capacity" },
  { to: 223, suffix: "K m²", label: "Campus" },
  { to: 75, suffix: "+", label: "Projects" },
  { to: 480, suffix: "+", label: "Workforce" },
];

const values = ["Accountability", "Integrity", "Excellence", "Leadership", "Teamwork", "Diversity"];

const milestones = [
  { year: "2010", text: "Founded in Dammam — three spiral pipe lines commissioned." },
  { year: "2014", text: "Double Jointing plant installed." },
  { year: "2019", text: "Capacity expanded to 500,000 MT." },
  { year: "2020", text: "Rebranded as East Pipes Integrated Company." },
  { year: "2025", text: "Board nominations following public listing on Tadawul." },
];

function OurStory() {
  return (
    <div className="bg-background">
      <Header />
      <main className="brand-theme">
        <PageHero
          image={EP_MEDIA.story1}
          eyebrow="Our Story"
          title="Engineering the arteries of a nation."
          sub="Established in 2010 in the Second Industrial City of Dammam, East Pipes is one of the largest and most fully integrated HSAW pipe manufacturers in the region."
          stats={[
            { value: "2010", label: "Established" },
            { value: "50%+", label: "Saudi market share" },
            { value: "500K MT", label: "Annual capacity" },
            { value: "Tadawul 1321", label: "Publicly listed" },
          ]}
        />

        {/* Lede */}
        <section className="py-20 md:py-28">
          <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="accent-bar" />
              <p className="lede text-balance font-medium text-foreground">
                With over a decade of engineering excellence and a production capacity of up to
                500,000 metric tons per annum, East Pipes has grown to become one of the most fully
                integrated pipe manufacturers in the region.
              </p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our advanced campus spans 223,000 m² and houses three core production units — HSAW
                manufacturing, double jointing and coating — enabling comprehensive, end-to-end
                piping solutions from a single facility, with exceptional logistical access via
                King Abdulaziz Port and Jubail Commercial Port.
              </p>
            </div>
          </div>
        </section>

        {/* Parallax statement */}
        <Parallax
          image={EP_MEDIA.story2}
          eyebrow="Market Leadership"
          title="Over 50% of the Saudi HSAW market."
          body="Held over the past three years — built on state-of-the-art facilities, robust governance, a strong delivery record and an experienced workforce."
        />

        {/* Numbers band */}
        <section className="bg-ink py-20 text-white md:py-28">
          <div className="container-wide">
            <SectionHeading tone="dark" eyebrow="By the Numbers" title="Scale you can measure." />
            <div className="mt-12 grid grid-cols-2 gap-y-12 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="text-5xl font-semibold tabular-nums text-white md:text-6xl">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 text-sm uppercase tracking-widest text-white/55">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Split: integrated facility */}
        <SplitFeature
          image={EP_MEDIA.glance2}
          eyebrow="One Integrated Campus"
          title="End-to-end, under one roof."
          tone="muted"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Vertical integration gives us total control over quality, lead time and cost — three
            core production units working as one.
          </p>
          <div className="mt-8 space-y-4">
            {units.map((u) => {
              const Icon = u.icon;
              return (
                <div key={u.name} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold text-foreground">{u.name}</div>
                    <div className="text-sm text-muted-foreground">{u.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </SplitFeature>

        {/* CEO quote over image */}
        <Parallax
          image={EP_MEDIA.whatWeDo1}
          eyebrow="Message from the CEO"
          title="“Building the next chapter of growth.”"
          body="Sustainable long-term shareholder returns, continued manufacturing excellence and an expanding footprint across new markets."
          cta={{ label: "Read the CEO message", to: "/our-story/ceo-message" }}
          align="center"
        />

        {/* Values + strategy */}
        <section className="py-20 md:py-28">
          <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Our Values" title="What we stand for." />
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {values.map((v, i) => (
                <Reveal key={v} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="lift rounded-xl border border-border bg-card px-5 py-6 text-center font-semibold text-foreground">
                    {v}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones teaser */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="container-wide">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="Our Journey" title="From 2010 to a listed leader." />
              <Link
                to="/our-story/our-milestone"
                className="link-underline inline-flex w-fit items-center gap-2 font-medium text-ink"
              >
                View all milestones <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5} className="bg-card">
                  <div className="flex h-full flex-col p-6">
                    <div className="text-2xl font-semibold tabular-nums text-brand">{m.year}</div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border py-20 md:py-28">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Recognition & Certifications"
              title="Independently certified, internationally recognised."
              intro="Our quality, environmental, safety and laboratory systems are certified to the standards that demanding operators require."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "API 5L",
                "API Spec Q1",
                "ISO 9001:2015",
                "ISO 45001:2018",
                "ISO 14001:2015",
                "ISO/IEC 17025:2017",
                "Saudi Aramco approved",
                "SWCC approved",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        <StorySection
          image={EP_MEDIA.hsaw}
          eyebrow="What We Do"
          title="See how we build."
          body="Explore our HSAW manufacturing, double jointing and coating — engineered to the world's most demanding standards."
          cta={{ label: "Explore what we do", to: "/what-we-do" }}
        />
      </main>
      <Footer />
    </div>
  );
}
