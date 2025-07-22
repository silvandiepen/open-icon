// Alternative: Composable approach for better developer experience
import { provide } from 'vue';
import type { App } from 'vue';

// Create a helper function to register icons
export function createIconRegistry(icons: Record<string, string>) {
    return {
        install(app: App) {
            app.provide('iconRegistry', icons);
        }
    };
}

// In your app:
import { createApp } from 'vue';
import App from './App.vue';
import { createIconRegistry } from '@your-ui-lib/utils';

// Import only what you need
import {
    IconAddM,
    IconEditM,
    IconDeleteM,
    IconSearchM
} from 'open-icon/icons';

const app = createApp(App);

// Register icons with a cleaner API
app.use(createIconRegistry({
    // Main names
    'add-m': IconAddM,
    'edit-m': IconEditM,
    'delete-m': IconDeleteM,
    'search-m': IconSearchM,
    
    // Aliases
    'plus': IconAddM,
    'edit': IconEditM,
    'trash': IconDeleteM,
    'search': IconSearchM,
}));

app.mount('#app');