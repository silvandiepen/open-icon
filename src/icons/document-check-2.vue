<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54.5,66h-37c-3.86,0-7-3.14-7-7V13c0-3.86,3.14-7,7-7h24.24L61.5,25.76V59C61.5,62.86,58.36,66,54.5,66z M17.5,12
		c-0.55,0-1,0.45-1,1v46c0,0.55,0.45,1,1,1h37c0.55,0,1-0.45,1-1V28.24L39.26,12H17.5z"/>
	<path d="M58.5,29h-14c-3.31,0-6-2.69-6-6V9c0-1.1,0.9-2,2-2s2,0.9,2,2v14c0,1.1,0.9,2,2,2h14c1.1,0,2,0.9,2,2S59.6,29,58.5,29z"/>
</g>
<path d="M36.19,57.73L23.82,45.35c-0.2-0.2-0.2-0.51,0-0.71l2.83-2.83c0.2-0.2,0.51-0.2,0.71,0l7.96,7.96l8.34-16.69
	c0.12-0.25,0.42-0.35,0.67-0.22l3.58,1.79c0.25,0.12,0.35,0.42,0.22,0.67L37,57.6C36.84,57.91,36.44,57.97,36.19,57.73z"/>

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
