<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M62.13,41.21L41.06,30.68l2.35-2.35c3.13-3.13,3.91-7.91,1.93-11.87l-0.14-0.28c-1.83-3.66-5.58-5.87-9.7-5.67
			c-3.8,0.18-7.14,2.58-8.84,5.98l-2.11,4.22c-0.12,0.25-0.02,0.55,0.22,0.67l4.47,2.24c0.25,0.12,0.55,0.02,0.67-0.22l2.26-4.53
			c0.84-1.69,2.68-2.64,4.61-2.3c1.37,0.24,2.5,1.2,3.12,2.44l0.07,0.14c0.82,1.65,0.5,3.64-0.8,4.94l-4.94,4.94L9.87,41.21
			C7.48,42.41,6,44.8,6,47.47V53c0,2.21,1.79,4,4,4h52c2.21,0,4-1.79,4-4v-5.53C66,44.8,64.52,42.41,62.13,41.21z M60,51H12v-3.53
			c0-0.38,0.21-0.72,0.55-0.89L36,34.85l23.45,11.72c0.34,0.17,0.55,0.51,0.55,0.89V51z"/>
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
