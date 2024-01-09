<template>
  <nav :class="bemm()">
    <ul :class="bemm('list')">
      <li :class="bemm('item')" v-for="(item, idx) in menuItems" :key="idx">
        <RouterLink :class="bemm('link')" :to="item.link">
          <Icon :class="bemm('icon')" v-if="item.icon" :name="item.icon"></Icon>
          <span :class="bemm('text')">{{ item.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import Icon from "@/icons/Icon.vue";
import { Icons } from "@/icons/types";

import { RouterLink } from "vue-router"; 

const bemm = useBemm("navigation");

type Icon = string;

const menuItems: { label: string; link: string; icon: Icon }[] = [
  { label: "Collection", link: "/collection", icon: Icons.APPS },
  { label: "Contribute", link: "/contribute", icon: Icons.USER },
  { label: "Guidelines", link: "/guidelines", icon: Icons.MAP },
  { label: "Usage", link: "/usage", icon: Icons.ROCKET },
  { label: "About", link: "/about", icon: Icons.BOOK },
];
</script>

<style lang="scss">
.navigation {
  &__list {
    display: flex;
    gap: 1em;
  }
  &__icon {
    font-size: 3em;
    color: white;
    line-height: 1em;
    width: 1em;
    height: 1em;
  }

  &__link {
    color: inherit;
    font-weight: bold;
    text-decoration: none;
    border-radius: var(--border-radius, 1em);

    display: block;
    padding: 1em;
    position: relative;
    z-index: 1;
    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      padding: 0;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      border-radius: var(--border-radius, 1em);
      z-index: -1;
      transform: scale(.8);
      transition: .3s ease-in;
      opacity: 0;
      outline: 3px solid red;

    }
    &:not(.router-link-active):hover::before {
      outline-color: var(--primary-text);
      opacity: .1;
        transform: scale(1);
      
    }
    &.router-link-active {
      &::before {
        transform: scale(1);
        outline-color: var(--primary-text);
        opacity: 1;
      }
      .navigation__icon {
        color: var(--primary-text);
      }
    }
  }
}
</style>
