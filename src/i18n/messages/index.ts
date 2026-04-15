import { en } from "@/i18n/messages/en";
import { ko } from "@/i18n/messages/ko";
import type { Locale, SiteDictionary } from "@/i18n/schema";

const dictionaries: Record<Locale, SiteDictionary> = {
  en,
  ko
};

export const getDictionary = (locale: Locale) => dictionaries[locale];
