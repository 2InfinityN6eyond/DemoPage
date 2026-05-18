import { PREVIEW_TAB_IDS, type PreviewTabId } from "@/shared/tabs";

export { PREVIEW_TAB_IDS };
export type PreviewFeatureId = PreviewTabId;

export const locales = ["en", "ko"] as const;

export type Locale = (typeof locales)[number];

export type NavItem = {
  key: string;
  label: string;
  href: string;
};

export type SiteDictionary = {
  meta: {
    siteName: string;
    homeTitle: string;
    homeDescription: string;
    productTitle: string;
    productDescription: string;
  };
  nav: {
    items: NavItem[];
    product: string;
    talkToSales: string;
    home: string;
    bookDemo: string;
    menuOpen: string;
    menuClose: string;
  };
  theme: {
    light: string;
    dark: string;
    toggleLabel: string;
  };
  localeSwitcher: {
    label: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: Array<{ value: string; label: string }>;
    previewFeatures: Array<{
      // First entry becomes the default tab — order is load-bearing.
      id: PreviewFeatureId;
      label: string;
      summary: string;
    }>;
  };
  trust: string[];
  solution: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{
      index: string;
      title: string;
      body: string;
      bullets?: string[];
      tall?: boolean;
    }>;
  };
  showcase: {
    eyebrow: string;
    title: string;
    description: string;
    tabs: Array<{
      id: "plan" | "build" | "review";
      label: string;
      title: string;
      body: string;
      visualLabel?: string;
      visualTitle?: string;
      bullets?: string[];
      stack?: string[];
      reviewLines?: string[];
    }>;
  };
  technology: {
    eyebrow: string;
    title: string;
    description: string;
    graphicEyebrow: string;
    graphicTitle: string;
    graphicBody: string;
    cards: Array<{ index: string; title: string; body: string }>;
    stats: Array<{ value: number; label: string }>;
  };
  company: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{
      index: string;
      title?: string;
      body?: string;
      principles?: Array<{ title: string; body: string }>;
      wide?: boolean;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    copyright: string;
  };
  productPage: {
    eyebrow: string;
    title: string;
    description: string;
    stages: Array<{ label: string; title: string; body: string }>;
    surfaces: Array<{ index: string; title: string; body: string; wide?: boolean }>;
    flowEyebrow: string;
    flowTitle: string;
    flowDescription: string;
    steps: Array<{ number: string; title: string; body: string }>;
    nextEyebrow: string;
    nextTitle: string;
    nextBody: string;
    primaryCta: string;
    secondaryCta: string;
    gallery: {
      workspaceLabel: string;
      workspaceTitle: string;
      workspaceBody: string;
      workspaceAlt: string;
      pricingLabel: string;
      pricingTitle: string;
      pricingBody: string;
      pricingAlt: string;
    };
  };
  mockupsPage: {
    eyebrow: string;
    title: string;
    description: string;
    lede: string;
    note: string;
    primaryCta: string;
    secondaryCta: string;
    scenes: Array<{ eyebrow: string; title: string; body: string }>;
  };
};
