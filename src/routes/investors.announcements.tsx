import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { disclosures } from "@/data/ir";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/investors/announcements")({
  head: () => ({
    meta: [
      { title: "Announcements & Disclosures — East Pipes" },
      { name: "description", content: "Tadawul announcements, regulatory disclosures and press releases from East Pipes Integrated Co." },
      { property: "og:title", content: "East Pipes Announcements" },
    ],
  }),
  component: Announcements,
});

function Announcements() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=2000&q=80"
        eyebrow="Announcements"
        title="Tadawul disclosures & press releases"
        intro="Every material event, transparently filed."
      />
      <section className="bg-background">
        <div className="container-wide section-pad">
          <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
            {disclosures.map((d) => (
              <li key={d.title} className="p-6 hover:bg-secondary transition">
                <div className="flex items-center gap-3 text-xs font-mono text-foreground/55">
                  <span>{d.date}</span>
                  <span className="rounded-full bg-brand/10 text-brand px-2 py-0.5">{d.tag}</span>
                </div>
                <div className="mt-2 text-lg text-ink">{d.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand
        eyebrow="Investor alerts"
        title="Subscribe to receive disclosures by email."
        primary={{ label: "Contact IR", to: "/investors/contact" }}
      />
    </PageShell>
  );
}
