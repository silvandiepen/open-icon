<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M60.7,14.33L45,10.41l-18,4.5l-12.3-3.08c-2.11-0.53-4.29-0.06-6.01,1.27C6.98,14.44,6,16.45,6,18.62v32.25
		c0,3.22,2.18,6.01,5.3,6.79L27,61.59l18-4.5l12.3,3.08c2.1,0.53,4.29,0.06,6-1.27c1.71-1.34,2.69-3.35,2.69-5.52V21.12
		C66,17.9,63.82,15.11,60.7,14.33z M29,20.59l14-3.5v34.32l-14,3.5V20.59z M12,50.88V18.62c0-0.42,0.24-0.68,0.38-0.79
		c0.11-0.09,0.32-0.21,0.61-0.21c0.08,0,0.16,0.01,0.25,0.03L25,20.59v34.32l-12.24-3.06C12.31,51.74,12,51.34,12,50.88z M60,53.38
		c0,0.42-0.24,0.68-0.38,0.79c-0.14,0.11-0.44,0.29-0.86,0.18L47,51.41V17.09l12.24,3.06c0.45,0.11,0.76,0.51,0.76,0.97V53.38z"/>
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
