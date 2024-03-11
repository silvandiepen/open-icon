<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M61.95,59.58c0.62-0.4,1.01-1.08,1.05-1.82c0.03-0.66-0.43-1.45-1.33-3.01c-0.03-0.05-0.06-0.11-0.09-0.16l-6.52-11.15
		l-0.07-0.13c-0.92-1.55-1.38-2.33-1.97-2.63c-0.65-0.33-1.43-0.33-2.08,0c-0.6,0.31-1.08,1.13-2.03,2.77L42.4,54.61l-0.02,0.04
		c-0.95,1.64-1.43,2.46-1.39,3.13c0.05,0.74,0.43,1.41,1.05,1.82c0.56,0.37,1.53,0.37,3.45,0.37h13.01
		C60.41,59.96,61.38,59.96,61.95,59.58z"/>
	<path d="M26.71,59.7c1.05-0.31,2-0.86,2.79-1.62c0.73-0.69,1.25-1.61,2.29-3.43l0.03-0.05L43.6,33.78
		c1.05-1.83,1.56-2.75,1.79-3.71c0.25-1.05,0.25-2.15,0-3.2c-0.23-0.96-0.75-1.87-1.78-3.67l-0.02-0.04l-4.61-8.05
		c-0.95-1.68-1.44-2.52-2.05-2.83c-0.66-0.33-1.44-0.33-2.09,0c-0.61,0.31-1.09,1.15-2.05,2.83L10.38,54.63
		C9.44,56.29,8.97,57.11,9,57.79c0.05,0.74,0.43,1.4,1.05,1.8c0.57,0.37,1.52,0.37,3.43,0.37h9.08
		C24.69,59.96,25.76,59.96,26.71,59.7z"/>
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
