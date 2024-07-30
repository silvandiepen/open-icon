import { Icons } from "../icons/types";
export declare const getMeta: (icon: Icons) => Promise<{
    description: string;
    category: string[];
    tag: string[];
    title: string;
}>;
