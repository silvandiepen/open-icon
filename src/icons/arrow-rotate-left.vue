<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,15c-11.58,0-21,9.42-21,21v1.76l-3.88-3.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24l9,9
	c0,0,0,0,0.01,0.01L18,49.24l2.12-2.12c0,0,0,0,0.01-0.01l9-9c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0L21,37.76V36
	c0-8.27,6.73-15,15-15c8.27,0,15,6.73,15,15c0,8.27-6.73,15-15,15c-1.66,0-3,1.34-3,3s1.34,3,3,3c11.58,0,21-9.42,21-21
	C57,24.42,47.58,15,36,15z"/>

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
