import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://cottage-hero-section-ui-29.lovable.app";

type Meta = { title: string; description: string };

export const ROUTE_META: Record<string, Meta> = {
  "/": {
    title: "Red Vision Creative Studio — AI Entertainment & Tech",
    description:
      "Red Vision Creative Studio blends AI and human creativity across music, fashion, TV, radio, marketing and technology.",
  },
  "/music": {
    title: "Red Vision Music — Independent Label & Artist Roster",
    description:
      "Meet the Red Vision Music roster, stream our artists, and explore the studio sessions behind the label.",
  },
  "/divisions/music": {
    title: "Music Division — Red Vision Creative Studio",
    description:
      "Grammy-winning songwriters, multi-platinum artists and producers building the next era of independent music.",
  },
  "/divisions/tv": {
    title: "Red Vision TV — Film, Showreel & Production Services",
    description:
      "Cinematic film and TV production: showreel, branded content, campaign films and booking for Red Vision TV.",
  },
  "/divisions/radio": {
    title: "Red Vision Radio — 24/7 Music, Culture & AI Shows",
    description:
      "Live shows on music, culture and the business behind the industry, broadcasting 24/7 from Los Angeles.",
  },
  "/divisions/ai": {
    title: "Red Vision AI — AI Agency for Creative Brands",
    description:
      "AI strategy, automation and creative tooling for artists, labels and brands from Red Vision Creative Studio.",
  },
  "/divisions/ai/services": {
    title: "AI Services — Red Vision AI Agency",
    description:
      "AI services for content, automation, and creative production: what we build and how we deploy it.",
  },
  "/divisions/ai/pricing": {
    title: "AI Pricing & Packages — Red Vision AI",
    description:
      "Transparent pricing for Red Vision AI engagements, from pilot projects to full creative automation builds.",
  },
  "/divisions/ai/consulting": {
    title: "AI Consulting — Red Vision Creative Studio",
    description:
      "Hands-on AI consulting for entertainment teams: workflow audits, tooling roadmaps and implementation support.",
  },
  "/divisions/fashion": {
    title: "Red Vision Fashion — AI-Designed Apparel",
    description:
      "AI-assisted fashion collections and lookbooks from Red Vision Creative Studio.",
  },
  "/divisions/blog": {
    title: "A Tragic Mulatto — Blog & Cultural Commentary",
    description:
      "Cultural commentary, artist spotlights and storytelling from the Red Vision media platform.",
  },
  "/divisions/tragic-mulatto": {
    title: "A Tragic Mulatto — Red Vision Media",
    description:
      "The Tragic Mulatto media platform: essays, artist features and culture-first storytelling.",
  },
  "/divisions/marketing": {
    title: "Red Vision Marketing — AI-Powered Campaigns",
    description:
      "Data-driven social, paid ads and content campaigns for artists and brands, with real-time reporting.",
  },
  "/divisions/technology": {
    title: "Red Vision Technology — Product & Platform Builds",
    description:
      "Custom platforms, apps and AI infrastructure engineered by the Red Vision technology division.",
  },
  "/divisions/university": {
    title: "Red Vision University — Music & AI Education",
    description:
      "Courses and mentorship on music business, touring and AI tools from working industry veterans.",
  },
  "/divisions/agency": {
    title: "Red Vision Agency — Creative & Artist Services",
    description:
      "Full-service creative agency support for artists and brands: strategy, production and campaign delivery.",
  },
  "/divisions/scripts": {
    title: "Red Vision Books — Titles by Jason Salvador",
    description:
      "Books and long-form writing from Red Vision, including Keep Your Elbows Off the Table and PIVOT.",
  },
  "/divisions/merch": {
    title: "Red Vision Merch — Official Apparel & Goods",
    description:
      "Official merchandise from every Red Vision division, produced with Printful and shipped worldwide.",
  },
  "/pivot-book": {
    title: "PIVOT — The Tour Manager's Playbook",
    description:
      "PIVOT is the complete tour management system from a 25-year music industry veteran.",
  },
  "/pivot-tour": {
    title: "PIVOT Tour System — Tour Management Tools",
    description:
      "The PIVOT tour system: routing, budgets and day-sheets built for working tour managers.",
  },
};

const FALLBACK: Meta = ROUTE_META["/"];

/** Renders per-route title, description, canonical and Open Graph tags. */
const Seo = () => {
  const { pathname } = useLocation();
  const path = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const meta = ROUTE_META[path];
  const isKnown = Boolean(meta);
  const { title, description } = meta ?? FALLBACK;
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {isKnown && <link rel="canonical" href={url} />}
      {!isKnown && <meta name="robots" content="noindex" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
