<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M39,49.5h3c0.28,0,0.5-0.22,0.5-0.5V32c0-0.28-0.22-0.5-0.5-0.5h-3c-0.28,0-0.5,0.22-0.5,0.5v17
		C38.5,49.28,38.72,49.5,39,49.5z"/>
	<path d="M30,49.5h3c0.28,0,0.5-0.22,0.5-0.5V32c0-0.28-0.22-0.5-0.5-0.5h-3c-0.28,0-0.5,0.22-0.5,0.5v17
		C29.5,49.28,29.72,49.5,30,49.5z"/>
	<path d="M43,10.5H29c-0.28,0-0.5,0.22-0.5,0.5v8.5h-9H14c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h5.5v25
		c0,6.07,4.93,11,11,11h11c6.07,0,11-4.93,11-11v-25H58c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5h-5.5h-9V11
		C43.5,10.72,43.28,10.5,43,10.5z M34.5,16.5h3v3h-3V16.5z M46.5,50.5c0,2.76-2.24,5-5,5h-11c-2.76,0-5-2.24-5-5v-25h21V50.5z"/>
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
