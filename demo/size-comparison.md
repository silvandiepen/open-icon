# Icon Bundle Size Analysis

## Current State (Non-Tree-Shakable)

```
tiko-mono/
├── packages/ui/
│   └── TIcon.vue uses: import { getIcon } from 'open-icon'
│   └── Build output: 899KB (contains ALL 900+ icons)
│
└── apps/radio/
    └── Imports @tiko/ui
    └── Bundle includes: ALL 900+ icons from UI package
    └── Actual usage: Only ~10 icons
    └── Waste: ~890 unused icons in bundle
```

## Problem Visualization

```javascript
// Current getIcon function in open-icon/dist/index.js
export async function getIcon(icon) {
  switch(icon) {
    case 'ADD_M':
      return (await import('./add-m-JPLXKNNV.js')).IconAddM;
    case 'SEARCH_M':
      return (await import('./search-m-YFGGQ7I3.js')).IconSearchM;
    // ... 900+ more cases
  }
}
// Webpack/Vite MUST include ALL these imports!
```

## Solution: Tree-Shakable Approach

```javascript
// New approach - apps/radio/src/main.ts
import { IconPlaybackPlay, IconPlaybackPause } from 'open-icon/icons';

app.use(IconRegistryPlugin, {
  icons: {
    'playback-play': IconPlaybackPlay,  // Only 2KB
    'playback-pause': IconPlaybackPause, // Only 2KB
  }
});
// Webpack/Vite can tree-shake unused imports!
```

## Size Impact

### Before (Current)
- **open-icon in UI package**: 899KB
- **Radio app JS**: Multiple MB (includes all icons)
- **Icons used**: ~10
- **Icons bundled**: 900+
- **Efficiency**: ~1%

### After (Tree-Shakable)
- **open-icon in UI package**: 0KB (no icons pre-loaded)
- **Radio app icons**: ~20KB (10 icons × 2KB)
- **Icons used**: ~10
- **Icons bundled**: ~10
- **Efficiency**: 100%

## Real Impact

For a typical Tiko app using 20 icons:
- **Current**: Ships 899KB of icons (900+ icons)
- **Tree-shakable**: Ships ~40KB of icons (20 icons)
- **Savings**: 859KB (95% reduction)

For all Tiko apps combined (if each uses different icons):
- **Current**: Each app ships 899KB
- **Tree-shakable**: Each app ships only what it needs
- **Total savings**: Several MB across all apps