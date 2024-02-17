<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54.5,19.5H38.35l-2.56-5.13c-1.19-2.39-3.59-3.87-6.26-3.87H18c-3.86,0-7,3.14-7,7v37c0,3.86,3.14,7,7,7h36.5
		c3.86,0,7-3.14,7-7v-28C61.5,22.64,58.36,19.5,54.5,19.5z M18,16.5h11.53c0.38,0,0.72,0.21,0.89,0.55l4.22,8.45H54.5
		c0.55,0,1,0.45,1,1v3H17v-12C17,16.95,17.45,16.5,18,16.5z M54.5,55.5H18c-0.55,0-1-0.45-1-1v-21h38.5v21
		C55.5,55.05,55.05,55.5,54.5,55.5z"/>
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
