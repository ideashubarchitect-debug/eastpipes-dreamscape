import { useQuery } from "@tanstack/react-query";
import { getQuote, type LiveQuote } from "@/lib/quote";
import { LISTING, QUOTE } from "@/lib/market";

const FALLBACK: LiveQuote = {
  ...QUOTE,
  live: false,
  symbol: `${LISTING.exchangeShort}:${LISTING.ticker}`,
};

/**
 * Live quote with graceful degradation:
 * - Renders the static fallback instantly (SSR-safe, no layout shift).
 * - Refreshes from the server every 60s and when the tab regains focus.
 */
export function useStockQuote() {
  const query = useQuery({
    queryKey: ["stock-quote", LISTING.ticker],
    queryFn: () => getQuote(),
    initialData: FALLBACK,
    refetchInterval: 60_000,
    refetchOnWindowFocus: true,
    staleTime: 30_000,
  });

  return query.data ?? FALLBACK;
}
