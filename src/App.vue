<template>
  <Header></Header>
  <RouterView></RouterView>
</template>

<script lang="ts" setup>
import { watch, onMounted } from 'vue';
import { useColorMode } from '@/composables/useColorMode';
import { useLocale, createLocale } from '@/composables/locales';

import Header from "@/components/layout/Header.vue";

const { colorMode} = useColorMode();
const { currentLocale } = useLocale();

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

onMounted(async ()=>{
  await createLocale();
  console.log(currentLocale.value);
})

</script>

<style lang="scss" src="@/assets/style/app.scss"></style>
