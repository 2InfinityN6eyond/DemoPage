import { useState, useEffect } from "react";
import ChromeBar from "./components/ChromeBar";
import ChatsPage from "./components/ChatsPage";
import OtherPage from "./components/OtherPage";
import { COPY, TAB_IDS, FEATURE_TAB_MAP } from "./i18n";
import type { Locale, TabId } from "./types";

interface Props {
  locale: Locale;
  feature: string;
  productUrl: string;
}

export default function App({ locale: initialLocale, feature, productUrl }: Props) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [tab, setTab] = useState<TabId>(FEATURE_TAB_MAP[feature] ?? "chats");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ feature: string }>).detail;
      const mapped = FEATURE_TAB_MAP[detail?.feature];
      if (mapped) setTab(mapped);
    };
    window.addEventListener("logk-preview:set-feature", handler);
    return () => window.removeEventListener("logk-preview:set-feature", handler);
  }, []);

  const copy = COPY[locale];

  return (
    <div className="lpv-shell" data-preview-theme={theme}>
      <ChromeBar
        copy={copy}
        tabs={TAB_IDS}
        activeTab={tab}
        onTabChange={setTab}
        settingsOpen={settingsOpen}
        onSettingsToggle={() => setSettingsOpen((v) => !v)}
        theme={theme}
        onThemeChange={setTheme}
        locale={locale}
        onLocaleChange={setLocale}
      />
      <div className="lpv-app-frame">
        {tab === "chats" ? (
          <ChatsPage copy={copy} productUrl={productUrl} />
        ) : (
          <OtherPage tab={tab} copy={copy} />
        )}
      </div>
    </div>
  );
}
