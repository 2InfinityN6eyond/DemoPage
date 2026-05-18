import { useMemo, useState } from "react";
import { PanelLeft, Plus, Search, X } from "lucide-react";
import { CHATS } from "../data";
import { formatRelativeTime } from "../i18n";
import type { Chat } from "../types";
import type { Locale } from "../types";
import type { Copy } from "../i18n";

interface Props {
  copy: Copy;
  locale: Locale;
  productUrl: string;
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export default function ChatsPage({ copy, locale, productUrl, sidebarOpen, onSidebarToggle }: Props) {
  const [activeChat, setActiveChat] = useState<Chat>(CHATS[0]);
  const [prompt, setPrompt] = useState("");
  const [context, setContext] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const filteredChats = useMemo(
    () =>
      CHATS.filter(
        (c) =>
          searchQuery.trim() === "" ||
          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.preview.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [searchQuery],
  );

  const totalCost = useMemo(
    () =>
      activeChat.turns
        .flatMap((t) => t.models ?? [])
        .reduce((sum, m) => sum + m.cost, 0)
        .toFixed(3),
    [activeChat],
  );

  return (
    <div className="lpv-feature-page lpv-console-page lpv-chats-page">
      <div className="lpv-primary-sidebar" data-open={sidebarOpen ? "true" : "false"}>
        <div className="lpv-primary-sidebar-head">
          <button
            className="lpv-sidebar-toggle-btn"
            onClick={onSidebarToggle}
            aria-label={copy.sidebar.toggle}
            title={copy.sidebar.toggle}
          >
            <PanelLeft size={14} />
          </button>
          <span className="lpv-sidebar-head-title">{copy.sidebar.title}</span>
          <button
            className="lpv-new-chat-btn"
            onClick={() => {
              setActiveChat(CHATS[0]);
              setPrompt("");
              setContext("");
            }}
            aria-label={copy.sidebar.newChat}
            title={copy.sidebar.newChat}
          >
            <Plus size={14} />
          </button>
        </div>

        <div className="lpv-sidebar-search-wrap">
          <div className="lpv-sidebar-search" data-focused={searchFocused ? "true" : "false"}>
            <Search size={12} className="lpv-search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder={copy.sidebar.search}
              className="lpv-search-input"
            />
            {searchQuery && (
              <button className="lpv-search-clear" onClick={() => setSearchQuery("")} aria-label={copy.sidebar.clearSearch}>
                <X size={10} />
              </button>
            )}
          </div>
        </div>

        <div className="lpv-primary-sidebar-list">
          {filteredChats.length === 0 ? (
            <div className="lpv-no-results">{copy.sidebar.noResults}</div>
          ) : (
            filteredChats.map((chat) => (
              <button
                key={chat.id}
                data-active={activeChat.id === chat.id ? "true" : "false"}
                onClick={() => {
                  setActiveChat(chat);
                  setPrompt("");
                  setContext("");
                }}
              >
                <div className="lpv-chat-item-top">
                  <span>{chat.title}</span>
                  <time>{formatRelativeTime(chat.time, locale)}</time>
                </div>
                <small>{chat.preview}</small>
                <div className="lpv-chat-item-meta">
                  {chat.runPlan.map((step) => (
                    <span key={step} className="lpv-chat-model-chip">{step}</span>
                  ))}
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      <div className="lpv-chat-console">
        <div className="lpv-workspace-thread">
          <div className="lpv-thread-sticky">
            <button
              className="lpv-sidebar-toggle-btn lpv-thread-toggle"
              onClick={onSidebarToggle}
              aria-label={copy.sidebar.toggle}
              title={copy.sidebar.toggle}
            >
              <PanelLeft size={14} />
            </button>
            <div className="lpv-thread-meta">
              <span>{copy.thread.label}</span>
              <p>{activeChat.title}</p>
            </div>
          </div>
          <div className="lpv-thread-scroll">
            {activeChat.turns.map((turn) => (
              <div key={turn.id} className="lpv-turn">
                {turn.role === "user" && (
                  <div className="lpv-turn-question">
                    <p>{turn.text}</p>
                  </div>
                )}
                {turn.role === "model-answers" && (
                  <div className="lpv-turn-answers">
                    {turn.models?.map((model) => (
                      <div key={model.name} className="lpv-answer-doc">
                        <header>
                          <strong>{model.name}</strong>
                          <small>{model.provider} · ${model.cost.toFixed(3)}</small>
                        </header>
                        <p>{model.body}</p>
                        {model.privacyNote && (
                          <span className="lpv-privacy-note">{model.privacyNote}</span>
                        )}
                      </div>
                    ))}
                    {turn.synthesis && (
                      <div className="lpv-synthesis-doc">
                        <strong>{copy.thread.synthesis}</strong>
                        <p>{turn.synthesis}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lpv-composer lpv-composer-dock">
          <div className="lpv-role-strip">
            {activeChat.runPlan.map((step) => (
              <span key={step}>
                <em>{step}</em>
              </span>
            ))}
          </div>
          <div className="lpv-prompt-split">
            <textarea
              className="lpv-prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={copy.composer.placeholder}
            />
            <textarea
              className="lpv-prompt-context"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder={copy.composer.context}
            />
          </div>
          <div className="lpv-composer-footer">
            <small className="lpv-faint" style={{ color: "var(--lpv-faint)", fontSize: "11px" }}>
              {copy.composer.estimatedCost.replace("{cost}", totalCost)}
            </small>
            <button
              className="lpv-run-button"
              onClick={() => window.location.assign(productUrl)}
            >
              {copy.composer.execute}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
