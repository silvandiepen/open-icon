<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M56.28,67.49L36,57.35L15.72,67.49C15.39,67.66,15,67.42,15,67.04V17c0-6.08,4.92-11,11-11h20c6.08,0,11,4.92,11,11v50.04
	C57,67.42,56.61,67.66,56.28,67.49z M36.22,50.76L51,58.15V17c0-2.76-2.24-5-5-5H26c-2.76,0-5,2.24-5,5v41.15l14.78-7.39
	C35.92,50.69,36.08,50.69,36.22,50.76z"/>

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
