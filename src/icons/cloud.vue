<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M55.64,28.61C52.6,20.5,44.82,15,36,15c-8.82,0-16.6,5.5-19.64,13.61C10.51,29.42,6,34.44,6,40.5c0,6.62,5.38,12,12,12
	c1.42,0,2.83-0.25,4.15-0.75C25.97,55.11,30.9,57,36,57c5.1,0,10.03-1.89,13.85-5.25c1.32,0.49,2.73,0.75,4.15,0.75
	c6.62,0,12-5.38,12-12C66,34.44,61.49,29.42,55.64,28.61z M54,46.5c-1.11,0-2.2-0.31-3.15-0.91l-2.11-1.32l-1.68,1.84
	C44.16,49.26,40.24,51,36,51s-8.16-1.74-11.05-4.89l-1.68-1.84l-2.12,1.32C20.2,46.19,19.11,46.5,18,46.5c-3.31,0-6-2.69-6-6
	s2.69-6,6-6c0.06,0,0.12,0.01,0.18,0.01l2.69,0.14l0.61-2.38C23.19,25.64,29.15,21,36,21c6.84,0,12.81,4.64,14.51,11.27l0.61,2.38
	l2.69-0.14c0.06,0,0.12-0.01,0.18-0.01c3.31,0,6,2.69,6,6S57.31,46.5,54,46.5z"/>

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
