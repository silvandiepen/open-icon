<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M60.62,56.38L49.07,44.82c2.63-3.51,4.2-7.84,4.2-12.55c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
	c4.71,0,9.05-1.58,12.55-4.2l11.56,11.56c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88C61.79,59.45,61.79,57.55,60.62,56.38z
	 M17.27,32.27c0-8.27,6.73-15,15-15s15,6.73,15,15s-6.73,15-15,15S17.27,40.54,17.27,32.27z"/>

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
