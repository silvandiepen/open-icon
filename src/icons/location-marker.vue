<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,6c-11.58,0-21,9.42-21,21c0,19.63,18.86,29.28,19.66,29.68C35.08,56.89,35.54,57,36,57s0.92-0.11,1.34-0.32
		C38.14,56.28,57,46.63,57,27C57,15.42,47.58,6,36,6z M36,50.54C32.09,48.13,21,40.14,21,27c0-8.27,6.73-15,15-15
		c8.27,0,15,6.73,15,15C51,40.15,39.91,48.14,36,50.54z"/>
	<path d="M36,16c-6.07,0-11,4.93-11,11s4.93,11,11,11s11-4.93,11-11S42.07,16,36,16z M36,34c-3.86,0-7-3.14-7-7s3.14-7,7-7
		c3.86,0,7,3.14,7,7S39.86,34,36,34z"/>
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
