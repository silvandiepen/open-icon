<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M38.5,57h-2.02C24.94,57,15.2,47.9,15,36.36C14.8,24.5,24.5,14.8,36.36,15C47.9,15.2,57,24.94,57,36.48l0,7.02h-6l0-7.09
	c0-7.94-6-14.81-13.92-15.37c-9.12-0.64-16.68,6.92-16.04,16.04C21.6,45,28.47,51,36.41,51h2.09c0.28,0,0.5,0.22,0.5,0.5v5
	C39,56.78,38.78,57,38.5,57z"/>
<path d="M54,48c-0.77,0-1.54-0.29-2.12-0.88L41.11,36.35c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54c0.2-0.2,0.51-0.2,0.71,0L54,40.76
	l8.65-8.65c0.2-0.2,0.51-0.2,0.71,0l3.54,3.54c0.2,0.2,0.2,0.51,0,0.71L56.12,47.12C55.54,47.71,54.77,48,54,48z"/>

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
