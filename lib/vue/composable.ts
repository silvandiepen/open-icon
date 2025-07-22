import { inject, reactive, readonly } from 'vue';
import type { IconRegistry, UseIconRegistryReturn } from './types';
import { ICON_REGISTRY_KEY } from './types';

/**
 * Vue composable for managing icons in your application
 * 
 * @example
 * ```vue
 * <script setup>
 * import { useIconRegistry } from 'open-icon/vue';
 * 
 * const { getIcon, hasIcon } = useIconRegistry();
 * 
 * const iconContent = getIcon('add-m');
 * const iconExists = hasIcon('search-m');
 * </script>
 * ```
 */
export function useIconRegistry(): UseIconRegistryReturn {
  // Try to inject the registry, fall back to empty object
  const injectedRegistry = inject<IconRegistry>(ICON_REGISTRY_KEY, {});
  
  // Create a reactive registry that can be modified
  const registry = reactive<IconRegistry>({ ...injectedRegistry });

  /**
   * Get an icon by name
   * @param name - The icon name to retrieve
   * @returns The SVG content or undefined if not found
   */
  const getIcon = (name: string): string | undefined => {
    if (!name) return undefined;
    
    const icon = registry[name];
    
    if (!icon && process.env.NODE_ENV !== 'production') {
      console.warn(`[open-icon] Icon "${name}" not found in registry`);
    }
    
    return icon;
  };

  /**
   * Check if an icon exists in the registry
   * @param name - The icon name to check
   * @returns True if the icon exists
   */
  const hasIcon = (name: string): boolean => {
    return name in registry;
  };

  /**
   * Register a single icon
   * @param name - The icon name
   * @param content - The SVG content
   */
  const registerIcon = (name: string, content: string): void => {
    registry[name] = content;
  };

  /**
   * Register multiple icons at once
   * @param icons - Object mapping icon names to SVG content
   */
  const registerIcons = (icons: IconRegistry): void => {
    Object.assign(registry, icons);
  };

  /**
   * Remove an icon from the registry
   * @param name - The icon name to remove
   */
  const removeIcon = (name: string): void => {
    delete registry[name];
  };

  /**
   * Clear all icons from the registry
   */
  const clearRegistry = (): void => {
    Object.keys(registry).forEach(key => delete registry[key]);
  };

  return {
    registry: readonly(registry),
    getIcon,
    hasIcon,
    registerIcon,
    registerIcons,
    removeIcon,
    clearRegistry,
  };
}