<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M34.66,56.68C35.08,56.89,35.54,57,36,57s0.92-0.11,1.34-0.32C38.14,56.28,57,46.63,57,27c0-11.58-9.42-21-21-21
		s-21,9.42-21,21C15,46.63,33.86,56.28,34.66,56.68z M36,12c8.27,0,15,6.73,15,15c0,13.15-11.09,21.14-15,23.54
		C32.09,48.13,21,40.14,21,27C21,18.73,27.73,12,36,12z"/>
	<path d="M47,27c0-6.07-4.93-11-11-11s-11,4.93-11,11s4.93,11,11,11S47,33.07,47,27z M29,27c0-3.86,3.14-7,7-7s7,3.14,7,7
		s-3.14,7-7,7S29,30.86,29,27z"/>
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
