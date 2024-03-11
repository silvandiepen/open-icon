<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M56.95,18.1c-1.75-0.84-3.78-0.6-5.29,0.62L37.32,30.24l-0.02-7.36c-0.01-1.99-1.14-3.74-2.96-4.55
		c-1.82-0.81-3.88-0.5-5.36,0.83L13.8,32.66c-1.09,0.97-1.7,2.36-1.67,3.81c0.02,1.46,0.68,2.83,1.79,3.76l15.25,12.73
		c0.92,0.77,2.05,1.17,3.19,1.17c0.72,0,1.45-0.16,2.14-0.48c1.78-0.84,2.88-2.58,2.87-4.54l-0.02-6.67l14.51,10.94
		c0.89,0.67,1.94,1.01,3,1.01c0.76,0,1.53-0.18,2.24-0.53c1.71-0.85,2.77-2.57,2.76-4.49l-0.08-26.78
		C59.79,20.65,58.7,18.93,56.95,18.1z M18.66,36.37l12.65-11.26l0.06,21.87L18.66,36.37z M39.27,36.37L53.8,24.69l0.07,22.69
		L39.27,36.37z"/>
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
