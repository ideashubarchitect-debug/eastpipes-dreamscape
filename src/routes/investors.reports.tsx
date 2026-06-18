import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { reports } from "@/data/ir";
import { Download } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/investors/reports")({
  head: () => ({
    meta: [
      { title: "Financial Reports — East Pipes" },
      { name: "description", content: "Download annual reports, quarterly earnings releases, investor presentations and corporate factsheets." },
      { property: "og:title", content: "East Pipes Financial Reports" },
    ],
  }),
  component: Reports,
});

const tabs = ["All", "Annual Report", "Quarterly", "Presentation", "Factsheet"] as const;

function Reports() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const list = tab === "All" ? reports : reports.filter((r) => r.type === tab);
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=2000&q=80"
        eyebrow="Financial Reports"
        title="Performance, transparently disclosed."
        intro="Annual reports, quarterly results, investor presentations and corporate factsheets."
      />

      <section className="bg-background">
        <div className="container-wide section-pad">
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  tab === t ? "bg-ink text-white border-ink" : "border-border text-foreground/70 hover:border-brand hover:text-brand"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <ul className="grid gap-3 md:grid-cols-2">
            {list.map((r) => (
              <li key={r.title}>
                <a href="#" className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 hover:border-brand transition">
                  <div>
                    <div className="text-xs font-mono text-brand">{r.type} · {r.year}</div>
                    <div className="mt-1 text-ink text-lg">{r.title}</div>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-foreground/55">
                    <span>PDF · {r.size}</span>
                    <Download className="h-4 w-4 text-foreground/50 group-hover:text-brand" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Need something specific?"
        title="Our IR team can provide historical archives on request."
        primary={{ label: "Contact IR", to: "/investors/contact" }}
      />
    </PageShell>
  );
}
