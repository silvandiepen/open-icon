<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M15.49,56.51c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59L28.93,45.9l8.13,8.13c0.57,0.57,1.34,0.88,2.12,0.88
		c0.39,0,0.78-0.07,1.15-0.23c1.12-0.46,1.85-1.56,1.85-2.77V40.42l7.79-7.79h5.12c1.21,0,2.31-0.73,2.77-1.85
		c0.46-1.12,0.21-2.41-0.65-3.27L44.49,14.79c-0.86-0.86-2.15-1.12-3.27-0.65c-1.12,0.46-1.85,1.56-1.85,2.77v5.12l-7.79,7.79H20.09
		c-1.21,0-2.31,0.73-2.77,1.85c-0.46,1.12-0.21,2.41,0.65,3.27l8.13,8.13L15.49,53.68C14.71,54.46,14.71,55.73,15.49,56.51z
		 M32.82,35.82c0.8,0,1.56-0.32,2.12-0.88l9.55-9.55c0.38-0.38,0.64-0.84,0.78-1.34l2.69,2.69c-0.5,0.14-0.97,0.4-1.34,0.78
		l-9.55,9.55c-0.56,0.56-0.88,1.33-0.88,2.12v5.48l-8.85-8.85H32.82z"/>
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
