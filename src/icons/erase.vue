<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M66,55.03H44.35L59,40.38c2.7-2.74,2.69-7.17-0.02-9.89c0,0,0,0,0,0L45.54,17.05c-2.72-2.72-7.16-2.73-9.9,0L13.02,39.68
	c-2.72,2.72-2.73,7.16,0,9.9l5.45,5.45H6v6h19.62c0.03,0,0.07,0.01,0.1,0.01H37.1c0.03,0,0.07-0.01,0.1-0.01H66V55.03z M39.87,21.3
	c0.4-0.39,1.04-0.4,1.42-0.01l13.44,13.44c0.39,0.39,0.39,1.03,0.01,1.42l-14.5,14.5L25.39,35.79L39.87,21.3z M17.27,45.35
	c-0.39-0.4-0.4-1.04-0.01-1.42l5.3-5.31l14.86,14.86l-1.56,1.56h-8.91L17.27,45.35z"/>

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
