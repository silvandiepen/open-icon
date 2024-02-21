<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M26.65,57.89l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71L40.76,36L23.11,18.35c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54
	c0.2-0.2,0.51-0.2,0.71,0l19.77,19.77c1.17,1.17,1.17,3.07,0,4.24L27.35,57.89C27.16,58.08,26.84,58.08,26.65,57.89z"/>

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
