<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M47,13.32c-3.49-3.12-8.18-4.61-12.87-4.09c-7.83,0.86-13.96,7.2-14.58,15.08c-0.33,4.18,0.92,8.28,3.52,11.56
		c2.04,2.57,3.17,5.88,3.17,9.31v0.69c0,1.66,1.34,3,3,3h13.5c1.66,0,3-1.34,3-3v-0.69c0-3.35,1.18-6.68,3.4-9.62
		c2.2-2.87,3.36-6.31,3.36-9.94C52.5,20.93,50.49,16.45,47,13.32z M44.37,31.93c-2.52,3.34-4.06,7.08-4.5,10.94h-7.75
		c-0.42-3.95-1.93-7.7-4.35-10.73c-1.65-2.08-2.45-4.7-2.24-7.36c0.39-4.93,4.37-9.04,9.26-9.58c3.04-0.34,5.95,0.58,8.2,2.6
		c2.23,1.99,3.5,4.85,3.5,7.83C46.5,27.92,45.77,30.1,44.37,31.93z"/>
	<path d="M42.8,50.87H29.2c-1.1,0-2,0.9-2,2s0.9,2,2,2h13.6c1.1,0,2-0.9,2-2S43.9,50.87,42.8,50.87z"/>
	<path d="M40.5,57.87h-9c-1.1,0-2,0.9-2,2s0.9,2,2,2h9c1.1,0,2-0.9,2-2S41.6,57.87,40.5,57.87z"/>
</g>

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
