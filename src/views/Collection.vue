<template>
  <div :class="bemm()" :style="`--size: ${size};`">
    <div :class="bemm('toolbar')">
      <h1 :class="bemm('title')">
        <component :is="getIcon(Icons.APPS)"></component>Collection
      </h1>
      <div :class="bemm('search')">
        <InputSearch v-model="filterSearch"></InputSearch>
      </div>

      <span :class="bemm('showing')">
        <template v-if="icons.length < totalIcons">
          <strong>{{ icons.length }}</strong>/</template>{{ totalIcons }} icons
      </span>
      <div :class="bemm('tools')">
        <InputRange v-model="size" :min="5" :max="25" />
      </div>

      <InputOptions :options="categories.map((v) => ({ label:v.value, value: v.value, icon: v.value, total: v.total }))" v-model="filterCategory" :limit="10" :orderBy="'total'" :showTotal="true"></InputOptions>
    </div>


    <ul :class="bemm('list')">
      <li :class="[bemm('item'), bemm('item', activeIcon == icon ? 'active' : 'inactive')]" v-for="(icon, index) in icons"
        :key="index" tabindex="0" @click="setActive(icon.key)">
        <Icon :name="icon.value" :class="bemm('icon')"></Icon>
        <span :class="bemm('label')">{{ icon.value }}</span>
        <span :class="bemm('label')">{{ icon.category }}</span>
      </li>
    </ul>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
import { useBemm } from "bemm";
import { useRouter } from "vue-router";

import Icon from "@/components/Icon.vue";

import { useIcons } from "@/composables/useIcons";
import { Icons } from "@/icons/types";
import { getIcon } from "@/icons";

import { InputSearch, InputRange, InputOptions, } from "@/components/form";

const { icons, filterSearch, categories, filterCategory, totalIcons } = useIcons();


const bemm = useBemm("collection");
const router = useRouter();

const size = ref(10);
const activeIcon = ref();
const setActive = (icon: string) => {
  activeIcon.value = icon;
  router.push(`/icon/${icon}`)
};

</script>
  
<style lang="scss">
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

      &:focus,
      &:hover {
        background-color: transparent;
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

    &:hover {
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
}
</style>