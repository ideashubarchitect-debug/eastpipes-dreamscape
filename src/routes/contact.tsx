import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Anchor,
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";
import { LOCATIONS } from "@/lib/locations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — East Pipes" },
      {
        name: "description",
        content:
          "Contact East Pipes Integrated Company — Second Industrial City, Dammam. Phone, department emails, location map and enquiry form.",
      },
    ],
  }),
  component: Contact,
});

const field =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

const departments = [
  { dept: "Sales & Enquiries", email: "sales@eastpipes.com" },
  { dept: "General Information", email: "info@eastpipes.com" },
  { dept: "Investor Relations", email: "Nomination@eastpipes.com" },
  { dept: "Careers", email: "careers@eastpipes.com" },
];

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/east-pipes-integrated-company-for-industry/",
  },
  { icon: Twitter, href: "https://twitter.com/EastPipes" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <InfoPage
      image={EP_MEDIA.glance1}
      eyebrow="Contact Us"
      title="Let's build together."
      sub="Whether it's a project enquiry, a partnership or an investor question, our team is ready to help."
    >
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="lift flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-7">
              <Phone className="h-7 w-7 text-brand" />
              <div className="font-semibold text-foreground">Call us</div>
              <div className="text-muted-foreground">
                <a href="tel:+966138616801" className="block hover:text-brand">
                  +966 13 8616801
                </a>
                <a href="tel:+966138616808" className="block hover:text-brand">
                  +966 13 8616808
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="lift flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-7">
              <Mail className="h-7 w-7 text-brand" />
              <div className="font-semibold text-foreground">Email us</div>
              <div className="text-muted-foreground">
                <a href="mailto:sales@eastpipes.com" className="block hover:text-brand">
                  sales@eastpipes.com
                </a>
                <a href="mailto:info@eastpipes.com" className="block hover:text-brand">
                  info@eastpipes.com
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="lift flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-7">
              <MapPin className="h-7 w-7 text-brand" />
              <div className="font-semibold text-foreground">Visit us</div>
              <p className="text-muted-foreground">
                P.O. Box 12943, Postal Code 31483
                <br />
                Street No 89, 2nd Industrial City
                <br />
                Dammam, Kingdom of Saudi Arabia
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Department emails + social */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Department-wise Email" title="Reach the right team." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {departments.map((d) => (
                <a
                  key={d.dept}
                  href={`mailto:${d.email}`}
                  className="lift flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div>
                    <div className="font-medium text-foreground">{d.dept}</div>
                    <div className="text-sm text-brand">{d.email}</div>
                  </div>
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Logistics & Social" title="Find & follow us." />
            <div className="mt-8 flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <Anchor className="h-6 w-6 shrink-0 text-brand" />
              <p className="text-sm text-muted-foreground">
                Near King Abdulaziz Port (Dammam) &amp; Jubail Commercial Port — excellent access to
                regional and export routes.
              </p>
            </div>
            <div className="mt-4 flex gap-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    aria-label="Social"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-brand hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Our locations */}
      <Section>
        <SectionHeading
          eyebrow="Our Locations"
          title="Find us on the map."
          intro="Our head office and manufacturing plants in Dammam. Select any location to open it directly in Google Maps."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <iframe
                    title={`East Pipes — ${loc.name}`}
                    src={loc.embedUrl}
                    className="pointer-events-none h-full w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <div className="text-xs uppercase tracking-widest text-brand">{loc.kind}</div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-semibold text-foreground">{loc.name}</div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-brand" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {loc.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-brand">
                    Open in Google Maps
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Form + map */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="text-xl font-semibold text-foreground">Send us a message</h3>
              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Full name" className={field} />
                  <input required type="email" placeholder="Email" className={field} />
                </div>
                <input placeholder="Company / organisation" className={field} />
                <textarea required rows={5} placeholder="How can we help?" className={field} />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
                >
                  {sent ? "Thank you — we'll be in touch" : "Send message"}
                  <Send className="h-4 w-4" />
                </button>
                {sent && (
                  <p className="text-sm text-muted-foreground">
                    Demo form — connect to your CRM or email service to receive submissions.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
          <Reveal delay={1}>
            <div className="flex h-full min-h-[360px] flex-col overflow-hidden rounded-2xl border border-border">
              <iframe
                title="East Pipes — Head Office"
                src={LOCATIONS[0].embedUrl}
                className="w-full flex-1"
                style={{ border: 0, minHeight: 300 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={LOCATIONS[0].mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-2 border-t border-border bg-card px-5 py-4 text-sm font-medium text-foreground transition hover:text-brand"
              >
                Open Head Office in Google Maps
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </InfoPage>
  );
}
