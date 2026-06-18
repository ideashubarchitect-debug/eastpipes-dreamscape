import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHero } from "@/components/site/SectionHero";
import { Eyebrow, PrimaryButton } from "@/components/site/primitives";
import { analysts } from "@/data/ir";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/investors/contact")({
  head: () => ({
    meta: [
      { title: "Contact Investor Relations — East Pipes" },
      { name: "description", content: "Reach the East Pipes Investor Relations team. Email, phone, calendar booking and analyst coverage." },
      { property: "og:title", content: "Contact East Pipes IR" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <SectionHero
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=80"
        eyebrow="Investor Relations · Contact"
        title="Direct access to our IR team."
        intro="Institutional, analyst and shareholder enquiries — we respond within one business day."
      />

      <section className="bg-background">
        <div className="container-wide section-pad grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow>IR Officer</Eyebrow>
            <h2 className="mt-4 text-3xl font-medium text-ink">Omar Al-Najjar</h2>
            <p className="text-foreground/65">Head of Investor Relations</p>
            <ul className="mt-8 space-y-4 text-ink">
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-brand" /> ir@eastpipes.com</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-brand" /> +966 13 000 0000</li>
              <li className="flex items-center gap-3"><Calendar className="h-5 w-5 text-brand" /> <a href="#" className="underline">Book a meeting</a></li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-brand" /> Second Industrial City, Dammam, KSA</li>
            </ul>
            <div className="mt-10"><PrimaryButton href="mailto:ir@eastpipes.com">Email IR</PrimaryButton></div>
          </div>

          <div>
            <Eyebrow>Analyst coverage</Eyebrow>
            <h2 className="mt-4 text-3xl font-medium text-ink mb-6">Coverage</h2>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full text-left">
                <thead className="bg-secondary text-xs font-mono uppercase tracking-wider text-foreground/55">
                  <tr><th className="p-4">Firm</th><th className="p-4">Analyst</th><th className="p-4">Rating</th><th className="p-4">Target</th></tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {analysts.map((a) => (
                    <tr key={a.firm}>
                      <td className="p-4 text-ink">{a.firm}</td>
                      <td className="p-4 text-foreground/70">{a.analyst}</td>
                      <td className="p-4 text-brand font-mono">{a.rating}</td>
                      <td className="p-4 font-mono text-ink">{a.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-foreground/50 font-mono">
              Information is provided for convenience and does not constitute East Pipes' endorsement of any analyst view.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
