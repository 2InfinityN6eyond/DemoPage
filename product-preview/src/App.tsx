import { Component, type ReactNode, useState, useEffect } from "react";
import ChromeBar from "./components/ChromeBar";
import ChatsPage from "./components/ChatsPage";
import PlaceholderPage from "./components/PlaceholderPage";
import { COPY, FEATURE_TAB_MAP } from "./i18n";
import type { Locale, TabId } from "./types";

interface ErrorBoundaryState { error: Error | null }

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div className="lpv-error-boundary">
          <strong>Preview unavailable</strong>
          <small>{this.state.error.message}</small>
        </div>
      );
    }
    return this.props.children;
  }
}

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
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
  const toggleSidebar = () => setSidebarOpen((v) => !v);

  const page = (() => {
    switch (tab) {
      case "chats":    return <ChatsPage copy={copy} locale={locale} productUrl={productUrl} sidebarOpen={sidebarOpen} onSidebarToggle={toggleSidebar} />;
      case "projects":
      case "agents":
      case "usage":
      case "spending":
      case "billing":
        return <PlaceholderPage copy={copy} tab={tab} />;
    }
  })();

  return (
    <ErrorBoundary>
      <div className="lpv-shell" data-preview-theme={theme}>
        <ChromeBar
          copy={copy}
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
          {page}
        </div>
      </div>
    </ErrorBoundary>
  );
}
