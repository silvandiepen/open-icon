<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M64.1,9.12L6.55,31.31c-3.93,1.58-3.9,3.77-0.72,4.74l14.76,4.61l5.08,16.71c0.67,1.84,0.34,2.57,2.27,2.57
			c1.49,0,2.15-0.68,2.99-1.49l7.18-6.98L53.04,62.5c2.75,1.52,4.73,0.73,5.41-2.55l9.8-46.18C69.26,9.75,66.72,7.92,64.1,9.12z
			 M32.93,44.51L28.02,55.5l-4.87-16.03l37.49-22.24L32.93,44.51z"/>
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
