import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ARTICLES, NEWS_CATEGORIES } from "@/lib/news";
import hero from "@/assets/welding-sparks.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights — East Pipes" },
      {
        name: "description",
        content:
          "Latest news, press releases, market insights and thought leadership from East Pipes Integrated Company.",
      },
    ],
  }),
  component: News,
});

function News() {
  const [filter, setFilter] = useState<(typeof NEWS_CATEGORIES)[number]>("All");
  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  const rest = ARTICLES.filter((a) => a.slug !== featured.slug);
  const visible = filter === "All" ? rest : rest.filter((a) => a.category === filter);

  return (
    <div className="bg-background">
      <Header />
      <main className="brand-theme">
        <PageHero
          image={hero}
          eyebrow="News & Insights"
          title="Momentum, in the headlines."
          sub="Press releases, project milestones and market insights — the running record of a company building at pace."
        />

        {/* Filters */}
        <section className="border-b border-border py-6">
          <div className="container-wide flex flex-wrap gap-2">
            {NEWS_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  filter === c
                    ? "bg-ink text-white"
                    : "border border-border text-muted-foreground hover:border-brand/50 hover:text-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Featured */}
        {filter === "All" && (
          <section className="py-16 md:py-20">
            <div className="container-wide">
              <Reveal>
                <Link
                  to="/news/$slug"
                  params={{ slug: featured.slug }}
                  className="group grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink lg:aspect-auto">
                    <img
                      src={featured.img}
                      alt={featured.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                      <span className="text-brand">{featured.category}</span>
                      <span>·</span>
                      <time dateTime={featured.iso}>{featured.date}</time>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-medium text-ink transition group-hover:text-brand">
                      Read the full story <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </section>
        )}

        {/* Grid */}
        <section className="pb-24 md:pb-32 pt-8">
          <div className="container-wide">
            <SectionHeading eyebrow="Latest" title="From the newsroom" />
            {visible.length === 0 ? (
              <p className="mt-12 text-muted-foreground">No stories in this category yet.</p>
            ) : (
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visible.map((a, i) => (
                  <Reveal key={a.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                    <Link
                      to="/news/$slug"
                      params={{ slug: a.slug }}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                        <img
                          src={a.img}
                          alt={a.title}
                          className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                          <span className="text-brand">{a.category}</span>
                          <span>·</span>
                          <time dateTime={a.iso}>{a.date}</time>
                        </div>
                        <h3 className="mt-3 flex-1 font-semibold leading-snug text-foreground group-hover:text-brand">
                          {a.title}
                        </h3>
                        <ArrowUpRight className="mt-5 h-5 w-5 text-muted-foreground transition group-hover:text-brand" />
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
