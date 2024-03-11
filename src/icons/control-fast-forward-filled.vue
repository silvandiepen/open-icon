<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M37.62,22.88l0.07,26.24c0,1.72,2.04,2.63,3.33,1.49L56.2,37.1c0.91-0.81,0.89-2.25-0.05-3.03L40.91,21.34
		C39.6,20.25,37.62,21.18,37.62,22.88z"/>
	<path d="M18.46,50.95l17.15-13.79c1.02-0.82,0.99-2.37-0.05-3.16l-17.23-13c-1.32-1-3.21-0.05-3.2,1.6l0.08,26.78
		C15.21,51.07,17.15,52,18.46,50.95z"/>
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
