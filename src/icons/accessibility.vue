<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M55.67,24.17c-1-1-2.52-1.25-3.79-0.61l-11.46,5.73c-2.79,1.39-6.07,1.39-8.85,0l-11.46-5.73
		c-1.26-0.63-2.79-0.38-3.79,0.61c-1.46,1.46-1.22,3.9,0.5,5.05L27,36v5.03c0,2.61-0.61,5.18-1.78,7.52l-6.17,12.34
		c-0.63,1.26-0.38,2.79,0.61,3.79l0.15,0.15c1.41,1.41,3.75,1.25,4.94-0.35L36,49.5l11.23,14.98c1.2,1.6,3.53,1.76,4.94,0.35
		l0.15-0.15c1-1,1.25-2.52,0.61-3.79l-6.17-12.34C45.61,46.22,45,43.64,45,41.03V36l10.17-6.78C56.89,28.07,57.13,25.64,55.67,24.17
		z"/>
	<circle cx="36" cy="18" r="9"/>
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
