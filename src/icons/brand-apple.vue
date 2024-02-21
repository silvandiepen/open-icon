<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M61.92,50.72c-1.48,3.28-2.19,4.75-4.09,7.64c-2.66,4.04-6.41,9.09-11.04,9.13C42.67,67.53,41.6,64.8,36,64.85
	c-5.6,0.03-6.76,2.7-10.89,2.65c-4.64-0.04-8.19-4.59-10.84-8.63c-7.44-11.33-8.22-24.6-3.63-31.67c3.25-5.01,8.39-7.95,13.22-7.95
	c4.92,0,8.01,2.7,12.08,2.7c3.95,0,6.35-2.71,12.04-2.71c4.3,0,8.85,2.34,12.1,6.39C49.45,31.47,51.18,46.66,61.92,50.72z
	 M43.66,14.73c2.07-2.66,3.64-6.41,3.07-10.23c-3.38,0.23-7.32,2.39-9.63,5.18c-2.09,2.55-3.83,6.32-3.15,9.98
	C37.64,19.77,41.45,17.57,43.66,14.73z"/>

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
