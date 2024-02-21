<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M57,54h-6V22c0-0.55-0.45-1-1-1H36.25c-0.16,0-0.31-0.07-0.4-0.2l-3.75-5c-0.25-0.33-0.01-0.8,0.4-0.8H50c3.87,0,7,3.13,7,7
	V54z"/>
<path d="M54,57c-0.77,0-1.54-0.29-2.12-0.88l-8.65-8.65c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54c0.2-0.2,0.51-0.2,0.71,0L54,49.76
	l6.53-6.52c0.2-0.2,0.51-0.2,0.71,0l3.54,3.54c0.2,0.2,0.2,0.51,0,0.71l-8.65,8.65C55.54,56.71,54.77,57,54,57z"/>
<path d="M39.5,57H22c-3.87,0-7-3.13-7-7V18h6v32c0,0.55,0.45,1,1,1h13.75c0.16,0,0.31,0.07,0.4,0.2l3.75,5
	C40.15,56.53,39.91,57,39.5,57z"/>
<path d="M24.53,28.77L18,22.24l-6.53,6.52c-0.2,0.2-0.51,0.2-0.71,0l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71l8.65-8.65
	c1.17-1.17,3.07-1.17,4.24,0l8.65,8.65c0.2,0.2,0.2,0.51,0,0.71l-3.54,3.54C25.04,28.96,24.72,28.96,24.53,28.77z"/>

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
