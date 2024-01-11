<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M57,63V10.35c0-1.29-0.63-2.51-1.68-3.26c-1.05-0.75-2.4-0.94-3.62-0.52c-2.92,1.01-9.7,4.8-9.7,18.19
		c0,10.81,5.82,15.72,9,17.6V63H57z M48,24.75c0-5.76,1.5-8.91,3-10.63v20.41C49.43,32.55,48,29.46,48,24.75z"/>
	<path d="M16,7.77v14c0,3.31,2.69,6,6,6h2V63h6V27.77h2c3.31,0,6-2.69,6-6v-14h-4v14c0,1.1-0.9,2-2,2v-16h-4v16h-2v-16h-4v16
		c-1.1,0-2-0.9-2-2v-14H16z"/>
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
