<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24
		c0-13.23,10.77-24,24-24c13.23,0,24,10.77,24,24C60,49.23,49.23,60,36,60z"/>
	<path d="M45.88,21.05l-18.61,6.2l-6.22,18.62c-0.49,1.46-0.11,3.03,0.98,4.11c0.77,0.76,1.77,1.16,2.8,1.16
		c0.43,0,0.86-0.07,1.28-0.21l18.61-6.2l6.18-18.55c0.52-1.45,0.17-3.03-0.9-4.13C48.92,20.95,47.35,20.56,45.88,21.05z
		 M39.98,39.99l-11.96,3.99l4-11.97l11.96-3.99L39.98,39.99z"/>
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
