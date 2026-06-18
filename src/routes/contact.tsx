import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { Eyebrow, PrimaryButton } from "@/components/site/primitives";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — East Pipes" },
      { name: "description", content: "Reach East Pipes Integrated Co. — HQ, plants, sales and investor relations." },
      { property: "og:title", content: "Contact East Pipes" },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { c: "Headquarters", a: "Second Industrial City, Dammam, KSA", p: "+966 13 000 0000", e: "info@eastpipes.com" },
  { c: "International Sales", a: "DIFC, Dubai, UAE", p: "+971 4 000 0000", e: "sales@eastpipes.com" },
  { c: "Investor Relations", a: "Riyadh, KSA", p: "+966 11 000 0000", e: "ir@eastpipes.com" },
];

function ContactPage() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=2000&q=80"
        eyebrow="Contact"
        title="Let's build together."
        intro="From flagship projects to investor enquiries — we respond within one business day."
      />

      <section className="bg-background">
        <div className="container-wide section-pad grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow>Offices</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium text-ink mb-8">Where to find us.</h2>
            <div className="space-y-6">
              {offices.map((o) => (
                <div key={o.c} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl font-medium text-ink">{o.c}</h3>
                  <ul className="mt-4 space-y-2 text-foreground/70">
                    <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand" />{o.a}</li>
                    <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand" />{o.p}</li>
                    <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand" />{o.e}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow>Enquiry</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium text-ink mb-8">Tell us about your project.</h2>
            <form className="space-y-4 rounded-2xl border border-border bg-card p-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-border bg-background px-4 py-3 text-sm" placeholder="Full name" />
                <input className="rounded-md border border-border bg-background px-4 py-3 text-sm" placeholder="Company" />
              </div>
              <input className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm" placeholder="Email" type="email" />
              <input className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm" placeholder="Subject" />
              <textarea rows={5} className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm" placeholder="How can we help?" />
              <PrimaryButton>Send enquiry</PrimaryButton>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
