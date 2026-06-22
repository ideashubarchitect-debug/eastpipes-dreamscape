import { createFileRoute } from "@tanstack/react-router";
import { Zap, Gauge, LineChart, Recycle } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/sustainability_/energy-management")({
  head: () => ({
    meta: [
      { title: "Energy Management — East Pipes" },
      {
        name: "description",
        content:
          "Energy efficiency and responsible resource management across East Pipes' manufacturing campus, tracked and continuously improved.",
      },
    ],
  }),
  component: EnergyManagement,
});

const measures = [
  { icon: Zap, t: "Efficient equipment", d: "Modern, energy-efficient machinery from leading OEMs across our lines." },
  { icon: LineChart, t: "Monitored KPIs", d: "Energy and resource metrics tracked against clearly defined KPIs." },
  { icon: Gauge, t: "Continuous improvement", d: "Monthly reporting drives ongoing efficiency gains across the campus." },
  { icon: Recycle, t: "Resource recovery", d: "Maximising steel yield and minimising material and energy waste." },
];

function EnergyManagement() {
  return (
    <InfoPage
      image={EP_MEDIA.story2}
      eyebrow="Sustainability · Environment"
      title="Energy, managed responsibly."
      sub="We continually invest in efficient equipment and disciplined monitoring to reduce energy intensity across our manufacturing campus."
      stats={[
        { value: "Efficient", label: "Modern equipment" },
        { value: "KPI-driven", label: "Monitoring" },
        { value: "Monthly", label: "Reporting" },
        { value: "Lower", label: "Energy intensity" },
      ]}
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="accent-bar" />
            <p className="lede text-balance font-medium text-foreground">
              East Pipes continually invests in modern, efficient equipment and processes that
              reduce energy intensity per tonne produced.
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Energy and resource management is integrated into our operational reviews, with
              performance tracked and consolidated in monthly reporting to drive continuous
              improvement across the organisation.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="How We Manage Energy" title="Efficiency, by design." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {measures.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.t} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="lift h-full rounded-2xl border border-border bg-card p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-semibold text-foreground">{m.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Parallax
        image={EP_MEDIA.whatWeDo2}
        eyebrow="Continuous Improvement"
        title="Measured, monitored, improved."
        body="Clearly defined KPIs and disciplined monthly reporting turn efficiency into an everyday operating standard."
      />
    </InfoPage>
  );
}
