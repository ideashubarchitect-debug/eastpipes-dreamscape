import { Link } from "@tanstack/react-router";
import { ArrowUpRight, LineChart, MessageSquare } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { StockChart } from "./StockChart";
import { COMPANY_HIGHLIGHTS, LISTING } from "@/lib/market";

/**
 * Homepage investor moment — frames East Pipes as a compelling, publicly
 * listed opportunity and routes to the "Invest in East Pipes" showcase.
 */
export function InvestorBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="container-wide relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            tone="dark"
            eyebrow={`Invest · ${LISTING.exchangeShort} ${LISTING.ticker}`}
            title="A listed leader, built for the long term."
            intro="More than 50% Saudi market share, 500,000 MT annual capacity and a BUY rating from EFG Hermes — discover the East Pipes investment story."
          />
          <Reveal delay={1} className="flex flex-wrap gap-3">
            <Link
              to="/investors"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
            >
              <LineChart className="h-4 w-4" /> Explore the opportunity
            </Link>
            <Link
              to="/investors"
              hash="connect"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/60"
            >
              <MessageSquare className="h-4 w-4" /> Connect with our team
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-white">12-month share price</span>
                <Link
                  to="/investors"
                  className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-brand"
                >
                  Investor hub <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <StockChart />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:col-span-2">
            {COMPANY_HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="bg-ink">
                <div className="p-6">
                  <div className="text-2xl font-semibold tabular-nums text-white md:text-3xl">
                    <Counter
                      to={h.value}
                      prefix={h.prefix}
                      suffix={h.suffix}
                      decimals={h.decimals}
                    />
                  </div>
                  <div className="mt-2 text-xs font-medium text-white/80">{h.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
