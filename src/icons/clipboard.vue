<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M22,66h28c3.86,0,7-3.14,7-7V17.5c0-3.86-3.14-7-7-7h-7.5V9c0-1.1-0.9-2-2-2h-9c-1.1,0-2,0.9-2,2v1.5H22
		c-3.86,0-7,3.14-7,7V59C15,62.86,18.14,66,22,66z M33.5,11h5v5h-5V11z M21,17.5c0-0.55,0.45-1,1-1h7.5V18c0,1.1,0.9,2,2,2h9
		c1.1,0,2-0.9,2-2v-1.5H50c0.55,0,1,0.45,1,1V59c0,0.55-0.45,1-1,1H22c-0.55,0-1-0.45-1-1V17.5z"/>
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
