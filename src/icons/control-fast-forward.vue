<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M15.05,53.9c0.69,0.33,1.43,0.49,2.16,0.49c1.11,0,2.21-0.38,3.12-1.11l14.34-11.53l0.02,7.36
		c0.01,1.99,1.14,3.74,2.96,4.55c0.67,0.3,1.37,0.44,2.06,0.44c1.19,0,2.36-0.44,3.31-1.27L58.2,39.34c1.09-0.97,1.7-2.36,1.67-3.81
		c-0.02-1.46-0.68-2.83-1.79-3.76L42.83,19.03c-1.51-1.26-3.55-1.52-5.33-0.69c-1.78,0.84-2.88,2.58-2.87,4.54l0.02,6.67
		L20.14,18.62c-1.53-1.15-3.54-1.33-5.25-0.48s-2.77,2.57-2.76,4.49l0.08,26.78C12.21,51.35,13.3,53.07,15.05,53.9z M53.34,35.63
		L40.69,46.89l-0.06-21.87L53.34,35.63z M32.73,35.63L18.2,47.31l-0.07-22.69L32.73,35.63z"/>
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
