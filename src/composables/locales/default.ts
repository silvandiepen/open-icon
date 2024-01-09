import { LocaleState, LocaleConfig } from "./types";

export const DefaultLocales = {
  AUTO: "auto",
  EN: "en",
};

export const defaultState: LocaleState = {
  locales: {},
  locale: DefaultLocales.EN,
  fallbackLocale: DefaultLocales.EN,
  messages: {},
  ogMessages: {},
  setup: false,
  initialized: false,
};

const localeData = {
  [DefaultLocales.EN]: {},
} as any;

export const defaultConfig: LocaleConfig = {
  locales: DefaultLocales,
  locale: DefaultLocales.AUTO,
  fallbackLocale: DefaultLocales.EN,
  messages: localeData,
};
