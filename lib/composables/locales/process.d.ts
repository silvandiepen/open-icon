import { ArgsOutput, ContentOutput, LocaleState, KeyString, ObjectOutput } from "./types";
export declare const getObject: (obj: object, key: string) => any;
export declare const processObject: (key: string, state: LocaleState) => ObjectOutput;
export declare const processContent: (key: string, state: LocaleState) => ContentOutput;
export declare const processArguments: (...args: any[]) => ArgsOutput;
export declare const processInterpolations: (message: string, content: ContentOutput, args: ArgsOutput) => string;
export declare const processPluralization: (message: string, content: ContentOutput, args: ArgsOutput) => string;
export declare const processMessage: (message: string | KeyString) => string;
