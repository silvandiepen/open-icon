<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M8.94,60.94l2.12,2.12c0.2,0.2,0.51,0.2,0.71,0l10.32-10.32c0.96,0.79,2,1.53,3.14,2.18c1.51,0.87,3.15,1.53,4.84,1.95
		c7.53,1.87,15.02-0.26,20.24-5.48c0,0,0,0,0,0C63.93,37.76,60.84,14.82,60.7,13.85l-0.27-1.86c-0.03-0.22-0.2-0.39-0.42-0.42
		l-1.86-0.26c-0.97-0.14-23.92-3.24-37.55,10.39c-7.71,7.71-8.16,19.97-1.35,28.22L8.94,60.23C8.74,60.43,8.74,60.74,8.94,60.94z
		 M20.46,36.54c0-4.01,1.56-7.77,4.39-10.61c7.73-7.73,19.66-9.01,26.7-9.01c1.34,0,2.5,0.05,3.42,0.1
		c0.36,5.78,0.29,20.92-8.91,30.12v0c-2.83,2.83-6.6,4.39-10.61,4.39c-3.33,0-6.49-1.09-9.09-3.08l16.51-16.51
		c0.2-0.2,0.2-0.51,0-0.71l-2.12-2.12c-0.2-0.2-0.51-0.2-0.71,0L23.54,45.63C21.55,43.03,20.46,39.88,20.46,36.54z"/>
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
