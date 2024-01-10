<template>
  <Header></Header>
  <RouterView :key="key"></RouterView>
  <Footer></Footer>
</template>

<script lang="ts" setup>
import { watch, onMounted, ref } from 'vue';
import { useColorMode } from '@/composables/useColorMode';
import { useLocale, createLocale } from '@/composables/locales';

import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import { useRoute } from 'vue-router';

const { colorMode} = useColorMode();
const { currentLocale } = useLocale();

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

watch(()=>route.params,()=>{
  key.value = route.params.page as string;
},{deep:true})

onMounted(async ()=>{
  await createLocale();
  console.log(currentLocale.value);
})

</script>

<style lang="scss" src="@/assets/style/app.scss"></style>
