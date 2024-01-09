export declare const DefaultLocales: {
    AUTO: string;
    EN: string;
};
export type Locale = string;
export type KeyString = {
    [key: string]: string | KeyString;
};
export interface Locales {
    [key: Locale]: string;
}
export interface LocaleConfig {
    locales: Locales;
    locale: Locale;
    fallbackLocale: Locale;
    messages: {
        [key: Locale]: KeyString;
    };
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
    ogMessages: {
        [key: Locale]: KeyString;
    };
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
