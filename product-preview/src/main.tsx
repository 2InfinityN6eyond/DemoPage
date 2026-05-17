import "./preview.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import type { Locale } from "./types";

function mount() {
  document.querySelectorAll<HTMLElement>("[data-product-preview]").forEach((node) => {
    if (node.dataset.mounted === "true") return;
    node.dataset.mounted = "true";
    const locale = (node.dataset.locale ?? "en") as Locale;
    const feature = node.dataset.feature ?? "chats";
    const productUrl = node.dataset.productUrl ?? `/${locale}/product/`;
    createRoot(node).render(
      <App locale={locale} feature={feature} productUrl={productUrl} />
    );
  });
}

mount();
document.addEventListener("astro:page-load", mount);
