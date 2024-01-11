<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M51.49,17.69l-5.33,5.33
	c-2.8-2.2-6.32-3.52-10.15-3.52c-3.83,0-7.35,1.32-10.15,3.52l-5.33-5.33C24.7,14.14,30.1,12,36,12C41.9,12,47.3,14.14,51.49,17.69z
	 M25.5,36c0-5.79,4.71-10.5,10.5-10.5c5.79,0,10.5,4.71,10.5,10.5c0,5.79-4.71,10.5-10.5,10.5C30.21,46.5,25.5,41.79,25.5,36z
	 M12,36c0-5.9,2.14-11.3,5.69-15.49l5.33,5.33c-2.2,2.8-3.52,6.32-3.52,10.15c0,3.83,1.32,7.35,3.52,10.15l-5.33,5.33
	C14.14,47.3,12,41.9,12,36z M20.51,54.31l5.33-5.33c2.8,2.2,6.32,3.52,10.15,3.52c3.83,0,7.35-1.32,10.15-3.52l5.33,5.33
	C47.3,57.86,41.9,60,36,60C30.1,60,24.7,57.86,20.51,54.31z M54.31,51.49l-5.33-5.33c2.2-2.8,3.52-6.32,3.52-10.15
	c0-3.83-1.32-7.35-3.52-10.15l5.33-5.33C57.86,24.7,60,30.1,60,36C60,41.9,57.86,47.3,54.31,51.49z"/>

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
