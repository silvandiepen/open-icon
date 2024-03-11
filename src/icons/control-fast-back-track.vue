<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M51.81,17.65c-1.75-0.83-3.77-0.6-5.29,0.62L32.26,29.74V20c0-2.76-2.24-5-5-5h-5c-2.76,0-5,2.24-5,5v32c0,2.76,2.24,5,5,5
		h5c2.76,0,5-2.24,5-5v-9.98l14.48,10.92c0.89,0.67,1.94,1.01,3,1.01c0.76,0,1.53-0.18,2.24-0.53c1.71-0.86,2.77-2.58,2.76-4.49
		l-0.08-26.78C54.65,20.21,53.56,18.49,51.81,17.65z M26.26,51h-3V21h3V51z M34.14,35.92l14.53-11.68l0.07,22.69L34.14,35.92z"/>
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
