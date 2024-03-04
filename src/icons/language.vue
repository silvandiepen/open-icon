<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M45,24c-0.34,0-0.67,0.03-1,0.04C40.39,19.09,33.99,16,27,16C15.97,16,7,23.63,7,33c0,4.58,2.17,8.96,6,12.15V54
			c0,1.78,2.15,2.67,3.41,1.41l5.89-5.89c1.27,0.26,2.58,0.39,3.9,0.43C29.63,55.9,36.76,60,45,60c1.47,0,2.94-0.13,4.37-0.39
			l7.22,7.22C57.85,68.09,60,67.2,60,65.41V54.61c3.83-3.35,6-7.87,6-12.61C66,32.07,56.58,24,45,24z M24,42
			c0,1.31,0.17,2.59,0.49,3.82c-0.78-0.1-1.56-0.23-2.32-0.42l-1.11-0.29L17,49.17v-6l-0.8-0.6C12.89,40.11,11,36.62,11,33
			c0-7.17,7.18-13,16-13c4.84,0,9.31,1.76,12.3,4.69C30.48,26.83,24,33.77,24,42z M55.21,50.77L54,51.67v4.08L51.24,53l-1.66,0.43
			C48.11,53.81,46.56,54,45,54c-8.27,0-15-5.38-15-12s6.73-12,15-12s15,5.38,15,12C60,45.3,58.25,48.5,55.21,50.77z"/>
	</g>
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
