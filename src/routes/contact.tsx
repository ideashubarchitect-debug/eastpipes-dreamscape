import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — East Pipes" },
      { name: "description", content: "Get in touch with East Pipes." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <Header overlay={false} />
      <main className="container-wide pt-40 pb-32">
        <span className="text-xs uppercase tracking-[0.3em] text-brand font-medium">Contact</span>
        <h1 className="mt-4 text-5xl md:text-7xl font-semibold leading-[1.05]">
          Let's build together.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Second Industrial City, Dammam, Kingdom of Saudi Arabia.
        </p>
      </main>
      <Footer />
    </div>
  );
}
