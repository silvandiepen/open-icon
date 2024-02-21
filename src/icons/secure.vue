<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M56.5,10.5h-41c-0.28,0-0.5,0.22-0.5,0.5v29.5c0,5.14,3.45,10.24,10.24,15.16c4.7,3.4,9.34,5.49,9.53,5.58l1.02,0.46
		c0.13,0.06,0.28,0.06,0.41,0l1.02-0.46c0.2-0.09,4.84-2.18,9.53-5.58C53.55,50.74,57,45.64,57,40.5V11
		C57,10.72,56.78,10.5,56.5,10.5z M21,40.5v-24h13v37.62C28.77,51.19,21,45.73,21,40.5z M51,40.5c0,5.23-7.77,10.69-13,13.62V16.5
		h13V40.5z"/>
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
