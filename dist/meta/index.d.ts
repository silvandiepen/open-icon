import { Icons } from "../icons/types";
export * from "./categories";
export * from "./tags";
export interface IconMeta {
    description: string;
    category: string[];
    tag: string[];
    title: string;
}
export declare const getMeta: (icon: Icons) => Promise<IconMeta | null>;
