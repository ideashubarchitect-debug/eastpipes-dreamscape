import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import facility from "@/assets/facility-flag.jpg";

export function About() {
  return (
    <section className="py-32 bg-background">
      <div className="container-wide grid gap-16 md:grid-cols-2 items-center">
        <div className="relative">
          <img
            src={facility}
            alt="East Pipes facility, Dammam"
            className="w-full aspect-[4/3] object-cover rounded-sm"
          />
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-ink text-white p-8 max-w-[260px]">
            <div className="text-5xl font-semibold text-brand">15+</div>
            <div className="mt-2 text-sm text-white/70 uppercase tracking-widest">
              Years of engineering excellence
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">
            About East Pipes
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-[1.05] text-balance">
            A Saudi industrial leader, engineered for the world.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            East Pipes Integrated Company is one of the largest manufacturers of welded
            steel pipes in the Middle East. From our facility in Dammam, we deliver
            certified pipe solutions to oil &amp; gas, water transmission, and
            infrastructure projects spanning more than fifty countries.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Backed by world-class engineering and an uncompromising commitment to
            quality, we build the arteries that carry energy and water to the world.
          </p>

          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-3 text-ink font-medium border-b border-ink/30 pb-2 hover:border-brand hover:text-brand transition"
          >
            Discover our story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
