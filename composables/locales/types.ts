export const DefaultLocales = {
    AUTO: "auto",
    EN: "en",
  };
  
  // export const Locale = {
  //   AUTO: "auto",
  //   AM: "am-AM",
  //   AR: "ar-AR",
  //   BG: "bg-BG",
  //   BN: "bn-IN",
  //   DE: "de-DE",
  //   DK: "dk-DK",
  //   EN: "en-GB",
  //   ES: "es-ES",
  //   FI: "fi-FI",
  //   FR: "fr-FR",
  //   GR: "gr-GR",
  //   GE: "ge-GE",
  //   HI: "hi-IN",
  //   IT: "it-IT",
  //   MT: "mt-MT",
  //   NL: "nl-NL",
  //   NO: "no-NO",
  //   PL: "pl-PL",
  //   PT: "pt-PT",
  //   RO: "ro-RO",
  //   RU: "ru-RU",
  //   SV: "sv-SE",
  //   SR: "sr-SP",
  //   TL: "tl-PH",
  // };
  
  export type Locale = string;
  
  export type KeyString = { [key: string]: string | KeyString };
  
  export interface Locales {
    [key: Locale]: string;
  }
  
  export interface LocaleConfig {
    locales: Locales;
    locale: Locale;
    fallbackLocale: Locale;
    messages: { [key: Locale]: KeyString };
    verbose?: boolean;
  }
  
  export interface LocaleState {
    locales: Locales;
    locale: Locale;
    fallbackLocale: Locale;
    messages: {
      [key: Locale]: {
        [key: string]: string;
      };
    };
    ogMessages: { [key: Locale]: KeyString };
    initialized: boolean;
    setup: boolean;
  }
  
  export interface ArgsOutput {
    n: number | null;
    [key: string]: any;
  }
  
  export interface ContentOutput {
    message: string;
    hasPluralization: boolean;
    interpolate: string[];
  }
  
  export interface ObjectOutput {
    data: KeyString;
  }