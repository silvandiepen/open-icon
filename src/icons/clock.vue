<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24
		c0-13.23,10.77-24,24-24c13.23,0,24,10.77,24,24C60,49.23,49.23,60,36,60z"/>
	<path d="M38,35.17V18c0-1.1-0.9-2-2-2s-2,0.9-2,2v18c0,0.53,0.21,1.04,0.59,1.41l9,9C43.98,46.8,44.49,47,45,47s1.02-0.2,1.41-0.59
		c0.78-0.78,0.78-2.05,0-2.83L38,35.17z"/>
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
