import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import facility from "@/assets/facility-flag.jpg";
import lab from "@/assets/lab-quality.jpg";
import spiral from "@/assets/spiral-mill.jpg";

const tabs = [
  {
    key: "about",
    label: "About Us",
    image: facility,
    body: "East Pipes Integrated Company is one of the Middle East's largest manufacturers of welded steel pipes — engineering the arteries that carry energy and water across the world. From our facility in Dammam, we serve oil & gas, water transmission, and infrastructure clients in over 50 countries.",
  },
  {
    key: "region",
    label: "Our Region",
    image: spiral,
    body: "Headquartered in the Kingdom of Saudi Arabia at the heart of the world's energy economy, our location gives us unmatched access to the materials, talent, and logistics required to deliver pipe at the scale tomorrow demands.",
  },
  {
    key: "capabilities",
    label: "Our Capabilities",
    image: lab,
    body: "Two state-of-the-art mills produce LSAW and HSAW pipe across the full diameter range. A fully equipped metallurgical and NDT laboratory ensures every pipe we ship is independently certified to API, ISO, and project-specific standards.",
  },
] as const;

const stats = [
  { v: "50+", l: "Countries served" },
  { v: "1M+", l: "Tons of pipe shipped" },
  { v: "1B+", l: "USD project legacy" },
  { v: "100%", l: "Standards-compliant" },
];

export function ThisIsEastPipes() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("about");
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section className="relative bg-ink text-white py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={current.image} alt="" className="h-full w-full object-cover transition-opacity duration-700" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

      <div className="relative container-wide">
        <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">
          This is East Pipes
        </span>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          {/* Tabs */}
          <div className="lg:col-span-3">
            <ul className="space-y-1">
              {tabs.map((t) => {
                const isActive = t.key === active;
                return (
                  <li key={t.key}>
                    <button
                      onClick={() => setActive(t.key)}
                      className="group block w-full text-left py-5 border-t border-white/15 transition"
                    >
                      <div
                        className={`h-px w-12 mb-4 transition-all ${
                          isActive ? "bg-brand w-24" : "bg-white/30 group-hover:bg-white/60"
                        }`}
                      />
                      <span
                        className={`text-base uppercase tracking-widest transition ${
                          isActive ? "text-brand" : "text-white/60 group-hover:text-white"
                        }`}
                      >
                        {t.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Center image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                key={current.key}
                src={current.image}
                alt={current.label}
                className="absolute inset-0 h-full w-full object-cover animate-fade-up"
              />
              <div className="absolute inset-0 ring-1 ring-white/10" />
            </div>
          </div>

          {/* Stats + body */}
          <div className="lg:col-span-4">
            <div className="border-t border-brand/60 pt-6 grid grid-cols-2 gap-x-6 gap-y-10">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="text-3xl md:text-4xl font-semibold text-brand tracking-tight">{s.v}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-widest text-white/60">{s.l}</div>
                </div>
              ))}
            </div>

            <p key={current.key} className="mt-10 text-white/75 leading-relaxed animate-fade-up">
              {current.body}
            </p>

            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 text-white border-b border-white/40 pb-2 hover:border-brand hover:text-brand transition"
            >
              About East Pipes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
