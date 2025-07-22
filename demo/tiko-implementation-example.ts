// DEMONSTRATION: How to implement tree-shakable icons in tiko-mono
// This shows what the other Claude instance should do

// ============================================
// 1. UPDATE TIcon.vue Component
// ============================================
// File: packages/ui/src/components/TIcon/TIcon.vue

/*
<template>
  <div
    :class="[bemm(), bemm('', [props.name, props.animation ? 'animated' : ''])]"
    v-html="iconContent"
  />
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { computed, type PropType } from 'vue';
import { useIconRegistry } from 'open-icon/vue'; // NEW: Use Vue integration

const bemm = useBemm('icon');

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  animation: {
    type: Boolean,
  },
});

// NEW: Get icon from registry (synchronous, no async needed!)
const { getIcon } = useIconRegistry();

const iconName = computed(() => {
  // Keep existing aliases
  switch(props.name) {
    case 'edit': return 'edit-m';
    case 'plus': return 'add-m';
    case 'check': return 'check-m';
    case 'x': return 'multiply-m';
    case 'play': return 'playback-play';
    case 'pause': return 'playback-pause';
    // ... etc
    default: return props.name;
  }
});

// NEW: No async loading needed!
const iconContent = computed(() => {
  return getIcon(iconName.value) || '';
});
</script>
*/

// ============================================
// 2. UPDATE Radio App main.ts
// ============================================
// File: apps/radio/src/main.ts

import { createApp } from 'vue';
import App from './App.vue';
import { IconRegistryPlugin } from 'open-icon/vue';

// Import ONLY the icons this app uses
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
} from 'open-icon/icons';

const app = createApp(App);

// Register only the icons this app needs
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

// ============================================
// 3. Bundle Size Comparison
// ============================================

// BEFORE (Current Implementation):
// - UI Package: 899KB (includes ALL 900+ icons)
// - Radio App: Inherits all icons from UI package
// - Tree-shaking: IMPOSSIBLE because getIcon imports everything

// AFTER (With Tree-Shakable Implementation):
// - UI Package: ~50KB (no icons, just component logic)
// - Radio App: ~20KB of icons (only 9 icons × ~2KB each)
// - Tree-shaking: WORKS! Unused icons are eliminated

// ============================================
// 4. Key Benefits
// ============================================

// 1. Each app only bundles the icons it uses
// 2. No async loading - icons are available immediately
// 3. TypeScript support with autocomplete
// 4. Easy to add/remove icons per app
// 5. ~95% reduction in icon bundle size