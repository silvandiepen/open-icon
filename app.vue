<template>
  <NuxtLayout></NuxtLayout>
</template>

<script lang="ts" setup>
const { setAttribute } = useColorMode();
setAttribute();
</script>

<style lang="scss" src="~/assets/style/app.scss"></style>
