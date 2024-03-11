<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M10.16,53.9c0.69,0.33,1.43,0.49,2.16,0.49c1.11,0,2.21-0.38,3.12-1.11l14.34-11.53l0.02,7.37
		c0.01,1.99,1.14,3.74,2.96,4.55c0.67,0.3,1.37,0.44,2.06,0.44c1.19,0,2.36-0.44,3.31-1.27l11.64-10.36V52c0,2.76,2.24,5,5,5h5
		c2.76,0,5-2.24,5-5V20c0-2.76-2.24-5-5-5h-5c-2.76,0-5,2.24-5,5v8.92l-11.83-9.88c-1.51-1.26-3.55-1.52-5.33-0.69
		c-1.78,0.84-2.88,2.57-2.87,4.54l0.02,6.66L15.24,18.62c-1.53-1.15-3.54-1.33-5.25-0.48c-1.71,0.86-2.77,2.58-2.76,4.49l0.08,26.78
		C7.32,51.35,8.41,53.07,10.16,53.9z M55.77,21h3v30h-3V21z M48.45,35.64L35.8,46.9l-0.06-21.87L48.45,35.64z M27.84,35.63
		L13.31,47.31l-0.07-22.69L27.84,35.63z"/>
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
