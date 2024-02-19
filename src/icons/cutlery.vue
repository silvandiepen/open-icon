<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M56.25,10.5c-5.47,0-9.75,5.27-9.75,12c0,5.43,2.79,9.91,6.75,11.44V61.5h6V33.94c3.96-1.52,6.75-6,6.75-11.44
		C66,15.77,61.72,10.5,56.25,10.5z M56.25,28.5c-1.77,0-3.75-2.46-3.75-6s1.98-6,3.75-6s3.75,2.46,3.75,6S58.02,28.5,56.25,28.5z"/>
	<path d="M21.62,23.5h-2.87v-13h-6v13H9.88v-13h-6v15c0,5.57,3.78,10.25,8.87,11.6v24.4h6V37.1c5.09-1.35,8.87-6.03,8.87-11.6v-15
		h-6V23.5z M15.75,31.5c-2.55,0-4.72-1.67-5.53-4h11.06C20.47,29.83,18.3,31.5,15.75,31.5z"/>
	<path d="M28.5,31.5c0,7.65,3.03,11.68,9,11.98V61.5h6v-51h-5.25C30.81,10.5,28.5,25.89,28.5,31.5z M37.5,37.48
		c-1.58-0.1-3-0.8-3-5.98c0-5.31,1.57-11.02,3-13.66V37.48z"/>
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
