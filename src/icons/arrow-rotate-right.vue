<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M65.12,33.88c-1.17-1.17-3.07-1.17-4.24,0L57,37.76V36c0-11.58-9.42-21-21-21c-11.58,0-21,9.42-21,21c0,11.58,9.42,21,21,21
	c1.66,0,3-1.34,3-3s-1.34-3-3-3c-8.27,0-15-6.73-15-15c0-8.27,6.73-15,15-15c8.27,0,15,6.73,15,15v1.76l-3.88-3.88
	c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24l9,9c0,0,0.01,0.01,0.01,0.01L54,49.24l2.12-2.12c0,0,0.01-0.01,0.01-0.01
	l9-9C66.29,36.95,66.29,35.05,65.12,33.88z"/>

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
