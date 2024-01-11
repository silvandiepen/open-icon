<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M53,42h-9.79c-0.43-2.32-1.34-4.47-2.63-6.34l6.54-6.54c1.17-1.17,1.17-3.07,0-4.24l-9-9c-1.17-1.17-3.07-1.17-4.24,0
		l-4.5,4.5c-1.17,1.17-1.17,3.07,0,4.24c1.17,1.17,3.07,1.17,4.24,0L36,22.24L40.76,27l-4.41,4.41c-2.66-1.83-5.88-2.91-9.34-2.91
		c-9.1,0-16.5,7.4-16.5,16.5S17.9,61.5,27,61.5c8.07,0,14.8-5.83,16.21-13.5H51v10.5c0,1.66,1.34,3,3,3s3-1.34,3-3V46
		C57,43.79,55.21,42,53,42z M27,55.5c-5.79,0-10.5-4.71-10.5-10.5S21.21,34.5,27,34.5S37.5,39.21,37.5,45S32.79,55.5,27,55.5z"/>
	<path d="M54,11.5c-3.58,0-6.5,2.92-6.5,6.5s2.92,6.5,6.5,6.5s6.5-2.92,6.5-6.5S57.58,11.5,54,11.5z M54,20.5
		c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S55.38,20.5,54,20.5z"/>
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
