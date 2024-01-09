<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M11.41,63.41l10.68-10.68c3.75,3.11,8.43,4.81,13.37,4.81c5.61,0,10.88-2.18,14.85-6.15c0,0,0,0,0,0
		C63.93,37.76,60.84,14.82,60.7,13.85l-0.32-2.23l-2.23-0.32c-0.97-0.14-23.92-3.24-37.55,10.39c-7.71,7.71-8.15,19.97-1.34,28.21
		L8.59,60.59L11.41,63.41z M20.46,36.54c0-4.01,1.56-7.77,4.39-10.61c7.73-7.73,19.66-9.01,26.7-9.01c1.34,0,2.5,0.05,3.42,0.1
		c0.36,5.78,0.29,20.92-8.91,30.12v0c-2.83,2.83-6.6,4.39-10.61,4.39c-3.33,0-6.49-1.09-9.09-3.08l16.87-16.87l-2.83-2.83
		L23.54,45.63C21.55,43.03,20.46,39.88,20.46,36.54z"/>
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
