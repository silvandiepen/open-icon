<template>
  <div :class="['app',`page--${route.name as string}`]" :style="`font-size: ${myFontSize}px`">
    <Header></Header>
  <RouterView :key="key"></RouterView>
  <Footer></Footer>

  </div> 
 </template>

<script lang="ts" setup>
import { watch, onMounted, ref, computed } from 'vue';
import { useColorMode } from '@/composables/useColorMode';
import { useLocale, createLocale } from '@/composables/locales';

import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { useRoute } from 'vue-router';
import { useUI } from './composables/useUI';
import { FontSize } from './types';

const { colorMode} = useColorMode();
const { currentLocale } = useLocale();
const { fontSize } = useUI();

const route = useRoute();

watch(
  () => colorMode.value,
  () => {
    if(document){
      document.body.setAttribute('color-mode',colorMode.value);
    }
  },{
    immediate: true
  }
);

const key = ref('');

const myFontSize = computed(()=>{
switch(fontSize.value){
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

watch(()=>route.params,()=>{
  key.value = route.params.page as string;
},{deep:true})

onMounted(async ()=>{
  await createLocale();
  console.log(currentLocale.value);
})

</script>

<style lang="scss" src="@/assets/style/app.scss"></style>
