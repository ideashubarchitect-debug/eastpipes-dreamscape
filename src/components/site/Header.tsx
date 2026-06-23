import { Link } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe, Search, ArrowUpRight, ChevronDown, Plus, Minus } from "lucide-react";
import logo from "@/assets/east-pipes-logo.png";
import { StockTicker } from "./StockTicker";
import { TickerTape } from "./TickerTape";
import { MEGA_MENU, SIMPLE_NAV, UTILITY_NAV } from "@/lib/nav";
import { useLanguage } from "@/hooks/use-language";

type To = LinkProps["to"];
const to = (p: string) => p as To;

export function Header({ overlay = true }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const { toggle: toggleLang, switchLabel } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overlay || active !== null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
      onMouseLeave={() => setActive(null)}
    >
      <TickerTape />

      {/* Utility bar */}
      <div className={`hidden md:block border-b transition-colors ${solid ? "border-border" : "border-white/10"}`}>
        <div className="container-wide flex h-9 items-center justify-between gap-6 text-[11px] uppercase tracking-widest">
          {solid ? (
            <StockTicker variant="bar" />
          ) : (
            <span className="text-white/50 normal-case tracking-normal text-xs">
              Listed on the Saudi Exchange (Tadawul) · 1321
            </span>
          )}
          <div className="flex items-center gap-6">
            {UTILITY_NAV.map((u) => (
              <Link
                key={u.to}
                to={to(u.to)}
                className={`whitespace-nowrap ${solid ? "text-foreground/60 hover:text-brand" : "text-white/60 hover:text-white"}`}
              >
                {u.label}
              </Link>
            ))}
            <button
              aria-label="Search"
              className={`transition ${solid ? "text-foreground/60 hover:text-brand" : "text-white/60 hover:text-white"}`}
            >
              <Search className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={toggleLang}
              aria-label="Switch language"
              className={`flex items-center gap-1.5 transition ${solid ? "text-foreground/60 hover:text-brand" : "text-white/60 hover:text-white"}`}
            >
              <Globe className="h-3 w-3" /> {switchLabel}
            </button>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-wide flex h-20 items-center justify-between gap-8">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="East Pipes" className={`h-9 w-auto transition ${solid ? "" : "brightness-0 invert"}`} />
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {MEGA_MENU.map((m, idx) => (
            <div key={m.label} onMouseEnter={() => setActive(idx)}>
              <Link
                to={to(m.to)}
                className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium uppercase tracking-wide py-2 transition-colors ${
                  solid ? "text-foreground/80 hover:text-brand" : "text-white/80 hover:text-white"
                } ${active === idx ? "text-brand" : ""}`}
              >
                {m.label}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${active === idx ? "rotate-180" : ""}`} />
              </Link>
            </div>
          ))}
          {SIMPLE_NAV.map((n) => (
            <Link
              key={n.to}
              to={to(n.to)}
              onMouseEnter={() => setActive(null)}
              className={`whitespace-nowrap text-sm font-medium uppercase tracking-wide py-2 transition-colors ${
                solid ? "text-foreground/80 hover:text-brand" : "text-white/80 hover:text-white"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex shrink-0 items-center gap-3">
          <Link
            to="/investor-relations"
            onMouseEnter={() => setActive(null)}
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition hover:bg-brand/90"
          >
            Invest in East Pipes
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className={`xl:hidden p-2 ${solid ? "text-foreground" : "text-white"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mega panel */}
      {active !== null && (
        <div className="hidden xl:block absolute inset-x-0 top-full border-b border-border bg-background shadow-xl">
          <div className="container-wide grid grid-cols-12 gap-10 py-10">
            {MEGA_MENU[active].feature && (
              <Link
                to={to(MEGA_MENU[active].feature!.to)}
                className="col-span-4 group rounded-2xl bg-ink p-8 text-white transition"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-brand">{MEGA_MENU[active].label}</div>
                <div className="mt-4 text-2xl font-semibold">{MEGA_MENU[active].feature!.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{MEGA_MENU[active].feature!.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
                  Explore <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            )}
            <div className="col-span-8 grid grid-cols-2 gap-10">
              {MEGA_MENU[active].columns.map((col) => (
                <div key={col.heading}>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {col.heading}
                  </div>
                  <ul className="mt-4 space-y-1">
                    {col.links.map((l) => (
                      <li key={l.to}>
                        <Link
                          to={to(l.to)}
                          className="block rounded-lg px-3 py-2 -mx-3 text-[15px] text-foreground transition hover:bg-secondary hover:text-brand"
                        >
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

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden max-h-[80vh] overflow-y-auto bg-background border-t border-border">
          <div className="container-wide py-4">
            <Link to="/" onClick={() => setOpen(false)} className="block py-3 font-medium uppercase tracking-wide">
              Home
            </Link>
            {MEGA_MENU.map((m) => (
              <div key={m.label} className="border-t border-border">
                <button
                  onClick={() => setMobileOpen((s) => (s === m.label ? null : m.label))}
                  className="flex w-full items-center justify-between py-3 font-medium uppercase tracking-wide"
                >
                  {m.label}
                  {mobileOpen === m.label ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </button>
                {mobileOpen === m.label && (
                  <div className="pb-3">
                    <Link
                      to={to(m.to)}
                      onClick={() => setOpen(false)}
                      className="block py-2 pl-3 text-sm font-medium text-brand"
                    >
                      Overview
                    </Link>
                    {m.columns.flatMap((c) => c.links).map((l) => (
                      <Link
                        key={l.to}
                        to={to(l.to)}
                        onClick={() => setOpen(false)}
                        className="block py-2 pl-3 text-sm text-muted-foreground"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {SIMPLE_NAV.concat(UTILITY_NAV).map((n) => (
              <Link
                key={n.to}
                to={to(n.to)}
                onClick={() => setOpen(false)}
                className="block border-t border-border py-3 font-medium uppercase tracking-wide"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/investor-relations"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand text-brand-foreground px-5 py-2.5 text-sm font-medium"
            >
              Invest in East Pipes <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              onClick={toggleLang}
              className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-foreground"
            >
              <Globe className="h-4 w-4" /> {switchLabel}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
