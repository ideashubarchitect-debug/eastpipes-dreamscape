import { Reveal } from "@/lib/reveal";
import { Eyebrow } from "./primitives";

const lines = [
  ["Engineering", "the arteries"],
  ["of a", "new era."],
];

export function Manifesto() {
  return (
    <section className="bg-background">
      <div className="container-wide section-pad">
        <Eyebrow>Manifesto</Eyebrow>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-ink leading-[0.95]">
              {lines.map((l, i) => (
                <div key={i}>
                  <span>{l[0]} </span>
                  <span className="text-foreground/35">{l[1]}</span>
                </div>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-foreground/65 max-w-md">
              East Pipes manufactures the steel arteries that move energy and water
              across continents. Built in Saudi Arabia. Trusted by the world's most
              demanding operators. Engineered for the next century of infrastructure.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
