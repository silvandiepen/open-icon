<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M55.64,28.61C52.6,20.5,44.82,15,36,15s-16.6,5.5-19.64,13.61C10.52,29.41,6,34.44,6,40.5c0,6.62,5.38,12,12,12
			c1.42,0,2.82-0.25,4.15-0.74C25.96,55.11,30.9,57,36,57s10.04-1.89,13.85-5.24c1.32,0.49,2.73,0.74,4.15,0.74
			c6.62,0,12-5.38,12-12C66,34.44,61.48,29.41,55.64,28.61z M54,46.5c-1.11,0-2.2-0.31-3.15-0.91l-2.11-1.31l-1.68,1.84
			C44.16,49.27,40.24,51,36,51s-8.16-1.73-11.05-4.89l-1.68-1.84l-2.11,1.31C20.2,46.19,19.11,46.5,18,46.5c-3.31,0-6-2.69-6-6
			s2.69-6,6-6c0.08,0,0.17,0.01,0.25,0.01l2.62,0.17l0.62-2.41C23.19,25.64,29.16,21,36,21s12.81,4.64,14.51,11.27l0.62,2.41
			l2.62-0.17c0.08-0.01,0.16-0.01,0.25-0.01c3.31,0,6,2.69,6,6S57.31,46.5,54,46.5z"/>
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
