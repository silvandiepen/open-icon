import { WritableComputedRef, ComputedRef } from "vue";
import { LocaleConfig, LocaleState, Locale, KeyString } from "./types";
export interface outputLocale {
    t: (key: string, ...arg: any) => string;
    o: (key: string) => KeyString;
    currentLocale: WritableComputedRef<Locale>;
    locales: ComputedRef<Locale[]>;
    state: ComputedRef<LocaleState>;
}
export declare const createLocale: (config?: LocaleConfig) => Promise<outputLocale>;
export declare const useLocale: () => outputLocale;
