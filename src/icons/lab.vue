<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M50.41,66H21.59c-3.25,0-6.16-1.68-7.78-4.48c-1.63-2.81-1.64-6.17-0.03-8.98L26.25,30.7V13.5c0-1.66,1.34-3,3-3h13.5
	c1.66,0,3,1.34,3,3v17.2l12.48,21.83c1.61,2.82,1.6,6.18-0.03,8.98C56.57,64.32,53.66,66,50.41,66z M32.25,16.5v15
	c0,0.52-0.14,1.04-0.4,1.49L18.98,55.51c-0.77,1.35-0.25,2.55,0.01,2.99S20.03,60,21.59,60h28.82c1.56,0,2.33-1.04,2.59-1.49
	s0.78-1.64,0.01-2.99L40.15,32.99c-0.26-0.45-0.4-0.97-0.4-1.49v-15H32.25z M29.25,31.5L29.25,31.5L29.25,31.5z"/>
<path d="M47.5,16.5h-23c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h23c0.28,0,0.5,0.22,0.5,0.5v5
	C48,16.28,47.78,16.5,47.5,16.5z"/>
<path d="M43.6,48.93c-2.42,0-5.29-0.54-8.5-2.14c-7.38-3.68-12.19-0.32-12.39-0.18l-1.61,1.16l-2.36-3.18l1.59-1.19
	c0.28-0.21,6.89-5.01,16.56-0.19c7.38,3.68,12.19,0.32,12.39,0.18l1.61-1.16l2.36,3.18l-1.59,1.19
	C51.48,46.74,48.47,48.93,43.6,48.93z"/>

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
