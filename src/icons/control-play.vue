<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M20.87,54.42c0.78,0.45,1.64,0.68,2.5,0.68c0.85,0,1.7-0.22,2.48-0.67l25.39-14.51c1.58-0.9,2.54-2.59,2.52-4.41
		c-0.02-1.82-1.04-3.48-2.64-4.34L25.61,17.5c-1.57-0.84-3.42-0.79-4.94,0.12c-1.52,0.92-2.43,2.53-2.42,4.31l0.12,28.18
		C18.38,51.91,19.31,53.52,20.87,54.42z M46.69,35.61L24.36,48.37l-0.11-24.79L46.69,35.61z"/>
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
