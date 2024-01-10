<template>
  <nav :class="bemm()">
    <ul :class="bemm('list')">
      <li :class="bemm('item')" v-for="(item, idx) in menuItems" :key="idx">
        <RouterLink :class="bemm('link')" :to="item.link">
          <component :class="bemm('icon')" v-if="item.icon" :is="item.icon"></component>
          <span :class="bemm('text')">{{ item.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { RouterLink } from "vue-router";

import { getIcon } from "@/icons";
import { Icons } from "@/icons/types";


const bemm = useBemm("navigation");

type Icon = any;

const menuItems: { label: string; link: string; icon: Icon }[] = [
  { label: "Collection", link: "/collection", icon: getIcon(Icons.APPS) },
  { label: "Contribute", link: "/contribute", icon: getIcon(Icons.USER) },
  { label: "Guidelines", link: "/guidelines", icon: getIcon(Icons.MAP) },
  { label: "Usage", link: "/usage", icon: getIcon(Icons.ROCKET) },
  { label: "About", link: "/about", icon: getIcon(Icons.BOOK) },
];
</script>

<style lang="scss">
.navigation {
  &__list {
    display: flex;
    gap: 1em;

    @media screen and (max-width: 72em) {
      gap: 0;
      border-block: 1px solid var(--foreground-inverted);
      width: 100vw;
      overflow: scroll;
    }
  }

  &__icon {
    font-size: 3em;
    // color: white;
    line-height: 1em;
    width: 1em;
    height: 1em;
    transform: scale(.75);

    @media screen and (max-width: 72em) {
      font-size: 2em;

    }
  }

  &__text {
    opacity: .25;
    @media screen and (max-width: 72em){
      transition: max-width .3s ease-in-out;
      max-width: 0px; overflow: hidden;
    }
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
      opacity: 0;

    }

    @media screen and (max-width: 72em) {
      display: flex;
      align-items: center;
      gap: .5em;

      &,
      &::before {
        border-radius: 0;
      }
    }


    &:not(.router-link-active):hover::before {
      opacity: .5;
      transform: scale(1);

    }

    &:hover {
      &::before {
        transform: scale(1);
        background-color: var(--background);
        opacity: 1;
      }

      .navigation__icon {
        transform: scale(1);
      }

      .navigation__text {
        opacity: 1;
      }
      [color-mode="dark"] &{
        color: white;
      }
    }

    &.router-link-active {


      [color-mode="dark"] &{
        color: white;
      }
      &::before {
        transform: scale(1);
        background-color: var(--background);
        opacity: 1;
      }

      .navigation__icon {
        transform: scale(1);
      }

      .navigation__text {
        opacity: 1;
        display: block;
    @media screen and (max-width: 72em){
      max-width: fit-content; overflow: hidden;
    }
      }

    }

  }
}</style>
