import { Link } from "@tanstack/react-router";
import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/east-pipes-logo.png";

const cols = [
  {
    title: "Company",
    links: [
      { label: "Who we are", to: "/company" },
      { label: "Leadership", to: "/company" },
      { label: "Sustainability", to: "/sustainability" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "LSAW Pipes", to: "/solutions" },
      { label: "HSAW Pipes", to: "/solutions" },
      { label: "Coatings & Linings", to: "/solutions" },
      { label: "Projects", to: "/projects" },
    ],
  },
  {
    title: "Investors",
    links: [
      { label: "Stock & performance", to: "/investors/stock" },
      { label: "Financial reports", to: "/investors/reports" },
      { label: "Governance", to: "/investors/governance" },
      { label: "Announcements", to: "/investors/announcements" },
      { label: "Contact IR", to: "/investors/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Newsroom", to: "/newsroom" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const certs = ["Tadawul Listed", "ISO 9001", "ISO 14001", "ISO 45001", "API 5L", "API Q1"];

export function Footer() {
  return (
    <footer className="bg-ink text-white grain">
      <div className="container-wide pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <img src={logo} alt="East Pipes" className="h-10 w-auto brightness-0 invert mb-6" />
            <p className="max-w-md text-white/65 leading-relaxed">
              Engineering the arteries of a new era. World-class steel pipe systems
              powering energy, water and infrastructure across 50+ countries.
            </p>
            <div className="mt-8">
              <div className="eyebrow text-white/45 mb-3">Headquarters</div>
              <p className="text-white/75 leading-relaxed">
                Second Industrial City<br />
                Dammam, Kingdom of Saudi Arabia
              </p>
            </div>
            <div className="mt-8">
              <div className="eyebrow text-white/45 mb-3">Investor Relations</div>
              <p className="text-white/75">ir@eastpipes.com<br />+966 13 000 0000</p>
            </div>
            <div className="mt-8 text-3xl font-display text-white/80" dir="rtl">أنابيب الشرق</div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="eyebrow text-white/45 mb-5">{c.title}</h4>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to as string} className="text-white/80 hover:text-signal transition">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="eyebrow text-white/45 mb-4">Certifications & Listings</div>
          <div className="flex flex-wrap gap-2">
            {certs.map((c) => (
              <span key={c} className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-mono text-white/75">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="eyebrow text-white/45">Follow East Pipes</div>
          <div className="flex items-center gap-2">
            {[Linkedin, Youtube, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-brand hover:border-brand transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/45">
          <span>© {new Date().getFullYear()} East Pipes Integrated Co. (Tadawul: 1321). All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy policy</a>
            <a href="#" className="hover:text-white">Terms of use</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
