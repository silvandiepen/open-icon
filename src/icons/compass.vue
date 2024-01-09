<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z"/>
	<path d="M45.88,21.06l-18.62,6.21l-6.21,18.62c-0.48,1.45-0.11,3.01,0.96,4.09c0.77,0.77,1.78,1.18,2.82,1.18
		c0.42,0,0.85-0.07,1.27-0.21l18.62-6.21l6.21-18.62c0.48-1.45,0.11-3.01-0.96-4.09C48.9,20.95,47.33,20.58,45.88,21.06z
		 M39.99,39.99l-11.98,3.99l3.99-11.98l11.98-3.99L39.99,39.99z"/>
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
