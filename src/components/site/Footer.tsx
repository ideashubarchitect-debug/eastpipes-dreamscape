import { Link } from "@tanstack/react-router";
import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/east-pipes-logo.png";

const cols = [
  {
    title: "About",
    links: [
      { label: "Our story", href: "/about" as const },
      { label: "Leadership", href: "/about" as const },
      { label: "Sustainability", href: "/about" as const },
      { label: "Quality & HSE", href: "/about" as const },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "LSAW Pipes", href: "/products" as const },
      { label: "HSAW Pipes", href: "/products" as const },
      { label: "Coatings & Linings", href: "/products" as const },
      { label: "Specifications", href: "/products" as const },
    ],
  },
  {
    title: "Sectors",
    links: [
      { label: "Oil & Gas", href: "/products" as const },
      { label: "Water Transmission", href: "/products" as const },
      { label: "Infrastructure", href: "/products" as const },
      { label: "Marine & Offshore", href: "/products" as const },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "/contact" as const },
      { label: "Investors", href: "/contact" as const },
      { label: "News & Media", href: "/" as const },
      { label: "Contact", href: "/contact" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-wide pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <img src={logo} alt="East Pipes" className="h-10 w-auto brightness-0 invert mb-6" />
            <p className="max-w-md text-white/65 leading-relaxed">
              Engineering strength. Building tomorrow. World-class steel pipe solutions
              powering industries across 50+ countries.
            </p>
            <div className="mt-8">
              <div className="text-xs uppercase tracking-[0.3em] text-white/45 mb-3">Headquarters</div>
              <p className="text-white/75 leading-relaxed">
                Second Industrial City<br />
                Dammam, Kingdom of Saudi Arabia
              </p>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-xs uppercase tracking-[0.25em] text-white/45 mb-5">{c.title}</h4>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.href} className="text-white/80 hover:text-brand transition">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-xs uppercase tracking-[0.25em] text-white/45">Follow East Pipes</div>
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
          <span>© {new Date().getFullYear()} East Pipes Integrated Co. All rights reserved.</span>
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
