<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M54.5,61.5H18c-3.86,0-7-3.14-7-7v-37c0-3.86,3.14-7,7-7h11.53c2.67,0,5.07,1.48,6.26,3.87l2.56,5.13H54.5
	c3.86,0,7,3.14,7,7v28C61.5,58.36,58.36,61.5,54.5,61.5z M18,16.5c-0.55,0-1,0.45-1,1v37c0,0.55,0.45,1,1,1h36.5c0.55,0,1-0.45,1-1
	v-28c0-0.55-0.45-1-1-1H34.65l-4.22-8.45c-0.17-0.34-0.51-0.55-0.89-0.55H18z"/>
<path d="M58.5,33.5H14c-1.1,0-2-0.9-2-2s0.9-2,2-2h44.5c1.1,0,2,0.9,2,2S59.6,33.5,58.5,33.5z"/>

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
