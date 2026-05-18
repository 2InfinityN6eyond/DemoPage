import type { Locale, TabId } from "./types";
import { PREVIEW_TAB_IDS } from "./types";

// Re-export so consumers can import from one place.
export { PREVIEW_TAB_IDS as TAB_IDS };

// ── Copy shape ──────────────────────────────────────────────────────────────
// Both locales must satisfy this type — missing or extra keys are compile errors.

type CopyShape = {
  brand: { name: string; tagline: string };
  nav: Record<TabId, string>;
  settings: { title: string; theme: string; language: string; ariaLabel: string; closeLabel: string };
  composer: { placeholder: string; context: string; execute: string; estimatedCost: string };
  sidebar: { title: string; newChat: string; search: string; toggle: string; clearSearch: string; noResults: string };
  thread: { label: string; synthesis: string };
  placeholder: Record<TabId, { title: string; body: string }>;
};

const en = {
  brand: { name: "LogK", tagline: "AI Delegation Layer" },
  nav: {
    chats: "Chats", projects: "Projects", agents: "Agents",
    usage: "Usage", spending: "Spending", billing: "Billing",
  },
  settings: { title: "Settings", theme: "Dark mode", language: "Language", ariaLabel: "Settings", closeLabel: "Close" },
  composer: {
    placeholder: "Ask anything across all your models…",
    context: "Add constraints, privacy rules, or routing context…",
    execute: "Run",
    estimatedCost: "~${cost} estimated",
  },
  sidebar: {
    title: "Conversations",
    newChat: "New conversation",
    search: "Search",
    toggle: "Toggle sidebar",
    clearSearch: "Clear search",
    noResults: "No results",
  },
  thread: { label: "active chat", synthesis: "Synthesis" },
  placeholder: {
    chats: { title: "Chats", body: "Start a new conversation or select one from the sidebar." },
    projects: { title: "Projects", body: "Group chats, agents, and saved run plans by project." },
    agents: { title: "Agents", body: "Visual agent orchestration — model nodes, tools, privacy gates, and verification steps." },
    usage: { title: "Usage", body: "Request counts, tokens used, and provider distribution over time." },
    spending: { title: "Spending", body: "Credit balance, spend trend, and cost breakdown by model." },
    billing: { title: "Billing", body: "Current plan, credit purchases, and invoice history." },
  },
} satisfies CopyShape;

const ko = {
  brand: { name: "LogK", tagline: "AI 위임 레이어" },
  nav: {
    chats: "채팅", projects: "프로젝트", agents: "에이전트",
    usage: "사용량", spending: "지출", billing: "청구",
  },
  settings: { title: "설정", theme: "다크 모드", language: "언어", ariaLabel: "설정", closeLabel: "닫기" },
  composer: {
    placeholder: "모든 모델에 자유롭게 질문하세요…",
    context: "제약 조건, 개인정보 규칙 또는 라우팅 컨텍스트를 추가하세요…",
    execute: "실행",
    estimatedCost: "예상 ~${cost}",
  },
  sidebar: {
    title: "대화",
    newChat: "새 대화",
    search: "검색",
    toggle: "사이드바 토글",
    clearSearch: "검색어 지우기",
    noResults: "검색 결과 없음",
  },
  thread: { label: "현재 채팅", synthesis: "집계 결과" },
  placeholder: {
    chats: { title: "채팅", body: "새 대화를 시작하거나 사이드바에서 선택하세요." },
    projects: { title: "프로젝트", body: "채팅, 에이전트, 저장된 실행 계획을 프로젝트로 그룹화합니다." },
    agents: { title: "에이전트", body: "시각적 에이전트 오케스트레이션 — 모델 노드, 도구, 개인정보 게이트, 검증 단계." },
    usage: { title: "사용량", body: "요청 횟수, 사용 토큰, 시간별 제공자 분포." },
    spending: { title: "지출", body: "크레딧 잔액, 지출 추이, 모델별 비용 내역." },
    billing: { title: "청구", body: "현재 플랜, 크레딧 구매, 청구서 내역." },
  },
} satisfies CopyShape;

export const COPY = { en, ko } satisfies Record<Locale, CopyShape>;

export type Copy = CopyShape;

// ── Feature → tab mapping ───────────────────────────────────────────────────
// Maps homepage preview-switcher feature IDs to the corresponding preview tab.
// Homepage PreviewFeatureId values are defined in src/i18n/schema.ts and must
// appear as keys here when added.

export const FEATURE_TAB_MAP: Record<string, TabId> = {
  "model-router": "chats",
  "cost-planner": "spending",
  "privacy-gateway": "chats",
  "answer-synthesis": "chats",
  "audit-trace": "chats",
  projects: "projects",
  agents: "agents",
  chats: "chats",
  usage: "usage",
  spending: "spending",
  billing: "billing",
};

// ── Relative time helper ────────────────────────────────────────────────────

export function formatRelativeTime(iso: string, locale: Locale): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60_000);
  if (mins < 1) return locale === "ko" ? "방금 전" : "just now";
  if (mins < 60) return locale === "ko" ? `${mins}분 전` : `${mins} min ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return locale === "ko" ? `${hours}시간 전` : `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return locale === "ko" ? "어제" : "Yesterday";
  return locale === "ko" ? `${days}일 전` : `${days} days ago`;
}
