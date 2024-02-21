<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M26.41,56.94c-1.42-0.27-2.41-1.6-2.41-3.05l0-37.69c0-0.22,0.14-0.41,0.34-0.47l32-10.67C56.67,4.95,57,5.19,57,5.53
	l0,39.36c0,1.45-0.98,2.78-2.41,3.05C52.68,48.31,51,46.85,51,45V13.16l-21,7V54C30,55.85,28.32,57.31,26.41,56.94z"/>
<path d="M45,57c-6.62,0-12-5.38-12-12s5.38-12,12-12s12,5.38,12,12S51.62,57,45,57z M45,39c-3.31,0-6,2.69-6,6s2.69,6,6,6
	s6-2.69,6-6S48.31,39,45,39z"/>
<path d="M18,66c-6.62,0-12-5.38-12-12s5.38-12,12-12s12,5.38,12,12S24.62,66,18,66z M18,48c-3.31,0-6,2.69-6,6s2.69,6,6,6
	s6-2.69,6-6S21.31,48,18,48z"/>

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
