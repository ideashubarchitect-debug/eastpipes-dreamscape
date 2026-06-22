import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send } from "lucide-react";
import { InfoPage, Section } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import hero from "@/assets/pipe-interior.jpg";

const field =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export const Route = createFileRoute("/get-quote")({
  head: () => ({
    meta: [
      { title: "Get a Quote — East Pipes" },
      {
        name: "description",
        content: "Request a quote for HSAW pipes, double jointing or coating from East Pipes.",
      },
    ],
  }),
  component: () => {
    const [sent, setSent] = useState(false);
    return (
      <InfoPage
        image={hero}
        eyebrow="Get a Quote"
        title="Request a quote"
        sub="Tell us about your project and our engineers will respond with the right piping solution."
      >
        <Section>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Project Enquiry"
              title="Let's scope your requirement."
              intro="Share your specification — diameter, wall thickness, grade, coating and quantity — and we'll prepare a tailored quote."
            />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Full name" className={field} />
                  <input required type="email" placeholder="Email" className={field} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input placeholder="Company" className={field} />
                  <select className={field} defaultValue="">
                    <option value="" disabled>
                      Product / service
                    </option>
                    <option>HSAW Pipes</option>
                    <option>Double Jointing</option>
                    <option>Coating</option>
                    <option>Ancillary Services</option>
                  </select>
                </div>
                <textarea
                  required
                  rows={5}
                  placeholder="Project details & specifications"
                  className={field}
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
                >
                  {sent ? "Thank you — we'll be in touch" : "Request quote"}
                  <Send className="h-4 w-4" />
                </button>
                {sent && (
                  <p className="text-sm text-muted-foreground">
                    Your request will be routed to{" "}
                    <a href="mailto:sales@eastpipes.com" className="font-medium text-brand">
                      sales@eastpipes.com
                    </a>
                    . This is a demo form — connect it to your CRM or email service to receive
                    enquiries automatically.
                  </p>
                )}
              </div>
            </form>
          </div>
        </Section>
      </InfoPage>
    );
  },
});
