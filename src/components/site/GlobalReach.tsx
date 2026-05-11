import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const stats = [
  { v: "50+", l: "Countries served" },
  { v: "1B+", l: "USD legacy of delivery" },
  { v: "1M+", l: "Tons of pipe shipped" },
  { v: "100%", l: "Standards-compliant output" },
];

export function GlobalReach() {
  return (
    <section className="py-32 bg-secondary">
      <div className="container-wide">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-24">
          {stats.map((s) => (
            <div key={s.l} className="border-t border-ink/15 pt-6">
              <div className="text-5xl md:text-6xl font-semibold text-ink tracking-tight">{s.v}</div>
              <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="bg-ink text-white p-10 md:p-20 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">
              Let's build together
            </span>
            <h3 className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.05] text-balance">
              Have a project? We'll engineer the pipe to match it.
            </h3>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-white text-ink px-8 py-4 rounded-full font-medium hover:bg-brand hover:text-white transition"
          >
            Contact our team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
