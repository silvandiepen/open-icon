# Open Icon API Reference

## Imports

### Tree-Shakable Icons

```typescript
import { IconAddM, IconSearchM, IconHeartM } from 'open-icon/icons';
```

Each icon is exported as a constant with the pattern `Icon{PascalCaseName}`.

### Vue Integration

```typescript
import { IconRegistryPlugin, useIconRegistry } from 'open-icon/vue';
```

### Legacy API

```typescript
import { getIcon, Icons } from 'open-icon';
```

## Vue Plugin

### IconRegistryPlugin

```typescript
app.use(IconRegistryPlugin, {
  icons: Record<string, string>,
  aliases?: Record<string, string>
});
```

#### Options

- `icons`: Object mapping icon names to icon SVG strings
- `aliases`: Optional object mapping alias names to icon names

## Vue Composable

### useIconRegistry()

```typescript
const {
  getIcon,
  hasIcon,
  registerIcon,
  registerIcons,
  getRegisteredIcons
} = useIconRegistry();
```

#### Methods

- `getIcon(name: string): string | undefined` - Get icon SVG by name
- `hasIcon(name: string): boolean` - Check if icon exists
- `registerIcon(name: string, svg: string): void` - Register single icon
- `registerIcons(icons: Record<string, string>): void` - Register multiple icons
- `getRegisteredIcons(): string[]` - Get list of registered icon names

## Legacy API

### getIcon(icon: Icons): Promise<string>

Asynchronously loads an icon. **Not recommended** as it prevents tree-shaking.

### Icons Enum

Contains all available icon names as constants.

## Icon Naming Convention

Icons follow a consistent naming pattern:
- Base name: `heart`, `add`, `search`, etc.
- Size variants: `-s` (small), `-m` (medium), `-l` (large), `-fat` (bold)
- Style variants: `2`, `3` for alternative designs
- State variants: `-broken` for broken/disabled states

Examples:
- `add-m` - Medium add icon
- `heart-broken-l` - Large broken heart icon
- `search-fat` - Bold search icon