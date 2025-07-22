# Vue 3 Integration Guide for open-icon

This guide explains how to use the tree-shakable icon system with Vue 3 applications, especially in monorepo setups where multiple apps share a common UI library.

## Table of Contents
- [Installation](#installation)
- [Basic Setup](#basic-setup)
- [Monorepo Setup](#monorepo-setup)
- [Icon Component Implementation](#icon-component-implementation)
- [Advanced Usage](#advanced-usage)
- [Migration Guide](#migration-guide)
- [TypeScript Support](#typescript-support)
- [Troubleshooting](#troubleshooting)

## Installation

```bash
npm install open-icon
# or
pnpm add open-icon
# or
yarn add open-icon
```

## Basic Setup

### 1. Import and Register Icons in Your App

```typescript
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { IconRegistryPlugin } from 'open-icon/vue';

// Import ONLY the icons your app uses
import {
  IconAddM,
  IconSearchM,
  IconHeartM,
  IconSettingsM
} from 'open-icon/icons';

const app = createApp(App);

// Register the icons with optional aliases
app.use(IconRegistryPlugin, {
  icons: {
    'add-m': IconAddM,
    'search-m': IconSearchM,
    'heart-m': IconHeartM,
    'settings-m': IconSettingsM,
  },
  aliases: {
    'plus': 'add-m',
    'search': 'search-m',
    'heart': 'heart-m',
    'settings': 'settings-m',
  }
});

app.mount('#app');
```

### 2. Create an Icon Component

```vue
<!-- Icon.vue -->
<template>
  <div 
    :class="['icon', `icon--${size}`, { 'icon--animated': animated }]"
    v-html="iconContent"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useIconRegistry } from 'open-icon/vue';

interface Props {
  name: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  animated?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'm',
  animated: false,
});

const { getIcon } = useIconRegistry();

const iconContent = computed(() => {
  return getIcon(props.name) || '';
});
</script>

<style scoped>
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
}

.icon--xs { font-size: 0.75rem; }
.icon--s { font-size: 0.875rem; }
.icon--m { font-size: 1rem; }
.icon--l { font-size: 1.25rem; }
.icon--xl { font-size: 1.5rem; }

.icon--animated {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Ensure SVG fills the container */
.icon :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>
```

## Monorepo Setup

For monorepos with shared UI libraries (like the Tiko setup):

### 1. Shared UI Library Component

```vue
<!-- packages/ui/components/TIcon.vue -->
<template>
  <div 
    :class="classes"
    v-html="iconContent"
    v-if="iconContent"
  />
  <div v-else-if="showPlaceholder" :class="classes">
    <!-- Placeholder when icon is not found -->
    <span>?</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useIconRegistry } from 'open-icon/vue';

interface Props {
  name: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  color?: string;
  animated?: boolean;
  showPlaceholder?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'm',
  animated: false,
  showPlaceholder: true,
});

const { getIcon, hasIcon } = useIconRegistry();

const iconContent = computed(() => {
  if (!props.name) return '';
  
  // You can add your own alias resolution here
  const resolvedName = resolveIconAlias(props.name);
  return getIcon(resolvedName);
});

const classes = computed(() => [
  'tiko-icon',
  `tiko-icon--${props.size}`,
  {
    'tiko-icon--animated': props.animated,
    'tiko-icon--placeholder': !hasIcon(props.name) && props.showPlaceholder,
  }
]);

// Helper function for common aliases
function resolveIconAlias(name: string): string {
  const aliases: Record<string, string> = {
    'edit': 'edit-m',
    'plus': 'add-m',
    'check': 'check-m',
    'x': 'multiply-m',
    'close': 'multiply-m',
    // Add more aliases as needed
  };
  
  return aliases[name] || name;
}
</script>

<style scoped>
.tiko-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  color: currentColor;
}

/* Size variants */
.tiko-icon--xs { font-size: 0.75rem; }
.tiko-icon--s { font-size: 0.875rem; }
.tiko-icon--m { font-size: 1rem; }
.tiko-icon--l { font-size: 1.25rem; }
.tiko-icon--xl { font-size: 1.5rem; }

/* Placeholder style */
.tiko-icon--placeholder {
  border: 1px dashed currentColor;
  border-radius: 4px;
  opacity: 0.3;
}

/* Ensure SVG styling */
.tiko-icon :deep(svg) {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.tiko-icon :deep(path),
.tiko-icon :deep(circle),
.tiko-icon :deep(rect) {
  stroke: currentColor;
  fill: currentColor;
}
</style>
```

### 2. App-Specific Icon Registration

Each app in your monorepo registers only its required icons:

```typescript
// apps/radio/src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { IconRegistryPlugin } from 'open-icon/vue';

// Radio app only needs these icons
import {
  IconPlaybackPlay,
  IconPlaybackPause,
  IconPlaybackNext,
  IconPlaybackPrevious,
  IconVolumeII,
  IconHeartM,
  IconSettingsM,
} from 'open-icon/icons';

const app = createApp(App);

app.use(IconRegistryPlugin, {
  icons: {
    'playback-play': IconPlaybackPlay,
    'playback-pause': IconPlaybackPause,
    'playback-next': IconPlaybackNext,
    'playback-previous': IconPlaybackPrevious,
    'volume-ii': IconVolumeII,
    'heart-m': IconHeartM,
    'settings-m': IconSettingsM,
  },
  aliases: {
    'play': 'playback-play',
    'pause': 'playback-pause',
    'next': 'playback-next',
    'previous': 'playback-previous',
    'volume': 'volume-ii',
    'heart': 'heart-m',
    'settings': 'settings-m',
  }
});

app.mount('#app');
```

```typescript
// apps/todo/src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { IconRegistryPlugin } from 'open-icon/vue';

// Todo app needs different icons
import {
  IconAddM,
  IconCheckM,
  IconMultiplyM,
  IconEditM,
  IconTrashM,
} from 'open-icon/icons';

const app = createApp(App);

app.use(IconRegistryPlugin, {
  icons: {
    'add-m': IconAddM,
    'check-m': IconCheckM,
    'multiply-m': IconMultiplyM,
    'edit-m': IconEditM,
    'trash-m': IconTrashM,
  },
  aliases: {
    'plus': 'add-m',
    'done': 'check-m',
    'close': 'multiply-m',
    'x': 'multiply-m',
    'edit': 'edit-m',
    'delete': 'trash-m',
  }
});

app.mount('#app');
```

## Advanced Usage

### Using the Composable Directly

```vue
<script setup>
import { onMounted } from 'vue';
import { useIconRegistry } from 'open-icon/vue';
import { IconStarM } from 'open-icon/icons';

const { registerIcon, hasIcon, getIcon } = useIconRegistry();

// Dynamically register an icon
onMounted(() => {
  if (!hasIcon('star-m')) {
    registerIcon('star-m', IconStarM);
  }
});

// Get icon content programmatically
const starIcon = getIcon('star-m');
</script>
```

### Creating Icon Sets

Organize commonly used icons into sets:

```typescript
// shared/iconSets.ts
import {
  IconAddM,
  IconEditM,
  IconTrashM,
  IconSaveM,
  IconCancelM,
} from 'open-icon/icons';

export const crudIcons = {
  'add-m': IconAddM,
  'edit-m': IconEditM,
  'trash-m': IconTrashM,
  'save-m': IconSaveM,
  'cancel-m': IconCancelM,
};

export const crudAliases = {
  'create': 'add-m',
  'update': 'edit-m',
  'delete': 'trash-m',
  'save': 'save-m',
  'cancel': 'cancel-m',
};

// In your app
import { crudIcons, crudAliases } from '@/shared/iconSets';

app.use(IconRegistryPlugin, {
  icons: {
    ...crudIcons,
    // Add app-specific icons
  },
  aliases: {
    ...crudAliases,
    // Add app-specific aliases
  }
});
```

### Lazy Loading Icons

For icons that are rarely used:

```vue
<script setup>
import { ref, onMounted } from 'vue';
import { useIconRegistry } from 'open-icon/vue';

const { registerIcon, hasIcon } = useIconRegistry();
const isLoading = ref(false);

async function loadRareIcon() {
  if (!hasIcon('rare-icon')) {
    isLoading.value = true;
    const { IconRareIcon } = await import('open-icon/icons');
    registerIcon('rare-icon', IconRareIcon);
    isLoading.value = false;
  }
}
</script>
```

## Migration Guide

### From Dynamic Imports

If you're currently using dynamic imports:

```typescript
// Old approach
const getIcon = async (icon: Icons): Promise<string> => {
  switch(icon) {
    case Icons.ADD_M:
      return (await import("open-icon/icons/add-m")).IconAddM;
    // ... hundreds more cases
  }
}
```

Migrate to:

```typescript
// New approach - in main.ts
import { IconAddM } from 'open-icon/icons';

app.use(IconRegistryPlugin, {
  icons: {
    'add-m': IconAddM,
  }
});

// In component - no async needed
const { getIcon } = useIconRegistry();
const icon = getIcon('add-m'); // Synchronous!
```

### Bundle Size Comparison

- **Old approach**: ~264KB (all icons included)
- **New approach**: ~1-2KB per icon (only what you use)

## TypeScript Support

### Creating Type-Safe Icon Names

```typescript
// types/icons.ts
import { IconAddM, IconSearchM } from 'open-icon/icons';

// Define your app's available icons
export const appIcons = {
  'add-m': IconAddM,
  'search-m': IconSearchM,
} as const;

export type AppIconName = keyof typeof appIcons;

// In your component
interface Props {
  name: AppIconName;
}
```

### Global Properties Type

```typescript
// env.d.ts
import type { IconRegistry } from 'open-icon/vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $icons: IconRegistry;
  }
}
```

## Troubleshooting

### Icon Not Showing

1. Check if the icon is registered:
```typescript
const { hasIcon } = useIconRegistry();
console.log('Icon registered:', hasIcon('icon-name'));
```

2. Verify the icon name matches exactly:
```typescript
// These are different:
'add-m' vs 'add-M' vs 'ADD_M'
```

3. Check console for warnings:
```
[open-icon] Icon "unknown-icon" not found in registry
```

### Build Errors

If you get build errors about missing icons:
```typescript
// Make sure you're importing from the right path
import { IconAddM } from 'open-icon/icons'; // ✓
import { IconAddM } from 'open-icon'; // ✗
```

### SSR Considerations

The icon registry works with SSR, but ensure icons are registered before rendering:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@/modules/icons'],
});

// modules/icons.ts
import { IconAddM } from 'open-icon/icons';

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('app:resolve', (app) => {
      app.plugins.push({
        src: '@/plugins/icons.client.ts',
        mode: 'client',
      });
    });
  },
});
```

## Best Practices

1. **Organize icons by feature**: Group related icons together
2. **Use consistent naming**: Stick to either kebab-case or snake_case
3. **Document your icons**: Maintain a list of available icons per app
4. **Audit regularly**: Remove unused icon imports
5. **Use TypeScript**: Define types for your available icons

## Support

For issues or questions:
- GitHub Issues: [open-icon/issues](https://github.com/silvandiepen/open-icon/issues)
- Documentation: [open-icon.dev](https://open-icon.dev)