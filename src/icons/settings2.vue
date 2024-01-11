<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M9,25.5h6.39c1.34,5.17,6.03,9,11.61,9s10.27-3.83,11.61-9H63c1.66,0,3-1.34,3-3s-1.34-3-3-3H38.61
		c-1.34-5.17-6.03-9-11.61-9s-10.27,3.83-11.61,9H9c-1.66,0-3,1.34-3,3S7.34,25.5,9,25.5z M27,16.5c3.31,0,6,2.69,6,6s-2.69,6-6,6
		s-6-2.69-6-6S23.69,16.5,27,16.5z"/>
	<path d="M63,46.5h-6.39c-1.34-5.17-6.03-9-11.61-9s-10.27,3.83-11.61,9H9c-1.66,0-3,1.34-3,3s1.34,3,3,3h24.39
		c1.34,5.17,6.03,9,11.61,9s10.27-3.83,11.61-9H63c1.66,0,3-1.34,3-3S64.66,46.5,63,46.5z M45,55.5c-3.31,0-6-2.69-6-6s2.69-6,6-6
		s6,2.69,6,6S48.31,55.5,45,55.5z"/>
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
