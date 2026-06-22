/**
 * Site navigation model — mirrors the eastpipes.com information architecture.
 * Shared by the header mega menu and the footer.
 */

export type NavLink = { label: string; to: string };

export type NavColumn = {
  heading: string;
  to?: string;
  links: NavLink[];
};

export type MegaSection = {
  label: string;
  to: string;
  /** feature blurb shown on the left of the mega panel */
  feature?: { title: string; text: string; to: string };
  columns: NavColumn[];
};

export const MEGA_MENU: MegaSection[] = [
  {
    label: "Our Story",
    to: "/our-story",
    feature: {
      title: "About East Pipes",
      text: "Established in 2010 in Dammam — one of the region's largest fully integrated HSAW pipe manufacturers.",
      to: "/our-story",
    },
    columns: [
      {
        heading: "The Company",
        links: [
          { label: "CEO Message", to: "/our-story/ceo-message" },
          { label: "At a Glance", to: "/our-story/at-a-glance" },
          { label: "Mission, Vision & Values", to: "/our-story/mission-and-vision" },
          { label: "Our Milestone", to: "/our-story/our-milestone" },
          { label: "Our Strategy", to: "/our-story/our-strategy" },
        ],
      },
      {
        heading: "Leadership & Governance",
        links: [
          { label: "Board of Directors", to: "/our-story/leadership/bod" },
          { label: "Executive Leadership", to: "/our-story/leadership/executive-leadership" },
          { label: "Company Governance", to: "/our-story/company-governance" },
        ],
      },
    ],
  },
  {
    label: "What We Do",
    to: "/what-we-do",
    feature: {
      title: "Products & Services",
      text: "End-to-end piping solutions — manufacturing, double jointing and coating — from a single facility.",
      to: "/what-we-do/products-and-services",
    },
    columns: [
      {
        heading: "Products & Services",
        links: [
          { label: "HSAW Pipes", to: "/what-we-do/products-and-services/hsaw-pipes" },
          {
            label: "Double Jointing (DJ)",
            to: "/what-we-do/products-and-services/double-jointing",
          },
          { label: "Coating", to: "/what-we-do/products-and-services/coating" },
          {
            label: "Ancillary Services",
            to: "/what-we-do/products-and-services/ancillary-services",
          },
        ],
      },
    ],
  },
  {
    label: "Our Projects",
    to: "/our-projects",
    feature: {
      title: "Built for the Kingdom",
      text: "Supplying critical water, oil and gas infrastructure to Saudi Aramco, SWCC and beyond.",
      to: "/our-projects",
    },
    columns: [
      {
        heading: "Sectors",
        links: [
          { label: "Oil & Gas", to: "/our-projects/oil-and-gas" },
          { label: "Potable Water", to: "/our-projects/potable-water" },
        ],
      },
    ],
  },
  {
    label: "Sustainability",
    to: "/sustainability",
    feature: {
      title: "Building responsibly",
      text: "A focused strategy across environment, community and governance.",
      to: "/sustainability",
    },
    columns: [
      {
        heading: "Our Commitment",
        links: [
          { label: "Our Approach", to: "/sustainability/our-approach" },
          {
            label: "Corporate Social Responsibility",
            to: "/sustainability/corporate-social-responsibility",
          },
          { label: "Energy Management", to: "/sustainability/energy-management" },
          { label: "Quality & HSE Policy", to: "/sustainability/quality-hse-policy" },
        ],
      },
    ],
  },
  {
    label: "Investor Relations",
    to: "/investor-relations",
    feature: {
      title: "Invest in East Pipes",
      text: "Listed on the Saudi Exchange (Tadawul: 1321). Explore the investment story.",
      to: "/investor-relations",
    },
    columns: [
      {
        heading: "Investors",
        links: [
          { label: "Stock Information", to: "/investor-relations/stock-information" },
          { label: "Analyst Coverage", to: "/investor-relations/analyst-coverage" },
          { label: "IR Resources", to: "/investor-relations/ir-resources" },
          { label: "Nominations", to: "/investor-relations/nominations" },
          { label: "FAQs", to: "/investor-relations/faqs" },
          { label: "Disclaimer", to: "/investor-relations/disclaimer" },
        ],
      },
    ],
  },
];

export const SIMPLE_NAV: NavLink[] = [
  { label: "Media", to: "/media" },
  { label: "News", to: "/news" },
];

export const UTILITY_NAV: NavLink[] = [
  { label: "Vendors", to: "/vendors" },
  { label: "Career", to: "/career" },
  { label: "Contact Us", to: "/contact" },
];
