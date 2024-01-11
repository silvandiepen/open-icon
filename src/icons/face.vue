<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M47.67,42.88c-1.17-1.17-3.07-1.17-4.24,0c-1.98,1.98-4.62,3.07-7.43,3.07c-2.8,0-5.44-1.09-7.43-3.08
		c-1.17-1.17-3.07-1.16-4.24,0.01c-1.17,1.17-1.17,3.07,0.01,4.24c3.12,3.11,7.27,4.82,11.67,4.82c4.41,0,8.56-1.71,11.67-4.83
		C48.84,45.95,48.84,44.05,47.67,42.88z"/>
	<path d="M45,35c1.66,0,3-1.34,3-3v-5c0-1.66-1.34-3-3-3s-3,1.34-3,3v5C42,33.66,43.34,35,45,35z"/>
	<path d="M27,35c1.66,0,3-1.34,3-3v-5c0-1.66-1.34-3-3-3s-3,1.34-3,3v5C24,33.66,25.34,35,27,35z"/>
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
