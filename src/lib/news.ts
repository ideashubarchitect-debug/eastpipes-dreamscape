import banner from "@/assets/hero-banner.jpg";
import spiral from "@/assets/spiral-mill.jpg";
import lab from "@/assets/lab-quality.jpg";
import interior from "@/assets/pipe-interior.jpg";

export type Category = "Corporate" | "Projects" | "Investors" | "Sustainability";

export type Article = {
  slug: string;
  img: string;
  category: Category;
  date: string; // display date
  iso: string; // for sorting / <time>
  title: string;
  excerpt: string;
  /** simple paragraph + heading body blocks */
  body: { type: "p" | "h2" | "quote"; text: string }[];
  featured?: boolean;
};

export const ARTICLES: Article[] = [
  {
    slug: "water-transmission-contract-940m",
    img: banner,
    category: "Corporate",
    date: "12 Jun 2026",
    iso: "2026-06-12",
    title: "East Pipes secures landmark SAR 940M water transmission contract",
    excerpt:
      "The award reinforces our leadership in large-diameter pipe and extends a record order backlog supporting the Kingdom's water security agenda.",
    featured: true,
    body: [
      {
        type: "p",
        text: "East Pipes Integrated Company has been awarded a major contract to supply large-diameter helical submerged-arc welded (HSAW) pipe for a strategic water transmission programme. The award is among the largest in the company's history and further strengthens an already record order backlog.",
      },
      { type: "h2", text: "Reinforcing market leadership" },
      {
        type: "p",
        text: "The project will see the delivery of coated, large-diameter pipe engineered to move desalinated water across long distances in demanding desert conditions. Production will draw on the company's integrated forming, welding and coating lines at its complex in the Eastern Province.",
      },
      {
        type: "quote",
        text: "This award is a strong endorsement of our engineering capability and our role in the Kingdom's water security agenda.",
      },
      { type: "h2", text: "Supporting Vision 2030" },
      {
        type: "p",
        text: "The contract aligns with national objectives to expand resilient water infrastructure, and underscores the company's contribution to local content and industrial development.",
      },
    ],
  },
  {
    slug: "lsaw-capacity-expansion-complete",
    img: spiral,
    category: "Projects",
    date: "30 May 2026",
    iso: "2026-05-30",
    title: "Capacity expansion of LSAW line completed ahead of schedule",
    excerpt:
      "A debottlenecking and modernisation programme lifts annual capacity and shortens lead times for heavy-wall line pipe.",
    body: [
      {
        type: "p",
        text: "The company has completed a capacity expansion of its longitudinal submerged-arc welded (LSAW) line ahead of schedule and within budget, increasing throughput for heavy-wall line pipe used in oil and gas transmission.",
      },
      { type: "h2", text: "Faster lead times" },
      {
        type: "p",
        text: "The upgrade introduces additional automation and inspection capability, improving first-pass quality and reducing delivery lead times for clients with time-critical projects.",
      },
    ],
  },
  {
    slug: "water-recycling-system-launch",
    img: lab,
    category: "Sustainability",
    date: "18 May 2026",
    iso: "2026-05-18",
    title: "New water-recycling system cuts freshwater draw by a third",
    excerpt:
      "A closed-loop process water system reduces freshwater consumption across the manufacturing complex.",
    body: [
      {
        type: "p",
        text: "A newly commissioned closed-loop water system recycles the majority of process water used across the manufacturing complex, materially reducing freshwater draw in a water-scarce region.",
      },
      { type: "h2", text: "Engineering sustainability" },
      {
        type: "p",
        text: "The investment forms part of the company's broader decarbonisation and water-stewardship roadmap, and contributes to the targets disclosed in its annual ESG report.",
      },
    ],
  },
  {
    slug: "q1-2026-results",
    img: interior,
    category: "Investors",
    date: "30 Apr 2026",
    iso: "2026-04-30",
    title: "Q1 2026 results: revenue up 18% on strong project deliveries",
    excerpt:
      "First-quarter results show continued top-line growth and margin expansion driven by a healthy project mix.",
    body: [
      {
        type: "p",
        text: "East Pipes reported first-quarter revenue growth of 18% year-on-year, supported by strong project deliveries and a favourable product mix. EBITDA margin expanded on operating leverage and disciplined cost management.",
      },
      { type: "h2", text: "Outlook" },
      {
        type: "p",
        text: "Management reaffirmed full-year guidance, citing a record order backlog and a robust pipeline of tendered opportunities across energy, water and infrastructure.",
      },
    ],
  },
  {
    slug: "preferred-supplier-giga-project",
    img: banner,
    category: "Corporate",
    date: "14 Apr 2026",
    iso: "2026-04-14",
    title: "East Pipes named preferred supplier for regional giga-project",
    excerpt:
      "Selection as preferred supplier positions the company at the heart of a next-generation development programme.",
    body: [
      {
        type: "p",
        text: "The company has been named preferred supplier of coated pipe systems for a major regional giga-project, positioning it to support the water and energy arteries of a next-generation urban development.",
      },
    ],
  },
  {
    slug: "esg-report-2025",
    img: lab,
    category: "Sustainability",
    date: "02 Apr 2026",
    iso: "2026-04-02",
    title: "Annual ESG report highlights progress on decarbonisation",
    excerpt:
      "The latest ESG report details progress against emissions, water and circularity targets.",
    body: [
      {
        type: "p",
        text: "The company published its annual ESG report, detailing progress against its decarbonisation, water-stewardship and circular-materials targets, alongside expanded governance disclosures.",
      },
    ],
  },
  {
    slug: "fy2025-final-dividend",
    img: interior,
    category: "Investors",
    date: "20 Mar 2026",
    iso: "2026-03-20",
    title: "Board recommends increased final dividend for FY2025",
    excerpt:
      "The board has recommended an increased final cash dividend, reflecting strong cash generation and a confident outlook.",
    body: [
      {
        type: "p",
        text: "Reflecting strong cash generation and a confident outlook, the board has recommended an increased final cash dividend for FY2025, subject to shareholder approval at the annual general meeting.",
      },
    ],
  },
];

export const NEWS_CATEGORIES = [
  "All",
  "Corporate",
  "Projects",
  "Investors",
  "Sustainability",
] as const;

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelated(slug: string, limit = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return ARTICLES.slice(0, limit);
  return ARTICLES.filter((a) => a.slug !== slug)
    .sort((a, b) => (a.category === current.category ? -1 : 0))
    .slice(0, limit);
}
