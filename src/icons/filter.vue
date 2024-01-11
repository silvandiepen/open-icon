<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M60.29,12.41c-0.73-1.2-2.01-1.91-3.41-1.91H15.37c-1.49,0-2.84,0.82-3.54,2.13c-0.67,1.27-0.61,2.78,0.15,3.99l14.4,24.69
	v21.35l19.5-6.5V41.31l14.48-24.85l0.08-0.15C61.08,15.06,61.02,13.6,60.29,12.41z M39.88,39.69v12.15l-7.5,2.5V39.69L18.86,16.5
	h34.54L39.88,39.69z"/>

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
