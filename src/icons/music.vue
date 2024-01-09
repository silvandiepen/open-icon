<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M18,66c6.62,0,12-5.38,12-12V20.16l21-7v21.46C49.23,33.6,47.19,33,45,33c-6.62,0-12,5.38-12,12s5.38,12,12,12
		s12-5.38,12-12V9c0-0.96-0.46-1.87-1.25-2.43c-0.78-0.56-1.79-0.72-2.7-0.41l-27,9C24.83,15.56,24,16.71,24,18v25.62
		C22.23,42.6,20.19,42,18,42c-6.62,0-12,5.38-12,12S11.38,66,18,66z M45,51c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6
		S48.31,51,45,51z M18,48c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6S14.69,48,18,48z"/>
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
