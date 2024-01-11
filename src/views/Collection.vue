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

    <div :class="bemm('category')">
      <ul :class="bemm('category-list')">
        <li :class="[bemm('category-item'), bemm('category-item', currentCategory == index ? 'active' : 'inactive')]"
          v-for="(category, index) in allCategories" :key="index">
          <RouterLink :class="bemm('category-link')" :to="`/collection/${index}`">
            <component :class="bemm('category-icon')" :is="getIcon(category.icon)"></component>
            <span :class="bemm('category-label')">{{ category.name }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <transition-group tag="ul" name="collection" :class="bemm('list')">
      <li :class="[bemm('item'), bemm('item', activeIcon == icon ? 'active' : 'inactive')]"
        v-for="(icon, index) in filteredIcons" :key="index" tabindex="0" @click="setActive(icon)">
        <component :is="getIcon(icon)" :class="bemm('icon')"></component>
        <span :class="bemm('label')">{{ icon }}</span>
      </li>
    </transition-group>
  </div>
</template>
  
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useBemm } from "bemm";

import { categories } from "@/data/icon-categories";

import { Icons } from "@/icons/types";
import { getIcon } from "@/icons";
import InputRange from "@/components/control/InputRange.vue";
import InputText from "@/components/control/InputText.vue";
import router from "@/router";
import { useRoute } from "vue-router";

const bemm = useBemm("collection");

const route = useRoute();

const size = ref(10);
const activeIcon = ref();
const setActive = (icon: string) => {
  activeIcon.value = icon;
  router.push(`/icon/${icon}`)
};

const currentCategory = computed(() => {
  return route.params.category as string;
})

const allCategories = computed(() => {
  return {
    all: {
      name: "All Icons",
      icon: Icons.MORE,
      items: []
    },
    ...categories,
    misc: {
      name: "Misc",
      icon: Icons.MORE,
      items: []
    }
  }
})

const filter = ref("");

const icons = Object.values(Icons);

const filteredIcons = computed(() => {

  if (filter.value) {
    return icons.filter((icon) => icon.includes(filter.value.toLowerCase()));
  }

  if (currentCategory.value) {
    if(currentCategory.value == 'all'){
      return icons;
    }
    if(currentCategory.value == 'misc'){
      const allCategorized:any = Object.values(categories).reduce((acc:any, category) => {
        return [...acc, ...category.items];
      }, []);

      const uncategorized = icons.filter((icon) => !allCategorized.includes(icon));
      return uncategorized;
    }

    const iconsInCategory = categories[currentCategory.value].items;
    return icons.filter((icon) => iconsInCategory.includes(icon));
  }


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


  &__category {
    padding: var(--space);

    &-list {
      display: flex;
      flex-wrap: wrap;
      gap: .5em;
      list-style: none;
      padding: 0;
      margin: 0;

      @media screen and (max-width: 72em) {
        gap: .5em;
      }

    }

    &-link {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: .5em;
      text-decoration: none;
      color: var(--primary-text);
      padding: var(--space);
      background-color: var(--accent);
      padding: calc(var(--space) / 2);
      border-radius: var(--border-radius, 2em);
      background-color: var(--accent);

      // @media screen and (max-width: 72em) {
      //   padding: var(--space) / 2;
      // }

      &:focus,
      &:hover {
        outline: 2px solid var(--primary);
      }
    }

    &-item {

      display: flex;

      &--active {
        .collection__category-link {
          background-color: var(--primary);
          color: var(--primary-text);
        }
      }

    }


  }


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
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    aspect-ratio: 1/1;
    flex-direction: column;
    border-radius: 1em;
    font-size: calc((var(--size) / 10) * 1em);

    // outline: 1px solid red;

    &:focus,
    &:hover {
      outline: 2px solid var(--primary);
    }

    &--active {
      width: 2fr;
      background-color: var(--primary);
      color: var(--primary-text);

    }
    &:hover{
      .collection__label {
       transform: translateY(0);
      opacity: 1;
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
    opacity: 0;
    transform: translateY(100%);
    transition: all .2s ease-in-out;
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
}</style>