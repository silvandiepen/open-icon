<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<rect x="33" y="13.5" width="6" height="9"/>
<rect x="22.5" y="10.5" width="22.5" height="6"/>
<rect x="22.5" y="47.5" width="27" height="4"/>
<rect x="22.5" y="38.5" width="27" height="4"/>
<path d="M47.5,66h-23c-2.76,0-5-2.24-5-5V33.5c0-2.76,2.24-5,5-5h23c2.76,0,5,2.24,5,5V61C52.5,63.76,50.26,66,47.5,66z M25.5,60h21
	V34.5h-21V60z"/>
<path d="M48,31.5h-6c0-3.31-2.69-6-6-6s-6,2.69-6,6h-6c0-6.62,5.38-12,12-12S48,24.88,48,31.5z"/>

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
