import { Reveal } from "@/lib/reveal";
import { Eyebrow, PrimaryButton } from "./primitives";
import { Leaf, Recycle, Droplets, Sun } from "lucide-react";

const pillars = [
  { icon: Leaf, t: "Net-zero pathway", d: "−30% scope-1 emissions vs 2020 baseline; clear plan to net-zero by 2050." },
  { icon: Recycle, t: "Circular steel", d: "98% steel scrap recyclability across our LSAW and HSAW lines." },
  { icon: Droplets, t: "Water stewardship", d: "Closed-loop hydrostatic testing recovering 96% of process water." },
  { icon: Sun, t: "Renewable power", d: "On-site solar PV powering 22% of plant load — expanding to 50% by 2028." },
];

export function SustainabilityTeaser() {
  return (
    <section className="relative bg-ink text-white grain overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=2000&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      <div className="relative container-wide section-pad">
        <div className="max-w-2xl">
          <Eyebrow className="text-signal">Sustainability</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight text-balance">
            Every pipe we ship carries our climate commitment.
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            ESG is engineered into our process — measured, disclosed and audited.
            Investors and customers see exactly how each tonne of steel is decarbonised.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="border-t border-white/15 pt-5">
                <p.icon className="h-6 w-6 text-signal" />
                <h3 className="mt-4 text-xl font-medium">{p.t}</h3>
                <p className="mt-2 text-white/65 leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <PrimaryButton to="/sustainability" invert>ESG strategy & metrics</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
