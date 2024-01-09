<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M10.5,22.5v25c0,1.14,0.64,2.18,1.66,2.68l22.5,11.25c0.42,0.21,0.88,0.32,1.34,0.32s0.92-0.11,1.34-0.32l22.5-11.25
		c1.02-0.51,1.66-1.55,1.66-2.68v-25c0-1.14-0.64-2.18-1.66-2.68L37.34,8.57c-0.85-0.42-1.84-0.42-2.68,0l-22.5,11.25
		C11.14,20.32,10.5,21.36,10.5,22.5z M16.5,26.24L34,34.99V54.4l-17.5-8.75V26.24z M38,54.4V34.99l17.5-8.75v19.41L38,54.4z
		 M36,14.6l16.91,8.45L36,31.51l-16.91-8.45L36,14.6z"/>
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
