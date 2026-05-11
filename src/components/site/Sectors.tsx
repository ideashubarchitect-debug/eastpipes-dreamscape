import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const sectors = [
  {
    name: "Oil & Gas",
    desc: "High-pressure line pipe for upstream and midstream transmission.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Water Transmission",
    desc: "Large-diameter HSAW pipe for strategic water infrastructure.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Infrastructure",
    desc: "Structural pipe for piling, foundations and major civil works.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Marine & Offshore",
    desc: "Coated, corrosion-resistant pipe engineered for the harshest environments.",
    image: "https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?auto=format&fit=crop&w=1600&q=80",
  },
];

export function Sectors() {
  return (
    <section className="py-32 bg-background">
      <div className="container-wide">
        <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">A network in motion</span>
        <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl font-semibold leading-[1.05] text-ink text-balance">
          East Pipes is enabled by an ecosystem of sectors, mills and partners.
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s) => (
            <Link
              key={s.name}
              to="/products"
              className="group relative block aspect-[3/4] overflow-hidden bg-ink"
            >
              <img
                src={s.image}
                alt={s.name}
                className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.desc}</p>
                <ArrowUpRight className="mt-4 h-5 w-5 text-white/70 group-hover:text-brand transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
