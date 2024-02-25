<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M24.75,10.09c-9.06,0-14.25,5.34-14.25,14.66C10.5,33.94,15.56,39,24.75,39S39,33.94,39,24.75
		C39,15.44,33.81,10.09,24.75,10.09z M16.5,24.75c0-5.99,2.54-8.66,8.24-8.66c-1.97,5.49-1.62,8.08-1.29,10.4
		c0.24,1.73,0.45,3.27-0.63,6.41C18.36,32.38,16.5,29.92,16.5,24.75z M27.03,32.85c0.9-3.2,0.64-5.08,0.39-6.91
		c-0.28-2.04-0.58-4.13,1.35-9.21c2.89,1.1,4.23,3.69,4.23,8.02C33,29.78,31.23,32.25,27.03,32.85z"/>
	<path d="M47.25,61.5c9.19,0,14.25-5.06,14.25-14.25c0-9.31-5.19-14.66-14.25-14.66S33,37.94,33,47.25
		C33,56.44,38.06,61.5,47.25,61.5z M55.5,47.25c0,5.03-1.77,7.5-5.97,8.1c0.9-3.2,0.64-5.08,0.39-6.91
		c-0.28-2.04-0.58-4.13,1.35-9.21C54.16,40.33,55.5,42.92,55.5,47.25z M47.24,38.59c-1.97,5.49-1.62,8.08-1.29,10.4
		c0.24,1.73,0.45,3.27-0.63,6.41C40.86,54.88,39,52.42,39,47.25C39,41.26,41.54,38.59,47.24,38.59z"/>
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
