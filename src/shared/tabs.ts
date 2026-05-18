// Single source of truth for preview tab IDs.
// Imported by src/i18n/schema.ts (Astro site) and product-preview/src/types.ts.
export const PREVIEW_TAB_IDS = [
  "chats",
  "projects",
  "agents",
  "usage",
  "spending",
  "billing",
] as const;

export type PreviewTabId = (typeof PREVIEW_TAB_IDS)[number];
