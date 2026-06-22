import { Link } from "@tanstack/react-router";
import { TrendingDown, TrendingUp } from "lucide-react";
import { LISTING, formatNumber } from "@/lib/market";
import { useStockQuote } from "@/hooks/use-stock-quote";

/**
 * Slim, always-on scrolling market ticker line ("ticker tape").
 * Shows the live Tadawul quote plus headline operational facts.
 */
export function TickerTape() {
  const quote = useStockQuote();
  const up = quote.change >= 0;
  const Trend = up ? TrendingUp : TrendingDown;

  const items = [
    { label: `${LISTING.exchangeShort}: ${LISTING.ticker}`, strong: true },
    {
      label: `${formatNumber(quote.price)} ${LISTING.currency}`,
      value: `${up ? "+" : ""}${formatNumber(quote.change)} (${up ? "+" : ""}${formatNumber(quote.changePct)}%)`,
      up,
    },
    { label: "Annual capacity 500,000 MT" },
    { label: ">50% Saudi market share" },
    { label: "API 5L · ISO 9001 · ISO 45001 · ISO 14001" },
    { label: "EFG Hermes: BUY · Target SAR 185" },
    { label: "Supplying Saudi Aramco & SWCC" },
  ];

  const Row = () => (
    <div className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2 px-6">
          {it.strong && i === 0 && (
            <span className="relative flex h-1.5 w-1.5">
              {quote.live && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/90" />
            </span>
          )}
          <span className={it.strong ? "font-semibold" : "text-white/85"}>{it.label}</span>
          {"value" in it && it.value && (
            <span className="inline-flex items-center gap-1 font-medium text-white">
              <Trend className="h-3 w-3" />
              {it.value}
            </span>
          )}
          <span className="ml-6 text-white/30">•</span>
        </span>
      ))}
    </div>
  );

  return (
    <Link
      to="/investors"
      aria-label="Investor relations and live share price"
      className="marquee-pause block w-full overflow-hidden bg-brand text-[11px] uppercase tracking-wider text-white"
    >
      <div className="flex w-max animate-marquee py-1.5 will-change-transform">
        <Row />
        <Row aria-hidden />
      </div>
    </Link>
  );
}
