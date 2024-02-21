<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M44.65,48.89l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71L49.76,36l-8.65-8.65c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54
	c0.2-0.2,0.51-0.2,0.71,0l10.77,10.77c1.17,1.17,1.17,3.07,0,4.24L45.35,48.89C45.16,49.08,44.84,49.08,44.65,48.89z"/>
<path d="M20.5,57h-5c-0.28,0-0.5-0.22-0.5-0.5V52c0-10.49,8.51-19,19-19h18.5v6H34c-7.18,0-13,5.82-13,13v4.5
	C21,56.78,20.78,57,20.5,57z"/>

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
