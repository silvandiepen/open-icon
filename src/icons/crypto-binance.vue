<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<polygon points="36.31,4.5 16.95,23.86 24.07,30.97 36.31,18.74 48.55,30.98 55.67,23.86 		"/>
	</g>
	<g>
		<rect x="6.89" y="30.97" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -21.9647 18.9745)" width="10.07" height="10.07"/>
	</g>
	<g>
		<polygon points="16.94,48.14 16.95,48.15 36.31,67.5 55.67,48.14 55.67,48.13 48.55,41.02 36.31,53.26 24.07,41.03 		"/>
	</g>
	<g>
		<rect x="55.65" y="30.97" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.6839 53.4551)" width="10.07" height="10.07"/>
	</g>
	<g>
		<polygon points="43.53,36 43.53,36 43.53,36 36.31,28.77 30.97,34.11 30.35,34.72 29.09,35.99 29.08,36 29.09,36.01 36.31,43.23 
					"/>
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
