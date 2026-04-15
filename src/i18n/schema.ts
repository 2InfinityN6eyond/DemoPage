export const locales = ["en", "ko"] as const;

export type Locale = (typeof locales)[number];

export type NavItem = {
  key: "company" | "solution" | "technology" | "contact";
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
  };
};
