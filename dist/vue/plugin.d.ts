import type { App } from 'vue';
import type { IconRegistryOptions, IconRegistry } from './types';
/**
 * Creates an icon registry with optional aliases
 * @param icons - Base icons to register
 * @param aliases - Optional aliases that map to existing icon names
 * @returns Combined registry with icons and aliases
 */
export declare function createIconRegistry(icons: IconRegistry, aliases?: Record<string, string>): IconRegistry;
/**
 * Vue plugin for providing icons through dependency injection
 *
 * @example
 * ```typescript
 * import { createApp } from 'vue';
 * import { IconRegistryPlugin } from 'open-icon/vue';
 * import { IconAddM, IconSearchM } from 'open-icon/icons';
 *
 * const app = createApp(App);
 *
 * app.use(IconRegistryPlugin, {
 *   icons: {
 *     'add-m': IconAddM,
 *     'search-m': IconSearchM,
 *   },
 *   aliases: {
 *     'plus': 'add-m',
 *     'search': 'search-m',
 *   }
 * });
 * ```
 */
export declare const IconRegistryPlugin: {
    install(app: App, options: IconRegistryOptions): void;
};
