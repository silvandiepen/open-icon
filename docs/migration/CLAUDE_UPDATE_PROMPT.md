# Claude Instructions: Update Tiko-Mono to Use Tree-Shakable Icons

## Context
The `open-icon` package has been updated to version 1.1.0 with tree-shakable icon support. Currently, tiko-mono imports ALL 900+ icons (899KB) even though each app only uses ~10-20 icons. This update will reduce icon bundle size by ~95%.

## Your Task
Update the tiko-mono repository to use the new tree-shakable icon system from open-icon@1.1.0.

## Step 1: Update open-icon dependency
```bash
pnpm update open-icon@1.1.0 -r
```

## Step 2: Update TIcon Component
Update `/packages/ui/src/components/TIcon/TIcon.vue`:

```vue
<template>
	<!-- Keep the template as is -->
	<div
		:class="[bemm(), bemm('', [props.name, props.animation ? 'animated' : ''])]"
		v-html="iconContent"
	/>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { computed, type PropType } from 'vue';
import { useIconRegistry } from 'open-icon/vue'; // CHANGE: New import

const bemm = useBemm('icon');

const props = defineProps({
	name: {
		type: String, // CHANGE: Remove Icons type
		default: '',
	},
	animation: {
		type: Boolean,
	},
});

// NEW: Get icon from registry
const { getIcon } = useIconRegistry();

const iconName = computed(() => {
	// Keep existing switch statement for aliases
	switch(props.name) {
		case 'edit': return 'edit-m';
		case 'plus': return 'add-m';
		case 'check': return 'check-m';
		case 'x': return 'multiply-m';
		case 'play': return 'playback-play';
		case 'pause': return 'playback-pause';
		// ... keep all existing cases
		default: return props.name;
	}
});

// CHANGE: Remove async loading, use computed instead
const iconContent = computed(() => {
	return getIcon(iconName.value) || '';
});

// REMOVE: Delete the old loadIcon function and watch
</script>
```

## Step 3: Create Icon Registry for Each App

### For Radio App
Create or update `/apps/radio/src/plugins/icons.ts`:

```typescript
import type { App } from 'vue';
import { IconRegistryPlugin } from 'open-icon/vue';
import {
  IconPlaybackPlay,
  IconPlaybackPause,
  IconPlaybackNext,
  IconPlaybackPrevious,
  IconVolumeIi,
  IconHeartM,
  IconSettingsM,
  IconChevronLeft,
  IconChevronRight,
  IconSearchM,
  IconAddM,
  IconMultiplyM,
} from 'open-icon/icons';

export function setupIcons(app: App) {
  app.use(IconRegistryPlugin, {
    icons: {
      'playback-play': IconPlaybackPlay,
      'playback-pause': IconPlaybackPause,
      'playback-next': IconPlaybackNext,
      'playback-previous': IconPlaybackPrevious,
      'volume-ii': IconVolumeIi,
      'heart-m': IconHeartM,
      'settings-m': IconSettingsM,
      'chevron-left': IconChevronLeft,
      'chevron-right': IconChevronRight,
      'search-m': IconSearchM,
      'add-m': IconAddM,
      'multiply-m': IconMultiplyM,
    }
  });
}
```

Update `/apps/radio/src/main.ts`:
```typescript
import { createApp } from 'vue';
import App from './App.vue';
import { setupIcons } from './plugins/icons';

const app = createApp(App);

// Register icons
setupIcons(app);

// ... rest of your app setup
app.mount('#app');
```

### For Todo App
Follow the same pattern but import only the icons that the todo app uses:
- IconAddM
- IconCheckM
- IconMultiplyM
- IconEditM
- IconTrashM
- etc.

### For Dashboard App
Import only dashboard-specific icons:
- IconChartLineM
- IconSettingsM
- IconUsersM
- etc.

## Step 4: Find All Icon Usage
To find which icons each app uses:

```bash
# In each app directory
grep -r "icon.*name" src/ --include="*.vue" | grep -o '"[^"]*"' | sort | uniq
```

Or search for `<TIcon` usage in each app.

## Step 5: Handle Dynamic Icons (if any)
If any app loads icons dynamically based on API data, you have two options:

1. **Register all possible icons** for that feature
2. **Use lazy loading** for rarely used icons:

```typescript
// For dynamic icons that are rarely used
import { useIconRegistry } from 'open-icon/vue';

const { registerIcon, hasIcon } = useIconRegistry();

async function loadRareIcon(iconName: string) {
  if (!hasIcon(iconName)) {
    const { [`Icon${pascalCase(iconName)}`]: icon } = await import('open-icon/icons');
    registerIcon(iconName, icon);
  }
}
```

## Expected Results

### Before:
- UI package: 899KB (all icons)
- Radio app: Includes all 900+ icons
- Each app: Same massive bundle

### After:
- UI package: ~50KB (no icons)
- Radio app: +~25KB (only used icons)
- Each app: Only includes its specific icons

### Bundle Size Reduction:
- **Per app**: ~95% reduction in icon size
- **Overall**: Several MB saved across all apps

## Testing

1. Build each app and check bundle sizes
2. Verify all icons still display correctly
3. Check browser console for any missing icon warnings
4. Run existing tests

## Common Issues

1. **"Icon not found" warnings**: Add the missing icon to that app's icon registry
2. **TypeScript errors**: Remove `Icons` type imports, use plain strings
3. **Build errors**: Make sure to import from 'open-icon/icons' not 'open-icon'

## Questions?
The full documentation is available in the open-icon package at:
`node_modules/open-icon/docs/VUE_INTEGRATION.md`