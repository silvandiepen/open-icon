<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36.22,61.74c-0.14,0.07-0.31,0.07-0.45,0l-1.12-0.56C33.89,60.8,16.7,52,15.12,34.16c-1.1-12.33,8.16-23.45,20.53-23.66
	C47.39,10.31,57,19.8,57,31.5c0,19.63-18.86,29.28-19.66,29.68L36.22,61.74z M36,16.5c-8.27,0-15,6.73-15,15
	c0,13.14,11.09,21.13,15,23.54c3.91-2.41,15-10.4,15-23.54C51,23.23,44.27,16.5,36,16.5z"/>
<path d="M36,42.5c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S42.07,42.5,36,42.5z M36,24.5c-3.86,0-7,3.14-7,7s3.14,7,7,7
	s7-3.14,7-7S39.86,24.5,36,24.5z"/>

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
