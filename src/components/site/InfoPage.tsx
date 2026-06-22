import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

type To = LinkProps["to"];

export function InfoPage({
  image,
  eyebrow,
  title,
  sub,
  children,
  cta,
  stats,
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  children: ReactNode;
  cta?: { label: string; to: string };
  stats?: { value: string; label: string }[];
}) {
  return (
    <div className="bg-background">
      <Header />
      <main className="brand-theme">
        <PageHero image={image} eyebrow={eyebrow} title={title} sub={sub} stats={stats}>
          {cta && (
            <Link
              to={cta.to as To}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
            >
              {cta.label} <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </PageHero>
        {children}
      </main>
      <Footer />
    </div>
  );
}

/** Standard padded content section. */
export function Section({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "muted" | "dark";
  className?: string;
}) {
  const bg =
    tone === "dark" ? "bg-ink text-white" : tone === "muted" ? "bg-secondary" : "bg-background";
  return (
    <section className={`${bg} py-20 md:py-28 ${className}`}>
      <div className="container-wide">{children}</div>
    </section>
  );
}

/** Prose paragraphs. */
export function Prose({
  paragraphs,
  tone = "light",
}: {
  paragraphs: string[];
  tone?: "light" | "dark";
}) {
  const c = tone === "dark" ? "text-white/75" : "text-muted-foreground";
  return (
    <div className={`max-w-3xl space-y-5 text-lg leading-relaxed ${c}`}>
      {paragraphs.map((p, i) => (
        <Reveal key={i} as="p">
          {p}
        </Reveal>
      ))}
    </div>
  );
}

/** Stat / fact grid. */
export function FactGrid({
  items,
  tone = "light",
}: {
  items: { value: string; label: string }[];
  tone?: "light" | "dark";
}) {
  const v = tone === "dark" ? "text-white" : "text-ink";
  const l = tone === "dark" ? "text-white/60" : "text-muted-foreground";
  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {items.map((s, i) => (
        <Reveal key={s.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
          <div className={`text-4xl font-semibold tabular-nums md:text-5xl ${v}`}>{s.value}</div>
          <div className={`mt-2 text-sm ${l}`}>{s.label}</div>
        </Reveal>
      ))}
    </div>
  );
}

/** Bulleted feature list. */
export function BulletList({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: "light" | "dark";
}) {
  const c = tone === "dark" ? "text-white/75" : "text-muted-foreground";
  return (
    <ul className="mt-2 space-y-3">
      {items.map((b) => (
        <li key={b} className={`flex items-start gap-3 ${c}`}>
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span className="leading-relaxed">{b}</span>
        </li>
      ))}
    </ul>
  );
}

/** Two-column spec table. */
export function SpecTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([k, v], i) => (
            <tr key={k} className={i % 2 === 0 ? "bg-secondary" : "bg-card"}>
              <th className="w-2/5 px-5 py-4 text-left align-top font-semibold text-foreground">
                {k}
              </th>
              <td className="px-5 py-4 align-top text-muted-foreground">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
