import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Factory, FlaskConical, Layers, Ship } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — East Pipes" },
      {
        name: "description",
        content:
          "Precision-engineered HSAW steel pipes, double jointing and coating for water, oil and gas — manufactured to the world's most demanding standards.",
      },
    ],
  }),
  component: Solutions,
});

const stats = [
  { to: 500, suffix: "K MT", label: "Annual HSAW capacity" },
  { to: 100, suffix: '"', label: "Maximum pipe diameter" },
  { to: 4.5, suffix: "M m²", decimals: 1, label: "Annual coating capacity" },
  { to: 26, suffix: " m", label: "Maximum jointed length" },
];

const ecosystem = [
  {
    img: EP_MEDIA.hsaw,
    icon: Layers,
    tag: "HSAW Pipes",
    title: "Helical submerged-arc welded pipes",
    desc: "Four high-capacity lines producing up to 500,000 MT/year — OD 20–100 inches, wall up to 25.4 mm — for water, oil and gas, to API 5L, ASTM, AWWA, EN, ISO and Saudi Aramco standards.",
  },
  {
    img: EP_MEDIA.doubleJointing,
    icon: Factory,
    tag: "Double Jointing",
    title: "Extended double-jointed pipes",
    desc: "Merging pipe lengths into double joints of up to 26 metres, reducing field joints, installation time and overall project cost — with comprehensive NDT at every stage.",
  },
  {
    img: EP_MEDIA.coating,
    icon: FlaskConical,
    tag: "Pipe Coating",
    title: "Protective coatings & linings",
    desc: "3LPE, 3LPP, FBE, DFBE, ARO and rough coating up to 4.5M m²/year, OD 2–120 inches, engineered for the harshest and most corrosive environments.",
  },
];

const process = [
  {
    step: "01",
    title: "Steel intake",
    desc: "Certified hot-rolled coil and plate, fully traceable from mill to dispatch.",
  },
  {
    step: "02",
    title: "Helical forming",
    desc: "Spiral mills form coil into precise pipe geometry and tolerance.",
  },
  {
    step: "03",
    title: "Submerged-arc welding",
    desc: "Dual inner and outer spiral welds for rigidity and pressure-bearing capacity.",
  },
  {
    step: "04",
    title: "Inspection & test",
    desc: "Digital X-ray, ultrasonic and hydrostatic testing to API, ISO and client specs.",
  },
  {
    step: "05",
    title: "Coating & dispatch",
    desc: "Internal and external protection, then logistics via Dammam and Jubail ports.",
  },
];

const sectors = [
  { icon: Layers, name: "Water Transmission" },
  { icon: Factory, name: "Oil & Gas" },
  { icon: Ship, name: "Irrigation Systems" },
  { icon: FlaskConical, name: "Coating & Protection" },
];

function Solutions() {
  return (
    <div className="bg-background">
      <Header />
      <main className="brand-theme">
        <PageHero
          image={EP_MEDIA.whatWeDo1}
          eyebrow="What We Do"
          title="The pipes that move the world's energy and water."
          sub="From a single integrated complex in Saudi Arabia, we engineer steel pipe systems trusted by the most demanding operators on earth."
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
          >
            Explore product specifications <ArrowUpRight className="h-4 w-4" />
          </Link>
        </PageHero>

        {/* Stat strip */}
        <section className="border-b border-border py-16">
          <div className="container-wide grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="text-4xl font-semibold tabular-nums text-ink md:text-5xl">
                  <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Ecosystem */}
        <section className="py-24 md:py-32">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Product Ecosystem"
              title="One integrated platform, three core capabilities."
              intro="Vertical integration — from forming to coating under one roof — gives us total control over quality, lead time and cost."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {ecosystem.map((e, i) => {
                const Icon = e.icon;
                return (
                  <Reveal key={e.tag} delay={((i % 3) + 1) as 1 | 2 | 3}>
                    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                        <img
                          src={e.img}
                          alt={e.title}
                          className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md">
                          <Icon className="h-3.5 w-3.5" /> {e.tag}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <h3 className="text-xl font-semibold text-foreground">{e.title}</h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {e.desc}
                        </p>
                        <Link
                          to="/products"
                          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-brand"
                        >
                          Learn more <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process visualization */}
        <section className="bg-ink py-24 text-white md:py-32">
          <div className="container-wide">
            <SectionHeading
              tone="dark"
              eyebrow="How We Build"
              title="From steel coil to commissioned pipeline."
              intro="A continuous, quality-gated process — every metre fully traceable, every weld verified."
            />
            <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-5">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5} className="bg-ink">
                  <li className="flex h-full flex-col p-7">
                    <span className="text-sm font-semibold text-brand">{p.step}</span>
                    <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{p.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-24 md:py-32">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Sectors We Serve"
              title="Engineered for the world's critical infrastructure."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sectors.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                    <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition hover:border-brand/50">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-medium text-foreground">{s.name}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
