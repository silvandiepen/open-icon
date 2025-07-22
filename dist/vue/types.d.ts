import type { App, InjectionKey } from 'vue';
/**
 * Icon registry that maps icon names to their SVG content
 */
export type IconRegistry = Record<string, string>;
/**
 * Options for the icon registry plugin
 */
export interface IconRegistryOptions {
    icons: IconRegistry;
    aliases?: Record<string, string>;
}
/**
 * Icon registry injection key for Vue's provide/inject
 */
export declare const ICON_REGISTRY_KEY: InjectionKey<IconRegistry>;
/**
 * Icon resolver function type
 */
export type IconResolver = (name: string) => string | undefined;
/**
 * Composable return type
 */
export interface UseIconRegistryReturn {
    registry: IconRegistry;
    getIcon: IconResolver;
    hasIcon: (name: string) => boolean;
    registerIcon: (name: string, content: string) => void;
    registerIcons: (icons: IconRegistry) => void;
    removeIcon: (name: string) => void;
    clearRegistry: () => void;
}
/**
 * Plugin interface
 */
export interface IconRegistryPlugin {
    install(app: App, options: IconRegistryOptions): void;
}
