// App 1: E-commerce app - only imports icons it needs
import { createApp } from 'vue';
import App from './App.vue';

// Import ONLY the icons this app uses
import {
    IconShoppingCart,
    IconAddM,
    IconMultiplyM,
    IconSearchM,
    IconHeartM,
    IconUserM
} from 'open-icon/icons';

const app = createApp(App);

// Register only the icons this app needs
app.provide('iconRegistry', {
    'shopping-cart': IconShoppingCart,
    'add-m': IconAddM,
    'multiply-m': IconMultiplyM,
    'search-m': IconSearchM,
    'heart-m': IconHeartM,
    'user-m': IconUserM,
    // Aliases
    'plus': IconAddM,
    'x': IconMultiplyM,
    'search': IconSearchM,
    'heart': IconHeartM,
    'user': IconUserM,
});

app.mount('#app');

// ===================================

// App 2: Dashboard app - imports different icons
import { createApp } from 'vue';
import App from './App.vue';

// Import ONLY the icons this app uses
import {
    IconChartLineM,
    IconSettingsM,
    IconBellM,
    IconLogoutM,
    IconDashboardM
} from 'open-icon/icons';

const app = createApp(App);

// Register only the icons this app needs
app.provide('iconRegistry', {
    'chart-line-m': IconChartLineM,
    'settings-m': IconSettingsM,
    'bell-m': IconBellM,
    'logout-m': IconLogoutM,
    'dashboard-m': IconDashboardM,
    // Aliases
    'chart': IconChartLineM,
    'settings': IconSettingsM,
    'notifications': IconBellM,
});

app.mount('#app');