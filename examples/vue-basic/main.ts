import { createApp } from 'vue';
import App from './App.vue';
import { IconRegistryPlugin } from 'open-icon/vue';

// Import only the icons this example uses
import {
  IconHeartM,
  IconAddM,
  IconSearchM,
  IconSettingsM,
  IconStarM,
  IconCheckM,
  IconInfoM,
  IconLoadingM,
} from 'open-icon/icons';

const app = createApp(App);

// Register icons with the plugin
app.use(IconRegistryPlugin, {
  icons: {
    'heart-m': IconHeartM,
    'add-m': IconAddM,
    'search-m': IconSearchM,
    'settings-m': IconSettingsM,
    'star-m': IconStarM,
    'check-m': IconCheckM,
    'info-m': IconInfoM,
    'loading-m': IconLoadingM,
  },
  aliases: {
    'heart': 'heart-m',
    'plus': 'add-m',
    'search': 'search-m',
    'settings': 'settings-m',
    'star': 'star-m',
    'check': 'check-m',
    'info': 'info-m',
  }
});

app.mount('#app');