<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M59.46,22.44l-9.9-9.9v0c-1.94-1.94-5.11-1.95-7.07-0.01L11.58,43.44L6.25,59.41c-0.6,1.81-0.14,3.77,1.21,5.12
	C8.42,65.48,9.69,66,10.99,66c0.53,0,1.07-0.08,1.59-0.26l15.97-5.32l30.91-30.9c0.94-0.94,1.46-2.2,1.46-3.54
	C60.92,24.64,60.41,23.38,59.46,22.44z M18.44,45.06l21.21-21.21l8.49,8.49L26.93,53.55L18.44,45.06z M15.51,50.61l5.87,5.87
	l-8.8,2.93L15.51,50.61z M52.39,28.1l-8.49-8.49l2.12-2.12l8.49,8.49L52.39,28.1z"/>

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
