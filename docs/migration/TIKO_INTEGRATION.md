# Integration with Tiko Monorepo

Since you're using a monorepo with a shared UI library, here's the best approach to get tree-shaking working across all your apps:

## Option 1: Icon Registry Plugin (Recommended)

### 1. Create an Icon Registry Plugin in @tiko/ui

```typescript
// packages/ui/src/plugins/iconRegistry.ts
import { App } from 'vue';

export interface IconRegistryOptions {
  icons: Record<string, string>;
}

export const iconRegistry = {
  install(app: App, options: IconRegistryOptions) {
    app.provide('iconRegistry', options.icons);
  }
};

// Helper to create icon registry with aliases
export function createIconRegistry(
  icons: Record<string, string>,
  aliases?: Record<string, string>
): Record<string, string> {
  const registry = { ...icons };
  
  if (aliases) {
    Object.entries(aliases).forEach(([alias, target]) => {
      if (registry[target]) {
        registry[alias] = registry[target];
      }
    });
  }
  
  return registry;
}
```

### 2. Update TIcon.vue to use the registry

```vue
<!-- packages/ui/src/components/TIcon/TIcon.vue -->
<template>
  <div :class="classes" v-html="iconData" />
</template>

<script lang="ts" setup>
import { computed, inject, ref, watch } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'm',
  },
  animation: {
    type: Boolean,
  },
});

// Inject the icon registry
const iconRegistry = inject<Record<string, string>>('iconRegistry', {});
const iconData = ref('');

// Handle icon name aliases
const resolvedIconName = computed(() => {
  // Your existing alias logic
  const aliases: Record<string, string> = {
    'edit': 'edit-m',
    'plus': 'add-m',
    'check': 'check-m',
    'x': 'multiply-m',
    'play': 'playback-play',
    'pause': 'playback-pause',
    'arrow-left': 'arrow-left-m',
    'eye': 'view-m',
    'eye-off': 'view-off-m',
    'lock': 'lock-m',
    'lock-open': 'lock-open-m',
  };
  
  return aliases[props.name] || props.name;
});

watch(
  () => resolvedIconName.value,
  (name) => {
    iconData.value = iconRegistry[name] || '';
    if (!iconData.value && name) {
      console.warn(`Icon "${name}" not found. Register it in your app's main.ts`);
    }
  },
  { immediate: true }
);

const classes = computed(() => [
  'tiko-icon',
  `tiko-icon--${props.size}`,
  props.animation && 'tiko-icon--animated',
]);
</script>
```

### 3. Each app registers only its icons

```typescript
// apps/radio/src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { iconRegistry } from '@tiko/ui';

// Import ONLY the icons this app uses
import {
  IconPlaybackPlay,
  IconPlaybackPause,
  IconPlaybackNext,
  IconPlaybackPrevious,
  IconVolumeII,
  IconSettingsM,
  IconHeartM,
} from 'open-icon/icons';

const app = createApp(App);

app.use(iconRegistry, {
  icons: {
    'playback-play': IconPlaybackPlay,
    'playback-pause': IconPlaybackPause,
    'playback-next': IconPlaybackNext,
    'playback-previous': IconPlaybackPrevious,
    'volume-ii': IconVolumeII,
    'settings-m': IconSettingsM,
    'heart-m': IconHeartM,
    // Aliases
    'play': IconPlaybackPlay,
    'pause': IconPlaybackPause,
    'next': IconPlaybackNext,
    'previous': IconPlaybackPrevious,
    'volume': IconVolumeII,
    'settings': IconSettingsM,
    'heart': IconHeartM,
  }
});

app.mount('#app');
```

## Option 2: Auto-generated Icon Imports

### 1. Create a Vite plugin to auto-generate icon imports

```typescript
// packages/vite-plugin-icon-registry/src/index.ts
import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function iconRegistryPlugin(): Plugin {
  return {
    name: 'vite-plugin-icon-registry',
    
    buildStart() {
      // Scan the app for icon usage
      const usedIcons = scanForIcons(process.cwd());
      
      // Generate icon imports file
      const imports = usedIcons.map(icon => 
        `import { Icon${toPascalCase(icon)} } from 'open-icon/icons';`
      ).join('\n');
      
      const registry = usedIcons.map(icon =>
        `  '${icon}': Icon${toPascalCase(icon)},`
      ).join('\n');
      
      const content = `
// Auto-generated icon registry
${imports}

export const iconRegistry = {
${registry}
};
`;
      
      fs.writeFileSync(
        path.join(process.cwd(), 'src/generated/icons.ts'),
        content
      );
    }
  };
}
```

### 2. Use in each app's vite.config.ts

```typescript
// apps/radio/vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { iconRegistryPlugin } from '@tiko/vite-plugin-icon-registry';

export default defineConfig({
  plugins: [
    vue(),
    iconRegistryPlugin(),
  ],
});
```

## Option 3: Leverage your existing utils/icons.js

I noticed each app already has a `utils/icons.js` file. You could enhance this:

```javascript
// apps/radio/src/utils/icons.js

// Instead of just listing icon names
export const icons = [
  'playback-play',
  'playback-pause',
  'settings-m',
];

// Import and export the actual icons
import {
  IconPlaybackPlay,
  IconPlaybackPause,
  IconSettingsM,
} from 'open-icon/icons';

export const iconRegistry = {
  'playback-play': IconPlaybackPlay,
  'playback-pause': IconPlaybackPause,
  'settings-m': IconSettingsM,
};
```

Then import this in your app's main.ts and provide it.

## Benefits of this approach:

1. **True tree-shaking**: Each app only bundles its own icons
2. **No cross-app pollution**: Radio app doesn't get Todo app's icons
3. **Type safety**: TypeScript knows exactly which icons are available
4. **Easy to maintain**: Clear list of icons per app
5. **Works with your existing architecture**: No major changes needed

## Migration steps:

1. Update open-icon to the new version with tree-shakable exports
2. Update TIcon.vue in @tiko/ui to use the registry pattern
3. Add icon registry plugin to @tiko/ui
4. Update each app's main.ts to register its icons
5. Remove the dynamic import from TIcon.vue

This way, your shared UI library stays generic, but each app controls exactly which icons it includes in its bundle!