# Tree-Shakable Icons Import

The open-icon package now supports tree-shakable imports to reduce bundle size. Instead of importing the entire icon library, you can import only the icons you need.

## Usage

### Old way (still supported, but loads all icons):
```typescript
import { getIcon, Icons } from 'open-icon';

// This will include ALL icon definitions in your bundle
const iconData = await getIcon(Icons.ADD_M);
```

### New tree-shakable way:
```typescript
// Import only the icons you need
import { IconAddM, IconSearchM, IconHeartM } from 'open-icon/icons';

// Use the icon directly
const iconData = IconAddM;
```

## Vue Component Example

Update your Vue component to use direct imports:

```vue
<template>
    <div :class="[bemm(), bemm('', [props.name, props.animation ? 'animated' : ''])]" v-html="iconData" />
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { ref, watch, computed } from 'vue';
import type { Icons } from 'open-icon';

// Import only the icons you need
import {
    IconEditM,
    IconAddM,
    IconCheckM,
    IconMultiplyM,
    IconPlaybackPlay,
    IconPlaybackPause,
    IconArrowLeftM,
    IconViewM,
    IconViewOffM,
    IconLockM,
    IconLockOpenM
} from 'open-icon/icons';

const bemm = useBemm('icon');

const props = defineProps({
    name: {
        type: String as PropType<Icons>,
        default: '',
    },
    animation: {
        type: Boolean,
    },
});

const iconData = ref('');

// Map of icon names to their imported components
const iconMap = {
    'edit': IconEditM,
    'edit-m': IconEditM,
    'plus': IconAddM,
    'add-m': IconAddM,
    'check': IconCheckM,
    'check-m': IconCheckM,
    'x': IconMultiplyM,
    'multiply-m': IconMultiplyM,
    'play': IconPlaybackPlay,
    'playback-play': IconPlaybackPlay,
    'pause': IconPlaybackPause,
    'playback-pause': IconPlaybackPause,
    'arrow-left': IconArrowLeftM,
    'arrow-left-m': IconArrowLeftM,
    'eye': IconViewM,
    'view-m': IconViewM,
    'eye-off': IconViewOffM,
    'view-off-m': IconViewOffM,
    'lock': IconLockM,
    'lock-m': IconLockM,
    'lock-open': IconLockOpenM,
    'lock-open-m': IconLockOpenM,
};

watch(
    () => props.name,
    (newName) => {
        iconData.value = iconMap[newName] || '';
    },
    {
        immediate: true,
    }
);
</script>
```

## Benefits

1. **Smaller Bundle Size**: Only the icons you import are included in your bundle
2. **Better Tree-Shaking**: Modern bundlers can eliminate unused icons
3. **TypeScript Support**: Full type safety for imported icons
4. **No Breaking Changes**: The old `getIcon` method still works

## Migration Guide

1. Identify all icons used in your project
2. Replace `getIcon` calls with direct imports
3. Remove async/await since icons are now imported synchronously
4. Update your build process if needed

The old API remains fully supported for backward compatibility.