import { Link } from "@tanstack/react-router";
import { Reveal } from "@/lib/reveal";
import { Eyebrow } from "./primitives";
import { projects } from "@/data/ir";
import { ArrowUpRight } from "lucide-react";

export function ProjectsStrip() {
  return (
    <section className="bg-secondary">
      <div className="container-wide section-pad">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-xl">
            <Eyebrow>Projects · Impact</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-ink text-balance">
              Engineering nation-scale infrastructure.
            </h2>
          </div>
          <Link to="/projects" className="text-sm font-medium text-brand inline-flex items-center gap-1">
            All projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link to="/projects" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                  <img src={p.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="eyebrow text-signal">{p.sector} · {p.year}</div>
                    <h3 className="mt-3 text-2xl font-medium leading-tight">{p.title}</h3>
                    <div className="mt-3 font-mono text-sm text-white/70">{p.value}</div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
