// For Nuxt.js users - create a plugin
// plugins/icons.client.ts

import {
    IconAddM,
    IconSearchM,
    IconHeartM,
    IconUserM,
    // ... only import what your app needs
} from 'open-icon/icons';

export default defineNuxtPlugin((nuxtApp) => {
    // Register icons globally for the app
    nuxtApp.vueApp.provide('iconRegistry', {
        'add-m': IconAddM,
        'search-m': IconSearchM,
        'heart-m': IconHeartM,
        'user-m': IconUserM,
        // Aliases
        'plus': IconAddM,
        'search': IconSearchM,
        'heart': IconHeartM,
        'user': IconUserM,
    });
});

// Or use a composable for better DX
// composables/useIcons.ts
export const useIcons = () => {
    const iconRegistry = inject<Record<string, string>>('iconRegistry', {});
    
    const registerIcons = (icons: Record<string, string>) => {
        Object.assign(iconRegistry, icons);
    };
    
    const getIcon = (name: string): string => {
        return iconRegistry[name] || '';
    };
    
    return {
        registerIcons,
        getIcon,
        iconRegistry
    };
};