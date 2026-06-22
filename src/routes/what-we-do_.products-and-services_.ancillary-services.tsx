import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Headset, PiggyBank, Boxes } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/what-we-do_/products-and-services_/ancillary-services")({
  head: () => ({
    meta: [
      { title: "Ancillary Services — East Pipes" },
      {
        name: "description",
        content:
          "ISO 17025 laboratory services, technical support, cost-effective solutions and a sophisticated yard management system from East Pipes.",
      },
    ],
  }),
  component: Ancillary,
});

const services = [
  {
    icon: FlaskConical,
    tag: "Laboratory Services",
    title: "ISO 17025-certified testing.",
    body: "A fully equipped laboratory with ISO 17025 certification for pipe and coating. We provide testing services for product development and quality assurance, promoting confidence through rigorous conformity assessment of materials, dimensions and coating performance.",
    img: EP_MEDIA.ancillary,
  },
  {
    icon: Headset,
    tag: "Technical Support",
    title: "Expertise on call.",
    body: "East Pipes has taken a leadership role in the pipes market by providing technical service support to customers through our qualified and experienced staff — from specification through to delivery, including API 5L X-80 grade.",
    img: EP_MEDIA.techSupport,
  },
  {
    icon: PiggyBank,
    tag: "Cost-Effective Solutions",
    title: "Competitive by design.",
    body: "Saving costs at East Pipes is based on two major components: the cost price of the pipe and overall operational effectiveness — making the production line as effective as possible while protecting quality and margin.",
    img: EP_MEDIA.costSavings,
  },
  {
    icon: Boxes,
    tag: "Yard Management System",
    title: "Total visibility & control.",
    body: "East Pipes applies a sophisticated yard management system to gain visibility and control, manage network operations more efficiently, and collaborate effectively with trading partners for timely, accurate order fulfilment.",
    img: EP_MEDIA.whatWeDo1,
  },
];

function Ancillary() {
  return (
    <InfoPage
      image={EP_MEDIA.ancillary}
      eyebrow="Products & Services"
      title="Ancillary Services"
      sub="Value-added services that complement our manufacturing and support customers from specification to delivery."
    >
      <Section>
        <div className="space-y-16">
          {services.map((s, idx) => {
            const Icon = s.icon;
            const reverse = idx % 2 === 1;
            return (
              <Reveal key={s.tag}>
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink">
                      <img
                        src={s.img}
                        alt={s.tag}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={reverse ? "lg:order-1" : ""}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="mt-5 text-xs font-medium uppercase tracking-[0.25em] text-brand">
                      {s.tag}
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">{s.title}</h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </InfoPage>
  );
}
