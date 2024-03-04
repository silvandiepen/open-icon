<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M50.67,10.5H21.24L16.1,24.92c-1.54,4.31-2.13,8.89-1.72,13.25c0.14,1.48,0.37,2.71,0.69,3.66
			c2.84,8.31,10.92,10.23,17.85,10.6l0.04,3.08H27v6h18v-6h-6.04l-0.04-3.07c6.95-0.35,15.08-2.26,17.93-10.6
			c0.32-0.95,0.56-2.18,0.7-3.66c0.41-4.36-0.19-8.95-1.72-13.25L50.67,10.5z M21.75,26.94l3.72-10.44h20.97l3.72,10.44
			c0.31,0.87,0.57,1.76,0.79,2.65c-9.05,0.49-13.87,3.11-18.16,5.45c-3.62,1.98-6.81,3.72-12.23,4.14
			c-0.07-0.37-0.15-0.88-0.22-1.57C20.02,34.12,20.51,30.42,21.75,26.94z M51.57,37.61c-0.13,1.38-0.32,2.05-0.4,2.28
			c-1.58,4.63-6.13,6.61-15.21,6.61c-6.71,0-10.95-1.09-13.34-3.52c5.28-0.71,8.73-2.59,12.09-4.43c4.16-2.28,8.47-4.61,16.88-4.99
			C51.7,34.92,51.69,36.28,51.57,37.61z"/>
	</g>
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
