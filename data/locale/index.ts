import { createLocale } from "@sil/locale";
import { Languages } from "./languages";

import EN from "./en";
import NL from "./nl";



const localeData = {
  [Languages.EN]: EN,
  [Languages.NL]: NL,
};

const { t, locales, currentLocale, state } = createLocale({
  locales: Languages,
  locale: Languages.AUTO,
  fallbackLocale: Languages.EN,
  messages: localeData,
});


export { t, locales, currentLocale, state };