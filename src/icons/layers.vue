<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M62.17,25.44L39.88,10.58c-2.36-1.57-5.41-1.57-7.77,0L9.83,25.44c-1.39,0.93-2.23,2.48-2.23,4.16s0.83,3.23,2.23,4.16
			l22.29,14.86c1.18,0.79,2.53,1.18,3.88,1.18s2.7-0.39,3.88-1.18l22.29-14.86c1.39-0.93,2.23-2.48,2.23-4.16
			S63.56,26.37,62.17,25.44z M36.56,43.62c-0.34,0.22-0.77,0.23-1.11,0L14.41,29.6l21.04-14.02c0.34-0.22,0.77-0.22,1.11,0
			L57.59,29.6L36.56,43.62z"/>
	</g>
	<g>
		<path d="M62.22,39.32L36.55,56.43c-0.34,0.22-0.77,0.22-1.11,0L9.78,39.32C9.45,39.1,9,39.33,9,39.73v6.01
			c0,0.17,0.08,0.32,0.22,0.42l22.89,15.26c1.18,0.79,2.53,1.18,3.88,1.18c1.35,0,2.7-0.39,3.88-1.18l22.89-15.26
			c0.14-0.09,0.22-0.25,0.22-0.42v-6.01C63,39.33,62.55,39.1,62.22,39.32z"/>
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
