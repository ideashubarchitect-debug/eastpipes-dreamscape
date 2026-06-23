import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import banner from "@/assets/hero-banner.png";
import manufacturing from "@/assets/hero-manufacturing.png";
import facility from "@/assets/hero-facility.png";

const items = [
  {
    img: banner,
    tag: "LSAW Pipes",
    title: "Longitudinal submerged-arc welded pipes",
    desc: "Heavy-wall line pipe for oil &amp; gas transmission, structural and offshore applications.",
  },
  {
    img: manufacturing,
    tag: "HSAW Pipes",
    title: "Helical submerged-arc welded pipes",
    desc: "Large-diameter pipes engineered for water transmission and infrastructure mega-projects.",
  },
  {
    img: facility,
    tag: "Coatings & Linings",
    title: "Internal & external pipe coatings",
    desc: "FBE, 3LPE and cement mortar lining for long-life corrosion protection.",
  },
];

export function Capabilities() {
  return (
    <section className="py-32 bg-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">
              Capabilities
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-[1.05] text-balance">
              The pipes that carry the world's energy and water.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-ink font-medium hover:text-brand transition"
          >
            View all products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <Link
              key={it.tag}
              to="/products"
              className="group relative block overflow-hidden bg-ink aspect-[4/5]"
            >
              <img
                src={it.img}
                alt={it.title}
                className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <span className="text-xs uppercase tracking-[0.3em] text-brand">{it.tag}</span>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">{it.title}</h3>
                <p
                  className="mt-3 text-white/75 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: it.desc }}
                />
                <ArrowUpRight className="mt-6 h-5 w-5 text-white/70 group-hover:text-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
