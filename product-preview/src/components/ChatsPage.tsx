import { useState } from "react";
import { CHATS } from "../data";
import type { Chat, Copy } from "../types";

interface Props {
  copy: Copy;
  productUrl: string;
}

export default function ChatsPage({ copy, productUrl }: Props) {
  const [activeChat, setActiveChat] = useState<Chat>(CHATS[0]);
  const [prompt, setPrompt] = useState("");
  const [context, setContext] = useState("");

  const totalCost = activeChat.turns
    .flatMap((t) => t.models ?? [])
    .reduce((sum, m) => sum + parseFloat(m.cost.replace("$", "")), 0)
    .toFixed(3);

  return (
    <div className="lpv-feature-page lpv-console-page lpv-chats-page">
      <div className="lpv-primary-sidebar">
        <div className="lpv-primary-sidebar-head">
          <strong>{copy.sidebar.title}</strong>
        </div>
        <div className="lpv-primary-sidebar-list">
          {CHATS.map((chat) => (
            <button
              key={chat.id}
              data-active={activeChat.id === chat.id ? "true" : "false"}
              onClick={() => {
                setActiveChat(chat);
                setPrompt("");
                setContext("");
              }}
            >
              <span>{chat.title}</span>
              <small>{chat.preview}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="lpv-chat-console">
        <div className="lpv-workspace-thread">
          <div className="lpv-thread-sticky">
            <span>{copy.thread.label}</span>
            <p>{activeChat.title}</p>
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
                          <small>{model.provider} · {model.cost}</small>
                        </header>
                        <p>{model.body}</p>
                        {model.privacyNote && (
                          <span className="lpv-privacy-note">{model.privacyNote}</span>
                        )}
                      </div>
                    ))}
                    {turn.synthesis && (
                      <div className="lpv-synthesis-doc">
                        <strong>Synthesis</strong>
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
              ~${totalCost} estimated
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
