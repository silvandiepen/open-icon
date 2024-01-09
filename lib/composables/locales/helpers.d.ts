import { Locale, LocaleConfig, LocaleState } from "./types";
export declare const flattenObject: (obj: Object, parentKey?: string) => {
    [key: string]: string;
};
export declare const replaceAll: (string: string, search: string, replace: string) => string;
export declare const flatMessages: (values: LocaleConfig["messages"]) => LocaleState["messages"];
export declare const getInterpolations: (value: string) => string[];
export declare const browserLocale: (fallback: Locale, state: LocaleState) => any;
export declare const splitMessages: (message: string) => [
    string,
    string
] | [
    string,
    string,
    string
];
export declare const isString: (input: any) => boolean;
