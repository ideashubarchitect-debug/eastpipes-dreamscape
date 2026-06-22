/**
 * Centralised investor / company data — sourced from the East Pipes
 * Corporate Profile. Share-price figures are representative placeholders for
 * the live feed (see src/lib/quote.ts); operational figures are factual.
 */

export const LISTING = {
  exchange: "Saudi Exchange (Tadawul)",
  exchangeShort: "TADAWUL",
  ticker: "1321",
  name: "East Pipes Integrated Company for Industry",
  currency: "SAR",
  sector: "Materials — Capital Goods",
} as const;

export const IR_EMAIL = "Nomination@eastpipes.com";

export const HQ = {
  line1: "Second Industrial City",
  line2: "Dammam, Kingdom of Saudi Arabia",
} as const;

export type Quote = {
  price: number;
  change: number;
  changePct: number;
  open: number;
  high: number;
  low: number;
  prevClose: number;
  volume: number;
  marketCap: number; // in SAR billions
  updatedAt: string;
};

export const QUOTE: Quote = {
  price: 142.8,
  change: 2.6,
  changePct: 1.85,
  open: 140.4,
  high: 143.6,
  low: 139.8,
  prevClose: 140.2,
  volume: 318_540,
  marketCap: 7.14,
  updatedAt: "Delayed 15 min",
};

/** 12-month indexed performance series (representative). */
export const PERFORMANCE: { month: string; price: number }[] = [
  { month: "Jul", price: 88.2 },
  { month: "Aug", price: 92.5 },
  { month: "Sep", price: 97.1 },
  { month: "Oct", price: 101.4 },
  { month: "Nov", price: 99.8 },
  { month: "Dec", price: 108.6 },
  { month: "Jan", price: 115.2 },
  { month: "Feb", price: 121.0 },
  { month: "Mar", price: 118.4 },
  { month: "Apr", price: 129.7 },
  { month: "May", price: 136.3 },
  { month: "Jun", price: 142.8 },
];

/** Factual operational highlights from the corporate profile. */
export const COMPANY_HIGHLIGHTS = [
  { value: 500, suffix: "K MT", prefix: "", decimals: 0, label: "Annual production capacity" },
  { value: 50, suffix: "%+", prefix: "", decimals: 0, label: "Saudi market share (3 yrs)" },
  { value: 75, suffix: "+", prefix: "", decimals: 0, label: "Projects completed" },
  { value: 16, suffix: "M+ m²", prefix: "", decimals: 0, label: "Coating supplied" },
] as const;

/** Real analyst coverage (per corporate profile). */
export const ANALYST = {
  firm: "EFG Hermes",
  rating: "BUY",
  target: "SAR 185",
  upside: "~30% upside",
  note: "Initiating coverage",
  source: "EFG Hermes Research, published 16 December 2025",
} as const;

export function formatNumber(n: number, decimals = 2) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
