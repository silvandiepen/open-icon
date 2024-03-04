<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M17.5,6c-3.87,0-7,3.13-7,7v25.25c0,0.11,0.04,0.22,0.11,0.31l5,6.25c0.3,0.37,0.89,0.16,0.89-0.31V13c0-0.55,0.45-1,1-1
			h21v11c0,3.31,2.69,6,6,6h11v30c0,0.55-0.45,1-1,1H36.31c-0.19,0-0.36,0.11-0.45,0.28l-2.5,5C33.2,65.61,33.44,66,33.81,66H54.5
			c3.87,0,7-3.13,7-7V25.76L41.74,6H17.5z M42.5,23v-7.76L52.26,25H44.5C43.4,25,42.5,24.1,42.5,23z"/>
	</g>
	<g>
		<path d="M23.63,67.44L35.3,44.11c0.12-0.25,0.02-0.55-0.22-0.67l-4.47-2.24c-0.25-0.12-0.55-0.02-0.67,0.22l-8.26,16.51
			l-7.82-7.82c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54c-0.2,0.2-0.2,0.51,0,0.71l13.22,13.22C23.07,67.82,23.48,67.75,23.63,67.44z"/>
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
