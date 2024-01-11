<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M66,22c0-3.86-3.14-7-7-7H28.66c-1.87,0-3.63,0.73-4.95,2.05L6.88,33.88c-1.17,1.17-1.17,3.07,0,4.24l16.83,16.83
		c1.32,1.32,3.08,2.05,4.95,2.05H59c3.86,0,7-3.14,7-7V22z M60,50c0,0.55-0.45,1-1,1H28.66c-0.26,0-0.52-0.11-0.71-0.29L13.24,36
		l14.71-14.71c0.19-0.19,0.44-0.29,0.71-0.29H59c0.55,0,1,0.45,1,1V50z"/>
	<path d="M55.41,25.59c-0.78-0.78-2.05-0.78-2.83,0L45,33.17l-7.59-7.59c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83
		L42.17,36l-7.59,7.59c-0.78,0.78-0.78,2.05,0,2.83C34.98,46.8,35.49,47,36,47s1.02-0.2,1.41-0.59L45,38.83l7.59,7.59
		C52.98,46.8,53.49,47,54,47s1.02-0.2,1.41-0.59c0.78-0.78,0.78-2.05,0-2.83L47.83,36l7.59-7.59C56.2,27.63,56.2,26.37,55.41,25.59z
		"/>
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
