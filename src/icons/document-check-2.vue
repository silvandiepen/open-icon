<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M17.5,6c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h37c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,15.24L52.26,25H44.5
			c-1.1,0-2-0.9-2-2V15.24z M54.5,60h-37c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
			C55.5,59.55,55.05,60,54.5,60z"/>
	</g>
	<g>
		<path d="M47.91,34.66l-3.58-1.79c-0.25-0.12-0.55-0.02-0.67,0.22l-8.34,16.69l-7.96-7.96c-0.2-0.2-0.51-0.2-0.71,0l-2.83,2.83
			c-0.2,0.2-0.2,0.51,0,0.71l12.38,12.38c0.24,0.24,0.65,0.18,0.8-0.13l11.14-22.27C48.25,35.08,48.15,34.78,47.91,34.66z"/>
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
