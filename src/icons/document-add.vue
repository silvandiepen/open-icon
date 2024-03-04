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
		<path d="M25,42h-5c-0.28,0-0.5,0.22-0.5,0.5V51H11c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h8.5v8.5
			c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V57H34c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5h-8.5v-8.5
			C25.5,42.22,25.28,42,25,42z"/>
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
