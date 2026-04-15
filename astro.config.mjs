import { defineConfig } from "astro/config";

const normalizeBase = (value) => {
  if (!value || value === "/") {
    return undefined;
  }

  const trimmed = value.replace(/\/+$/, "");
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
};

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL ?? "https://example.com",
  base: normalizeBase(process.env.BASE_PATH),
  trailingSlash: "always",
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true
    }
  }
});
