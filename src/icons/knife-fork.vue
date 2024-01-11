<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M55.33,7.1c-1.04-0.75-2.4-0.95-3.63-0.53C48.78,7.57,42,11.36,42,24.75c0,10.81,5.82,15.72,9,17.6V63h6V10.35
		C57,9.06,56.38,7.84,55.33,7.1z M51,34.51c-1.57-1.98-3-5.07-3-9.76c0-5.77,1.5-8.92,3-10.63V34.51z"/>
	<path d="M34,21.77c0,1.1-0.9,2-2,2v-16h-4v16h-2v-16h-4v16c-1.1,0-2-0.9-2-2v-14h-4v14c0,3.31,2.69,6,6,6h2V63h6V27.77h2
		c3.31,0,6-2.69,6-6v-14h-4V21.77z"/>
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
