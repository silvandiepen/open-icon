<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M58.42,13.58C58.42,13.58,58.42,13.58,58.42,13.58c-3.12-3.12-7.26-4.83-11.67-4.83c-4.41,0-8.55,1.72-11.67,4.83
	l-19.1,19.1c-0.71,0.71-1.02,1.73-0.82,2.71l2.87,14.33l-8.41,8.41c-1.17,1.17-1.17,3.07,0,4.24c0.59,0.59,1.35,0.88,2.12,0.88
	s1.54-0.29,2.12-0.88l8.41-8.41l14.34,2.87c0.2,0.04,0.39,0.06,0.59,0.06c0.79,0,1.55-0.31,2.12-0.88l19.09-19.08
	C64.85,30.49,64.85,20.02,58.42,13.58z M39.33,17.82c1.98-1.98,4.62-3.07,7.42-3.07c2.13,0,4.15,0.63,5.87,1.8l-23.19,23.2
	c0,0,0,0,0,0l-6.06,6.06l-2.01-10.01L39.33,17.82z M36.22,50.62l-10.02-2l5.29-5.29l10.02,2L36.22,50.62z M54.18,32.68l-9.26,9.26
	l-10.02-2l20.56-20.56C58.2,23.46,57.78,29.07,54.18,32.68z"/>

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
