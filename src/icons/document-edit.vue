<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M17.5,6c-3.87,0-7,3.13-7,7v29.07c0,0.47,0.6,0.68,0.89,0.31l5-6.25c0.07-0.09,0.11-0.2,0.11-0.31V13c0-0.55,0.45-1,1-1
			h21v11c0,3.31,2.69,6,6,6h11v30c0,0.55-0.45,1-1,1H40.68c-0.11,0-0.22,0.04-0.31,0.11l-6.25,5C33.74,65.4,33.95,66,34.43,66H54.5
			c3.87,0,7-3.13,7-7V25.76L41.74,6H17.5z M42.5,23v-7.76L52.26,25H44.5C43.4,25,42.5,24.1,42.5,23z"/>
	</g>
	<g>
		<path d="M22.5,66c0.8,0,1.56-0.32,2.12-0.88l18-18c1.17-1.17,1.17-3.07,0-4.24l-9-9c-1.17-1.17-3.07-1.17-4.24,0l-18,18
			C10.82,52.44,10.5,53.2,10.5,54v9c0,1.66,1.34,3,3,3H22.5z M16.5,56.69c1.45,0.69,2.62,1.86,3.32,3.31H16.5V56.69z M31.5,40.24
			L36.26,45L23.28,57.98c-1.05-2.04-2.72-3.71-4.76-4.76L31.5,40.24z"/>
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
