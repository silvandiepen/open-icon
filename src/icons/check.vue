<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M39.39,54.95L21.12,27.59c-0.15-0.23-0.09-0.54,0.14-0.69l4.16-2.78c0.23-0.15,0.54-0.09,0.69,0.14l12.82,19.2l13.39-28.99
	c0.12-0.25,0.41-0.36,0.66-0.24l4.54,2.1c0.25,0.12,0.36,0.41,0.24,0.66L40.26,54.88C40.1,55.24,39.61,55.28,39.39,54.95z"/>

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
