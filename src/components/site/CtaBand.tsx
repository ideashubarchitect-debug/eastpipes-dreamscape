import { PrimaryButton, GhostButton, Eyebrow } from "./primitives";

export function CtaBand({
  eyebrow = "Get in touch",
  title,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="bg-ink text-white grain">
      <div className="container-wide section-pad">
        <Eyebrow className="text-signal">{eyebrow}</Eyebrow>
        <div className="mt-4 grid gap-10 md:grid-cols-[1.4fr_auto] md:items-end">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-balance max-w-3xl">{title}</h2>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton to={primary.to} invert>{primary.label}</PrimaryButton>
            {secondary && <GhostButton to={secondary.to} invert>{secondary.label}</GhostButton>}
          </div>
        </div>
      </div>
    </section>
  );
}
