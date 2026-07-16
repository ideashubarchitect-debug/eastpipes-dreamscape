import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Linkedin, Share2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import {
  getArticle,
  getRelated,
  articleToNewsItem,
  announcementToNewsItem,
  type NewsItem,
} from "@/lib/news";
import { getAnnouncements } from "@/lib/announcements";

export const Route = createFileRoute("/news/$slug")({
  // Resolve live Tadawul announcements first; fall back to managed articles.
  loader: async ({ params }): Promise<{ article: NewsItem; related: NewsItem[] }> => {
    const live = await getAnnouncements();
    if (live.length > 0) {
      const items = live.map(announcementToNewsItem);
      const found = items.find((i) => i.slug === params.slug);
      if (found) {
        return {
          article: found,
          related: items.filter((i) => i.slug !== found.slug).slice(0, 3),
        };
      }
    }
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return {
      article: articleToNewsItem(article),
      related: getRelated(params.slug).map(articleToNewsItem),
    };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — East Pipes` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Article — East Pipes" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const { article, related } = Route.useLoaderData();

  return (
    <div className="bg-background">
      <Header overlay={false} />
      <main className="brand-theme">
        <article>
          {/* Article header */}
          <header className="container-wide pt-36 pb-10 md:pt-44">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" /> All news
            </Link>
            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="text-brand">{article.category}</span>
              <span>·</span>
              <time dateTime={article.iso}>{article.date}</time>
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          </header>

          {/* Hero image */}
          <div className="container-wide">
            <div className="relative aspect-[16/8] overflow-hidden rounded-2xl bg-ink">
              <img
                src={article.img}
                alt={article.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Body */}
          <div className="container-wide grid gap-10 py-16 md:grid-cols-12 md:py-20">
            <div className="md:col-span-2">
              <div className="sticky top-28 flex gap-3 md:flex-col">
                <span className="hidden text-xs uppercase tracking-widest text-muted-foreground md:block">
                  Share
                </span>
                <a
                  href="#"
                  aria-label="Share on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-brand hover:text-brand"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Share"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-brand hover:text-brand"
                >
                  <Share2 className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-8 md:col-start-3">
              <div className="space-y-6">
                {article.body.map((block, i) => {
                  if (block.type === "h2") {
                    return (
                      <h2 key={i} className="pt-4 text-2xl font-semibold text-foreground">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={i}
                        className="border-l-2 border-brand pl-6 text-xl font-medium leading-relaxed text-foreground"
                      >
                        “{block.text}”
                      </blockquote>
                    );
                  }
                  return (
                    <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                      {block.text}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 rounded-2xl border border-border bg-secondary p-6">
                <p className="text-sm text-muted-foreground">
                  This release may contain forward-looking statements. Such statements are not
                  guarantees of future performance and involve risks and uncertainties. For investor
                  enquiries, visit{" "}
                  <Link to="/investors" className="font-medium text-brand">
                    Investor Relations
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related */}
        <section className="border-t border-border py-20">
          <div className="container-wide">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-semibold text-foreground">Related stories</h2>
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink transition hover:text-brand"
              >
                View all <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((a, i) => (
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
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
