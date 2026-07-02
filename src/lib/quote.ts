import { createServerFn } from "@tanstack/react-start";
import { LISTING, QUOTE, type Quote } from "@/lib/market";
import { getTadawulQuote } from "@/lib/tadawul";

export type LiveQuote = Quote & {
  /** true when sourced from a live feed, false when using the static fallback */
  live: boolean;
  symbol: string;
};

/**
 * Default keyless source: Yahoo Finance chart endpoint for the Tadawul listing.
 * Override with the MARKET_QUOTE_URL env var to point at a licensed vendor feed
 * (recommended for production). Any API key should be injected server-side here
 * and never shipped to the client.
 */
const DEFAULT_SOURCE = "https://query1.finance.yahoo.com/v8/finance/chart/1321.SR";

function num(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

/**
 * Server-only quote fetch. Runs on the server, keeping credentials and the
 * upstream contract off the client. Falls back to the static QUOTE on any
 * failure so the UI always renders.
 */
export const getQuote = createServerFn({ method: "GET" }).handler(async (): Promise<LiveQuote> => {
  const fallback: LiveQuote = {
    ...QUOTE,
    live: false,
    symbol: `${LISTING.exchangeShort}:${LISTING.ticker}`,
  };

  // 1) Preferred source: official Tadawul feed (server-side, key from env).
  try {
    const tadawul = await getTadawulQuote();
    if (tadawul?.price !== undefined) {
      return {
        ...QUOTE,
        ...tadawul,
        live: true,
        symbol: `${LISTING.exchangeShort}:${LISTING.ticker}`,
      };
    }
  } catch {
    // fall through to the keyless source below
  }

  // 2) Fallback source: keyless Yahoo Finance chart endpoint.
  const url = process.env.MARKET_QUOTE_URL ?? DEFAULT_SOURCE;

  try {
    const res = await fetch(url, {
      headers: { "user-agent": "Mozilla/5.0 (compatible; EastPipesIR/1.0)" },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return fallback;

    const data = (await res.json()) as {
      chart?: { result?: Array<{ meta?: Record<string, unknown> }> };
    };
    const meta = data.chart?.result?.[0]?.meta;
    if (!meta) return fallback;

    const price = num(meta.regularMarketPrice);
    const prevClose = num(meta.chartPreviousClose) ?? num(meta.previousClose);
    if (price === undefined || prevClose === undefined) return fallback;

    const change = price - prevClose;
    const changePct = prevClose !== 0 ? (change / prevClose) * 100 : 0;

    return {
      price,
      prevClose,
      change,
      changePct,
      open: num(meta.regularMarketOpen) ?? prevClose,
      high: num(meta.regularMarketDayHigh) ?? price,
      low: num(meta.regularMarketDayLow) ?? price,
      volume: num(meta.regularMarketVolume) ?? QUOTE.volume,
      marketCap: num(meta.marketCap) ? (num(meta.marketCap) as number) / 1e9 : QUOTE.marketCap,
      updatedAt: "Live · delayed up to 15 min",
      live: true,
      symbol: `${LISTING.exchangeShort}:${LISTING.ticker}`,
    };
  } catch {
    return fallback;
  }
});
