<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M61,33h-9.5V22.5C51.5,13.95,44.55,7,36,7s-15.5,6.95-15.5,15.5V33H11c-0.28,0-0.5,0.22-0.5,0.5V55c0,6.08,4.92,11,11,11
		h29c6.08,0,11-4.92,11-11V33.5C61.5,33.22,61.28,33,61,33z M24.5,22.5C24.5,16.16,29.66,11,36,11s11.5,5.16,11.5,11.5V33h-23V22.5z
		 M55.5,55c0,2.76-2.24,5-5,5h-29c-2.76,0-5-2.24-5-5V39h39V55z"/>
	<path d="M33.5,57h5c0.28,0,0.5-0.22,0.5-0.5v-14c0-0.28-0.22-0.5-0.5-0.5h-5c-0.28,0-0.5,0.22-0.5,0.5v14
		C33,56.78,33.22,57,33.5,57z"/>
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
