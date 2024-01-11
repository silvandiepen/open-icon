<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M47.5,52.09C42.18,48.46,39,42.44,39,36c0-6.44,3.18-12.46,8.51-16.1c1.18-0.8,1.84-2.19,1.73-3.61
	c-0.11-1.42-0.97-2.68-2.25-3.29c-4.46-2.13-9.43-2.91-14.37-2.27c-11.47,1.49-20.71,10.93-21.97,22.44
	c-0.79,7.24,1.53,14.48,6.36,19.86C21.85,58.41,28.77,61.5,36,61.5c3.85,0,7.55-0.84,10.99-2.49c1.28-0.61,2.14-1.87,2.25-3.29
	C49.35,54.29,48.69,52.91,47.5,52.09z M36,55.5c-5.53,0-10.82-2.36-14.52-6.48c-3.75-4.17-5.47-9.57-4.86-15.21
	c0.96-8.79,8.01-16,16.78-17.14c0.86-0.11,1.73-0.17,2.59-0.17c1.79,0,3.56,0.24,5.27,0.72C36.03,22.02,33,28.81,33,36
	c0,7.2,3.04,14,8.26,18.78C39.56,55.26,37.8,55.5,36,55.5z"/>

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
