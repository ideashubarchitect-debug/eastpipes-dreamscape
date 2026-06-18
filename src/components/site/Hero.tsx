import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import banner from "@/assets/hero-banner.jpg";
import facility from "@/assets/hero-facility.jpg";
import manufacturing from "@/assets/hero-manufacturing.jpg";
import { TickerPill } from "./primitives";

const slides = [
  {
    image: banner,
    eyebrow: "East Pipes · Tadawul 1321",
    title: "Engineering the arteries of a new era.",
    sub: "World-class steel pipe systems moving energy, water and ambition across continents — built in Saudi Arabia, trusted in 50+ countries.",
    cta: { label: "Explore the company", to: "/company" as const },
    cta2: { label: "Investor relations", to: "/investors" as const },
  },
  {
    image: facility,
    eyebrow: "Scale · Precision · Trust",
    title: "Engineering strength. Building tomorrow.",
    sub: "From the heart of the Kingdom to flagship projects worldwide — precision-engineered pipes built to perform for generations.",
    cta: { label: "Our solutions", to: "/solutions" as const },
    cta2: { label: "Flagship projects", to: "/projects" as const },
  },
  {
    image: manufacturing,
    eyebrow: "LSAW · HSAW · Coatings",
    title: "Crafted with fire. Forged for performance.",
    sub: "Advanced manufacturing lines certified to the world's most demanding standards — API 5L, ISO 9001, ISO 14001 and beyond.",
    cta: { label: "Capabilities", to: "/solutions" as const },
    cta2: { label: "Sustainability", to: "/sustainability" as const },
  },
];


export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={s.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover ${idx === i ? "animate-ken-burns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full container-wide flex flex-col justify-end pb-28 md:pb-32">
        <div key={i} className="max-w-3xl animate-fade-up">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-signal font-medium">
              {slides[i].eyebrow}
            </span>
            <TickerPill compact />
          </div>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] text-balance">
            {slides[i].title}
          </h1>
          <p className="mt-8 text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
            {slides[i].sub}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to={slides[i].cta.to}
              className="group inline-flex items-center gap-3 rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-signal transition"
            >
              {slides[i].cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to={slides[i].cta2.to}
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-ink transition"
            >
              {slides[i].cta2.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className="h-1 w-12 bg-white/25 overflow-hidden"
            >
              <span
                className={`block h-full bg-white origin-left ${
                  idx === i ? "w-full transition-transform duration-[7000ms] ease-linear scale-x-100" : "scale-x-0"
                }`}
                style={{ transform: idx === i ? "scaleX(1)" : "scaleX(0)" }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
