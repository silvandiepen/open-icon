<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M13.97,14.74L27,18l18-4.5l14.97,3.74
	c1.78,0.45,3.03,2.05,3.03,3.88v32.25c0,2.6-2.45,4.51-4.97,3.88L45,54l-18,4.5l-14.97-3.74C10.25,54.31,9,52.71,9,50.88V18.62
	C9,16.02,11.45,14.11,13.97,14.74z"/>
<line x1="27" y1="18" x2="27" y2="58.5"/>
<line x1="45" y1="13.5" x2="45" y2="54"/>

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
