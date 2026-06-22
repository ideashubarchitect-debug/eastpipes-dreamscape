import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { StockChart } from "@/components/site/StockChart";
import { LISTING, ANALYST, formatNumber } from "@/lib/market";
import { useStockQuote } from "@/hooks/use-stock-quote";
import { EP_MEDIA } from "@/lib/media";

function StockBody() {
  const quote = useStockQuote();
  const up = quote.change >= 0;
  const Trend = up ? TrendingUp : TrendingDown;
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Live Market Data"
          title="Share price & performance."
          intro={`Listed on the ${LISTING.exchange} under symbol ${LISTING.ticker}. ${quote.updatedAt}.`}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-ink p-8 text-white">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                    {LISTING.exchangeShort} : {LISTING.ticker}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/45">
                    {quote.live ? (
                      <>
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        Live
                      </>
                    ) : (
                      "Indicative"
                    )}
                  </span>
                </div>
                <div className="mt-4 flex items-end gap-3">
                  <span className="text-5xl font-semibold tabular-nums">{formatNumber(quote.price)}</span>
                  <span className="pb-1 text-sm text-white/50">{LISTING.currency}</span>
                </div>
                <div className={`mt-3 flex items-center gap-2 text-sm font-medium tabular-nums ${up ? "text-emerald-400" : "text-red-400"}`}>
                  <Trend className="h-4 w-4" />
                  {up ? "+" : ""}{formatNumber(quote.change)} ({up ? "+" : ""}{formatNumber(quote.changePct)}%)
                </div>
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 text-sm">
                {[
                  ["Open", formatNumber(quote.open)],
                  ["Prev close", formatNumber(quote.prevClose)],
                  ["Day high", formatNumber(quote.high)],
                  ["Day low", formatNumber(quote.low)],
                  ["Volume", quote.volume.toLocaleString("en-US")],
                  ["Market cap", `SAR ${formatNumber(quote.marketCap)}B`],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-white/45">{k}</dt>
                    <dd className="mt-0.5 font-medium tabular-nums text-white">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">12-month performance</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{LISTING.currency} per share</span>
              </div>
              <StockChart />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Listing facts */}
      <Section tone="muted">
        <SectionHeading eyebrow="Listing Details" title="The essentials." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Exchange", LISTING.exchange],
            ["Ticker symbol", LISTING.ticker],
            ["Sector", LISTING.sector],
            ["Currency", LISTING.currency],
          ].map(([k, v]) => (
            <div key={k} className="bg-card p-7">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
              <div className="mt-2 font-semibold text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </Section>

      <Parallax
        image={EP_MEDIA.ipo}
        eyebrow="Analyst View"
        title={`${ANALYST.firm}: ${ANALYST.rating}, target ${ANALYST.target}.`}
        body={`${ANALYST.upside} — see the full analyst coverage and the East Pipes investment case.`}
        cta={{ label: "Analyst coverage", to: "/investor-relations/analyst-coverage" }}
      />

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-secondary p-10 md:flex-row md:items-center md:p-14">
          <div>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Explore the investment story.</h2>
            <p className="mt-2 text-muted-foreground">Market leadership, scale and a confident outlook.</p>
          </div>
          <Link
            to="/investor-relations"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-brand"
          >
            Investor relations hub <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}

export const Route = createFileRoute("/investor-relations_/stock-information")({
  head: () => ({
    meta: [
      { title: "Stock Information — East Pipes (Tadawul: 1321)" },
      {
        name: "description",
        content: "Live share price, performance chart, listing details and key market data for East Pipes (Tadawul: 1321).",
      },
    ],
  }),
  component: () => (
    <InfoPage
      image={EP_MEDIA.ipo}
      eyebrow="Investor Relations · Stock Information"
      title="Transparent by listing."
      sub="Live share price and performance for East Pipes Integrated Company on the Saudi Exchange (Tadawul: 1321)."
      stats={[
        { value: "Tadawul", label: "Exchange" },
        { value: "1321", label: "Ticker" },
        { value: "SAR", label: "Currency" },
        { value: "Materials", label: "Sector" },
      ]}
    >
      <StockBody />
    </InfoPage>
  ),
});
