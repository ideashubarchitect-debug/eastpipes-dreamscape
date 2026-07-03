/**
 * Official Tadawul (Saudi Exchange) market-data integration.
 *
 * SERVER-ONLY. This module is imported exclusively from src/lib/quote.ts inside
 * a TanStack Start server function, so the secure key never reaches the client.
 *
 * Source: GetDetailQuote SOAP service (WSDL provided by the client).
 *   Operation : getDetailQuoteForCompany(companyId, secureKey)
 *   Endpoint  : https://webservices.tadawul.com.sa/Tadawul_WebAPI/services/GetDetailQuote
 *
 * Credentials: env vars take precedence; otherwise the values below (provided
 * by the client) are used so the feed works without deployment config.
 * NOTE: for production, prefer setting TADAWUL_SECURE_KEY as a Cloudflare secret
 * and removing the inline default — this key lives in the repo source otherwise.
 *   TADAWUL_SECURE_KEY  (secure key — defaults to the client-provided value)
 *   TADAWUL_COMPANY_ID  (defaults to the listing ticker, 1321)
 *   TADAWUL_API_URL     (defaults to the endpoint above)
 */

import { QUOTE, type Quote } from "@/lib/market";

const DEFAULT_ENDPOINT =
  "https://webservices.tadawul.com.sa/Tadawul_WebAPI/services/GetDetailQuote";

// Client-provided credentials, used when the matching env var is not set.
const DEFAULT_SECURE_KEY = "948639304";
const DEFAULT_COMPANY_ID = "1321";

/** Extract a tag's text content, ignoring any namespace prefix. */
function pick(xml: string, tag: string): string | undefined {
  const m = xml.match(
    new RegExp(`<(?:[\\w-]+:)?${tag}\\b[^>]*>([\\s\\S]*?)</(?:[\\w-]+:)?${tag}>`, "i"),
  );
  return m?.[1]?.trim();
}

/** Parse a numeric field, tolerating thousands separators (e.g. "6,804.00"). */
function toNum(value: string | undefined): number | undefined {
  if (value == null) return undefined;
  const cleaned = value.replace(/,/g, "").trim();
  if (cleaned === "") return undefined;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : undefined;
}

function buildEnvelope(companyId: string, secureKey: string): string {
  // document/literal; wrapper element is namespace-qualified, children are not.
  return `<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://services.RSS.tadawul.com">
  <soapenv:Header/>
  <soapenv:Body>
    <ser:getDetailQuoteForCompany>
      <companyId>${companyId}</companyId>
      <secureKey>${secureKey}</secureKey>
    </ser:getDetailQuoteForCompany>
  </soapenv:Body>
</soapenv:Envelope>`;
}

/**
 * Fetches the live detail quote from Tadawul and maps it to our Quote shape.
 * Returns null when the feed is not configured or the call fails, so callers
 * can fall back gracefully.
 */
export async function getTadawulQuote(): Promise<Partial<Quote> | null> {
  const secureKey = process.env.TADAWUL_SECURE_KEY ?? DEFAULT_SECURE_KEY;
  const companyId = process.env.TADAWUL_COMPANY_ID ?? DEFAULT_COMPANY_ID;
  const url = process.env.TADAWUL_API_URL ?? DEFAULT_ENDPOINT;
  if (!secureKey) return null; // feed disabled — caller falls back

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      SOAPAction: "getDetailQuoteForCompany",
    },
    body: buildEnvelope(companyId, secureKey),
    signal: AbortSignal.timeout(6000),
  });
  if (!res.ok) return null;

  const xml = await res.text();
  // SOAP fault or application exception — treat as unavailable.
  if (/<(?:\w+:)?Fault\b|faultstring|ApplicationException/i.test(xml)) return null;

  const price = toNum(pick(xml, "lastTradePrice"));
  if (price === undefined) return null;

  const prevClose = toNum(pick(xml, "prevClosePrice"));
  const changeAmount = toNum(pick(xml, "changeAmount"));
  const changePct = toNum(pick(xml, "changePercentage"));
  // marketCap is reported in SAR millions (e.g. "6,804.00"); our field is SAR billions.
  const marketCapMillions = toNum(pick(xml, "marketCap"));
  const lastUpdate = pick(xml, "lastUpdateTime");

  return {
    price,
    prevClose: prevClose ?? price,
    change: changeAmount ?? (prevClose !== undefined ? price - prevClose : 0),
    changePct:
      changePct ?? (prevClose && prevClose !== 0 ? ((price - prevClose) / prevClose) * 100 : 0),
    open: toNum(pick(xml, "open")) ?? prevClose ?? price,
    high: toNum(pick(xml, "highPrice")) ?? price,
    low: toNum(pick(xml, "lowPrice")) ?? price,
    volume: toNum(pick(xml, "volumeTraded")) ?? QUOTE.volume,
    marketCap: marketCapMillions !== undefined ? marketCapMillions / 1000 : QUOTE.marketCap,
    updatedAt: lastUpdate ? `Tadawul · ${lastUpdate}` : "Tadawul · live",
  };
}
