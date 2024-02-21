<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M38.77,55.74L16.26,33.23c-1.26-1.26-0.37-3.41,1.41-3.41h13.9l7.79-7.79v-7.54c0-1.78,2.15-2.67,3.41-1.41l16.14,16.14
		c1.26,1.26,0.37,3.41-1.41,3.41h-7.54l-7.79,7.79v13.9C42.18,56.11,40.03,57,38.77,55.74z M27.33,35.82l8.85,8.85v-6.73l11.3-11.3
		h0.36l-2.49-2.48v0.36l-11.3,11.3H27.33z"/>
	<path d="M16.55,57.57l-2.12-2.12c-0.2-0.2-0.2-0.51,0-0.71l15.2-15.2l2.83,2.83l-15.2,15.2C17.07,57.76,16.75,57.76,16.55,57.57z"
		/>
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
