<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M15,41.74v10.33c0,7.16,7.24,9.27,11.49,9.42c0.28,0.01,0.51-0.22,0.51-0.5l0.01-5.01c0-0.26-0.2-0.49-0.47-0.5
		c-1.41-0.1-5.55-0.62-5.55-3.41V39.26L17.74,36L21,32.74V19.93c0-2.79,4.13-3.31,5.54-3.41C26.8,16.5,27,16.28,27,16.02v-5.01
		c0-0.28-0.23-0.51-0.51-0.5C22.24,10.66,15,12.76,15,19.93v10.33L9.26,36L15,41.74z"/>
	<path d="M57,19.93c0-7.16-7.24-9.27-11.49-9.42C45.23,10.5,45,10.73,45,11.01l-0.01,5.01c0,0.26,0.2,0.49,0.47,0.5
		c1.41,0.1,5.55,0.62,5.55,3.41v12.81L54.26,36L51,39.26v12.81c0,2.79-4.13,3.31-5.54,3.41C45.2,55.5,45,55.72,45,55.98v5.01
		c0,0.28,0.23,0.51,0.51,0.5C49.76,61.34,57,59.24,57,52.07V41.74L62.74,36L57,30.26V19.93z"/>
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
