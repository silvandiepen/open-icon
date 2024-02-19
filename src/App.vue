<template>
  <div :class="['app', `page--${route.name as string}`, tabbed && 'tabbed']" :style="`font-size: ${myFontSize}px`">
    <Header></Header>
    <RouterView :key="key"></RouterView>
    <Footer></Footer>

  </div>
</template>

<script lang="ts" setup>
import { watch, onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';


import { useColorMode } from '@/composables/useColorMode';
import { createLocale } from '@/composables/locales';
import { useUI } from '@/composables/useUI';
import { useIcons } from '@/composables/useIcons';

import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { FontSize } from './types';

const { colorMode } = useColorMode();
const { fontSize } = useUI();
const { init } = useIcons();

const route = useRoute();

watch(
  () => colorMode.value,
  () => {
    if (document) {
      document.body.setAttribute('color-mode', colorMode.value);
    }
  }, {
  immediate: true
}
);

const tabbed = ref(false);

const key = ref('');

const myFontSize = computed(() => {
  switch (fontSize.value) {
    case FontSize.SMALL:
      return 16;
    case FontSize.MEDIUM:
      return 18;
    case FontSize.LARGE:
      return 20;
    default:
      return 16;
  }
})

watch(() => route.params, () => {
  key.value = route.params.page as string;
}, { deep: true })

onMounted(async () => {
  init();
  await createLocale(); 
})
onMounted(()=>{
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      tabbed.value = true;
      window.addEventListener('click', () => {
        tabbed.value = false;
      }, { once: true }
      )
    }
  })
})

</script>

<style lang="scss" src="@/assets/style/app.scss"></style>
