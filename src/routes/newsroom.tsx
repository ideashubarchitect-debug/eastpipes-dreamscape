import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { news } from "@/data/ir";
import { Reveal } from "@/lib/reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/newsroom")({
  head: () => ({
    meta: [
      { title: "Newsroom — East Pipes" },
      { name: "description", content: "Latest news, insights and announcements from East Pipes Integrated Co." },
      { property: "og:title", content: "East Pipes Newsroom" },
    ],
  }),
  component: Newsroom,
});

function Newsroom() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2000&q=80"
        eyebrow="Newsroom"
        title="News, insights & milestones."
        intro="What we're building and where we're heading."
      />
      <section className="bg-background">
        <div className="container-wide section-pad grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 60}>
              <article className="group block h-full overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img src={n.img} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-mono text-foreground/55">{n.date} · <span className="text-brand">{n.tag}</span></div>
                  <h3 className="mt-3 text-xl font-medium text-ink leading-snug">{n.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand
        eyebrow="Press"
        title="For media enquiries, reach our communications team."
        primary={{ label: "Contact us", to: "/contact" }}
      />
    </PageShell>
  );
}
