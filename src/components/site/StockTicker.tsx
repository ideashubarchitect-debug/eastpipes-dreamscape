import { Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";
import { LISTING, formatNumber } from "@/lib/market";
import { useStockQuote } from "@/hooks/use-stock-quote";

/**
 * Compact, always-visible market data strip.
 * `variant="bar"` is used as a slim band; `variant="inline"` for hero overlays.
 */
export function StockTicker({ variant = "bar" }: { variant?: "bar" | "inline" }) {
  const quote = useStockQuote();
  const up = quote.change >= 0;
  const Trend = up ? TrendingUp : TrendingDown;
  const trendColor = up ? "text-emerald-400" : "text-red-400";

  if (variant === "inline") {
    return (
      <Link
        to="/investors"
        className="group inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md transition hover:border-white/40"
      >
        <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
          {quote.live && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
          )}
          {LISTING.exchangeShort}:{LISTING.ticker}
        </span>
        <span className="text-base font-semibold text-white tabular-nums">
          {formatNumber(quote.price)}
          <span className="ml-1 text-xs font-normal text-white/50">{LISTING.currency}</span>
        </span>
        <span className={`flex items-center gap-1 text-sm font-medium tabular-nums ${trendColor}`}>
          <Trend className="h-3.5 w-3.5" />
          {up ? "+" : ""}
          {formatNumber(quote.changePct)}%
        </span>
        <ArrowUpRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
      </Link>
    );
  }

  return (
    <Link
      to="/investors"
      className="group flex items-center gap-3 text-[11px] uppercase tracking-widest"
      aria-label="View investor relations and live stock performance"
    >
      <span className="font-semibold text-brand">
        {LISTING.exchangeShort}:{LISTING.ticker}
      </span>
      <span className="font-semibold tabular-nums text-foreground/80 normal-case tracking-normal text-xs">
        {formatNumber(quote.price)} {LISTING.currency}
      </span>
      <span
        className={`flex items-center gap-1 tabular-nums normal-case tracking-normal text-xs font-medium ${
          up ? "text-emerald-600" : "text-red-600"
        }`}
      >
        <Trend className="h-3 w-3" />
        {up ? "+" : ""}
        {formatNumber(quote.changePct)}%
      </span>
    </Link>
  );
}
