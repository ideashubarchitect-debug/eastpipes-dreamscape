import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { Reveal } from "@/lib/reveal";
import { Eyebrow } from "@/components/site/primitives";
import { projects } from "@/data/ir";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — East Pipes" },
      { name: "description", content: "Flagship projects delivered by East Pipes — water transmission, oil & gas, infrastructure and marine." },
      { property: "og:title", content: "East Pipes — Projects" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&q=80"
        eyebrow="Projects · Impact"
        title="Nation-scale projects, delivered."
        intro="A track record of executing the infrastructure that powers economies."
      />

      <section className="bg-background">
        <div className="container-wide section-pad space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 50}>
              <article className="group grid gap-8 md:grid-cols-[2fr_3fr] overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
                  <img src={p.img} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <Eyebrow>{p.sector} · {p.year}</Eyebrow>
                  <h2 className="mt-4 text-3xl md:text-4xl font-medium text-ink">{p.title}</h2>
                  <div className="mt-6 flex gap-8 text-sm font-mono">
                    <span><span className="text-foreground/50">Value</span> <span className="text-ink ml-2">{p.value}</span></span>
                    <span><span className="text-foreground/50">Sector</span> <span className="text-ink ml-2">{p.sector}</span></span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Build with us"
        title="Bring your most demanding project to East Pipes."
        primary={{ label: "Contact us", to: "/contact" }}
      />
    </PageShell>
  );
}
