import { defineConfig } from 'tsup';

export default defineConfig([
  // Main entry
  {
    entry: ['lib/index.ts'],
    format: ['esm', 'cjs', 'iife'],
    outDir: 'dist',
    dts: false, // TypeScript will handle this
  },
  // Icons export
  {
    entry: ['lib/icons/icons-export.ts'],
    format: ['esm', 'cjs'],
    outDir: 'dist/icons',
    dts: false,
  },
  // Vue integration
  {
    entry: ['lib/vue/index.ts'],
    format: ['esm', 'cjs', 'iife'],
    outDir: 'dist/vue',
    dts: false,
    external: ['vue'],
  },
]);