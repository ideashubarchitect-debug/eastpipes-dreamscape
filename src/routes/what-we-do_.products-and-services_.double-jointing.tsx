import { createFileRoute } from "@tanstack/react-router";
import { Link2, Truck, ShieldCheck, Timer } from "lucide-react";
import { InfoPage, Section, SpecTable } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/what-we-do_/products-and-services_/double-jointing")({
  head: () => ({
    meta: [
      { title: "Double Jointing (DJ) — East Pipes" },
      {
        name: "description",
        content:
          "Double Jointing merges pipe lengths into extended joints of up to 26 metres — fewer field joints, lower transport and installation costs, verified by NDT.",
      },
    ],
  }),
  component: DoubleJointing,
});

const benefits = [
  { icon: Link2, title: "Fewer field joints", desc: "Merging pipe lengths reduces the number of joints required on site." },
  { icon: Truck, title: "Lower transport cost", desc: "A cost-effective solution that reduces transportation and handling." },
  { icon: Timer, title: "Faster installation", desc: "Less field welding means shorter project timelines on site." },
  { icon: ShieldCheck, title: "NDT verified", desc: "Quality verified by sophisticated, state-of-the-art non-destructive testing." },
];

function DoubleJointing() {
  return (
    <InfoPage
      image={EP_MEDIA.doubleJointing}
      eyebrow="Products & Services"
      title="Double Jointing (DJ)"
      sub="Merging individual pipe lengths into extended double-jointed pipes of up to 26 metres."
      cta={{ label: "Request a quote", to: "/get-quote" }}
      stats={[
        { value: "26 m", label: "Jointed length" },
        { value: '16–60"', label: "Outer diameter" },
        { value: '2"', label: "Max wall" },
        { value: "API 5L", label: "Standard" },
      ]}
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Overview" title="Longer pipes, lower cost." />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              East Pipes offers a Double Jointing solution as a cost-effective way to minimise the
              number of joints and reduce transportation costs — verifying the quality of every
              double-joint with sophisticated, state-of-the-art non-destructive testing facilities.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-secondary p-5">
              <Link2 className="h-8 w-8 shrink-0 text-brand" />
              <div>
                <div className="text-2xl font-semibold text-foreground">
                  Up to <Counter to={26} suffix=" m" />
                </div>
                <div className="text-sm text-muted-foreground">Double-jointed pipe length</div>
              </div>
            </div>
          </div>
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={EP_MEDIA.doubleJointing}
                alt="Double jointing line"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Why Double Jointing" title="A smarter way to build." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Uses + notable projects */}
      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading tone="dark" eyebrow="Uses" title="Where double jointing helps." />
            <ul className="mt-6 space-y-3">
              {[
                "Long-distance water and hydrocarbon transmission lines",
                "Projects where field-joint count drives cost and schedule",
                "Remote sites with high transportation and handling costs",
                "Programmes demanding fast, reliable installation",
              ].map((u) => (
                <li key={u} className="flex items-start gap-3 text-white/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="leading-relaxed">{u}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading tone="dark" eyebrow="Notable Projects" title="Fewer joints, faster builds." />
            <div className="mt-6 space-y-4">
              {[
                { client: "Water Transmission Programmes", scope: "Double-jointed pipe reducing field welds across long water mains." },
                { client: "Oil & Gas Operators", scope: "Extended joints supporting efficient pipeline installation." },
              ].map((p) => (
                <div key={p.client} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-xs font-medium uppercase tracking-widest text-brand">Application</div>
                  <h3 className="mt-2 font-semibold text-white">{p.client}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{p.scope}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Specifications" title="Double jointing range." />
          <div className="mt-8">
            <SpecTable
              rows={[
                ["Outer diameter", "16 – 60 inches"],
                ["Wall thickness", "Up to 2 inches"],
                ["Jointed length", "Up to 26 metres"],
                ["Standard", "In line with API 5L"],
              ]}
            />
          </div>
        </div>
      </Section>
    </InfoPage>
  );
}
