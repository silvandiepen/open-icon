<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54.44,53.37H31.51l4.29-14.46l6.68-1.89l1.4-4.79l-6.58,1.99l6.98-23.73v-0.38c0,0,0,0,0,0c-0.02-0.64-0.56-1.14-1.2-1.12
		h-8.87c-0.69-0.02-1.31,0.43-1.5,1.1l-8.28,28.12l-6.58,1.99l-1.5,4.59l6.58-1.99l-5.88,20.04h35.09c0.69,0.03,1.31-0.43,1.5-1.1
		l1.99-6.88v-0.38c0,0,0,0,0,0C55.62,53.84,55.08,53.34,54.44,53.37z"/>
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
