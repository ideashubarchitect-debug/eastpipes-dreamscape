import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { findSectionBySlug, type NavLink as NavLinkType } from "@/lib/nav";
import { EP_MEDIA } from "@/lib/media";

type To = LinkProps["to"];
const to = (p: string) => p as To;

/** Hero imagery + copy per section, keyed by Explore slug. */
const HERO: Record<string, { image: string; sub: string }> = {
  "our-story": {
    image: EP_MEDIA.story1,
    sub: "Everything that defines East Pipes — our company, leadership and governance — together on one page.",
  },
  "what-we-do": {
    image: EP_MEDIA.whatWeDo1,
    sub: "Our complete range of products and services, from manufacturing to coating, in a single view.",
  },
  "our-projects": {
    image: EP_MEDIA.home,
    sub: "The sectors we serve and the critical infrastructure we deliver across the Kingdom and beyond.",
  },
  sustainability: {
    image: EP_MEDIA.sustainability,
    sub: "Our commitments across environment, community and governance, gathered in one place.",
  },
  "investor-relations": {
    image: EP_MEDIA.ipo,
    sub: "The full investor picture — share information, analyst coverage, resources and more.",
  },
};

/** Anchor id for a subpage section, derived from its route. */
function anchorId(link: NavLinkType): string {
  return link.to.split("/").filter(Boolean).pop() ?? link.to.replace(/\W+/g, "-");
}

function ExplorePage() {
  const { section } = Route.useParams();
  const mega = findSectionBySlug(section);
  if (!mega) throw notFound();

  const hero = HERO[section] ?? { image: EP_MEDIA.home, sub: "" };
  const links = mega.columns.flatMap((c) => c.links);

  return (
    <InfoPage
      image={hero.image}
      eyebrow={`${mega.label} · Explore`}
      title={mega.label}
      sub={hero.sub || mega.feature?.text}
    >
      {/* Sticky in-page jump navigation */}
      <div className="sticky top-[var(--header-h,4rem)] z-30 border-y border-border bg-background/95 backdrop-blur-md">
        <div className="container-wide flex gap-2 overflow-x-auto py-3">
          {links.map((l) => (
            <a
              key={l.to}
              href={`#${anchorId(l)}`}
              className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition hover:border-brand hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {links.map((l, i) => (
        <Section key={l.to} tone={i % 2 === 0 ? "light" : "muted"} className="scroll-mt-32">
          <div id={anchorId(l)} className="scroll-mt-32" />
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow={`${String(i + 1).padStart(2, "0")} — ${mega.label}`}
                title={l.label}
              />
              {l.blurb && (
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {l.blurb}
                </p>
              )}
              <Link
                to={to(l.to)}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-brand"
              >
                View full page <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <Reveal delay={1} className="lg:col-span-5">
              <Link
                to={to(l.to)}
                className="lift group block overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={hero.image}
                    alt={l.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 p-5">
                  <span className="text-sm font-medium text-foreground">{l.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-brand" />
                </div>
              </Link>
            </Reveal>
          </div>
        </Section>
      ))}
    </InfoPage>
  );
}

export const Route = createFileRoute("/explore/$section")({
  head: ({ params }) => {
    const mega = findSectionBySlug(params.section);
    const label = mega?.label ?? "Explore";
    return {
      meta: [
        { title: `${label} — Explore — East Pipes` },
        {
          name: "description",
          content: mega?.feature?.text ?? `Explore ${label} and all related pages on one page.`,
        },
      ],
    };
  },
  component: ExplorePage,
});
