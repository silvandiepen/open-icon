// lib/vue/types.ts
var ICON_REGISTRY_KEY = Symbol("icon-registry");

// lib/vue/plugin.ts
function createIconRegistry(icons, aliases) {
  const registry = { ...icons };
  if (aliases) {
    Object.entries(aliases).forEach(([alias, target]) => {
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
var IconRegistryPlugin = {
  install(app, options) {
    const registry = createIconRegistry(options.icons, options.aliases);
    app.provide(ICON_REGISTRY_KEY, registry);
    app.config.globalProperties.$icons = registry;
  }
};

// lib/vue/composable.ts
import { inject, reactive, readonly } from "vue";
function useIconRegistry() {
  const injectedRegistry = inject(ICON_REGISTRY_KEY, {});
  const registry = reactive({ ...injectedRegistry });
  const getIcon = (name) => {
    if (!name) return void 0;
    const icon = registry[name];
    if (!icon && process.env.NODE_ENV !== "production") {
      console.warn(`[open-icon] Icon "${name}" not found in registry`);
    }
    return icon;
  };
  const hasIcon = (name) => {
    return name in registry;
  };
  const registerIcon = (name, content) => {
    registry[name] = content;
  };
  const registerIcons = (icons) => {
    Object.assign(registry, icons);
  };
  const removeIcon = (name) => {
    delete registry[name];
  };
  const clearRegistry = () => {
    Object.keys(registry).forEach((key) => delete registry[key]);
  };
  return {
    registry: readonly(registry),
    getIcon,
    hasIcon,
    registerIcon,
    registerIcons,
    removeIcon,
    clearRegistry
  };
}
export {
  ICON_REGISTRY_KEY,
  IconRegistryPlugin,
  createIconRegistry,
  useIconRegistry
};
