import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Leaf, Users, Landmark, Droplets, Recycle, Sun, ShieldCheck } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/sustainability_/our-approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — Sustainability | East Pipes" },
      {
        name: "description",
        content:
          "East Pipes' sustainability approach across Environment, Social and Governance — protecting the environment, our people and the communities we serve, aligned with Vision 2030.",
      },
    ],
  }),
  component: Approach,
});

const pillars = [
  {
    icon: Leaf,
    tag: "Environment",
    title: "Protecting the environment",
    points: ["Energy-efficient, modern equipment", "Responsible resource and water management", "Lower emissions intensity per tonne"],
  },
  {
    icon: Users,
    tag: "Social",
    title: "Investing in people & community",
    points: ["A safe, healthy workplace for all", "Continuous workforce training", "Local-content and community contribution"],
  },
  {
    icon: Landmark,
    tag: "Governance",
    title: "Operating responsibly",
    points: ["Robust corporate governance", "Transparent disclosure as a listed company", "Strong risk and compliance controls"],
  },
];

const focus = [
  { icon: Sun, t: "Decarbonisation", d: "Energy-efficient mills and a roadmap to lower emissions per tonne produced." },
  { icon: Droplets, t: "Water stewardship", d: "Responsible water management in a water-scarce region." },
  { icon: Recycle, t: "Circular materials", d: "Maximising scrap recovery and responsible steel sourcing." },
  { icon: ShieldCheck, t: "Health & safety", d: "A world-class HSE culture protecting our people and contractors." },
];

function Approach() {
  return (
    <InfoPage
      image={EP_MEDIA.sustainability}
      eyebrow="Sustainability · Our Approach"
      title="Building the future, responsibly."
      sub="Sustainability is engineered into how we operate — protecting the environment, investing in our people, and upholding the governance expected of a listed company."
      stats={[
        { value: "Environment", label: "Protect" },
        { value: "Social", label: "Invest" },
        { value: "Governance", label: "Uphold" },
        { value: "Vision 2030", label: "Aligned" },
      ]}
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="accent-bar" />
            <p className="lede text-balance font-medium text-foreground">
              As a responsible and ethical business, we are committed to protecting the
              environment, ensuring a safe and healthy workplace, and contributing meaningfully to
              the communities in which we operate.
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our approach aligns with the Kingdom's Vision 2030 — embedding environmental
              responsibility, social value and strong governance into our manufacturing and growth,
              and supporting the water, energy and infrastructure ambitions of the nation.
            </p>
          </div>
        </div>
      </Section>

      {/* ESG pillars */}
      <Section tone="muted">
        <SectionHeading eyebrow="Our Framework" title="Environment, Social & Governance." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.tag} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="lift h-full rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-brand">
                    {p.tag}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{p.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Parallax */}
      <Parallax
        image={EP_MEDIA.story2}
        eyebrow="Vision 2030"
        title="Enabling a sustainable Kingdom."
        body="From the water that reaches communities to the energy that powers industry — we build the infrastructure of a sustainable future."
      />

      {/* Focus areas */}
      <Section>
        <SectionHeading eyebrow="Focus Areas" title="Where we act." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focus.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.t} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="lift h-full rounded-2xl border border-border bg-card p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-semibold text-foreground">{f.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Explore more */}
      <Section tone="dark">
        <SectionHeading tone="dark" eyebrow="Explore Sustainability" title="Dive deeper." />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Corporate Social Responsibility", to: "/sustainability/corporate-social-responsibility" },
            { label: "Energy Management", to: "/sustainability/energy-management" },
            { label: "Quality & HSE Policy", to: "/sustainability/quality-hse-policy" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-center justify-between gap-4 rounded-xl border border-white/15 bg-white/5 p-6 transition hover:border-brand/60"
            >
              <span className="font-medium text-white">{l.label}</span>
              <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:text-white" />
            </Link>
          ))}
        </div>
      </Section>
    </InfoPage>
  );
}
