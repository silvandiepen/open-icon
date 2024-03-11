<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M49.74,15h-5c-2.76,0-5,2.24-5,5v9.98L25.27,19.06c-1.53-1.15-3.54-1.33-5.25-0.48c-1.71,0.86-2.77,2.58-2.76,4.49
		l0.08,26.78c0.01,1.94,1.1,3.66,2.85,4.5c0.69,0.33,1.43,0.49,2.16,0.49c1.11,0,2.21-0.38,3.12-1.11l14.27-11.47V52
		c0,2.76,2.24,5,5,5h5c2.76,0,5-2.24,5-5V20C54.74,17.24,52.5,15,49.74,15z M23.33,47.75l-0.07-22.69l14.6,11.01L23.33,47.75z
		 M48.74,51h-3V21h3V51z"/>
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
