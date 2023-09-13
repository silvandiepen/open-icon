<template>
  <NuxtLayout></NuxtLayout>
</template>

<script lang="ts" setup>
import { useColorMode, setBodyAttribute } from './composables/useColorMode';
import { useLocale, createLocale } from './composables/locales';

const { colorMode} = useColorMode();
const { currentLocale } = useLocale();

watch(
  () => colorMode.value,
  () => {
    if(process.client && document){
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

<style lang="scss" src="~/assets/style/app.scss"></style>
