import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import banner from "@/assets/hero-banner.png";
import facility from "@/assets/hero-facility.png";
import manufacturing from "@/assets/hero-manufacturing.png";

const slides = [
  {
    image: banner,
    eyebrow: "East Pipes",
    title: "Building Stronger Futures Together",
    sub: "A billion-dollar legacy of excellence, delivering world-class steel pipe solutions that power industries and communities around the globe.",
    cta: { label: "Discover our story", to: "/about" as const },
  },
  {
    image: facility,
    eyebrow: "Engineering Excellence",
    title: "Engineering Strength. Building Tomorrow.",
    sub: "From the heart of Saudi Arabia to projects across the world — precision-engineered pipes built to perform for generations.",
    cta: { label: "Explore products", to: "/products" as const },
  },
  {
    image: manufacturing,
    eyebrow: "Precision Manufacturing",
    title: "Crafted with Fire. Forged for Performance.",
    sub: "Advanced LSAW and HSAW manufacturing lines, certified to the world's most demanding standards.",
    cta: { label: "Our capabilities", to: "/products" as const },
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

      <div className="relative z-10 h-full container-wide flex flex-col justify-end pt-44 pb-20 md:pb-24">
        <div key={i} className="max-w-3xl animate-fade-up">
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-brand font-medium mb-5">
            {slides[i].eyebrow}
          </span>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1] text-balance">
            {slides[i].title}
          </h1>
          <p className="mt-6 text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
            {slides[i].sub}
          </p>
          <Link
            to={slides[i].cta.to}
            className="group mt-8 inline-flex items-center gap-3 text-white text-base font-medium border-b border-white/40 pb-2 hover:border-brand hover:text-brand transition"
          >
            {slides[i].cta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-3">
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
