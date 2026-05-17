import { Settings, X } from "lucide-react";
import type { Locale, TabId } from "../types";
import type { Copy } from "../i18n";

interface Props {
  copy: Copy;
  tabs: TabId[];
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  settingsOpen: boolean;
  onSettingsToggle: () => void;
  theme: "dark" | "light";
  onThemeChange: (t: "dark" | "light") => void;
  locale: Locale;
  onLocaleChange: (l: Locale) => void;
}

const NAV_LEFT: TabId[] = ["chats", "projects", "agents"];
const NAV_RIGHT: TabId[] = ["usage", "spending", "billing"];

export default function ChromeBar({
  copy,
  activeTab,
  onTabChange,
  settingsOpen,
  onSettingsToggle,
  theme,
  onThemeChange,
  locale,
  onLocaleChange,
}: Props) {
  return (
    <div className="lpv-chrome-bar">
      <div className="lpv-brand">
        <div className="lpv-logo-mark">
          <span />
        </div>
        <div>
          <strong>{copy.brand.name}</strong>
          <small>{copy.brand.tagline}</small>
        </div>
      </div>

      <nav className="lpv-top-nav">
        <div className="lpv-top-nav-group">
          <div className="lpv-top-nav-segmented">
            {NAV_LEFT.map((tab) => (
              <button
                key={tab}
                data-active={activeTab === tab ? "true" : "false"}
                onClick={() => onTabChange(tab)}
              >
                {copy.nav[tab]}
              </button>
            ))}
          </div>
          <div className="lpv-top-nav-segmented">
            {NAV_RIGHT.map((tab) => (
              <button
                key={tab}
                data-active={activeTab === tab ? "true" : "false"}
                onClick={() => onTabChange(tab)}
              >
                {copy.nav[tab]}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="lpv-chrome-actions">
        <button className="lpv-settings-trigger" onClick={onSettingsToggle} aria-label="Settings">
          <Settings size={16} />
        </button>
      </div>

      <div
        className="lpv-settings-backdrop"
        data-open={settingsOpen ? "true" : "false"}
        onClick={onSettingsToggle}
      />

      {settingsOpen && (
        <div className="lpv-settings-overlay">
          <div className="lpv-settings-card">
            <div className="lpv-settings-head">
              <span>{copy.settings.title}</span>
              <button onClick={onSettingsToggle} aria-label="Close">
                <X size={14} />
              </button>
            </div>

            <div className="lpv-settings-row">
              <span>{copy.settings.theme}</span>
              <label className="lpv-switch">
                <input
                  type="checkbox"
                  checked={theme === "dark"}
                  onChange={(e) => onThemeChange(e.target.checked ? "dark" : "light")}
                />
                <span />
              </label>
            </div>

            <div className="lpv-settings-row">
              <span>{copy.settings.language}</span>
              <div className="lpv-lang-toggle">
                <button
                  data-active={locale === "en" ? "true" : "false"}
                  onClick={() => onLocaleChange("en")}
                >
                  EN
                </button>
                <button
                  data-active={locale === "ko" ? "true" : "false"}
                  onClick={() => onLocaleChange("ko")}
                >
                  KO
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
