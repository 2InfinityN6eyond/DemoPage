export type Locale = "en" | "ko";
export type TabId = "chats" | "projects" | "agents" | "usage" | "spending" | "billing";

export interface Turn {
  id: string;
  role: "user" | "model-answers";
  text?: string;
  models?: Array<{ name: string; provider: string; cost: string; body: string; privacyNote?: string }>;
  synthesis?: string;
}

export interface Chat {
  id: string;
  title: string;
  preview: string;
  runPlan: string[];
  turns: Turn[];
}
