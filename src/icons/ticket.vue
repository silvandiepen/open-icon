<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54,6h-9c-1.66,0-3,1.34-3,3c0,3.31-2.69,6-6,6s-6-2.69-6-6c0-1.66-1.34-3-3-3h-9c-1.66,0-3,1.34-3,3v54c0,1.66,1.34,3,3,3
		h9c1.66,0,3-1.34,3-3c0-3.31,2.69-6,6-6s6,2.69,6,6c0,1.66,1.34,3,3,3h9c1.66,0,3-1.34,3-3V9C57,7.34,55.66,6,54,6z M47.62,60
		c-1.33-5.17-6.04-9-11.62-9c-5.58,0-10.28,3.83-11.62,9H21V47h1.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H21V12h3.38c1.34,5.17,6.04,9,11.62,9
		c5.58,0,10.29-3.83,11.62-9H51v31h-1.5c-1.1,0-2,0.9-2,2s0.9,2,2,2H51v13H47.62z"/>
	<path d="M40.5,43h-9c-1.1,0-2,0.9-2,2s0.9,2,2,2h9c1.1,0,2-0.9,2-2S41.6,43,40.5,43z"/>
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
