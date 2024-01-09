<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,61.5c3.84,0,7.54-0.84,10.99-2.49c1.28-0.61,2.15-1.88,2.25-3.29c0.11-1.42-0.55-2.81-1.73-3.61
		C42.18,48.46,39,42.44,39,36s3.18-12.46,8.51-16.1c1.18-0.81,1.84-2.19,1.73-3.61c-0.11-1.42-0.97-2.68-2.25-3.29
		c-4.45-2.13-9.42-2.91-14.37-2.27C21.14,12.21,11.9,21.65,10.65,33.16c-0.79,7.24,1.53,14.48,6.36,19.87
		C21.85,58.41,28.77,61.5,36,61.5z M16.62,33.81c0.95-8.79,8.01-16,16.77-17.14c0.87-0.11,1.73-0.17,2.59-0.17
		c1.79,0,3.57,0.24,5.27,0.72C36.03,22.02,33,28.81,33,36c0,7.19,3.03,13.99,8.26,18.78c-1.7,0.48-3.46,0.72-5.26,0.72
		c-5.53,0-10.82-2.36-14.52-6.48C17.73,44.84,16.01,39.44,16.62,33.81z"/>
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
