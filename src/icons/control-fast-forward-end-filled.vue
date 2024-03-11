<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M52.77,20v32c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2V20c0-1.1-0.9-2-2-2h-5C53.66,18,52.77,18.9,52.77,20z"/>
	<path d="M36.13,50.61l15.18-13.51c0.91-0.81,0.89-2.25-0.05-3.03L36.01,21.35c-1.3-1.09-3.29-0.16-3.28,1.54l0.07,26.24
		C32.81,50.85,34.85,51.76,36.13,50.61z"/>
	<path d="M13.57,50.95l17.15-13.79c1.02-0.82,0.99-2.37-0.05-3.16l-17.23-13c-1.32-1-3.21-0.05-3.2,1.6l0.08,26.78
		C10.32,51.07,12.26,52,13.57,50.95z"/>
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
