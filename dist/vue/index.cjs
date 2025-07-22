var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/vue/index.ts
var vue_exports = {};
__export(vue_exports, {
  ICON_REGISTRY_KEY: () => ICON_REGISTRY_KEY,
  IconRegistryPlugin: () => IconRegistryPlugin,
  createIconRegistry: () => createIconRegistry,
  useIconRegistry: () => useIconRegistry
});
module.exports = __toCommonJS(vue_exports);

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
var import_vue = require("vue");
function useIconRegistry() {
  const injectedRegistry = (0, import_vue.inject)(ICON_REGISTRY_KEY, {});
  const registry = (0, import_vue.reactive)({ ...injectedRegistry });
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
    registry: (0, import_vue.readonly)(registry),
    getIcon,
    hasIcon,
    registerIcon,
    registerIcons,
    removeIcon,
    clearRegistry
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ICON_REGISTRY_KEY,
  IconRegistryPlugin,
  createIconRegistry,
  useIconRegistry
});
