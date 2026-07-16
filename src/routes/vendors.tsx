import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, Send, ClipboardList, Handshake } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { EP_MEDIA } from "@/lib/media";
import { submitVendorApplication } from "@/lib/vendor-submit";
import {
  vendorSchema,
  buildVendorEmailBody,
  VENDOR_SUBMISSION_EMAIL,
  type VendorFormData,
} from "@/lib/vendor-form";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: "Vendors — East Pipes" },
      {
        name: "description",
        content:
          "Partner with East Pipes — register as a supplier by completing our vendor approval form.",
      },
    ],
  }),
  component: Vendors,
});

const field =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";
const label = "mb-1.5 block text-sm font-medium text-foreground";
const req = <span className="text-brand">*</span>;

// Field labels, validation and email-body construction live in
// src/lib/vendor-form.ts (shared with the server handler). The internal approval
// block (Prepared by / HOD / Compliance / CEO) is intentionally omitted here.

type SubmitStatus = "idle" | "submitting" | "sent" | "mailto";

/** Opens the visitor's email client pre-filled — the fallback delivery path. */
function openMailto(data: VendorFormData) {
  const subject = `Vendor Approval Request — ${data.supplierName || "New supplier"}`;
  const href = `mailto:${VENDOR_SUBMISSION_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(buildVendorEmailBody(data))}`;
  window.location.href = href;
}

function Vendors() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [relatedParty, setRelatedParty] = useState("No");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget));

    const parsed = vendorSchema.safeParse(raw);
    if (!parsed.success) return; // native required attrs cover the UX

    setStatus("submitting");
    try {
      const result = await submitVendorApplication({ data: parsed.data });
      if (result.ok) {
        setStatus("sent");
        return;
      }
      // Provider not configured (or send failed) — fall back to mailto.
      openMailto(parsed.data);
      setStatus("mailto");
    } catch {
      openMailto(parsed.data);
      setStatus("mailto");
    }
  }

  return (
    <InfoPage
      image={EP_MEDIA.whatWeDo2}
      eyebrow="Vendors"
      title="Partner with East Pipes."
      sub="We work with suppliers who share our commitment to quality, safety and reliable delivery. Complete the vendor approval form below to register your company with our procurement team."
      stats={[
        { value: "Transparent", label: "Procurement" },
        { value: "Local content", label: "Prioritised" },
        { value: "API · ISO", label: "Quality-driven" },
        { value: "Long-term", label: "Partnerships" },
      ]}
    >
      {/* Why partner */}
      <Section>
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

      {/* Vendor approval form */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Vendor Approval"
          title="Register as a supplier."
          intro="Complete the form below (Vendor Approval for Spares, Consumables and Lab Items — EPC/PROC/F/09). On submission it is sent to our procurement team for review."
        />

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-6 md:p-10"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              General Information
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <label className={label}>Name of Supplier {req}</label>
                <input required name="supplierName" className={field} placeholder="Company legal name" />
              </div>

              <div>
                <label className={label}>Address of Supplier {req}</label>
                <textarea required name="address" rows={2} className={field} placeholder="Full address" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label}>Country {req}</label>
                  <input required name="country" className={field} placeholder="Country" />
                </div>
                <div>
                  <label className={label}>Contact person's name &amp; designation {req}</label>
                  <input required name="contactPerson" className={field} placeholder="Name — designation" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label}>Contact Email Id {req}</label>
                  <input required type="email" name="email" className={field} placeholder="name@company.com" />
                </div>
                <div>
                  <label className={label}>Contact Mobile / Tel No. {req}</label>
                  <input required name="phone" className={field} placeholder="+966 …" />
                </div>
              </div>

              <div>
                <label className={label}>
                  Type of Company / Scope of work / Qualified products &amp; services {req}
                </label>
                <textarea
                  required
                  name="scope"
                  rows={3}
                  className={field}
                  placeholder="Describe your company type, scope of supply and qualified products/services"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label}>Payment Terms</label>
                  <input name="paymentTerms" className={field} placeholder="e.g. 60 days net" />
                </div>
                <div>
                  <label className={label}>CR No / Expiry date</label>
                  <input name="crNumber" className={field} placeholder="CR number & expiry" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label}>VAT Registration No</label>
                  <input name="vatNumber" className={field} placeholder="VAT registration number" />
                </div>
                <div>
                  <label className={label}>Order Currency</label>
                  <select name="currency" className={field} defaultValue="SAR">
                    <option value="SAR">SAR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label}>Related Party transaction</label>
                  <select
                    name="relatedParty"
                    className={field}
                    value={relatedParty}
                    onChange={(e) => setRelatedParty(e.target.value)}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                {relatedParty === "Yes" && (
                  <div>
                    <label className={label}>If Yes, clarification {req}</label>
                    <input
                      required
                      name="relatedPartyDetail"
                      className={field}
                      placeholder="Describe the related-party relationship"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className={label}>Basis of Approval</label>
                <textarea
                  name="approvalBasis"
                  rows={2}
                  className={field}
                  placeholder="Reason / basis for supplier approval"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90 disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Submitting…"
                  : status === "sent"
                    ? "Submitted — thank you"
                    : "Submit to procurement"}
                <Send className="h-4 w-4" />
              </button>

              {status === "sent" && (
                <p className="text-sm text-muted-foreground">
                  Thank you — your details have been sent to our procurement team. We'll be in
                  touch.
                </p>
              )}
              {status === "mailto" && (
                <p className="text-sm text-muted-foreground">
                  Your email client should open with the completed details addressed to our
                  procurement team. If it doesn't, please email {VENDOR_SUBMISSION_EMAIL} directly.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </Section>
    </InfoPage>
  );
}
