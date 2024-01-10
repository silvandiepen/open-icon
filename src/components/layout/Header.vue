<template>
  <div :class="bemm()">
    <RouterLink :class="bemm('logo')" to="/">
      <Logo></Logo>
    </RouterLink>
    <div :class="bemm('navigation')">
      <Navigation></Navigation>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import Navigation from "./Navigation.vue";
import Logo from "../Logo.vue";
import { useBemm } from "bemm";
const bemm = useBemm("header");
</script>

<style lang="scss">
.header {
  padding: var(--space);
  background-color: var(--primary);
  color: var(--primary-text);
  display: flex;
justify-content: space-between;  align-items: center;
  position: relative;
  gap: var(--space);
width: 100vw;overflow:hidden;
border-bottom-right-radius: 2em;

.page--home &{

  background-color: var(--background);
  color: var(--primary-text);
}



&__navigation{
  align-self: center;
  justify-self: center;
}

&__logo{
  justify-self: start;

  text-decoration: none;
  color: currentColor;

}
  &__tools {
    position: absolute;
    top: 0;
    right: 0;
    // border: 1px solid red;
    background-color: var(--background);
    color: var(--foreground);
    padding: 1em;
  }
  @media screen and (max-width: 72em) {
    padding: 0; 
    display: block;
  }
}
</style>
