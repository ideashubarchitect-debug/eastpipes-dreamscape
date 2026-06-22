import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Factory, ShieldCheck, Boxes, Users } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Parallax } from "@/components/site/Parallax";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

const CDN = "https://www.eastpipes.com/wp-content/uploads";

const team = [
  { name: "Mr. Mohammed Saleh Darweesh", role: "CEO Interim & CFO", img: `${CDN}/2025/11/Darweesh-1.webp` },
  { name: "Mr. Sanjay K Shrivastava", role: "VP Operation", img: `${CDN}/2021/12/01-2Sanjay-Shrivastava-VP-Operations-1024x1024.jpg` },
  { name: "Mr. Khalid Babakri", role: "VP QHSE", img: `${CDN}/2021/12/01-2Khalid-Babakri-VP-QHSE-400x400.jpg` },
  { name: "Mr. Yashwant Kr. Gautam", role: "GM Coating", img: `${CDN}/2021/12/01-2-Yashwant-Gautam-Coating-Plant-GM-400x400.jpg` },
  { name: "Mr. Abdullah Abusharifa", role: "Head HCGA", img: `${CDN}/2021/12/01-Abdullah-Abu-Sharifa-HCGA-Head-400x400.jpg` },
  { name: "Mr. Santosh Dhimate", role: "Head SCM", img: `${CDN}/2021/12/01-2-Santosh-Dhimate-Supply-Chain-Head-400x400.jpg` },
];

const focus = [
  { icon: Factory, k: "Operational excellence", v: "Running four production lines and integrated double-jointing and coating at world-class standards." },
  { icon: ShieldCheck, k: "Quality, health & safety", v: "An uncompromising QHSE culture across every process and site." },
  { icon: Boxes, k: "Reliable supply chain", v: "Disciplined procurement and a yard management system for on-time delivery." },
  { icon: Users, k: "People & capability", v: "Developing a 480-strong workforce through continuous training." },
];

export const Route = createFileRoute("/our-story_/leadership/executive-leadership")({
  head: () => ({
    meta: [
      { title: "Executive Leadership — East Pipes" },
      {
        name: "description",
        content:
          "The executive leadership team driving East Pipes' operations, quality, supply chain and growth.",
      },
    ],
  }),
  component: Exec,
});

function Exec() {
  return (
    <InfoPage
      image={EP_MEDIA.glance2}
      eyebrow="Leadership · Executive Team"
      title="Leading day-to-day excellence."
      sub="An experienced management team translating strategy into manufacturing excellence, quality and growth."
      stats={[
        { value: "500K MT", label: "Annual capacity led" },
        { value: "480+", label: "Workforce" },
        { value: "3", label: "Production units" },
        { value: "ISO 17025", label: "Certified lab" },
      ]}
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="accent-bar" />
            <p className="lede text-balance font-medium text-foreground">
              Our executive team brings decades of combined experience across manufacturing,
              quality, supply chain and finance — driving performance every single day.
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              From the shop floor to the boardroom, our leaders are united by a customer-centric
              model and a commitment to operational excellence, safety and sustainable growth.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Meet the Team" title="Executive Leadership." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="group lift media-zoom overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-ink to-brand/70">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold leading-snug text-foreground">{m.name}</h3>
                  <p className="mt-1 text-sm text-brand">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Parallax
        image={EP_MEDIA.whatWeDo1}
        eyebrow="How We Operate"
        title="Strategy, executed daily."
        body="Documented processes, SAP ERP integration and clear KPIs translate ambition into consistent, world-class output."
      />

      <Section>
        <SectionHeading eyebrow="Leadership Focus" title="Where our leaders drive value." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {focus.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.k} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="lift h-full rounded-2xl border border-border bg-card p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-semibold text-foreground">{f.k}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.v}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10">
          <Link
            to="/our-story/leadership/bod"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-brand"
          >
            Meet the Board of Directors <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </InfoPage>
  );
}
