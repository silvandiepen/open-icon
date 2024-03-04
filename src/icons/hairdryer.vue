<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M11.39,32.34c3.38,11.52,17.58,23.46,18.19,23.96L30.41,57h4.85l0.08,0.15c0.42,0.84,0.38,1.79-0.12,2.59
			c-0.5,0.8-1.32,1.26-2.26,1.26H22.5v4h10.46c2.33,0,4.44-1.18,5.67-3.16c0.91-1.48,1.2-3.2,0.86-4.84h5.05l-4.78-15.89
			c9.37-2.65,19.23-6.57,19.86-6.82l1.89-0.75V20.47l-1.89-0.75C58.67,19.34,36.47,10.5,27,10.5c-9.1,0-16.5,7.4-16.5,16.5
			c0,1.87,0.33,3.66,0.9,5.34L11.39,32.34z M36.47,51h-3.85c-1.41-1.25-4.49-4.09-7.58-7.63c0.64,0.08,1.3,0.13,1.96,0.13
			c1.89,0,4.3-0.36,6.94-0.92L36.47,51z M27,16.5c6.29,0,21.26,5.26,28.5,8.05v4.91C48.26,32.24,33.29,37.5,27,37.5
			c-5.79,0-10.5-4.71-10.5-10.5S21.21,16.5,27,16.5z"/>
	</g>
	<g>
		<path d="M27,33.5c3.58,0,6.5-2.92,6.5-6.5s-2.92-6.5-6.5-6.5s-6.5,2.92-6.5,6.5S23.42,33.5,27,33.5z M27,24.5
			c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5S25.62,24.5,27,24.5z"/>
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
