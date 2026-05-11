import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Capabilities } from "@/components/site/Capabilities";
import { WhyEastPipes } from "@/components/site/WhyEastPipes";
import { GlobalReach } from "@/components/site/GlobalReach";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "East Pipes — Engineering Strength. Building Tomorrow." },
      {
        name: "description",
        content:
          "East Pipes Integrated Company — world-class steel pipe manufacturing from Saudi Arabia, delivering to 50+ countries.",
      },
      { property: "og:title", content: "East Pipes — Engineering Strength. Building Tomorrow." },
      {
        property: "og:description",
        content:
          "Precision-engineered LSAW and HSAW steel pipes for oil & gas, water and infrastructure.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <WhyEastPipes />
        <GlobalReach />
      </main>
      <Footer />
    </div>
  );
}
