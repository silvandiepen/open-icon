<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M34.38,49.12L34.3,22.89c0-1.72-2.04-2.63-3.33-1.49L15.8,34.9c-0.91,0.81-0.89,2.25,0.05,3.03l15.25,12.73
		C32.4,51.75,34.38,50.82,34.38,49.12z"/>
	<path d="M56.88,49.38L56.79,22.6c-0.01-1.68-1.95-2.6-3.25-1.55L36.39,34.84c-1.02,0.82-0.99,2.37,0.05,3.16l17.23,13
		C54.99,51.98,56.88,51.04,56.88,49.38z"/>
</g>

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
