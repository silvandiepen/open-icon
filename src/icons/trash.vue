<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M58.5,19.5h-9h-6v-6c0-1.66-1.34-3-3-3h-9c-1.66,0-3,1.34-3,3v6h-6h-9c-1.66,0-3,1.34-3,3s1.34,3,3,3h6v25
		c0,6.07,4.93,11,11,11h11c6.07,0,11-4.93,11-11v-25h6c1.66,0,3-1.34,3-3S60.16,19.5,58.5,19.5z M34.5,16.5h3v3h-3V16.5z M46.5,50.5
		c0,2.76-2.24,5-5,5h-11c-2.76,0-5-2.24-5-5v-25h21V50.5z"/>
	<path d="M38.5,31.5v18c0,1.1,0.9,2,2,2s2-0.9,2-2v-18c0-1.1-0.9-2-2-2S38.5,30.4,38.5,31.5z"/>
	<path d="M31.5,29.5c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2s2-0.9,2-2v-18C33.5,30.4,32.6,29.5,31.5,29.5z"/>
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
