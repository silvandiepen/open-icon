<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M28.5,62.54V41.41L8.41,11.28c-0.22-0.33,0.02-0.78,0.42-0.78h54.34c0.4,0,0.64,0.45,0.42,0.78L43.5,41.41v14.14
	c0,0.19-0.11,0.36-0.28,0.45l-14,7C28.89,63.16,28.5,62.92,28.5,62.54z M19.11,16.5L34.5,39.59v14.05l3-1.5V39.59L52.89,16.5H19.11z
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
