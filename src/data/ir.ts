// NOTE: All figures below are illustrative placeholders.
// Replace with verified data before publishing.

export const ticker = {
  exchange: "Tadawul",
  symbol: "EASTP",
  code: "1321",
  price: 39.82,
  changeAbs: 0.46,
  changePct: 1.17,
  currency: "SAR",
  marketCap: "5.2B",
  asOf: "Live · delayed 15 min",
};

export const kpis = [
  { label: "Revenue (FY)", value: "SAR 2.14B", delta: "+18.4%" },
  { label: "EBITDA Margin", value: "21.3%", delta: "+2.1pp" },
  { label: "Net Income", value: "SAR 312M", delta: "+24.7%" },
  { label: "Order Backlog", value: "SAR 1.9B", delta: "+11.0%" },
  { label: "Dividend / Share", value: "SAR 1.25", delta: "+0.20" },
  { label: "ROE", value: "16.8%", delta: "+1.4pp" },
];

export const stockSeries = {
  // 60 mock points for the 1Y default view
  "1M": gen(30, 36, 1.2),
  "3M": gen(60, 34, 2.4),
  "1Y": gen(120, 28, 4.6),
  "5Y": gen(240, 14, 9.2),
} as const;

function gen(n: number, base: number, range: number) {
  const out: number[] = [];
  let v = base;
  for (let i = 0; i < n; i++) {
    v += (Math.sin(i / 4) + (Math.random() - 0.45)) * (range / n) * 3;
    out.push(Math.max(8, +v.toFixed(2)));
  }
  // trend upward to current price
  return out.map((p, i) => +(p + (i / n) * (39.82 - base)).toFixed(2));
}

export const reports = [
  { year: 2025, type: "Annual Report", title: "Annual Report 2025", size: "8.4 MB" },
  { year: 2025, type: "Quarterly", title: "Q3 2025 Earnings Release", size: "1.2 MB" },
  { year: 2025, type: "Presentation", title: "Q3 2025 Investor Presentation", size: "4.1 MB" },
  { year: 2025, type: "Factsheet", title: "Corporate Factsheet — H2 2025", size: "640 KB" },
  { year: 2025, type: "Quarterly", title: "Q2 2025 Earnings Release", size: "1.1 MB" },
  { year: 2024, type: "Annual Report", title: "Annual Report 2024", size: "7.9 MB" },
  { year: 2024, type: "Presentation", title: "FY 2024 Results Presentation", size: "3.8 MB" },
  { year: 2024, type: "Quarterly", title: "Q4 2024 Earnings Release", size: "1.0 MB" },
  { year: 2023, type: "Annual Report", title: "Annual Report 2023", size: "7.4 MB" },
  { year: 2023, type: "Presentation", title: "Strategy Day 2023", size: "5.6 MB" },
];

export const board = [
  { name: "Eng. Khalid Al-Mutairi", role: "Chairman of the Board", since: "Since 2019", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80" },
  { name: "Dr. Saud Al-Rashid", role: "Vice Chairman · Independent", since: "Since 2021", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" },
  { name: "Faisal Al-Qahtani", role: "CEO & Managing Director", since: "Since 2020", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { name: "Hessa Al-Otaibi", role: "Independent Director", since: "Since 2022", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
  { name: "Abdullah Al-Sharif", role: "Non-Executive Director", since: "Since 2019", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Maha Al-Dossary", role: "Independent Director · Audit", since: "Since 2023", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80" },
];

export const disclosures = [
  { date: "2026-06-12", tag: "Tadawul", title: "East Pipes announces award of SAR 410M EPC contract" },
  { date: "2026-05-28", tag: "Earnings", title: "Q1 2026 interim financial results disclosed" },
  { date: "2026-05-14", tag: "Governance", title: "Outcome of Ordinary General Assembly Meeting" },
  { date: "2026-04-30", tag: "Dividend", title: "Board recommends cash dividend of SAR 1.25 / share" },
  { date: "2026-03-21", tag: "Strategic", title: "East Pipes signs MoU for green-coating technology JV" },
  { date: "2026-02-09", tag: "Tadawul", title: "Commercial production at Plant 3 line expansion begins" },
];

export const analysts = [
  { firm: "Al Rajhi Capital", analyst: "Mohammed Al-Harbi", rating: "Overweight", target: "SAR 46.00" },
  { firm: "SNB Capital", analyst: "Lina Al-Faraj", rating: "Buy", target: "SAR 48.50" },
  { firm: "EFG Hermes", analyst: "Karim Hassan", rating: "Buy", target: "SAR 44.00" },
  { firm: "Jadwa Investment", analyst: "Sara Al-Mansour", rating: "Hold", target: "SAR 40.00" },
];

export const projects = [
  { title: "Trans-Arabian Water Network — Phase III", sector: "Water Transmission", year: "2025", value: "SAR 1.2B", img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1600&q=80" },
  { title: "Red Sea Subsea Crude Export Line", sector: "Oil & Gas · Marine", year: "2024", value: "SAR 860M", img: "https://images.unsplash.com/photo-1605369572399-05d8d64a0f5a?w=1600&q=80" },
  { title: "NEOM Industrial Corridor Trunkline", sector: "Infrastructure", year: "2024", value: "SAR 1.4B", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80" },
  { title: "Jafurah Unconventional Gas Network", sector: "Oil & Gas", year: "2023", value: "SAR 720M", img: "https://images.unsplash.com/photo-1565793979206-6d99f1782ebe?w=1600&q=80" },
  { title: "Riyadh Strategic Water Reserve Loop", sector: "Water Transmission", year: "2023", value: "SAR 540M", img: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1600&q=80" },
];

export const news = [
  { date: "Jun 12, 2026", tag: "Award", title: "East Pipes secures SAR 410M EPC contract for strategic water programme", img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80" },
  { date: "May 28, 2026", tag: "Results", title: "Q1 2026: record revenue, expanding international footprint", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" },
  { date: "Apr 02, 2026", tag: "Innovation", title: "Commissioning of next-generation 3LPP coating line", img: "https://images.unsplash.com/photo-1565793979206-6d99f1782ebe?w=1200&q=80" },
  { date: "Mar 14, 2026", tag: "ESG", title: "30% reduction in scope-1 emissions ahead of 2030 target", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&q=80" },
];
