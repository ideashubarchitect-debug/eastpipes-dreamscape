import { Link } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type StorySectionProps = {
  image: string;
  eyebrow: string;
  title: string;
  body?: string;
  cta?: { label: string; to: LinkProps["to"]; params?: LinkProps["params"] };
  /** vertical position of the text block */
  align?: "bottom" | "center";
  /** minimum viewport height */
  height?: "screen" | "tall";
};

/**
 * NEOM-style full-bleed editorial storytelling block:
 * cinematic media, an editorial eyebrow, a large all-caps headline,
 * minimal copy and a single text-link call to action.
 */
export function StorySection({
  image,
  eyebrow,
  title,
  body,
  cta,
  align = "bottom",
  height = "tall",
}: StorySectionProps) {
  return (
    <section
      className={`group relative w-full overflow-hidden bg-ink ${
        height === "screen" ? "min-h-[100svh]" : "min-h-[90svh]"
      } flex ${align === "center" ? "items-center" : "items-end"}`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-75 transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 to-transparent" />

      <div className="container-wide relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="eyebrow inline-flex items-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand" />
            {eyebrow}
          </span>
          <h2 className="display-caps text-display mt-6 text-balance text-white">{title}</h2>
          {body && <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{body}</p>}
          {cta && (
            <Link
              to={cta.to}
              params={cta.params}
              className="group/cta mt-8 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-sm font-medium uppercase tracking-widest text-white transition hover:border-brand hover:text-brand"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
