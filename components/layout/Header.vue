<template>
  <div :class="bemm()">
    <NuxtLink :class="bemm('logo')" to="/">
      <Logo></Logo>
    </NuxtLink>
    <div :class="bemm('navigation')">
      <Navigation></Navigation>
    </div>
    <div :class="bemm('tools')">
      <Language></Language>
      <ColorMode></ColorMode>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm("header");
</script>

<style lang="scss">
.header {
  padding: var(--space);
  background-color: var(--primary);
  color: var(--primary-text);
  display: flex;
  align-items: center;
  position: relative;
  gap: var(--space);
  &__logo{text-decoration: none; color: inherit;}
  &__tools {
    position: absolute;
    top: 0;
    right: 0;
    // border: 1px solid red;
    background-color: var(--background);
    color: var(--foreground);
    padding: 1em;
  }
}
</style>
