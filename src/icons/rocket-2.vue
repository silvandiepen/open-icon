<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M17.86,60.51c-3.18,3.18-9.55,3.18-9.55,3.18
		s0-6.36,3.18-9.55c1.76-1.76,4.61-1.76,6.36,0C19.62,55.9,19.62,58.75,17.86,60.51z"/>
	<path d="M34.24,53.35c0,0-6.67-0.31-10.98-4.61
		s-4.61-10.98-4.61-10.98C33.83,16.26,48.43,9.84,56.96,8c4.22-0.91,7.95,2.82,7.04,7.04C62.16,23.57,55.74,38.17,34.24,53.35z"/>
	<path d="M48.72,57.15l0-16.02
		c-3.84,3.96-8.59,8.07-14.48,12.23l0.56,4.64c0.58,4.8,5.74,7.57,10.06,5.41C47.22,62.22,48.72,59.8,48.72,57.15z"/>
	<path d="M30.87,23.28l-16.02,0
		c-2.65,0-5.06,1.49-6.25,3.86c-2.16,4.32,0.61,9.48,5.41,10.06l4.64,0.56C22.81,31.88,26.92,27.13,30.87,23.28z"/>
</g>
<line x1="45" y1="27" x2="45" y2="27"/>

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
