import { reactive, computed, WritableComputedRef, ComputedRef } from "vue";
import { retrieveState, watchState } from "@sil/storage";
import { LocaleConfig, LocaleState, Locale, KeyString } from "./types";
import {
  processArguments,
  processContent,
  processInterpolations,
  processMessage,
  processObject,
  processPluralization,
} from "./process";
import { browserLocale, flatMessages } from "./helpers";
import { defaultConfig, DefaultLocales, defaultState } from "./default";

const KEYS = {
  LOCALE: "locale::state",
};

let localeState: LocaleState;

const initLocale = async () => {
  if (localeState?.setup) return;

  const setup = async () => {
    localeState = reactive<LocaleState>(
      await retrieveState(defaultState, KEYS.LOCALE, {})
    );
    watchState(localeState, KEYS.LOCALE, {});
  };

  setup().then(() => {
    console.log("Locales setup");
    localeState.setup = true;
  });
};

export interface outputLocale {
  t: (key: string, ...arg: any) => string;
  o: (key: string) => KeyString;
  currentLocale: WritableComputedRef<Locale>;
  locales: ComputedRef<Locale[]>;
  state: ComputedRef<LocaleState>;
}

export const createLocale = async (
  config: LocaleConfig = defaultConfig
): Promise<outputLocale> => {
  if (localeState?.initialized) return useLocale();

  const mergedConfig = {
    ...defaultConfig,
    ...config,
  };

  return initLocale().then(() => {
    localeState.locales = mergedConfig.locales;
    localeState.locale =
      config.locale == DefaultLocales.AUTO
        ? browserLocale(mergedConfig.fallbackLocale, localeState)
        : mergedConfig.locale;
    localeState.fallbackLocale = mergedConfig.fallbackLocale;
    localeState.messages = flatMessages(mergedConfig.messages);
    localeState.ogMessages = mergedConfig.messages;
    localeState.initialized = true;
    return useLocale();
  });
};

export const useLocale = (): outputLocale => {
  const t: outputLocale["t"] = (key, ...arg) => {
    const args = processArguments(arg);
    const content = processContent(key, localeState);

    let { message } = content;

    message = processPluralization(message, content, args);
    message = processInterpolations(message, content, args);
    message = processMessage(message);

    return message;
  };

  const o: outputLocale["o"] = (key): KeyString => {
    return processObject(key, localeState).data;
  };

  const currentLocale: outputLocale["currentLocale"] = computed({
    get(): Locale {
      return localeState.locale;
    },

    set(value: Locale): void {
      localeState.locale = value;
    },
  });

  const locales: outputLocale["locales"] = computed(() => {
    if(localeState && localeState.locales) {
      return Object.values(localeState.locales);
      // return Object.values(localeState.locales).filter((locale) => locale !== DefaultLocales.AUTO);
    }
    return []
    // return Object.values(localeState.locales || []);
  });

  return {
    t,
    o,
    currentLocale,
    locales,
    state: computed(() => localeState),
  };
};
