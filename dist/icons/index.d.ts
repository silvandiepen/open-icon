import { Icons } from "./types";
/**
 * Retrieves the specified icon.
 *
 * @param {Icons} icon - The icon to retrieve.
 * @returns {Promise<IconData>} - A promise that resolves to the icon data.
 */
export declare const getIcon: (icon: Icons) => Promise<string>;
/**
 * Checks if the given icon exists in the Icons enum.
 *
 * @param {string} icon - The icon name to check.
 * @returns {boolean} - True if the icon exists, false otherwise.
 */
export declare const iconExists: (icon: string) => boolean;
/**
 * Searches for icons based on a search term and an optional field to search in.
 *
 * @param {string} term - The search term to look for.
 * @param {'name' | 'category' | 'tag' | 'description' | 'title' | undefined} [searchIn] - The specific field to search in. If not provided, all fields will be searched.
 * @returns {Array<{id: string, name: string, title: string, category: string[], tag: string[], description: string}> | undefined} - An array of matching icons or undefined if no matches are found.
 */
export declare const searchIcon: (term: string, searchIn?: "name" | "category" | "tag" | "description" | "title" | undefined) => {
    id: string;
    name: string;
    title: string;
    category: string[];
    tag: string[];
    description: string;
}[] | undefined;
