<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M22.28,53.96l14.34,2.87c0.2,0.04,0.39,0.06,0.59,0.06c0.79,0,1.55-0.31,2.12-0.88l19.09-19.09
		c6.43-6.43,6.43-16.9,0-23.33c-6.43-6.43-16.9-6.43-23.33,0L15.99,32.67c-0.71,0.71-1.02,1.73-0.82,2.71l2.87,14.34l-8.41,8.41
		c-1.17,1.17-1.17,3.07,0,4.24c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88L22.28,53.96z M36.22,50.63l-10.02-2l5.3-5.3
		l10.02,2L36.22,50.63z M54.18,32.67l-9.26,9.26l-10.02-2l20.55-20.55C58.21,23.46,57.79,29.06,54.18,32.67z M39.33,17.82
		c3.61-3.61,9.21-4.03,13.3-1.28L29.44,39.73c0,0-0.01,0.01-0.01,0.01l-6.05,6.05l-2-10.02L39.33,17.82z"/>
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
