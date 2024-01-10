<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M25.24,55.66c4.7,3.4,9.34,5.49,9.53,5.58c0.39,0.17,0.81,0.26,1.23,0.26s0.84-0.09,1.23-0.26
		c0.2-0.09,4.84-2.18,9.53-5.58C53.55,50.74,57,45.64,57,40.5v-27c0-1.66-1.34-3-3-3H18c-1.66,0-3,1.34-3,3v27
		C15,45.64,18.45,50.74,25.24,55.66z M51,40.5c0,5.23-7.77,10.69-13,13.62V16.5h13V40.5z M21,16.5h13v37.62
		c-5.23-2.92-13-8.39-13-13.62V16.5z"/>
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
