<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54,48c-1.1,0-2.16-0.61-2.69-1.66L45,33.71l-6.32,12.63c-0.74,1.48-2.54,2.08-4.02,1.34c-1.48-0.74-2.08-2.54-1.34-4.02
		l9-18C42.82,24.64,43.86,24,45,24s2.18,0.64,2.68,1.66l9,18c0.74,1.48,0.14,3.28-1.34,4.02C54.91,47.9,54.45,48,54,48z"/>
	<path d="M51.75,43.5h-13.5c-1.66,0-3-1.34-3-3s1.34-3,3-3h13.5c1.66,0,3,1.34,3,3S53.41,43.5,51.75,43.5z"/>
</g>
<path d="M20.25,48c-5.38,0-9.75-4.37-9.75-9.75s4.37-9.75,9.75-9.75S30,32.87,30,38.25S25.63,48,20.25,48z M20.25,34.5
	c-2.07,0-3.75,1.68-3.75,3.75S18.18,42,20.25,42S24,40.32,24,38.25S22.32,34.5,20.25,34.5z"/>
<path d="M27,48c-1.66,0-3-1.34-3-3V31.5c0-1.66,1.34-3,3-3s3,1.34,3,3V45C30,46.66,28.66,48,27,48z"/>

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
