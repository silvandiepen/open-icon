<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,48c-0.77,0-1.54-0.29-2.12-0.88L14.11,27.35c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54c0.2-0.2,0.51-0.2,0.71,0L36,40.76
	l17.65-17.65c0.2-0.2,0.51-0.2,0.71,0l3.54,3.54c0.2,0.2,0.2,0.51,0,0.71L38.12,47.12C37.54,47.71,36.77,48,36,48z"/>

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
