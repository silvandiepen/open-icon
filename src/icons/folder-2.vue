<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M14,17.5v37
	c0,2.21,1.79,4,4,4h36.5c2.21,0,4-1.79,4-4v-28c0-2.21-1.79-4-4-4h-18l-3.39-6.79c-0.68-1.36-2.06-2.21-3.58-2.21H18
	C15.79,13.5,14,15.29,14,17.5z"/>
<line x1="14" y1="31.5" x2="58.5" y2="31.5"/>

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
