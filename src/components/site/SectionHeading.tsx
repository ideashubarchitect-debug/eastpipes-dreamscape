import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  caps?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  caps = true,
  className = "",
}: SectionHeadingProps) {
  const muted = tone === "dark" ? "text-white/70" : "text-muted-foreground";
  const heading = tone === "dark" ? "text-white" : "text-foreground";

  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow inline-flex items-center gap-3 text-brand">
          <span className="h-px w-8 bg-brand" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-5 text-balance ${
          caps ? "display-caps text-display-sm" : "text-3xl font-semibold leading-[1.05] md:text-5xl"
        } ${heading}`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-6 lede ${muted}`}>{intro}</p>}
    </Reveal>
  );
}
