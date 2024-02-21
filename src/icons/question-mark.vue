<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,48c-1.66,0-3-1.34-3-3c0-4.47,2.42-8.52,6.31-10.56c2.35-1.24,3.81-3.66,3.81-6.31c0-2.02-0.87-3.96-2.37-5.31
		c-1.53-1.37-3.51-2-5.57-1.77c-3.27,0.36-5.9,3-6.26,6.27c-0.12,1.1,0,2.17,0.36,3.18c0.55,1.56-0.27,3.28-1.83,3.83
		c-1.56,0.55-3.28-0.27-3.83-1.83c-0.66-1.87-0.89-3.83-0.67-5.83c0.65-6.05,5.52-10.92,11.56-11.59c3.73-0.42,7.46,0.78,10.24,3.26
		c2.78,2.49,4.37,6.05,4.37,9.78c0,4.89-2.69,9.34-7.02,11.62C40.19,40.75,39,42.77,39,45C39,46.66,37.66,48,36,48z"/>
	<g>
		<path d="M36,57c-0.79,0-1.56-0.32-2.12-0.88C33.32,55.56,33,54.79,33,54s0.32-1.56,0.88-2.12c0.14-0.14,0.29-0.27,0.45-0.37
			c0.17-0.11,0.34-0.2,0.52-0.28c0.18-0.07,0.37-0.13,0.56-0.17c0.98-0.2,2.02,0.12,2.71,0.82C38.68,52.44,39,53.21,39,54
			s-0.32,1.56-0.88,2.12C37.56,56.68,36.79,57,36,57z"/>
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
