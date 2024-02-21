<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,66C19.46,66,6,52.54,6,36S19.46,6,36,6s30,13.46,30,30S52.54,66,36,66z M36,12c-13.23,0-24,10.77-24,24s10.77,24,24,24
	s24-10.77,24-24S49.23,12,36,12z"/>
<g>
	<path d="M41.71,35.12l6.45-4.3c1.09-0.73,1.24-2.27,0.32-3.2l0,0c-0.63-0.63-1.6-0.79-2.4-0.39l-7.26,3.63
		c-1.77,0.88-3.85,0.88-5.61,0l-7.26-3.63c-0.8-0.4-1.77-0.24-2.4,0.39l0,0c-0.93,0.93-0.77,2.47,0.32,3.2l6.45,4.3v3.19
		c0,1.65-0.39,3.29-1.13,4.77l-3.91,7.82c-0.4,0.8-0.24,1.77,0.39,2.4l0.1,0.1c0.89,0.89,2.37,0.79,3.13-0.22L36,43.67l7.12,9.49
		c0.76,1.01,2.24,1.12,3.13,0.22l0.1-0.1c0.63-0.63,0.79-1.6,0.39-2.4l-3.91-7.82c-0.74-1.48-1.13-3.11-1.13-4.77V35.12z"/>
	<circle cx="36" cy="22.11" r="5.71"/>
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
