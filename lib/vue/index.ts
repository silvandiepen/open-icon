/**
 * Vue integration for open-icon library
 * Provides tree-shakable icon management for Vue 3 applications
 */

export { IconRegistryPlugin, createIconRegistry } from './plugin';
export { useIconRegistry } from './composable';
export { ICON_REGISTRY_KEY } from './types';
export type {
  IconRegistry,
  IconRegistryOptions,
  IconRegistryPlugin as IconRegistryPluginType,
  IconResolver,
  UseIconRegistryReturn,
} from './types';