<template>
  <div><NuxtLayout></NuxtLayout></div>
</template>

<script lang="ts">
const { colorMode } = useColorMode();

const setColorMode = (mode: string) => {
  if(process.client)
  if (document) document.body.setAttribute("color-mode", mode);
};

watch(
  colorMode,
  (newVal) => {
    setColorMode(newVal);
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss" src="~/assets/style/app.scss"></style>
