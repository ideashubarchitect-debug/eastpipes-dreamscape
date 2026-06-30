/**
 * Site navigation model — mirrors the eastpipes.com information architecture.
 * Shared by the header mega menu and the footer.
 */

export type NavLink = {
  label: string;
  to: string;
  /** Short summary used by the consolidated "Explore" page sections. */
  blurb?: string;
};

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
          {
            label: "CEO Message",
            to: "/our-story/ceo-message",
            blurb: "A word from our Chief Executive on the journey, the people and the road ahead.",
          },
          {
            label: "At a Glance",
            to: "/our-story/at-a-glance",
            blurb: "The key facts, figures and capabilities that define East Pipes today.",
          },
          {
            label: "Mission, Vision & Values",
            to: "/our-story/mission-and-vision",
            blurb: "The purpose and principles that guide how we build and how we work.",
          },
          {
            label: "Our Milestone",
            to: "/our-story/our-milestone",
            blurb: "The defining moments in our growth from a single complex to a regional leader.",
          },
          {
            label: "Our Strategy",
            to: "/our-story/our-strategy",
            blurb: "How we create long-term value through scale, integration and market focus.",
          },
        ],
      },
      {
        heading: "Leadership & Governance",
        links: [
          {
            label: "Board of Directors",
            to: "/our-story/leadership/bod",
            blurb: "The board that sets our direction and safeguards shareholder interests.",
          },
          {
            label: "Executive Leadership",
            to: "/our-story/leadership/executive-leadership",
            blurb: "The executive team running day-to-day operations across the business.",
          },
          {
            label: "Company Governance",
            to: "/our-story/company-governance",
            blurb: "Our governance framework, policies and commitment to transparency.",
          },
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
          {
            label: "HSAW Pipes",
            to: "/what-we-do/products-and-services/hsaw-pipes",
            blurb:
              "Helical submerged-arc welded pipes engineered for water, oil and gas transmission.",
          },
          {
            label: "Double Jointing (DJ)",
            to: "/what-we-do/products-and-services/double-jointing",
            blurb:
              "Double-jointing services that reduce field welds and accelerate pipeline installation.",
          },
          {
            label: "Coating",
            to: "/what-we-do/products-and-services/coating",
            blurb:
              "Internal and external coatings — FBE, 3LPE and cement lining — for long-life protection.",
          },
          {
            label: "Ancillary Services",
            to: "/what-we-do/products-and-services/ancillary-services",
            blurb: "Supporting services that complete our end-to-end pipeline offering.",
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
          {
            label: "Oil & Gas",
            to: "/our-projects/oil-and-gas",
            blurb:
              "Line pipe for oil and gas transmission, trusted by the region's largest operators.",
          },
          {
            label: "Potable Water",
            to: "/our-projects/potable-water",
            blurb: "Large-diameter pipe for the Kingdom's water transmission mega-projects.",
          },
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
          {
            label: "Our Approach",
            to: "/sustainability/our-approach",
            blurb: "How sustainability is embedded across our operations and decision-making.",
          },
          {
            label: "Corporate Social Responsibility",
            to: "/sustainability/corporate-social-responsibility",
            blurb: "Our contribution to the communities and the people we work with.",
          },
          {
            label: "Energy Management",
            to: "/sustainability/energy-management",
            blurb: "Initiatives to use energy efficiently and reduce our operational footprint.",
          },
          {
            label: "Quality & HSE Policy",
            to: "/sustainability/quality-hse-policy",
            blurb: "Our standards for quality, health, safety and the environment.",
          },
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
          {
            label: "Stock Information",
            to: "/investor-relations/stock-information",
            blurb: "Live share price, performance and listing details for Tadawul: 1321.",
          },
          {
            label: "Analyst Coverage",
            to: "/investor-relations/analyst-coverage",
            blurb: "Third-party analyst ratings and price targets covering East Pipes.",
          },
          {
            label: "IR Resources",
            to: "/investor-relations/ir-resources",
            blurb: "Reports, presentations and documents for shareholders and analysts.",
          },
          {
            label: "Nominations",
            to: "/investor-relations/nominations",
            blurb: "Board nomination information and related shareholder processes.",
          },
          {
            label: "FAQs",
            to: "/investor-relations/faqs",
            blurb: "Answers to the questions investors ask us most often.",
          },
          {
            label: "Disclaimer",
            to: "/investor-relations/disclaimer",
            blurb: "Important notices governing the use of our investor information.",
          },
        ],
      },
    ],
  },
];

export const SIMPLE_NAV: NavLink[] = [{ label: "Media", to: "/media" }];

export const UTILITY_NAV: NavLink[] = [
  { label: "News", to: "/news" },
  { label: "Vendors", to: "/vendors" },
  { label: "Career", to: "/career" },
  { label: "Contact Us", to: "/contact" },
];

/** Slug used by the consolidated Explore route, e.g. "/our-story" -> "our-story". */
export function exploreSlug(section: MegaSection): string {
  return section.to.replace(/^\//, "");
}

/** Find a mega-menu section by its Explore slug. */
export function findSectionBySlug(slug: string): MegaSection | undefined {
  return MEGA_MENU.find((m) => exploreSlug(m) === slug);
}
