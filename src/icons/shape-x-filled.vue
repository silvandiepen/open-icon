<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M45.54,36.01l16.8-16.81c0.39-0.39,0.39-1.02,0-1.41l-8.13-8.13c-0.39-0.39-1.03-0.39-1.42,0l-16.8,16.8L19.2,9.67
	c-0.39-0.39-1.02-0.39-1.41,0L9.66,17.8c-0.39,0.39-0.39,1.02,0,1.41L26.46,36L9.67,52.8c-0.39,0.39-0.39,1.02,0,1.41l8.13,8.13
	c0.39,0.39,1.02,0.39,1.41,0L36,45.55l16.8,16.79c0.39,0.39,1.02,0.39,1.41,0l8.13-8.13c0.39-0.39,0.39-1.03-0.01-1.41L45.54,36.01z
	"/>

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
