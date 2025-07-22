# Open Icon Tree-Shaking Test Results

## Current Implementation (Non-Tree-Shakable)

### UI Package Build Results:
- **Bundle Size**: 899KB (includes ALL open-icon icons)
- **Gzipped**: 211KB

### Radio App Build Results:
- **Total JS**: Multiple chunks totaling several MB
- **Open Icon Impact**: All 900+ icons included even though only ~10 are used

## Problem Analysis

The current TIcon component in tiko-mono uses:
```typescript
import { getIcon, type Icons } from 'open-icon';

// This imports the entire icon library!
const iconLoadData = await getIcon(iconName);
```

This forces webpack/vite to include ALL icons in the bundle because `getIcon` contains a massive switch statement with all icon imports.

## Solution: Tree-Shakable Approach

### For the other Claude instance working on tiko-mono:

1. **Install the updated open-icon package** (after publishing v1.0.7+)

2. **Update each app's main.ts**:
```typescript
// apps/radio/src/main.ts
import { createApp } from 'vue';
import { IconRegistryPlugin } from 'open-icon/vue';
import {
  IconPlaybackPlay,
  IconPlaybackPause,
  IconPlaybackNext,
  IconPlaybackPrevious,
  IconVolumeIi,
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
    'volume-ii': IconVolumeIi,
    'heart-m': IconHeartM,
    'settings-m': IconSettingsM,
  }
});
```

3. **Update TIcon component**:
```vue
<script setup>
import { useIconRegistry } from 'open-icon/vue';

const { getIcon } = useIconRegistry();
// Remove the async getIcon import!

const iconData = computed(() => getIcon(iconName.value) || '');
// Now it's synchronous and only includes registered icons
</script>
```

## Expected Results After Implementation

- **Bundle Size Reduction**: From 899KB to ~100KB for UI package
- **Only Used Icons**: Each app only bundles the icons it registers
- **Tree-Shaking**: Webpack/Vite can eliminate unused icons
- **Performance**: Faster initial load, smaller bundles

## Documentation

Full implementation guide available at:
`/docs/VUE_INTEGRATION.md` in the open-icon package