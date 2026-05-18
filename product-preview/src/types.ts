import { PREVIEW_TAB_IDS } from "../../src/shared/tabs";

export { PREVIEW_TAB_IDS };
export type TabId = (typeof PREVIEW_TAB_IDS)[number];

export type Locale = "en" | "ko";

export interface ModelAnswer {
  name: string;
  provider: string;
  /** Numeric cost in USD. Format for display: `$${cost.toFixed(3)}` */
  cost: number;
  body: string;
  privacyNote?: string;
}

export interface Turn {
  id: string;
  role: "user" | "model-answers";
  text?: string;
  models?: ModelAnswer[];
  synthesis?: string;
}

export interface Chat {
  id: string;
  title: string;
  preview: string;
  /** ISO 8601 timestamp. Format for display with formatRelativeTime(). */
  time: string;
  runPlan: string[];
  turns: Turn[];
}
