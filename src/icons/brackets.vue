<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M27,60.99c0,0.28-0.23,0.51-0.51,0.5C22.24,61.34,15,59.24,15,52.07V41.74L9.26,36L15,30.26V19.93
	c0-7.16,7.24-9.26,11.49-9.42c0.28-0.01,0.51,0.22,0.51,0.5v5.01c0,0.26-0.2,0.48-0.46,0.5c-1.41,0.1-5.54,0.62-5.54,3.41v12.81
	L17.74,36L21,39.26v12.81c0,2.79,4.13,3.31,5.55,3.41c0.26,0.02,0.47,0.24,0.47,0.5L27,60.99z"/>
<path d="M45,60.99v-5.01c0-0.26,0.2-0.48,0.46-0.5c1.41-0.1,5.54-0.62,5.54-3.41V39.26L54.26,36L51,32.74V19.93
	c0-2.79-4.13-3.31-5.55-3.41c-0.26-0.02-0.47-0.24-0.47-0.5L45,11.01c0-0.28,0.23-0.51,0.51-0.5C49.76,10.66,57,12.76,57,19.93
	v10.33L62.74,36L57,41.74v10.33c0,7.16-7.24,9.26-11.49,9.42C45.23,61.5,45,61.27,45,60.99z"/>

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
