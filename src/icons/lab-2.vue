<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="
	M29.25,13.5h13.5v18l12.87,22.52c2.29,4-0.6,8.98-5.21,8.98H21.59c-4.61,0-7.5-4.98-5.21-8.98L29.25,31.5V13.5z"/>
<line x1="27" y1="13.5" x2="45" y2="13.5"/>
<path d="
	M21.54,45c0,0,5.79-4.33,14.46,0s14.46,0,14.46,0"/>

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
