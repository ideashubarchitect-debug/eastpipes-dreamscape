import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/site/Hero";
import { ProofBar } from "@/components/site/ProofBar";
import { Manifesto } from "@/components/site/Manifesto";
import { ScaleStrip } from "@/components/site/ScaleStrip";
import { Capabilities } from "@/components/site/Capabilities";
import { ProjectsStrip } from "@/components/site/ProjectsStrip";
import { SustainabilityTeaser } from "@/components/site/SustainabilityTeaser";
import { InvestorSpotlight } from "@/components/site/InvestorSpotlight";
import { LatestNews } from "@/components/site/LatestNews";
import { GlobalReach } from "@/components/site/GlobalReach";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "East Pipes — Engineering the arteries of a new era" },
      { name: "description", content: "East Pipes Integrated Co. (Tadawul: 1321) — world-class LSAW and HSAW steel pipe systems for energy, water and infrastructure across 50+ countries." },
      { property: "og:title", content: "East Pipes — Engineering the arteries of a new era" },
      { property: "og:description", content: "Listed on Tadawul. Operating at scale. Engineered for the world's most demanding infrastructure." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <ProofBar />
      <Manifesto />
      <ScaleStrip />
      <Capabilities />
      <ProjectsStrip />
      <SustainabilityTeaser />
      <InvestorSpotlight />
      <LatestNews />
      <GlobalReach />
      <CtaBand
        eyebrow="Partner with East Pipes"
        title="Build with the company powering the next century of infrastructure."
        primary={{ label: "Contact our team", to: "/contact" }}
        secondary={{ label: "Investor relations", to: "/investors" }}
      />
    </PageShell>
  );
}
