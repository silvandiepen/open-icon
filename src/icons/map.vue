<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M27,61.59l-15.7-3.92C8.18,56.89,6,54.1,6,50.88V18.62c0-2.17,0.98-4.18,2.69-5.52c1.71-1.34,3.9-1.8,6.01-1.27L27,14.91
	l18-4.5l15.7,3.92c3.12,0.78,5.3,3.57,5.3,6.79v32.25c0,2.17-0.98,4.18-2.69,5.52c-1.71,1.34-3.9,1.8-6,1.27L45,57.09L27,61.59z
	 M12.99,17.62c-0.28,0-0.5,0.13-0.61,0.21C12.24,17.95,12,18.2,12,18.62v32.25c0,0.46,0.31,0.86,0.76,0.97L27,55.41l18-4.5
	l13.76,3.44c0.41,0.1,0.71-0.07,0.86-0.18C59.76,54.05,60,53.8,60,53.38V21.12c0-0.46-0.31-0.86-0.76-0.97L45,16.59l-18,4.5
	l-13.76-3.44C13.15,17.63,13.07,17.62,12.99,17.62z"/>
<rect x="25" y="18" width="4" height="40.5"/>
<rect x="43" y="13.5" width="4" height="40.5"/>

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
