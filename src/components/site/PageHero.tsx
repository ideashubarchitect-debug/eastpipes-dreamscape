import type { ReactNode } from "react";

type PageHeroProps = {
  image: string;
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  children?: ReactNode;
  /** optional stat strip pinned to the bottom of the hero */
  stats?: { value: string; label: string }[];
};

/**
 * Cinematic full-bleed header for interior landing pages — NEOM-inspired:
 * fluid oversized display type, layered gradients, an optional stat band
 * and a subtle scroll cue.
 */
export function PageHero({
  image,
  eyebrow,
  title,
  sub,
  align = "left",
  children,
  stats,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[92svh] w-full flex-col justify-end overflow-hidden bg-ink">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-80 animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />

      <div className="container-wide relative z-10 pb-16 pt-40 md:pb-20">
        <div
          className={`animate-fade-up ${
            align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"
          }`}
        >
          <span
            className={`eyebrow inline-flex items-center gap-3 text-brand ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            <span className="h-px w-8 bg-brand" />
            {eyebrow}
          </span>
          <h1 className="display-caps text-display mt-6 text-balance text-white">{title}</h1>
          {sub && (
            <p
              className={`mt-7 text-lg leading-relaxed text-white/80 md:text-xl ${
                align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
              }`}
            >
              {sub}
            </p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </div>
      </div>

      {/* Stat band */}
      {stats && stats.length > 0 && (
        <div className="relative z-10 border-t border-white/15 bg-white/5 backdrop-blur-md">
          <div className="container-wide grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-6 text-center md:py-8">
                <div className="text-2xl font-semibold tabular-nums text-white md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-white/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scroll cue */}
      {!stats && (
        <div className="scroll-cue pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center">
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
            <span className="h-2 w-0.5 rounded-full bg-white/70" />
          </span>
        </div>
      )}
    </section>
  );
}
