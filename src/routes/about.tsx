import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — East Pipes" },
      { name: "description", content: "Learn about East Pipes Integrated Company." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <Header overlay={false} />
      <main className="container-wide pt-40 pb-32">
        <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">About</span>
        <h1 className="mt-4 text-5xl md:text-7xl font-semibold leading-[1.05]">
          A Saudi industrial leader.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Full About page coming next — let me know what content you'd like to feature.
        </p>
      </main>
      <Footer />
    </div>
  );
}
