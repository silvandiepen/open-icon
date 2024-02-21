<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M49.39,62.03l-14.3-9.53H13c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h46c3.87,0,7,3.13,7,7v27.5c0,3.87-3.13,7-7,7h-6.5
	v7.87C52.5,61.97,50.72,62.92,49.39,62.03z M13,17c-0.55,0-1,0.45-1,1v27.5c0,0.55,0.45,1,1,1h23.91l9.59,6.39V46.5H59
	c0.55,0,1-0.45,1-1V18c0-0.55-0.45-1-1-1H13z"/>

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
