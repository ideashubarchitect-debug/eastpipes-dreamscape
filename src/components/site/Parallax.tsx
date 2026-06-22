import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

type To = LinkProps["to"];

/**
 * Full-bleed, fixed-attachment image band with an overlaid statement —
 * the cinematic "image break" that gives the pages a NEOM-style rhythm.
 */
export function Parallax({
  image,
  eyebrow,
  title,
  body,
  cta,
  align = "left",
  height = "tall",
}: {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  cta?: { label: string; to: string };
  align?: "left" | "center";
  height?: "tall" | "screen" | "compact";
}) {
  const h =
    height === "screen"
      ? "min-h-[100svh]"
      : height === "compact"
        ? "min-h-[60svh]"
        : "min-h-[80svh]";
  return (
    <section
      className={`relative flex w-full items-center overflow-hidden bg-ink bg-cover bg-center bg-fixed ${h}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
      <div className="container-wide relative z-10 py-24">
        <Reveal className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
          {eyebrow && (
            <span
              className={`eyebrow inline-flex items-center gap-3 text-brand ${
                align === "center" ? "justify-center" : ""
              }`}
            >
              <span className="h-px w-8 bg-brand" />
              {eyebrow}
            </span>
          )}
          <h2 className="display-caps text-display-sm mt-6 text-balance text-white">{title}</h2>
          {body && (
            <p
              className={`mt-6 text-lg leading-relaxed text-white/80 md:text-xl ${
                align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
              }`}
            >
              {body}
            </p>
          )}
          {cta && (
            <Link
              to={cta.to as To}
              className="group mt-8 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-sm font-medium uppercase tracking-widest text-white transition hover:border-brand hover:text-brand"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Editorial split: an oversized image beside content. Alternating layouts
 * create the magazine-like rhythm used across the inner pages.
 */
export function SplitFeature({
  image,
  eyebrow,
  title,
  children,
  reverse = false,
  tone = "light",
}: {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  reverse?: boolean;
  tone?: "light" | "muted" | "dark";
}) {
  const bg = tone === "dark" ? "bg-ink text-white" : tone === "muted" ? "bg-secondary" : "bg-background";
  const headingColor = tone === "dark" ? "text-white" : "text-foreground";
  return (
    <section className={`${bg} py-20 md:py-28`}>
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <div className="media-zoom group relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink lg:aspect-[5/6]">
            <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </Reveal>
        <div className={reverse ? "lg:order-1" : ""}>
          {eyebrow && (
            <span className="eyebrow inline-flex items-center gap-3 text-brand">
              <span className="h-px w-8 bg-brand" />
              {eyebrow}
            </span>
          )}
          <h2 className={`display-caps text-display-sm mt-6 text-balance ${headingColor}`}>{title}</h2>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </section>
  );
}
