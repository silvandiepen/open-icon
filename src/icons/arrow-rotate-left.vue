<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M35.52,57H33.5c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h2.09c7.94,0,14.81-6,15.37-13.92
	c0.64-9.12-6.92-16.68-16.04-16.04C27,21.6,21,28.47,21,36.41l0,7.09h-6l0-7.02C15,24.94,24.1,15.2,35.64,15
	C47.5,14.8,57.2,24.5,57,36.36C56.8,47.9,47.06,57,35.52,57z"/>
<path d="M18,48c-0.77,0-1.54-0.29-2.12-0.88L5.11,36.35c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54c0.2-0.2,0.51-0.2,0.71,0L18,40.76
	l8.65-8.65c0.2-0.2,0.51-0.2,0.71,0l3.54,3.54c0.2,0.2,0.2,0.51,0,0.71L20.12,47.12C19.54,47.71,18.77,48,18,48z"/>

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
