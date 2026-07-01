import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap, HeartPulse, ShieldCheck, Users, Upload, Send } from "lucide-react";
import { InfoPage, Section, Prose } from "@/components/site/InfoPage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/welding-sparks.jpg";

const benefits = [
  {
    icon: GraduationCap,
    t: "Training & development",
    d: "Regular internal and external programmes to grow your technical and professional skills.",
  },
  {
    icon: ShieldCheck,
    t: "World-class safety",
    d: "An uncompromising commitment to a safe and healthy workplace for everyone.",
  },
  {
    icon: Users,
    t: "Diverse team",
    d: "A workforce of 480+ professionals from diverse backgrounds and disciplines.",
  },
  {
    icon: HeartPulse,
    t: "Purposeful work",
    d: "Build the infrastructure that powers the Kingdom's water, oil and gas.",
  },
];

const NATIONALITIES = [
  "Saudi Arabia",
  "Bahrain",
  "Kuwait",
  "Oman",
  "Qatar",
  "United Arab Emirates",
  "Egypt",
  "Jordan",
  "India",
  "Pakistan",
  "Philippines",
  "United Kingdom",
  "United States",
  "Other",
];

const QUALIFICATIONS = ["High School", "Diploma", "Bachelor's", "Master's", "PhD"];

const field =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";
const label = "mb-1.5 block text-sm font-medium text-foreground";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — East Pipes" },
      {
        name: "description",
        content:
          "Build your career at East Pipes — join one of the region's leading HSAW pipe manufacturers. Apply through our job application form.",
      },
    ],
  }),
  component: Career,
});

function Career() {
  const [sent, setSent] = useState(false);

  return (
    <InfoPage
      image={hero}
      eyebrow="Careers"
      title="Build your career with us"
      sub="Our people are our greatest asset. Join a team engineering the arteries of the Kingdom's growth."
    >
      <Section>
        <Prose
          paragraphs={[
            "East Pipes invests in its people through continuous training, a strong safety culture and clear development pathways. We bring together engineers, operators and specialists who take pride in manufacturing excellence.",
          ]}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.t} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
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

      {/* Job Application Form */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Job Application Form"
          title="Apply to join East Pipes."
          intro="Complete the form below and attach your CV. Our HR team reviews every application and will be in touch about suitable openings."
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-10"
        >
          {/* Personal details */}
          <h3 className="text-lg font-semibold text-foreground">Personal details</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className={label} htmlFor="firstName">
                First name
              </label>
              <input id="firstName" name="firstName" required className={field} />
            </div>
            <div>
              <label className={label} htmlFor="fatherName">
                Father name
              </label>
              <input id="fatherName" name="fatherName" required className={field} />
            </div>
            <div>
              <label className={label} htmlFor="lastName">
                Last name
              </label>
              <input id="lastName" name="lastName" required className={field} />
            </div>
            <div>
              <label className={label} htmlFor="dob">
                Date of birth
              </label>
              <input id="dob" name="dob" type="date" required className={field} />
            </div>
            <div>
              <label className={label} htmlFor="nationality">
                Nationality
              </label>
              <select
                id="nationality"
                name="nationality"
                required
                defaultValue=""
                className={field}
              >
                <option value="" disabled>
                  Select nationality
                </option>
                {NATIONALITIES.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={label} htmlFor="gender">
                Gender
              </label>
              <select id="gender" name="gender" required defaultValue="" className={field}>
                <option value="" disabled>
                  Select gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className={label} htmlFor="phone">
                Phone number
              </label>
              <input id="phone" name="phone" type="tel" required className={field} />
            </div>
            <div>
              <label className={label} htmlFor="email">
                Email address
              </label>
              <input id="email" name="email" type="email" required className={field} />
            </div>
            <div>
              <label className={label} htmlFor="location">
                Current location
              </label>
              <input id="location" name="location" required className={field} />
            </div>
          </div>

          {/* Education */}
          <h3 className="mt-10 text-lg font-semibold text-foreground">Education</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className={label} htmlFor="qualification">
                Highest qualification
              </label>
              <select
                id="qualification"
                name="qualification"
                required
                defaultValue=""
                className={field}
              >
                <option value="" disabled>
                  Select qualification
                </option>
                {QUALIFICATIONS.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={label} htmlFor="university">
                University / College name
              </label>
              <input id="university" name="university" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="major">
                Degree / Major
              </label>
              <input id="major" name="major" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="gradYear">
                Graduation year
              </label>
              <input
                id="gradYear"
                name="gradYear"
                type="number"
                min={1950}
                max={2100}
                className={field}
              />
            </div>
          </div>

          {/* Employment history */}
          <h3 className="mt-10 text-lg font-semibold text-foreground">Employment history</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className={label} htmlFor="company">
                Current company
              </label>
              <input id="company" name="company" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="jobTitle">
                Job title
              </label>
              <input id="jobTitle" name="jobTitle" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="experience">
                Years of experience
              </label>
              <input id="experience" name="experience" type="number" min={0} className={field} />
            </div>
            <div>
              <label className={label} htmlFor="notice">
                Notice period
              </label>
              <input id="notice" name="notice" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="salary">
                Current salary <span className="text-muted-foreground">(optional)</span>
              </label>
              <input id="salary" name="salary" className={field} />
            </div>
          </div>

          {/* CV upload */}
          <h3 className="mt-10 text-lg font-semibold text-foreground">Upload CV</h3>
          <label
            htmlFor="cv"
            className="mt-4 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-input bg-background px-4 py-6 text-sm text-muted-foreground transition hover:border-brand"
          >
            <Upload className="h-5 w-5 text-brand" />
            <span>Attach your CV (PDF, DOC or DOCX)</span>
            <input
              id="cv"
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              required
              className="sr-only"
            />
          </label>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
            >
              {sent ? "Application submitted — thank you" : "Submit application"}
              <Send className="h-4 w-4" />
            </button>
            {sent && (
              <p className="text-sm text-muted-foreground">
                Thank you for applying. Our HR team will review your details and contact you if
                there's a match.
              </p>
            )}
          </div>
        </form>
      </Section>
    </InfoPage>
  );
}
