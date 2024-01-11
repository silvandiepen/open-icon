<template>
  <div :class="bemm()" :style="`--size: ${size};`">
    <div :class="bemm('toolbar')">
      <h1 :class="bemm('title')">
        <component :is="getIcon(Icons.APPS)"></component>Collection
      </h1>
      <div :class="bemm('search')">
        <InputText :class="bemm('control')" type="search" v-model="filter" placeholder="Search" />
      </div>

      <span :class="bemm('showing')">
        <template v-if="filteredIcons.length < icons.length">
          <strong>{{ filteredIcons.length }}</strong>/</template>{{ icons.length }} icons
      </span>
      <div :class="bemm('tools')">
        <InputRange v-model="size" :min="5" :max="25" />
      </div>
    </div>
    <transition-group tag="ul" name="collection" :class="bemm('list')">
      <li :class="bemm('item')" v-for="(icon, index) in filteredIcons" :key="index">
        <component :is="getIcon(icon)" :class="bemm('icon')"></component>
        <span :class="bemm('label')">{{ icon }}</span>
      </li>
    </transition-group>
  </div>
  <div :class="[bemm('content'), 'content']">
    <ContentDoc path="/collection-description" />
  </div>
</template>
  
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useBemm } from "bemm";

import { Icons } from "@/icons/types";
import { getIcon } from "@/icons";
import InputRange from "@/components/control/InputRange.vue";
import InputText from "@/components/control/InputText.vue";

const bemm = useBemm("collection");

const size = ref(10);

const filter = ref("");

const icons = Object.values(Icons);

const filteredIcons = computed(() => {
  if (!filter.value) return icons;
  return icons.filter((icon) => icon.includes(filter.value.toLowerCase()));
});
</script>
  
<style lang="scss">
.collection-enter-from,
.collection-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.collection-leave-active {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 0;
}



.collection {
  accent-color: var(--primary);
  display: block;
  overflow: hidden;
  position: relative;


  &__title {
    display: flex;
    align-items: center;
    gap: .5em;

    @media screen and (max-width: 72em) {
      display: none;
    }
  }

  &__toolbar {
    padding: var(--space);
    background-color: var(--accent);
    width: fit-content;
    border-radius: var(--space);
    margin: var(--space);
    position: sticky;
    top: 0;
    gap: calc(var(--space) / 2);
    display: flex;
    align-items: center;

    @media screen and (max-width: 72em) {
      gap: 1em;
      padding: 1em;
      margin: 1em;
      // flex-direction: column;
      flex-wrap: wrap;
      border-radius: 1em;
      align-items: flex-start;
    }
  }

  &__list {
    padding: var(--space);
    display: flex;
    flex-wrap: wrap;
    gap: 0em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(var(--size) * 1em), 1fr));
  @media screen and (max-width: 72em) {
    grid-template-columns: repeat(auto-fill, minmax(calc(var(--size) * .8em), 1fr));
  
  }
  }

  &__item {
    position: relative;
    transition: all 0.3s ease-in-out;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    aspect-ratio: 1/1;
    flex-direction: column;
    border-radius: 1em;
    font-size: calc((var(--size) / 10) * 1em);

    // outline: 1px solid red;

    &:hover {
      background-color: var(--primary);

      [color-mode="dark"] & {
        background-color: var(--secondary);
      }
    }
  }

  &__icon {
    font-size: 5em;
  }

  &__label {
    position: absolute;
    bottom: 1em;
    font-size: .875em;
    opacity: 0.5;
  }

  &__showing {
    padding: 1em;
    background-color: var(--primary);
    color: var(--primary-text);
    border-radius: .5em;
    display: block;
    white-space: nowrap;
  }

  &__content {
    padding: var(--space);
  }

  &__tools {
    @media screen and (max-width: 72em) {
      display: none;
    }

  }
}
</style>