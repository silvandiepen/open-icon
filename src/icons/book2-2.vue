<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M10,13.5h15.14c4.07,0,7.98,1.62,10.86,4.5l0,0l0,0
	c2.88-2.88,6.79-4.5,10.86-4.5H62c0.55,0,1,0.45,1,1V53c0,0.55-0.45,1-1,1H46.86c-4.07,0-7.98,1.62-10.86,4.5l0,0l0,0
	c-2.88-2.88-6.79-4.5-10.86-4.5H10c-0.55,0-1-0.45-1-1V14.5C9,13.95,9.45,13.5,10,13.5z"/>
<line x1="36" y1="18" x2="36" y2="58.5"/>

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
