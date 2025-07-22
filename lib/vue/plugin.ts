import type { App } from 'vue';
import type { IconRegistryOptions, IconRegistry } from './types';
import { ICON_REGISTRY_KEY } from './types';

/**
 * Creates an icon registry with optional aliases
 * @param icons - Base icons to register
 * @param aliases - Optional aliases that map to existing icon names
 * @returns Combined registry with icons and aliases
 */
export function createIconRegistry(
  icons: IconRegistry,
  aliases?: Record<string, string>
): IconRegistry {
  const registry: IconRegistry = { ...icons };

  if (aliases) {
    Object.entries(aliases).forEach(([alias, target]) => {
      // Only add alias if the target icon exists
      if (registry[target]) {
        registry[alias] = registry[target];
      } else if (icons[target]) {
        registry[alias] = icons[target];
      } else {
        console.warn(`[open-icon] Alias "${alias}" points to non-existent icon "${target}"`);
      }
    });
  }

  return registry;
}

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
export const IconRegistryPlugin = {
  install(app: App, options: IconRegistryOptions) {
    const registry = createIconRegistry(options.icons, options.aliases);
    
    // Provide the registry to all child components
    app.provide(ICON_REGISTRY_KEY, registry);

    // Also add as global property for easier access
    app.config.globalProperties.$icons = registry;
  }
};