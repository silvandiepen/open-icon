import type { UseIconRegistryReturn } from './types';
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
export declare function useIconRegistry(): UseIconRegistryReturn;
