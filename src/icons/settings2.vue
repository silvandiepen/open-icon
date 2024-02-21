<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M65.5,19.5H38.61c-1.34-5.17-6.03-9-11.61-9s-10.27,3.83-11.61,9H6.5C6.22,19.5,6,19.72,6,20v5c0,0.28,0.22,0.5,0.5,0.5
		h8.89c1.34,5.17,6.03,9,11.61,9s10.27-3.83,11.61-9H65.5c0.28,0,0.5-0.22,0.5-0.5v-5C66,19.72,65.78,19.5,65.5,19.5z M27,28.5
		c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S30.31,28.5,27,28.5z"/>
	<path d="M65.5,46.5h-8.89c-1.34-5.17-6.03-9-11.61-9s-10.27,3.83-11.61,9H6.5C6.22,46.5,6,46.72,6,47v5c0,0.28,0.22,0.5,0.5,0.5
		h26.89c1.34,5.17,6.03,9,11.61,9s10.27-3.83,11.61-9h8.89c0.28,0,0.5-0.22,0.5-0.5v-5C66,46.72,65.78,46.5,65.5,46.5z M45,55.5
		c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S48.31,55.5,45,55.5z"/>
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
