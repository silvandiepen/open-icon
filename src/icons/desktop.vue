<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M59,6H13c-3.86,0-7,3.14-7,7v37c0,3.86,3.14,7,7,7h20v3h-6c-1.66,0-3,1.34-3,3s1.34,3,3,3h18c1.66,0,3-1.34,3-3s-1.34-3-3-3
	h-6v-3h20c3.86,0,7-3.14,7-7V13C66,9.14,62.86,6,59,6z M13,12h46c0.55,0,1,0.45,1,1v30H12V13C12,12.45,12.45,12,13,12z M59,51H13
	c-0.55,0-1-0.45-1-1v-3h48v3C60,50.55,59.55,51,59,51z"/>

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
