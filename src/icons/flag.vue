<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54,24h-2.64c-3.3,0-6.41-1.29-8.74-3.62C39.15,16.91,34.54,15,29.64,15H18c-1.66,0-3,1.34-3,3v27v18c0,1.66,1.34,3,3,3
		s3-1.34,3-3V48.02c3.17,0.09,6.13,1.35,8.38,3.6C32.85,55.09,37.46,57,42.36,57H54c1.66,0,3-1.34,3-3V27C57,25.34,55.66,24,54,24z
		 M51,51h-8.64c-3.3,0-6.41-1.29-8.74-3.62C30.24,44,25.77,42.1,21,42V21h8.64c3.3,0,6.41,1.29,8.74,3.62C41.76,28,46.23,29.9,51,30
		V51z"/>
</g>

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
