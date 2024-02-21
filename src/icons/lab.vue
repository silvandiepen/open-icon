<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M21.59,66h28.82c3.25,0,6.16-1.68,7.78-4.48c1.63-2.81,1.64-6.17,0.03-8.98L45.75,30.7V16.5h1.75c0.28,0,0.5-0.22,0.5-0.5
		v-5c0-0.28-0.22-0.5-0.5-0.5h-4.75h-13.5H24.5c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h1.75v14.2L13.77,52.53
		c-1.61,2.82-1.6,6.18,0.03,8.98C15.43,64.32,18.34,66,21.59,66z M39.75,16.5v15c0,0.52,0.14,1.04,0.4,1.49l6.58,11.52
		c-2.15,0.6-5.56,0.83-9.84-1.3c-3.76-1.88-7.04-2.29-9.69-2.09l4.65-8.13c0.26-0.45,0.4-0.97,0.4-1.49v-15H39.75z M18.98,55.51
		l5.6-9.81c2.07-0.73,5.75-1.29,10.52,1.09c3.21,1.6,6.08,2.14,8.5,2.14c2.08,0,3.83-0.4,5.15-0.87l4.26,7.45
		c0.77,1.35,0.25,2.55-0.01,2.99S51.97,60,50.41,60H21.59c-1.56,0-2.33-1.04-2.59-1.49S18.21,56.87,18.98,55.51z"/>
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
