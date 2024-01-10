<template>
  <div :class="[bemm(), bemm('', onTop ? 'on-top' : 'off-top')]">
    <div :class="bemm('top')">
      <RouterLink :class="bemm('logo')" to="/">
        <Logo></Logo>
      </RouterLink>
      <button @click="menuActive = !menuActive"
        :class="[bemm('menu-trigger'), bemm('menu-trigger', menuTriggerActive ? 'visible' : 'invisible'), bemm('menu-trigger', menuActive ? 'active' : 'inactive')]">
        <span></span></button>
    </div>
    <div :class="[bemm('navigation'), bemm('navigation', !menuActive && menuTriggerActive ? 'inactive' : 'active')]">
      <Navigation></Navigation>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import Navigation from "./Navigation.vue";
import Logo from "../Logo.vue";
import { useBemm } from "bemm";


const route = useRoute();
const bemm = useBemm("header");

const onTop = ref(true);
const menuActive = ref(false);

const setOnTop = () => {
  onTop.value = window.scrollY <= 2;
};

const menuTriggerActive = computed(() => {
  return !onTop.value;
})

watch(() => route, () => {
  menuActive.value = false;
}, { deep: true });

onMounted(() => {
  setOnTop();
  window.addEventListener("scroll", () => {
    setOnTop();
  });
});


</script>

<style lang="scss">
.header {
  padding: var(--space);
  background-color: var(--primary);
  color: var(--primary-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: var(--space);
  width: 100vw;
  border-bottom-right-radius: 2em;
  z-index: 10;
  position: sticky;
  top: 0;
  transition: transform .3s ease-in-out;

  .page--home & {

    background-color: var(--background);
    color: var(--primary-text);
  }

  &--off-top {}


  &__menu-trigger {
    width: 3em;
    height: 3em;
    margin: 1.5em;
    border-radius: 1em;
    background-color: var(--foreground);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 72em) {
      display: none;
    }

    span {
      position: relative;
      width: 1.5em;
      height: .2em;
      background-color: var(--background);

      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: inherit;
        background-color: var(--background);

      }

      &::before {
        transform: translateY(-.5em);
      }

      &::after {
        transform: translateY(.5em);
      }
    }

    &--active {
      span {

        background-color: transparent;

        &::before {
          transform: translateY(0) rotate(45deg);
        }

        &::after {
          transform: translateY(0) rotate(-45deg);
        }
      }

    }

    &--visible {
      transform: scale(1);

    }

    &--invisible {
      opacity: 0;
      transform: scale(0);
    }
  }

  &__navigation {
    align-self: center;
    justify-self: center;
    transition: transform .3s ease-in-out;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    transition: transform .3s ease-in-out;
  }

  &__logo {
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
