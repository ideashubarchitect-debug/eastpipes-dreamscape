import { Crosshair, Settings, ShieldCheck, TrendingUp } from "lucide-react";
import manufacturing from "@/assets/hero-manufacturing.png";

const pillars = [
  { icon: Crosshair, title: "Precision Manufacturing", desc: "Tolerances measured in microns, every joint engineered to perform." },
  { icon: Settings, title: "Advanced Technology", desc: "Modern LSAW and HSAW lines built to global API and ISO standards." },
  { icon: ShieldCheck, title: "Superior Quality", desc: "Multi-stage inspection — ultrasonic, X-ray, hydrostatic." },
  { icon: TrendingUp, title: "Built for Performance", desc: "Pipes that endure decades of pressure, corrosion and the field." },
];

export function WhyEastPipes() {
  return (
    <section className="relative py-32 bg-ink text-white overflow-hidden">
      <img
        src={manufacturing}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

      <div className="relative container-wide">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">
            Why East Pipes
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-[1.05] text-balance">
            Four pillars behind every pipe we ship.
          </h2>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="group">
              <div className="h-14 w-14 rounded-md border border-white/15 bg-white/5 flex items-center justify-center group-hover:border-brand transition">
                <p.icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-white/65 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
