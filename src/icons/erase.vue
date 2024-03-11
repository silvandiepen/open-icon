<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M37.09,61.03H65.5c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5H44.33l14.65-14.65c2.73-2.73,2.73-7.17,0-9.9
		L45.55,17.05c-2.73-2.73-7.17-2.73-9.9,0L13.02,39.68c-1.32,1.32-2.05,3.08-2.05,4.95c0,1.87,0.73,3.63,2.05,4.95l5.45,5.45H6.5
		c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h19.22H37.09z M39.89,21.29c0.39-0.39,1.02-0.39,1.42,0l13.44,13.44
		c0.39,0.39,0.39,1.02,0,1.41l-14.5,14.5L25.39,35.79L39.89,21.29z M17.26,45.33c-0.25-0.26-0.29-0.55-0.29-0.71
		c0-0.15,0.04-0.45,0.29-0.71l5.3-5.3l14.85,14.85l-1.56,1.56h-8.89L17.26,45.33z"/>
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
