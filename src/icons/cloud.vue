<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,57c-5.1,0-10.04-1.89-13.85-5.24c-1.32,0.49-2.73,0.74-4.15,0.74c-6.62,0-12-5.38-12-12c0-6.06,4.52-11.09,10.36-11.89
	C19.4,20.5,27.18,15,36,15s16.6,5.5,19.64,13.61C61.48,29.41,66,34.44,66,40.5c0,6.62-5.38,12-12,12c-1.42,0-2.82-0.25-4.15-0.74
	C46.04,55.11,41.1,57,36,57z M23.27,44.28l1.68,1.84C27.84,49.27,31.76,51,36,51s8.16-1.73,11.05-4.89l1.68-1.84l2.11,1.31
	c0.95,0.59,2.04,0.91,3.15,0.91c3.31,0,6-2.69,6-6s-2.69-6-6-6c-0.08,0-0.17,0.01-0.25,0.01l-2.62,0.17l-0.62-2.41
	C48.81,25.64,42.84,21,36,21s-12.81,4.64-14.51,11.27l-0.62,2.41l-2.62-0.17c-0.08-0.01-0.16-0.01-0.25-0.01c-3.31,0-6,2.69-6,6
	s2.69,6,6,6c1.11,0,2.2-0.31,3.15-0.91L23.27,44.28z"/>

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
