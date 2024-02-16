<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M17.5,6c-3.87,0-7,3.13-7,7v22.82c0,0.11,0.04,0.22,0.11,0.31l5,6.25c0.3,0.37,0.89,0.16,0.89-0.31V13c0-0.55,0.45-1,1-1
		h21v11c0,3.31,2.69,6,6,6h11v30c0,0.55-0.45,1-1,1H34.43c-0.47,0-0.68,0.6-0.31,0.89l6.25,5c0.09,0.07,0.2,0.11,0.31,0.11H54.5
		c3.87,0,7-3.13,7-7V25.76L41.74,6H17.5z M42.5,15.24L52.26,25H44.5c-1.1,0-2-0.9-2-2V15.24z"/>
	<path d="M30.89,49.15l-3.54-3.54c-0.2-0.2-0.51-0.2-0.71,0l-6.4,6.4l-6.4-6.4c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54
		c-0.2,0.2-0.2,0.51,0,0.71l6.4,6.4l-6.4,6.4c-0.2,0.2-0.2,0.51,0,0.71l3.54,3.54c0.2,0.2,0.51,0.2,0.71,0l6.4-6.4l6.4,6.4
		c0.2,0.2,0.51,0.2,0.71,0l3.54-3.54c0.2-0.2,0.2-0.51,0-0.71l-6.4-6.4l6.4-6.4C31.08,49.66,31.08,49.34,30.89,49.15z"/>
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
