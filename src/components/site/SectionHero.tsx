import type { ReactNode } from "react";
import { Eyebrow } from "./primitives";

export function SectionHero({
  image,
  eyebrow,
  title,
  intro,
  children,
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden bg-ink text-white grain">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />
      <div className="relative z-10 container-wide h-full flex items-end pb-20 md:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow className="text-signal">{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-5xl md:text-7xl font-medium tracking-tight text-balance">{title}</h1>
          {intro && <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">{intro}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
