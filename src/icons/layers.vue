<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M39.88,10.58c-2.36-1.57-5.41-1.57-7.77,0L9.83,25.44c-1.39,0.93-2.23,2.48-2.23,4.16s0.83,3.23,2.23,4.16l22.29,14.86
		c1.18,0.79,2.53,1.18,3.88,1.18s2.7-0.39,3.88-1.18l22.29-14.86c1.39-0.93,2.23-2.48,2.23-4.16s-0.83-3.23-2.23-4.16L39.88,10.58z
		 M36.56,43.62c-0.34,0.22-0.77,0.23-1.11,0L14.41,29.6l21.04-14.02c0.34-0.22,0.77-0.22,1.11,0L57.59,29.6L36.56,43.62z"/>
	<path d="M61.34,39.91L36.55,56.43c-0.34,0.22-0.77,0.22-1.11,0L10.66,39.91c-1.38-0.92-3.24-0.55-4.16,0.83
		c-0.92,1.38-0.55,3.24,0.83,4.16l24.78,16.52c1.18,0.79,2.53,1.18,3.88,1.18c1.35,0,2.7-0.39,3.88-1.18L64.66,44.9
		c1.38-0.92,1.75-2.78,0.83-4.16C64.58,39.36,62.72,38.99,61.34,39.91z"/>
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
