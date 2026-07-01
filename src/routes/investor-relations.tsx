import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CalendarClock,
  Globe2,
  Mail,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StorySection } from "@/components/site/StorySection";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { StockChart } from "@/components/site/StockChart";
import { LISTING, IR_EMAIL, ANALYST, formatNumber } from "@/lib/market";
import { useStockQuote } from "@/hooks/use-stock-quote";
import { EP_MEDIA } from "@/lib/media";
import story from "@/assets/spiral-mill.jpg";

export const Route = createFileRoute("/investor-relations")({
  head: () => ({
    meta: [
      { title: "Invest in East Pipes (Tadawul: 1321)" },
      {
        name: "description",
        content:
          "The investment case for East Pipes Integrated Company — a market-leading, publicly listed steel pipe manufacturer building the energy and water arteries of nations.",
      },
    ],
  }),
  component: Investors,
});

const investmentCase = [
  {
    to: 50,
    prefix: "",
    suffix: "%+",
    headline: "Market leadership",
    label: "Share of the Saudi HSAW market over the past three years",
  },
  {
    to: 500,
    suffix: "K MT",
    headline: "Scale & capacity",
    label: "Annual HSAW production across four lines",
  },
  {
    to: 2,
    suffix: "M+ MT",
    headline: "Proven delivery",
    label: "HSAW pipe supplied to date across 75+ projects",
  },
  {
    to: 30,
    suffix: "%",
    prefix: "~",
    headline: "Analyst upside",
    label: "EFG Hermes BUY, target price SAR 185",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "A resilient, listed business",
    desc: "Publicly traded on the Saudi Exchange (Tadawul: 1321), with robust corporate governance and a strong delivery track record.",
  },
  {
    icon: Globe2,
    title: "Leveraged to Vision 2030",
    desc: "Directly exposed to the Kingdom's water, oil and gas infrastructure build-out, and a beneficiary of local-content programmes.",
  },
  {
    icon: TrendingUp,
    title: "Trusted by the largest buyers",
    desc: "An API-approved direct manufacturer supplying Saudi Aramco and SWCC — able to fulfil large orders without subcontracting.",
  },
];

function Investors() {
  const quote = useStockQuote();
  const up = quote.change >= 0;
  const Trend = up ? TrendingUp : TrendingDown;

  return (
    <div className="bg-background">
      <Header />
      <main className="brand-theme">
        <PageHero
          image={EP_MEDIA.ipo}
          eyebrow={`Invest in East Pipes · ${LISTING.exchangeShort} ${LISTING.ticker}`}
          title="Building the arteries of nations."
          sub="A market-leading, publicly listed manufacturer at the heart of the Kingdom's water, energy and infrastructure ambitions — and a compelling long-term opportunity."
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
          >
            Connect with our team <ArrowUpRight className="h-4 w-4" />
          </a>
        </PageHero>

        {/* Public listing confidence band */}
        <section className="border-b border-border py-16 md:py-20">
          <div className="container-wide grid items-center gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="eyebrow text-brand">Publicly Listed</span>
              <h2 className="display-caps mt-4 text-3xl text-foreground md:text-4xl">
                Transparent by listing.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                East Pipes is listed on the {LISTING.exchange} under symbol {LISTING.ticker}. Our
                share price is public and updated through the trading day.
              </p>
              <div className="mt-8 flex items-end gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                    {quote.live && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                    )}
                    {LISTING.exchangeShort}:{LISTING.ticker}
                  </div>
                  <div className="mt-2 text-4xl font-semibold tabular-nums text-foreground">
                    {formatNumber(quote.price)}
                    <span className="ml-1 text-base font-normal text-muted-foreground">
                      {LISTING.currency}
                    </span>
                  </div>
                </div>
                <span
                  className={`flex items-center gap-1 pb-1.5 text-sm font-medium tabular-nums ${
                    up ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  <Trend className="h-4 w-4" />
                  {up ? "+" : ""}
                  {formatNumber(quote.change)} ({up ? "+" : ""}
                  {formatNumber(quote.changePct)}%)
                </span>
              </div>
            </div>
            <Reveal className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">12-month share price</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {LISTING.currency} per share
                  </span>
                </div>
                <StockChart />
              </div>
            </Reveal>
          </div>
        </section>

        {/* The investment case */}
        <section className="bg-ink py-24 text-white md:py-32">
          <div className="container-wide">
            <SectionHeading
              tone="dark"
              eyebrow="The Investment Case"
              title="Why East Pipes"
              intro="A focused, integrated business with the scale, market position and growth runway to compound value over the long term."
            />
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {investmentCase.map((c, i) => (
                <Reveal key={c.headline} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="bg-ink">
                  <div className="p-8">
                    <div className="text-4xl font-semibold tabular-nums text-white">
                      <Counter
                        to={c.to}
                        prefix={c.prefix}
                        suffix={c.suffix}
                        decimals={c.decimals ?? 0}
                      />
                    </div>
                    <div className="mt-4 text-sm font-semibold text-brand">{c.headline}</div>
                    <div className="mt-1 text-sm leading-relaxed text-white/60">{c.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons */}
        <section className="py-24 md:py-32">
          <div className="container-wide">
            <SectionHeading eyebrow="What Sets Us Apart" title="A business built to be trusted." />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <Reveal key={r.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                    <div className="h-full rounded-2xl border border-border bg-card p-8">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 text-xl font-semibold text-foreground">{r.title}</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{r.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Analyst coverage */}
        <section className="bg-secondary py-24 md:py-32">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <SectionHeading
                eyebrow="Analyst Coverage"
                title="The street is positive."
                intro="East Pipes has received initiating analyst coverage reflecting confidence in the company's market position and growth."
              />
              <Reveal delay={1}>
                <div className="rounded-2xl border border-border bg-card p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">{ANALYST.firm}</span>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-700">
                      {ANALYST.rating}
                    </span>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        Target price
                      </div>
                      <div className="mt-1 text-2xl font-semibold tabular-nums text-foreground">
                        {ANALYST.target}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        Implied upside
                      </div>
                      <div className="mt-1 text-2xl font-semibold tabular-nums text-brand">
                        {ANALYST.upside}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                    {ANALYST.note}. Source: {ANALYST.source}. Analyst views are third-party opinions
                    and do not constitute investment advice.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Editorial growth story */}
        <StorySection
          image={story}
          eyebrow="Our Growth Story"
          title="From one complex to global pipelines."
          body="Explore how an integrated manufacturing platform in Saudi Arabia delivers critical infrastructure across more than 50 countries."
          cta={{ label: "See our projects", to: "/projects" }}
        />

        {/* Connect */}
        <section id="connect" className="scroll-mt-24 py-24 md:py-32">
          <div className="container-wide">
            <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-white md:px-16 md:py-20">
              <div className="absolute inset-0 bg-grid-dark opacity-40" />
              <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <SectionHeading
                    tone="dark"
                    eyebrow="Investor Enquiries"
                    title="Let's talk."
                    intro="Institutional investors, analysts and shareholders are welcome to reach out for a briefing or to arrange a meeting with our team."
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href={`mailto:${IR_EMAIL}`}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-brand/60"
                  >
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-brand" />
                      <div>
                        <div className="text-sm text-white/55">Email us</div>
                        <div className="font-medium text-white">{IR_EMAIL}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-brand/60"
                  >
                    <div className="flex items-center gap-4">
                      <CalendarClock className="h-6 w-6 text-brand" />
                      <div>
                        <div className="text-sm text-white/55">Request a meeting</div>
                        <div className="font-medium text-white">Schedule an investor call</div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
