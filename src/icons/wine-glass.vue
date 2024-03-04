<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M50.61,21.12L46.82,10.5H25.09L21.3,21.12c-1.11,3.11-1.54,6.43-1.25,9.59c0.11,1.12,0.28,2.02,0.53,2.75
			c2.02,5.91,7.43,7.53,12.3,7.92l0.1,14.11H26v6h20v-6h-7.02l-0.1-14.1c4.91-0.37,10.41-1.96,12.45-7.93
			c0.25-0.73,0.42-1.65,0.53-2.75C52.15,27.55,51.72,24.24,50.61,21.12z M26.95,23.14l2.37-6.64h13.27l2.37,6.64v0
			c0.12,0.33,0.2,0.66,0.3,0.99c-5.73,0.48-8.93,2.22-11.79,3.79c-2.24,1.23-4.26,2.31-7.38,2.7c-0.02-0.14-0.04-0.28-0.05-0.46
			C25.82,27.86,26.14,25.43,26.95,23.14z M45.88,30.16c-0.06,0.7-0.16,1.16-0.23,1.37c-0.67,1.96-2.35,3.97-9.7,3.97
			c-3.68,0-5.93-0.5-7.35-1.25c2.78-0.63,4.8-1.74,6.78-2.82c2.79-1.53,5.46-2.98,10.54-3.34C45.95,28.79,45.95,29.48,45.88,30.16z"
			/>
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
