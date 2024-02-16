<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,36c0-7.72,3.89-14.53,9.82-18.58
	c0.63-0.43,0.57-1.39-0.12-1.72c-3.77-1.8-8.11-2.6-12.69-2c-10.17,1.32-18.26,9.6-19.37,19.79C12.17,47.04,22.74,58.5,36,58.5
	c3.47,0,6.76-0.79,9.69-2.2c0.69-0.33,0.76-1.29,0.12-1.73C39.89,50.53,36,43.72,36,36z"/>

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
