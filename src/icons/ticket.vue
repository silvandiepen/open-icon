<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M27,66c1.66,0,3-1.34,3-3c0-3.31,2.69-6,6-6s6,2.69,6,6c0,1.66,1.34,3,3,3h9c1.66,0,3-1.34,3-3V9c0-1.66-1.34-3-3-3h-9
		c-1.66,0-3,1.34-3,3c0,3.31-2.69,6-6,6s-6-2.69-6-6c0-1.66-1.34-3-3-3h-9c-1.66,0-3,1.34-3,3v54c0,1.66,1.34,3,3,3H27z M24.38,12
		c1.33,5.17,6.04,9,11.62,9s10.29-3.83,11.62-9H51v31h-1.5c-1.1,0-2,0.9-2,2s0.9,2,2,2H51v13h-3.38c-1.33-5.17-6.04-9-11.62-9
		s-10.29,3.83-11.62,9H21V47h1.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H21V12H24.38z"/>
	<path d="M31.5,47h9c1.1,0,2-0.9,2-2s-0.9-2-2-2h-9c-1.1,0-2,0.9-2,2S30.4,47,31.5,47z"/>
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
