<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M53.65,48.89L36,31.24L18.35,48.89c-0.2,0.2-0.51,0.2-0.71,0l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71l19.77-19.77
	c1.17-1.17,3.07-1.17,4.24,0l19.77,19.77c0.2,0.2,0.2,0.51,0,0.71l-3.54,3.54C54.16,49.08,53.84,49.08,53.65,48.89z"/>

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
