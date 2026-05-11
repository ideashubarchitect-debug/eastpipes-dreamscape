import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { ThisIsEastPipes } from "@/components/site/ThisIsEastPipes";
import { Capabilities } from "@/components/site/Capabilities";
import { WhyEastPipes } from "@/components/site/WhyEastPipes";
import { Spotlight } from "@/components/site/Spotlight";
import { Sectors } from "@/components/site/Sectors";
import { LatestNews } from "@/components/site/LatestNews";
import { GlobalReach } from "@/components/site/GlobalReach";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "East Pipes — Engineering Strength. Building Tomorrow." },
      {
        name: "description",
        content:
          "East Pipes Integrated Company — world-class LSAW and HSAW steel pipe manufacturing from Saudi Arabia, delivering to 50+ countries.",
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
        <ThisIsEastPipes />
        <Capabilities />
        <Spotlight />
        <WhyEastPipes />
        <Sectors />
        <LatestNews />
        <GlobalReach />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
