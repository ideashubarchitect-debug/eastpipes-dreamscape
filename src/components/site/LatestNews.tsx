import { Link } from "@tanstack/react-router";
import welding from "@/assets/welding-sparks.jpg";
import spiral from "@/assets/spiral-mill.jpg";
import pipeInterior from "@/assets/pipe-interior.jpg";
import banner from "@/assets/hero-banner.png";

type Item = {
  tag: string;
  date: string;
  title: string;
  excerpt?: string;
  image: string;
  featured?: boolean;
};

const items: Item[] = [
  {
    tag: "Article",
    date: "April 14, 2026",
    title:
      "East Pipes wins major water-transmission contract to deliver 600 km of HSAW line pipe across the Kingdom",
    excerpt:
      "A landmark award reinforces East Pipes' role in delivering the strategic water infrastructure powering Saudi Arabia's Vision 2030.",
    image: banner,
    featured: true,
  },
  {
    tag: "Article",
    date: "April 02, 2026",
    title: "Inside the mill: how precision welding drives 50-year pipe life",
    image: welding,
  },
  {
    tag: "Press Release",
    date: "March 18, 2026",
    title: "East Pipes expands LSAW capacity with new finishing line",
    image: spiral,
  },
  {
    tag: "Article",
    date: "February 22, 2026",
    title: "Inspection-grade quality: a look inside our metallurgical lab",
    image: pipeInterior,
  },
];

export function LatestNews() {
  const [featured, ...rest] = items;
  return (
    <section className="py-32 bg-secondary">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink">Latest News</h2>
            <p className="mt-3 text-muted-foreground">
              Discover the latest projects, milestones and insights from East Pipes.
            </p>
          </div>
          <Link
            to="/"
            className="hidden md:inline-flex items-center rounded-full border border-ink/20 px-6 py-3 text-sm font-medium hover:bg-ink hover:text-white transition"
          >
            Explore more
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 mb-16">
          <Link to="/" className="group block">
            <div className="relative aspect-[16/10] overflow-hidden bg-ink">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
          </Link>
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">{featured.tag}</span>
            <h3 className="mt-4 text-2xl md:text-4xl font-semibold leading-tight text-ink text-balance">
              {featured.title}
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            <span className="mt-6 text-sm text-muted-foreground">{featured.date}</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {rest.map((it) => (
            <Link key={it.title} to="/" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <img
                  src={it.image}
                  alt={it.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="mt-5">
                <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">{it.tag}</span>
                <h4 className="mt-3 text-lg font-semibold leading-snug text-ink group-hover:text-brand transition">
                  {it.title}
                </h4>
                <span className="mt-3 block text-sm text-muted-foreground">{it.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
