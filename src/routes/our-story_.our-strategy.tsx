import { createFileRoute, Link } from "@tanstack/react-router";
import { Factory, Workflow, Users, ArrowUpRight } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/our-story_/our-strategy")({
  head: () => ({
    meta: [
      { title: "Our Strategy — East Pipes" },
      {
        name: "description",
        content:
          "East Pipes' strategy: preserving competitive advantage through manufacturing capacity, disciplined processes and people development.",
      },
    ],
  }),
  component: Strategy,
});

const certs = [
  "API 5L",
  "API Spec Q1",
  "ISO 9001:2015",
  "ISO 45001:2018",
  "ISO 14001:2015",
  "ISO/IEC 17025:2017",
];

const pillars = [
  {
    icon: Factory,
    tag: "Plants",
    title: "Investing in manufacturing capacity.",
    body: "East Pipes regularly invests in its integrated capabilities — pipe manufacturing, double jointing and coating — to deliver complete pipe solutions. In 2019 we expanded annual capacity from 350,000 to 500,000 metric tons, working with leading OEMs and installing the latest machinery, including digital X-ray inspection and advanced welding systems with automatic seam control.",
  },
  {
    icon: Workflow,
    tag: "Processes",
    title: "Documented, audited, ERP-linked.",
    body: "Comprehensive production procedures are regularly reviewed and audited to improve safety, productivity and efficiency. Each function is well defined, documented and integrated into our SAP ERP system, with clearly defined KPIs monitored on an ongoing basis — driving the highest standards in steel yield, coating consumption, plant operation and safety.",
  },
  {
    icon: Users,
    tag: "People",
    title: "A highly qualified workforce.",
    body: "Our people are central to our success. East Pipes trains employees regularly — internally and through external providers — to enhance skills and keep pace with the latest engineering developments. Training is tracked through our Human Resources department, aligned to both functional needs and individual development goals.",
  },
];

function Strategy() {
  return (
    <InfoPage
      image={EP_MEDIA.whatWeDo1}
      eyebrow="Our Story"
      title="Our Strategy"
      sub="Preserving and strengthening our competitive advantage through manufacturing leadership, disciplined cost management and proactive business development."
    >
      <Section>
        <SectionHeading
          eyebrow="The Approach"
          title="Built to be the preferred supplier in the region."
          intro="East Pipes' strategy rests on maintaining its competitive features — manufacturing capacity, business development and price competitiveness — through the following pillars."
        />
        <div className="mt-14 space-y-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.tag} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="grid gap-6 rounded-2xl border border-border bg-card p-8 md:grid-cols-12 md:items-start md:p-10">
                  <div className="md:col-span-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-brand">
                      {p.tag}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-foreground">{p.title}</h3>
                  </div>
                  <p className="md:col-span-8 text-lg leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="Quality Foundation"
          title="Certified to international standards."
          intro="Our factories hold an extensive portfolio of certifications that demand the highest degree of manufacturing capability and process control."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {certs.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/our-story/company-governance"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
          >
            Company governance <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </InfoPage>
  );
}
