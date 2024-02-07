<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M57,5.53c0-0.34-0.33-0.58-0.66-0.47l-32,10.67C24.14,15.79,24,15.98,24,16.2v27.43C22.23,42.6,20.19,42,18,42
		c-6.62,0-12,5.38-12,12s5.38,12,12,12s12-5.38,12-12V20.16l21-7v21.46C49.23,33.6,47.19,33,45,33c-6.62,0-12,5.38-12,12
		s5.38,12,12,12s12-5.38,12-12c0-0.02,0-0.05,0-0.07c0-0.01,0-0.03,0-0.04V5.53z M18,60c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6
		S21.31,60,18,60z M45,51c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S48.31,51,45,51z"/>
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
