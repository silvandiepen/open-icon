# Open Icon

A comprehensive, tree-shakable icon library with Vue 3 support.

## Features

- 🌳 **Tree-shakable**: Only bundle the icons you use
- 🎯 **TypeScript Support**: Full type safety
- 🚀 **Vue 3 Integration**: First-class Vue support with composables and plugins
- 📦 **Multiple Formats**: ESM, CommonJS, and IIFE builds
- 🎨 **Customizable**: CSS variables for colors and sizes
- 📱 **Scalable**: Vector-based SVG icons

## Installation

```bash
npm install open-icon
# or
pnpm add open-icon
# or
yarn add open-icon
```

## Quick Start

### Basic Usage (Legacy)

```typescript
import { getIcon, Icons } from 'open-icon';

// This imports ALL icons (not recommended)
const iconSvg = await getIcon(Icons.ADD_M);
```

### Tree-Shakable Usage (Recommended)

```typescript
// Import only what you need
import { IconAddM, IconSearchM } from 'open-icon/icons';

// Use directly
const addIcon = IconAddM;
```

### Vue 3 Integration

```typescript
// main.ts
import { createApp } from 'vue';
import { IconRegistryPlugin } from 'open-icon/vue';
import { IconAddM, IconSearchM, IconHeartM } from 'open-icon/icons';

const app = createApp(App);

app.use(IconRegistryPlugin, {
  icons: {
    'add-m': IconAddM,
    'search-m': IconSearchM,
    'heart-m': IconHeartM,
  },
  aliases: {
    'plus': 'add-m',
    'search': 'search-m',
    'heart': 'heart-m',
  }
});
```

```vue
<!-- Icon.vue -->
<template>
  <div class="icon" v-html="iconContent" />
</template>

<script setup>
import { computed } from 'vue';
import { useIconRegistry } from 'open-icon/vue';

const props = defineProps({
  name: String,
});

const { getIcon } = useIconRegistry();
const iconContent = computed(() => getIcon(props.name));
</script>
```

## Documentation

- [Vue Integration Guide](./docs/VUE_INTEGRATION.md) - Comprehensive Vue 3 setup and usage
- [Tree-Shaking Guide](./TREE_SHAKING.md) - How to optimize bundle size
- [Monorepo Integration](./TIKO_INTEGRATION.md) - Using with shared UI libraries

## Available Icons

The library includes 900+ icons. View all available icons:

```typescript
import { Icons } from 'open-icon';
console.log(Object.values(Icons));
```

## Styling

Icons use `currentColor` by default and scale with font-size:

```css
.icon {
  color: blue;
  font-size: 24px;
}
```

### CSS Variables

```css
:root {
  --icon-stroke-width: 5;
  --icon-stroke-color: currentColor;
  --icon-fill: transparent;
}
```

## Bundle Size

- Legacy approach (`getIcon`): ~264KB (includes all icons)
- Tree-shakable approach: ~1-2KB per icon

## Contributing

Contributions are welcome! Please read our contributing guidelines.

## License

MIT © Sil van Diepen