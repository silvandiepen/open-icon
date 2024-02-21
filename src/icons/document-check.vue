<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54.5,66H33.81c-0.37,0-0.61-0.39-0.45-0.72l2.5-5c0.08-0.17,0.26-0.28,0.45-0.28H54.5c0.55,0,1-0.45,1-1V28.24L39.26,12
		H17.5c-0.55,0-1,0.45-1,1v31.5c0,0.47-0.6,0.68-0.89,0.31l-5-6.25c-0.07-0.09-0.11-0.2-0.11-0.31V13c0-3.87,3.13-7,7-7h24.24
		L61.5,25.76V59C61.5,62.87,58.37,66,54.5,66z"/>
	<path d="M60.5,29h-16c-3.31,0-6-2.69-6-6V7h4v16c0,1.1,0.9,2,2,2h16V29z"/>
</g>
<path d="M22.83,67.57L9.61,54.35c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54c0.2-0.2,0.51-0.2,0.71,0l7.82,7.82l8.26-16.51
	c0.12-0.25,0.42-0.35,0.67-0.22l4.47,2.24c0.25,0.12,0.35,0.42,0.22,0.67L23.63,67.44C23.48,67.75,23.07,67.82,22.83,67.57z"/>

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
