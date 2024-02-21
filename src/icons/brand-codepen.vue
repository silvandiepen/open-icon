<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,4.5L4.5,24.52v22.96L36,67.5l31.5-20.02V24.52L36,4.5z M36,42.28l-8.9-6.17l8.9-6.07l8.9,6.07L36,42.28z M39,24.91
	V13.42l20.14,12.8l-9.03,6.26L39,24.91z M33,24.91l-11.12,7.58l-9.03-6.26L33,13.42V24.91z M16.64,36.06l-6.14,4.18V31.8
	L16.64,36.06z M21.86,39.68L33,47.41v11.17L12.88,45.79L21.86,39.68z M39,47.41l11.14-7.73l8.97,6.11L39,58.58V47.41z M55.36,36.06
	l6.14-4.26v8.44L55.36,36.06z"/>

</svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm("icon");
</script>

<style lang="scss">
.icon {
  width: 1em;
  svg {
    width: 1em;
    height: 1em;
    path,
    rect,
    circle,
    ellipse,
    polygon {
      &:not([fill]) {
        fill: currentColor;
      }
    }
  }
  &__container{
    width: 1em; height: 1em;
    display: flex; align-items: center; justify-content: center;
  }
}
</style>
