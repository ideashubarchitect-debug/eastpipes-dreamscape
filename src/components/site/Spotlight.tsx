import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import lab from "@/assets/lab-quality.jpg";
import pipeInterior from "@/assets/pipe-interior.jpg";

const blocks = [
  {
    eyebrow: "Quality & Innovation",
    title: "Our laboratory",
    body: "Every pipe we ship is independently tested in our on-site metallurgical and NDT laboratory — ultrasonic, radiographic and hydrostatic — so what leaves our mill performs in the field for decades.",
    image: lab,
    cta: "Inside the lab",
    invert: false,
  },
  {
    eyebrow: "Manufacturing",
    title: "Open for projects",
    body: "Our mills run 24/7, producing LSAW and HSAW pipe across the full diameter and wall-thickness range. Whether your project is an inland water artery or an offshore gas line, we engineer for the spec — not around it.",
    image: pipeInterior,
    cta: "Discover capabilities",
    invert: true,
  },
];

export function Spotlight() {
  return (
    <>
      {/* light block */}
      <section className="bg-background py-28">
        <div className="container-wide grid gap-16 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={blocks[0].image} alt={blocks[0].title} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">{blocks[0].eyebrow}</span>
            <h3 className="mt-5 text-3xl md:text-5xl font-semibold leading-[1.05] text-ink text-balance">
              {blocks[0].title}
            </h3>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{blocks[0].body}</p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium hover:bg-ink hover:text-white transition"
            >
              {blocks[0].cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* dark block */}
      <section className="bg-ink text-white py-28">
        <div className="container-wide grid gap-16 md:grid-cols-2 items-center">
          <div className="md:order-2 relative aspect-[4/3] overflow-hidden">
            <img src={blocks[1].image} alt={blocks[1].title} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">{blocks[1].eyebrow}</span>
            <h3 className="mt-5 text-3xl md:text-5xl font-semibold leading-[1.05] text-balance">
              {blocks[1].title}
            </h3>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">{blocks[1].body}</p>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-brand hover:text-white transition"
            >
              {blocks[1].cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
