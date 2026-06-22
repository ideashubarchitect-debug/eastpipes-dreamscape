import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/what-we-do_/products-and-services")({
  head: () => ({
    meta: [
      { title: "Products & Specifications — East Pipes" },
      {
        name: "description",
        content:
          "HSAW pipes, double jointing and pipe coating from East Pipes — full technical specifications to API 5L, ASTM, AWWA, EN, ISO and Saudi Aramco standards.",
      },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    tag: "HSAW Pipes",
    title: "Helical submerged-arc welded pipes",
    intro:
      "Four high-capacity production lines with an annual output of up to 500,000 MT, designed for water, oil and gas applications to the most rigorous international standards.",
    specs: [
      ["Outer diameter", "20 – 100 inches"],
      ["Wall thickness", "Up to 25.4 mm (1 inch)"],
      ["Pipe length", "8 – 18 metres"],
      ["Annual capacity", "Up to 500,000 metric tons"],
      ["Standards", "API 5L, ASTM, AWWA, EN, ISO, Saudi Aramco & other international standards"],
    ],
  },
  {
    tag: "Double Jointing",
    title: "Extended double-jointed pipes",
    intro:
      "Our Double Jointing (DJ) service merges individual pipe lengths into extended pipes of up to 26 metres — minimising field joints, reducing installation time and lowering overall project costs, with comprehensive NDT at every stage.",
    specs: [
      ["Outer diameter", "16 – 60 inches"],
      ["Wall thickness", "Up to 2 inches"],
      ["Jointed length", "Up to 26 metres"],
      ["Standard", "API 5L"],
    ],
  },
  {
    tag: "Pipe Coating",
    title: "Protective coatings & linings",
    intro:
      "Our dedicated coating facility applies a full range of protective coatings to pipes of all sizes, including those for harsh and corrosive environments, with an annual capacity of 4.5 million square metres.",
    specs: [
      ["Outside diameter", "2 – 120 inches"],
      ["Annual capacity", "4.5 million square metres"],
      ["Maximum pipe length", "Up to 26 metres"],
      ["Coating types", "3LPE, 3LPP, FBE, DFBE, ARO, Rough Coating"],
      ["Standards", "Saudi Aramco, SWCC & international standards"],
    ],
  },
];

const advantages = [
  "Dual overlapping inner and outer spiral welds that significantly enhance rigidity and pressure-bearing capacity.",
  "Submerged arc welding process delivering superior impact toughness and structural integrity.",
  "Flexible diameter production from a single strip width, reducing material waste.",
  "Tight dimensional tolerances achieved without post-weld sizing or straightening.",
];

function ProductsPage() {
  return (
    <div className="bg-background">
      <Header />
      <main className="brand-theme">
        <PageHero
          image={EP_MEDIA.hsawAlt}
          eyebrow="Products & Specifications"
          title="Pipes engineered for the world."
          sub="Comprehensive, end-to-end piping solutions — manufacturing, double jointing and coating — produced to the most demanding international standards."
        />

        {/* Product spec sections */}
        <section className="py-24 md:py-32">
          <div className="container-wide space-y-20">
            {products.map((p, idx) => (
              <Reveal key={p.tag}>
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                  <div>
                    <span className="eyebrow text-brand">{`0${idx + 1} · ${p.tag}`}</span>
                    <h2 className="mt-4 display-caps text-3xl text-foreground md:text-4xl">
                      {p.title}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{p.intro}</p>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-border">
                    <table className="w-full text-sm">
                      <tbody>
                        {p.specs.map(([k, v], i) => (
                          <tr key={k} className={i % 2 === 0 ? "bg-secondary" : "bg-card"}>
                            <th className="w-2/5 px-5 py-4 text-left align-top font-semibold text-foreground">
                              {k}
                            </th>
                            <td className="px-5 py-4 align-top text-muted-foreground">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* HSAW advantages */}
        <section className="bg-ink py-24 text-white md:py-32">
          <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              tone="dark"
              eyebrow="Why HSAW"
              title="The technical edge."
              intro="Key advantages of our helical submerged-arc welded pipe technology."
            />
            <ul className="space-y-4">
              {advantages.map((a, i) => (
                <Reveal key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <li className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
                    <Check className="h-5 w-5 shrink-0 text-brand" />
                    <span className="text-white/80">{a}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <div className="container-wide">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-secondary p-10 md:flex-row md:items-center md:p-14">
              <div>
                <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                  Need a specific specification?
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Our engineers produce to API 5L X-80 — among the highest grades available.
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
