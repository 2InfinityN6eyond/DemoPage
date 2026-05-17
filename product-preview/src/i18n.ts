import type { Locale, TabId } from "./types";

export const COPY = {
  en: {
    brand: { name: "LogK", tagline: "AI Delegation Layer" },
    nav: {
      chats: "Chats", projects: "Projects", agents: "Agents",
      usage: "Usage", spending: "Spending", billing: "Billing",
    },
    settings: { title: "Settings", theme: "Dark mode", language: "Language" },
    composer: {
      placeholder: "Ask anything across all your models…",
      context: "Add constraints, privacy rules, or routing context…",
      execute: "Run",
    },
    sidebar: { title: "Conversations", newChat: "New conversation", search: "Search", toggle: "Toggle sidebar" },
    thread: { label: "active chat" },
    placeholder: {
      projects: { title: "Projects", body: "Group chats, agents, and saved run plans by project." },
      agents: { title: "Agents", body: "Visual agent orchestration — model nodes, tools, privacy gates, and verification steps." },
      usage: { title: "Usage", body: "Request counts, tokens used, and provider distribution over time." },
      spending: { title: "Spending", body: "Credit balance, spend trend, and cost breakdown by model." },
      billing: { title: "Billing", body: "Current plan, credit purchases, and invoice history." },
    },
  },
  ko: {
    brand: { name: "LogK", tagline: "AI 위임 레이어" },
    nav: {
      chats: "채팅", projects: "프로젝트", agents: "에이전트",
      usage: "사용량", spending: "지출", billing: "청구",
    },
    settings: { title: "설정", theme: "다크 모드", language: "언어" },
    composer: {
      placeholder: "모든 모델에 자유롭게 질문하세요…",
      context: "제약 조건, 개인정보 규칙 또는 라우팅 컨텍스트를 추가하세요…",
      execute: "실행",
    },
    sidebar: { title: "대화", newChat: "새 대화", search: "검색", toggle: "사이드바 토글" },
    thread: { label: "현재 채팅" },
    placeholder: {
      projects: { title: "프로젝트", body: "채팅, 에이전트, 저장된 실행 계획을 프로젝트로 그룹화합니다." },
      agents: { title: "에이전트", body: "시각적 에이전트 오케스트레이션 — 모델 노드, 도구, 개인정보 게이트, 검증 단계." },
      usage: { title: "사용량", body: "요청 횟수, 사용 토큰, 시간별 제공자 분포." },
      spending: { title: "지출", body: "크레딧 잔액, 지출 추이, 모델별 비용 내역." },
      billing: { title: "청구", body: "현재 플랜, 크레딧 구매, 청구서 내역." },
    },
  },
} as const satisfies Record<Locale, unknown>;

export type Copy = typeof COPY[Locale];

export const TAB_IDS: TabId[] = ["chats", "projects", "agents", "usage", "spending", "billing"];

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
