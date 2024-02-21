<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M58,25.5H14c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h44c0.28,0,0.5,0.22,0.5,0.5v5
		C58.5,25.28,58.28,25.5,58,25.5z"/>
	<path d="M41.5,61.5h-11c-6.07,0-11-4.93-11-11v-31h33v31C52.5,56.57,47.57,61.5,41.5,61.5z M25.5,25.5v25c0,2.76,2.24,5,5,5h11
		c2.76,0,5-2.24,5-5v-25H25.5z"/>
	<path d="M42,49.5h-3c-0.28,0-0.5-0.22-0.5-0.5V32c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v17
		C42.5,49.28,42.28,49.5,42,49.5z"/>
	<path d="M33,49.5h-3c-0.28,0-0.5-0.22-0.5-0.5V32c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v17
		C33.5,49.28,33.28,49.5,33,49.5z"/>
	<path d="M43.5,22.5h-6v-6h-3v6h-6V11c0-0.28,0.22-0.5,0.5-0.5h14c0.28,0,0.5,0.22,0.5,0.5V22.5z"/>
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
