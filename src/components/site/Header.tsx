import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe, Search, ChevronDown } from "lucide-react";
import logo from "@/assets/east-pipes-logo.png";
import { TickerPill, TickerPillLight } from "./primitives";

type NavGroup = {
  label: string;
  to: string;
  feature?: { title: string; img: string };
  cols?: { heading: string; links: { label: string; to: string }[] }[];
};

const nav: NavGroup[] = [
  {
    label: "Company",
    to: "/company",
    feature: { title: "A Saudi industrial leader, engineered for the world.", img: "https://images.unsplash.com/photo-1565793979206-6d99f1782ebe?w=900&q=80" },
    cols: [
      { heading: "About", links: [
        { label: "Who we are", to: "/company" },
        { label: "Leadership", to: "/company" },
        { label: "Governance", to: "/investors/governance" },
        { label: "Sustainability", to: "/sustainability" },
      ]},
      { heading: "Newsroom", links: [
        { label: "News & insights", to: "/newsroom" },
        { label: "Media library", to: "/newsroom" },
      ]},
    ],
  },
  {
    label: "Solutions",
    to: "/solutions",
    feature: { title: "LSAW, HSAW and coatings engineered for critical service.", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=900&q=80" },
    cols: [
      { heading: "Products", links: [
        { label: "LSAW Pipes", to: "/solutions" },
        { label: "HSAW Pipes", to: "/solutions" },
        { label: "Coatings & Linings", to: "/solutions" },
      ]},
      { heading: "Sectors", links: [
        { label: "Oil & Gas", to: "/solutions" },
        { label: "Water Transmission", to: "/solutions" },
        { label: "Infrastructure", to: "/solutions" },
        { label: "Marine & Offshore", to: "/solutions" },
      ]},
    ],
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Sustainability",
    to: "/sustainability",
  },
  {
    label: "Investors",
    to: "/investors",
    feature: { title: "Listed on Tadawul. Transparent, accountable, growth-driven.", img: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?w=900&q=80" },
    cols: [
      { heading: "Markets", links: [
        { label: "Stock & performance", to: "/investors/stock" },
        { label: "Disclosures", to: "/investors/announcements" },
      ]},
      { heading: "Resources", links: [
        { label: "Financial reports", to: "/investors/reports" },
        { label: "Corporate governance", to: "/investors/governance" },
        { label: "Contact IR", to: "/investors/contact" },
      ]},
    ],
  },
  { label: "Newsroom", to: "/newsroom" },
  { label: "Careers", to: "/careers" },
];

export function Header({ overlay = true }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overlay;

  return (
    <header
      onMouseLeave={() => setHover(null)}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      {/* Utility bar */}
      <div className={`hidden md:block border-b transition-colors ${solid ? "border-border" : "border-white/10"}`}>
        <div className="container-wide flex h-9 items-center justify-between text-[11px] uppercase tracking-widest">
          <div className="flex items-center gap-4">
            {solid ? <TickerPillLight /> : <TickerPill />}
          </div>
          <div className="flex items-center gap-6">
            <Link to="/investors" className={solid ? "text-foreground/60 hover:text-brand" : "text-white/60 hover:text-white"}>Investors</Link>
            <Link to="/careers" className={solid ? "text-foreground/60 hover:text-brand" : "text-white/60 hover:text-white"}>Careers</Link>
            <Link to="/sustainability" className={solid ? "text-foreground/60 hover:text-brand" : "text-white/60 hover:text-white"}>Sustainability</Link>
            <span className={`flex items-center gap-1.5 ${solid ? "text-foreground/60" : "text-white/60"}`}>
              <Globe className="h-3 w-3" /> EN <span className="opacity-40">|</span> <span className="opacity-60">عربي</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="East Pipes" className={`h-9 w-auto transition ${solid ? "" : "brightness-0 invert"}`} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <div key={n.label} onMouseEnter={() => setHover(n.label)} className="relative">
              <Link
                to={n.to}
                className={`flex items-center gap-1 text-sm font-medium tracking-wide py-6 transition-colors ${
                  solid ? "text-foreground/80 hover:text-brand" : "text-white/85 hover:text-white"
                }`}
                activeProps={{ className: solid ? "text-brand" : "text-white" }}
              >
                {n.label}
                {n.cols && <ChevronDown className="h-3 w-3 opacity-60" />}
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button aria-label="Search" className={`p-2 transition ${solid ? "text-foreground/70 hover:text-brand" : "text-white/85 hover:text-white"}`}>
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/investors"
            className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition ${
              solid ? "bg-ink text-white hover:bg-brand" : "bg-white text-ink hover:bg-signal"
            }`}
          >
            Investor Relations
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden p-2 ${solid ? "text-foreground" : "text-white"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mega menu panel */}
      {hover && nav.find((n) => n.label === hover)?.cols && (
        <div className="hidden lg:block absolute inset-x-0 top-full bg-background border-y border-border shadow-2xl animate-fade-in">
          <div className="container-wide grid grid-cols-12 gap-10 py-10">
            <div className="col-span-5">
              {(() => {
                const f = nav.find((n) => n.label === hover)?.feature;
                if (!f) return null;
                return (
                  <Link to={nav.find((n) => n.label === hover)!.to} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                      <img src={f.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                        <div className="eyebrow text-signal">{hover}</div>
                        <div className="mt-2 text-lg font-medium max-w-sm">{f.title}</div>
                      </div>
                    </div>
                  </Link>
                );
              })()}
            </div>
            <div className="col-span-7 grid grid-cols-2 gap-10">
              {nav.find((n) => n.label === hover)!.cols!.map((c) => (
                <div key={c.heading}>
                  <div className="eyebrow text-foreground/45 mb-4">{c.heading}</div>
                  <ul className="space-y-3">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <Link to={l.to} className="text-lg text-ink hover:text-brand transition">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="container-wide py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground border-b border-border/60"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/investors"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center rounded-full bg-ink text-white px-5 py-2.5 text-sm font-medium"
            >
              Investor Relations
            </Link>
            <div className="mt-3"><TickerPillLight /></div>
          </div>
        </div>
      )}
    </header>
  );
}
