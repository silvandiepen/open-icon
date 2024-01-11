<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M64.46,29.64c0-0.8-0.32-1.56-0.88-2.12L44.48,8.42c-1.17-1.17-3.07-1.17-4.24,0L8.42,40.24
		c-0.56,0.56-0.88,1.33-0.88,2.12s0.32,1.56,0.88,2.12l19.09,19.09c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88l31.82-31.82
		C64.14,31.19,64.46,30.43,64.46,29.64z M29.64,57.21L14.79,42.36l27.58-27.58l14.85,14.85L29.64,57.21z"/>
	<path d="M69.76,48.09L63,41.32l-6.76,6.77c-0.78,0.78-0.78,2.05,0,2.83c0.78,0.78,2.05,0.78,2.83,0L61,48.98V54c0,3.86-3.14,7-7,7
		c-1.1,0-2,0.9-2,2s0.9,2,2,2c6.07,0,11-4.93,11-11v-5.02l1.94,1.94c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59
		C70.54,50.13,70.54,48.87,69.76,48.09z"/>
	<path d="M15.76,23.06c0.78-0.78,0.78-2.05,0-2.83c-0.78-0.78-2.05-0.78-2.83,0L11,22.17V18c0-3.86,3.14-7,7-7c1.1,0,2-0.9,2-2
		s-0.9-2-2-2C11.93,7,7,11.93,7,18v4.17l-1.94-1.94c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83L9,29.83L15.76,23.06z"
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
