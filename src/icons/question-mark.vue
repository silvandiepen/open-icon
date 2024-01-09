<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M44.75,18.35c-2.78-2.49-6.51-3.68-10.24-3.26c-6.05,0.67-10.91,5.54-11.56,11.59c-0.22,2,0.01,3.96,0.67,5.83
		c0.55,1.56,2.27,2.38,3.83,1.83c1.56-0.55,2.38-2.27,1.83-3.83c-0.36-1.01-0.48-2.08-0.36-3.18c0.35-3.27,2.99-5.91,6.26-6.27
		c2.07-0.23,4.05,0.4,5.57,1.77c1.51,1.35,2.37,3.29,2.37,5.31c0,2.65-1.46,5.07-3.81,6.31C35.42,36.48,33,40.53,33,45
		c0,1.66,1.34,3,3,3s3-1.34,3-3c0-2.23,1.19-4.25,3.11-5.25c4.33-2.28,7.02-6.73,7.02-11.62C49.12,24.4,47.53,20.83,44.75,18.35z"/>
	<path d="M35.41,51.06c-0.19,0.04-0.38,0.1-0.56,0.17c-0.18,0.08-0.35,0.17-0.52,0.28c-0.16,0.1-0.31,0.23-0.45,0.37
		C33.32,52.44,33,53.21,33,54s0.32,1.56,0.88,2.12C34.44,56.68,35.21,57,36,57s1.56-0.32,2.12-0.88C38.68,55.56,39,54.79,39,54
		s-0.32-1.56-0.88-2.12C37.43,51.18,36.39,50.86,35.41,51.06z"/>
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
