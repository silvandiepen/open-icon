<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M25.77,46.64h-5c-0.28,0-0.5-0.22-0.5-0.5V23.27c0-1.66,1.34-3,3-3h22.86c0.28,0,0.5,0.22,0.5,0.5v5
		c0,0.28-0.22,0.5-0.5,0.5H26.27v19.86C26.27,46.41,26.05,46.64,25.77,46.64z"/>
	<path d="M48.37,52.62L22.76,27L27,22.76l25.62,25.62c0.2,0.2,0.2,0.51,0,0.71l-3.54,3.54C48.89,52.81,48.57,52.81,48.37,52.62z"/>
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
