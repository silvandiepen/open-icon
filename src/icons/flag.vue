<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M54,24h-2.64c-3.25,0-6.44-1.32-8.74-3.62C39.2,16.96,34.47,15,29.64,15H18c-1.66,0-3,1.34-3,3v27v18c0,1.66,1.34,3,3,3
	s3-1.34,3-3V48.02c3.13,0.09,6.16,1.39,8.38,3.6C32.8,55.04,37.53,57,42.36,57H54c1.66,0,3-1.34,3-3V27C57,25.34,55.66,24,54,24z
	 M51,51h-8.64c-3.25,0-6.44-1.32-8.74-3.62C30.29,44.05,25.71,42.1,21,42V21h8.64c3.25,0,6.44,1.32,8.74,3.62
	C41.71,27.95,46.29,29.9,51,30V51z"/>

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
