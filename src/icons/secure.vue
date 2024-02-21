<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36.2,61.7c-0.13,0.06-0.28,0.06-0.41,0l-1.02-0.46c-0.2-0.09-4.84-2.18-9.53-5.58C18.45,50.74,15,45.64,15,40.5V11
		c0-0.28,0.22-0.5,0.5-0.5h41c0.28,0,0.5,0.22,0.5,0.5v29.5c0,5.14-3.45,10.24-10.24,15.16c-4.7,3.4-9.34,5.49-9.53,5.58L36.2,61.7z
		 M21,16.5v24c0,5.95,10.07,12.21,15,14.68c4.93-2.47,15-8.72,15-14.68v-24H21z"/>
	<rect x="34" y="13.5" width="4" height="45"/>
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
