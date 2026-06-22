import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, Send, ClipboardList, Handshake } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: "Vendors — East Pipes" },
      {
        name: "description",
        content:
          "Partner with East Pipes — view open requirements and tenders, and register as a supplier.",
      },
    ],
  }),
  component: Vendors,
});

const field =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

const tenders = [
  { ref: "EPIC-RAW-2026-014", title: "Hot-rolled steel coil supply", category: "Raw Materials", closes: "Open" },
  { ref: "EPIC-CON-2026-021", title: "Coating consumables (FBE / 3LPE)", category: "Consumables", closes: "Open" },
  { ref: "EPIC-LOG-2026-009", title: "Heavy logistics & transportation", category: "Logistics", closes: "Open" },
];

function Vendors() {
  const [sent, setSent] = useState(false);
  return (
    <InfoPage
      image={EP_MEDIA.whatWeDo2}
      eyebrow="Vendors"
      title="Partner with East Pipes."
      sub="We work with suppliers who share our commitment to quality, safety and reliable delivery. Explore open requirements and register your company."
      stats={[
        { value: "Open", label: "Tender postings" },
        { value: "Transparent", label: "Procurement" },
        { value: "Local content", label: "Prioritised" },
        { value: "API · ISO", label: "Quality-driven" },
      ]}
    >
      {/* Tenders */}
      <Section>
        <SectionHeading
          eyebrow="Requirements & Tenders"
          title="Current opportunities."
          intro="Open requirements for materials, consumables, logistics and services. Submit expressions of interest through vendor registration."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary text-xs uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="px-5 py-4">Reference</th>
                <th className="px-5 py-4">Title</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {tenders.map((t, i) => (
                <tr key={t.ref} className={i % 2 ? "bg-secondary/40" : "bg-card"}>
                  <td className="px-5 py-4 font-medium text-foreground">{t.ref}</td>
                  <td className="px-5 py-4 text-muted-foreground">{t.title}</td>
                  <td className="px-5 py-4 text-muted-foreground">{t.category}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700">
                      {t.closes}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Tender references are illustrative. Connect to your procurement system to publish live
          postings.
        </p>
      </Section>

      {/* Why partner */}
      <Section tone="muted">
        <SectionHeading eyebrow="Why Partner With Us" title="A dependable, growing customer." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Handshake, t: "Long-term relationships", d: "We value reliable partners and build lasting supply relationships." },
            { icon: ClipboardList, t: "Clear, fair process", d: "Transparent procurement aligned to quality and compliance standards." },
            { icon: FileText, t: "Local content focus", d: "Active supporter of the Kingdom's local-content programmes." },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.t} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="lift h-full rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-semibold text-foreground">{b.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Registration form */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Vendor Registration"
            title="Register as a supplier."
            intro="Tell us about your company and capabilities. Our supply chain team will review and follow up."
          />
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Company name" className={field} />
                  <input required placeholder="Contact person" className={field} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required type="email" placeholder="Email" className={field} />
                  <input placeholder="Phone" className={field} />
                </div>
                <select className={field} defaultValue="">
                  <option value="" disabled>
                    Category of supply
                  </option>
                  <option>Raw Materials</option>
                  <option>Consumables</option>
                  <option>Logistics & Transportation</option>
                  <option>Services</option>
                  <option>Other</option>
                </select>
                <textarea required rows={4} placeholder="Products / services & capabilities" className={field} />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
                >
                  {sent ? "Thank you — we'll be in touch" : "Submit registration"}
                  <Send className="h-4 w-4" />
                </button>
                {sent && (
                  <p className="text-sm text-muted-foreground">
                    Demo form — connect to your procurement/CRM system to receive registrations.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </Section>
    </InfoPage>
  );
}
