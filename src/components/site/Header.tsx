import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/east-pipes-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ overlay = true }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !overlay;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="East Pipes"
            className={`h-9 w-auto transition ${solid ? "" : "brightness-0 invert"}`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                solid ? "text-foreground/80 hover:text-brand" : "text-white/80 hover:text-white"
              }`}
              activeProps={{ className: solid ? "text-brand" : "text-white" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition ${
            solid
              ? "bg-ink text-white hover:bg-brand"
              : "bg-white text-ink hover:bg-white/90"
          }`}
        >
          Get in touch
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden p-2 ${solid ? "text-foreground" : "text-white"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-wide py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
