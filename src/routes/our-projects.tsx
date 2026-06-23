import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import hero from "@/assets/welding-sparks.jpg";
import p1 from "@/assets/hero-facility.png";
import p2 from "@/assets/spiral-mill.jpg";
import p3 from "@/assets/pipe-interior.jpg";
import p4 from "@/assets/hero-banner.png";

export const Route = createFileRoute("/our-projects")({
  head: () => ({
    meta: [
      { title: "Projects & Impact — East Pipes" },
      {
        name: "description",
        content:
          "Landmark energy, water and infrastructure projects delivered by East Pipes across the Kingdom and beyond — proof of execution at scale.",
      },
    ],
  }),
  component: Projects,
});

const impact = [
  { to: 75, suffix: "+", label: "Projects completed" },
  { to: 2, suffix: "M+ MT", label: "HSAW pipe supplied" },
  { to: 16, suffix: "M+ m²", label: "Coating supplied" },
  { to: 50, suffix: "%+", label: "Saudi market share" },
];

const projects = [
  {
    img: p1,
    location: "Kingdom of Saudi Arabia",
    sector: "Water Transmission",
    title: "Potable water distribution networks",
    desc: "Large-diameter HSAW pipe supplying potable water distribution networks for the Saline Water Conversion Corporation (SWCC) and national water programmes.",
    metric: 'HSAW · up to 100" dia',
  },
  {
    img: p2,
    location: "Eastern Province, KSA",
    sector: "Oil & Gas",
    title: "Hydrocarbon transmission pipelines",
    desc: "High-pressure line pipe up to API 5L X-80 supplied to Saudi Aramco for oil and gas transmission across the Kingdom.",
    metric: "API 5L up to X-80",
  },
  {
    img: p3,
    location: "Kingdom of Saudi Arabia",
    sector: "Irrigation",
    title: "Irrigation infrastructure",
    desc: "Durable, coated pipe systems supporting large-scale irrigation and agricultural water networks in line with Vision 2030.",
    metric: "Coated HSAW",
  },
  {
    img: p4,
    location: "Dammam, KSA",
    sector: "Coating",
    title: "Corrosion protection at scale",
    desc: "3LPE, 3LPP and FBE coating applied to pipe for harsh and corrosive service, with up to 4.5M m² of annual coating capacity.",
    metric: "4.5M m²/yr capacity",
  },
];

function Projects() {
  return (
    <div className="bg-background">
      <Header />
      <main className="brand-theme">
        <PageHero
          image={hero}
          eyebrow="Projects & Impact"
          title="Execution you can measure in kilometres."
          sub="Behind every statistic is critical infrastructure delivered on time, to specification, in some of the most demanding environments on earth."
        />

        {/* Impact stats */}
        <section className="bg-ink py-16 text-white">
          <div className="container-wide grid grid-cols-2 gap-8 lg:grid-cols-4">
            {impact.map((s, i) => (
              <Reveal key={s.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="text-4xl font-semibold tabular-nums text-white md:text-5xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm text-white/60">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Project stories */}
        <section className="py-24 md:py-32">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Case Studies"
              title="Landmark projects, delivered."
              intro="A selection of the energy, water and infrastructure programmes we are proud to have supplied."
            />
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={((i % 2) + 1) as 1 | 2}>
                  <article className="group overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-foreground">
                          {p.sector}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                          <MapPin className="h-3 w-3" /> {p.location}
                        </span>
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                        <span className="text-xs font-medium uppercase tracking-widest text-brand">
                          {p.metric}
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-brand" />
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 md:pb-32">
          <div className="container-wide">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-secondary p-10 md:flex-row md:items-center md:p-14">
              <div>
                <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                  Planning a project at scale?
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Our engineering team partners with operators from concept to commissioning.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-brand"
              >
                Talk to our team <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
