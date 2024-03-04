<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M45.75,45.88v-0.69c0-3.35,1.18-6.68,3.42-9.63c2.18-2.88,3.33-6.31,3.33-9.93c0-4.69-2-9.17-5.5-12.3
			c-3.49-3.12-8.18-4.62-12.87-4.1c-7.83,0.87-13.96,7.21-14.58,15.08c-0.33,4.19,0.93,8.29,3.53,11.56
			c2.05,2.57,3.17,5.88,3.17,9.31v0.69c0,1.66,1.34,3,3,3h13.5C44.41,48.88,45.75,47.53,45.75,45.88z M39.88,42.88h-7.76
			c-0.42-3.95-1.93-7.7-4.35-10.74c-1.65-2.08-2.45-4.69-2.24-7.36c0.38-4.92,4.36-9.04,9.26-9.59c3.04-0.34,5.96,0.59,8.21,2.61
			c2.22,1.99,3.5,4.84,3.5,7.83c0,2.3-0.73,4.48-2.12,6.31C41.85,35.27,40.32,39.02,39.88,42.88z"/>
	</g>
	<g>
		<path d="M44.8,52.88c0-1.1-0.9-2-2-2H29.2c-1.1,0-2,0.9-2,2s0.9,2,2,2H42.8C43.91,54.88,44.8,53.98,44.8,52.88z"/>
	</g>
	<g>
		<path d="M31.5,57.88c-1.1,0-2,0.9-2,2s0.9,2,2,2h9c1.1,0,2-0.9,2-2s-0.9-2-2-2H31.5z"/>
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
