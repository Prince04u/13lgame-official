// SEO helpers — central source of truth for site URL, meta builders, and JSON-LD schemas.
// Keep all canonical/OG/Twitter logic here so every route stays consistent.

export const SITE_URL = "https://13l.video";
export const SITE_NAME = "13L Game";
export const SITE_LOGO = `${SITE_URL}/og-logo.png`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.jpg`;
export const PLAY_URL = "https://13l.video/";
export const TG_PREDICTION = "https://t.me/officiall13lgames";
export const TG_AUTHOR = "https://t.me/veeranjan_solutions";

export interface SeoMetaInput {
  title: string;
  description: string;
  path: string; // e.g. "/" or "/about"
  image?: string;
  type?: "website" | "article";
  keywords?: string;
}

export function buildMeta(input: SeoMetaInput) {
  const url = `${SITE_URL}${input.path === "/" ? "" : input.path}`;
  const image = input.image ?? DEFAULT_OG_IMAGE;
  return {
    meta: [
      { title: input.title },
      { name: "description", content: input.description },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      ...(input.keywords ? [{ name: "keywords", content: input.keywords }] : []),
      // Open Graph
      { property: "og:title", content: input.title },
      { property: "og:description", content: input.description },
      { property: "og:type", content: input.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_US" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: input.title },
      { name: "twitter:description", content: input.description },
      { name: "twitter:image", content: image },
      { name: "twitter:site", content: "@13LGame" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export function faqJsonLd(faqs: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO,
    description:
      "13L Game is a premier online gaming platform offering WinGo, Aviator, Mines, Limbo, lottery and slot games with instant payouts and daily free gift codes.",
    sameAs: [TG_PREDICTION, TG_AUTHOR],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "13L Game — Login, register and play exciting online games. Claim 13lgame free gift codes daily.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}
