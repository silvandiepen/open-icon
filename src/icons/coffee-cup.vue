<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M33.29,29v-2c0-5.44-2.26-7.43-4.08-9.04c-1.54-1.36-2.76-2.43-2.88-6.03l-0.07-2l-4,0.14l0.07,2
		c0.19,5.33,2.43,7.31,4.24,8.9c1.58,1.39,2.73,2.4,2.73,6.03v2H33.29z"/>
	<path d="M44.75,26v-2c0-5.44-2.26-7.43-4.08-9.04c-1.54-1.36-2.76-2.43-2.88-6.03l-0.07-2l-4,0.14l0.07,2
		c0.19,5.33,2.43,7.31,4.24,8.9c1.58,1.39,2.73,2.4,2.73,6.03v2H44.75z"/>
	<path d="M61.75,33.56C60.71,33.19,59.62,33,58.5,33H57h-3.75H10.5v3c0,12.54,0,25.5,23.25,25.5c12.38,0,18.16-3.67,20.87-9h3.88
		c5.38,0,9.75-4.37,9.75-9.75C68.25,38.62,65.64,34.93,61.75,33.56z M33.75,55.5c-15.82,0-17.13-5.83-17.24-16.5h34.48
		C50.88,49.67,49.57,55.5,33.75,55.5z M58.5,46.5h-2.04c0.39-2.4,0.49-4.93,0.53-7.5h1.51c0.43,0,0.85,0.07,1.25,0.21
		c1.5,0.53,2.5,1.95,2.5,3.54C62.25,44.82,60.57,46.5,58.5,46.5z"/>
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
