import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ticker } from "@/data/ir";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`eyebrow text-brand ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow className={invert ? "text-signal" : ""}>{eyebrow}</Eyebrow>}
      <h2 className={`mt-4 text-4xl md:text-6xl font-medium tracking-tight text-balance ${invert ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 text-lg leading-relaxed ${invert ? "text-white/70" : "text-foreground/65"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function TickerPill({ compact = false }: { compact?: boolean }) {
  const up = ticker.changeAbs >= 0;
  return (
    <Link
      to="/investors/stock"
      className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1.5 text-xs font-mono text-white/90 hover:bg-white/10 transition"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
      <span className="font-semibold tracking-wider">{ticker.symbol}</span>
      {!compact && <span className="text-white/40">·</span>}
      <span>{ticker.currency} {ticker.price.toFixed(2)}</span>
      <span className={up ? "text-emerald-300" : "text-rose-300"}>
        {up ? "▲" : "▼"} {ticker.changePct.toFixed(2)}%
      </span>
    </Link>
  );
}

export function TickerPillLight() {
  const up = ticker.changeAbs >= 0;
  return (
    <Link
      to="/investors/stock"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-mono text-ink hover:border-brand transition"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-dot" />
      <span className="font-semibold tracking-wider">{ticker.symbol}</span>
      <span className="text-foreground/40">·</span>
      <span>{ticker.currency} {ticker.price.toFixed(2)}</span>
      <span className={up ? "text-emerald-600" : "text-rose-600"}>
        {up ? "▲" : "▼"} {ticker.changePct.toFixed(2)}%
      </span>
    </Link>
  );
}

export function PrimaryButton({
  children,
  to,
  href,
  invert = false,
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  invert?: boolean;
}) {
  const cls = invert
    ? "bg-white text-ink hover:bg-signal hover:text-ink"
    : "bg-ink text-white hover:bg-brand";
  const inner = (
    <span className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition ${cls}`}>
      {children} <ArrowRight className="h-4 w-4" />
    </span>
  );
  // @ts-expect-error tanstack typed paths
  if (to) return <Link to={to}>{inner}</Link>;
  return <a href={href ?? "#"}>{inner}</a>;
}

export function GhostButton({
  children,
  to,
  invert = false,
}: {
  children: ReactNode;
  to?: string;
  invert?: boolean;
}) {
  const cls = invert
    ? "border-white/30 text-white hover:bg-white hover:text-ink"
    : "border-ink/20 text-ink hover:bg-ink hover:text-white";
  const inner = (
    <span className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium tracking-wide transition ${cls}`}>
      {children} <ArrowUpRight className="h-4 w-4" />
    </span>
  );
  // @ts-expect-error tanstack typed paths
  if (to) return <Link to={to}>{inner}</Link>;
  return <span>{inner}</span>;
}

export function StatCard({ label, value, delta }: { label: string; value: string; delta?: string }) {
  return (
    <div className="border-t border-white/15 pt-5">
      <div className="eyebrow text-white/50">{label}</div>
      <div className="mt-3 font-display text-3xl md:text-4xl tracking-tight text-white">{value}</div>
      {delta && <div className="mt-1 text-xs font-mono text-signal">{delta}</div>}
    </div>
  );
}
