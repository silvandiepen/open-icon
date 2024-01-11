<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,7c-8.55,0-15.5,6.95-15.5,15.5V33h-7c-1.66,0-3,1.34-3,3v19c0,6.07,4.93,11,11,11h29c6.07,0,11-4.93,11-11V36
		c0-1.66-1.34-3-3-3h-7V22.5C51.5,13.95,44.55,7,36,7z M24.5,22.5C24.5,16.16,29.66,11,36,11s11.5,5.16,11.5,11.5V33h-23V22.5z
		 M55.5,55c0,2.76-2.24,5-5,5h-29c-2.76,0-5-2.24-5-5V39h39V55z"/>
	<path d="M36,57c1.66,0,3-1.34,3-3v-9c0-1.66-1.34-3-3-3s-3,1.34-3,3v9C33,55.66,34.34,57,36,57z"/>
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
