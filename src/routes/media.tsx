import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Download, Newspaper } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ARTICLES } from "@/lib/news";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media Center — East Pipes" },
      {
        name: "description",
        content:
          "Press releases, news, media resources and the upcoming events calendar for East Pipes Integrated Company.",
      },
    ],
  }),
  component: Media,
});

const calendar = [
  { date: "Q1 2026", event: "First-quarter results announcement", type: "Earnings" },
  { date: "Q2 2026", event: "Annual General Meeting (AGM)", type: "Governance" },
  { date: "Q2 2026", event: "Half-year results announcement", type: "Earnings" },
  { date: "Q3 2026", event: "Investor & analyst briefing", type: "Investor" },
];

const press = ARTICLES.slice(0, 4);

function Media() {
  return (
    <InfoPage
      image={EP_MEDIA.story1}
      eyebrow="Media Center"
      title="News, stories and momentum."
      sub="Press releases, company news, media resources and our upcoming events — the running record of East Pipes."
      stats={[
        { value: "Press", label: "Releases" },
        { value: "Events", label: "Calendar" },
        { value: "Media", label: "Resources" },
        { value: "Tadawul 1321", label: "Disclosures" },
      ]}
    >
      {/* Press / news */}
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Press & News" title="Latest from East Pipes." />
          <Link to="/news" className="link-underline inline-flex w-fit items-center gap-2 font-medium text-ink">
            View all news <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {press.map((a, i) => (
            <Reveal key={a.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <Link
                to="/news/$slug"
                params={{ slug: a.slug }}
                className="group lift media-zoom flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  <img src={a.img} alt={a.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                    <span className="text-brand">{a.category}</span>
                    <span>·</span>
                    <time dateTime={a.iso}>{a.date}</time>
                  </div>
                  <h3 className="mt-2 flex-1 text-sm font-semibold leading-snug text-foreground group-hover:text-brand">
                    {a.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Upcoming calendar */}
      <Section tone="dark">
        <SectionHeading tone="dark" eyebrow="Upcoming Calendar" title="Dates for your diary." />
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {calendar.map((c) => (
            <Reveal key={c.event} as="div">
              <div className="flex items-center justify-between gap-6 py-5">
                <div className="flex items-center gap-5">
                  <CalendarDays className="h-6 w-6 shrink-0 text-brand" />
                  <div>
                    <div className="font-medium text-white">{c.event}</div>
                    <div className="text-sm text-white/55">{c.date}</div>
                  </div>
                </div>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
                  {c.type}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/45">Indicative calendar — confirm dates via official disclosures.</p>
      </Section>

      {/* Media resources */}
      <Section tone="muted">
        <SectionHeading eyebrow="Media Resources" title="For journalists & partners." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Newspaper, t: "Press kit", d: "Company fact sheet, boilerplate and approved messaging." },
            { icon: Download, t: "Logo & brand assets", d: "Official East Pipes logos and brand guidelines." },
            { icon: CalendarDays, t: "Media enquiries", d: "Reach our communications team for interviews and statements." },
          ].map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.t} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <a
                  href="#"
                  className="group lift flex h-full items-start justify-between gap-4 rounded-2xl border border-border bg-card p-7"
                >
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-semibold text-foreground">{r.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-brand" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </InfoPage>
  );
}
