<template>
  <nav :class="bemm()">
    <div :class="bemm('background')" @click="toggleMenu"></div>
    <ul :class="[bemm('list'), isWrapped && bemm('list', 'wrapped')]">
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
import { onMounted, ref } from "vue";
import { useBemm } from "bemm";
import { RouterLink } from "vue-router";

import { getIcon } from "@/icons";
import { Icons } from "@/icons/types";
import { EventChannel, EventType, eventBus } from "@/utils/eventBus";


const bemm = useBemm("navigation");

const isWrapped = ref(false);

const checkWrapped = () => {
  const elements = document.getElementsByClassName('navigation__item');
  const lastElement = elements[elements.length - 1].getBoundingClientRect();
  const firstElement = elements[0].getBoundingClientRect();

  isWrapped.value = !!(lastElement.bottom > firstElement.bottom);

}

const toggleMenu = () => {

  eventBus.emit(EventChannel.ACTION, {
    type: EventType.MENU_TOGGLE
  })
}

onMounted(() => {
  checkWrapped();
  window.addEventListener('resize', checkWrapped);
})

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

  &__background {
    background-color: rgba(0, 0, 0, .25);

    opacity: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    pointer-events: none;
    transition: opacity .2s ease-in-out;

    .header--off-top .header__navigation--active & {
      @media screen and (max-width: 72em) {
        opacity: 1;
        pointer-events: all;

      }
    }
  }

  &__list {
    display: flex;

    transition: display .3s ease-in-out;
    flex-direction: row;
    flex-wrap: wrap;


    @media screen and (max-width: 72em) {
      padding-inline: 1em;
    }

    &--wrapped {
      padding: 1em;
    }

    @media screen and (max-width: 72em) {
      .header--off-top & {
        background-color: var(--primary);
        border-radius: 1em;
        margin: 1em;
        flex-direction: column;
        width: fit-content;
        top: 50%;
        left: 50%;
        position: fixed;
        opacity: 0;
        transform: translate(-50%, 50%) scale(.5);
        transition: all .3s ease-in-out;
      }

      .header__navigation--active & {
        .header--off-top & {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
  }

  &__icon {
    font-size: 2.5em;
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

    @media screen and (max-width: 35em) {
      font-size: .75em;
    }

    //     @media screen and (max-width: 45em) {
    //       position: absolute;
    // opacity: .25;
    // bottom: 0; 
    // left: 50%; 
    // font-weight: bold;
    // transform: translateY(100%) translateX(-50%);

    // font-size: .75em;
    // padding-block: .5em;
    // // top: 50%; left: 50%; 
    // // transform-origin: 0 0 ;
    // // transform: translateY(-50%) rotate(-45deg) translateX(1em); 
    //       // transform: translateX(-50%) translateY(100%);


    //     }
  }

  &__link {
    color: inherit;
    text-decoration: none;
    border-radius: var(--border-radius, 1em);

    display: flex;
    align-items: center;
    gap: .5em;
    padding: 1em;
    position: relative;
    z-index: 1;
    font-size: 1em;

    .tabbed & {
      &:focus {
        outline: 2px solid var(--foreground);
      }
    }

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
        border-radius: 1em 1em 0 0;


        .header--off-top .header__navigation--active &,
        .navigation__list--wrapped & {
          border-radius: 1em;
        }

      }
    }


    // &:not(.router-link-active){
    //   @media screen and (max-width: 25em){
    //     padding: .5em;
    // }

    // }

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

      [color-mode="dark"] & {
        color: white;
      }
    }

    &.router-link-active {


      [color-mode="dark"] & {
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

        @media screen and (max-width: 72em) {
          max-width: fit-content;
          overflow: hidden;
        }
      }

    }

  }
}
</style>
