import type { Locale } from "@/i18n/schema";
import { locales } from "@/i18n/schema";

export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale => {
  return locales.includes(value as Locale);
};

export const localizedPath = (locale: Locale, pathname = "") => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const normalizedPath = pathname.replace(/^\/+|\/+$/g, "");
  const suffix = normalizedPath ? `/${normalizedPath}/` : "/";
  return `${base}/${locale}${suffix}`.replace(/\/{2,}/g, "/");
};
