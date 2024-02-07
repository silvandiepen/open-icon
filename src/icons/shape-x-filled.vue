<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M62.34,17.79l-8.13-8.13c-0.39-0.39-1.02-0.39-1.41,0L36,26.45L19.21,9.66c-0.39-0.39-1.02-0.39-1.41,0l-8.13,8.13
		c-0.39,0.39-0.39,1.02,0,1.41L26.45,36L9.66,52.79c-0.39,0.39-0.39,1.02,0,1.41l8.13,8.13c0.39,0.39,1.02,0.39,1.41,0L36,45.55
		l16.79,16.79c0.39,0.39,1.02,0.39,1.41,0l8.13-8.13c0.39-0.39,0.39-1.02,0-1.41L45.55,36l16.79-16.79
		C62.73,18.82,62.73,18.18,62.34,17.79z"/>
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
