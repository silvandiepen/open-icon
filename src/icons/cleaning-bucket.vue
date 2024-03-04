<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M36,6c-8.48,0-15.49,6.44-16.39,14.69C15,21.57,11.5,25.63,11.5,30.5v17c0,2.21,1.79,4,4,4h2.97l0.82,5.71
			c0.35,2.45,2.48,4.29,4.95,4.29h23.53c2.47,0,4.6-1.85,4.95-4.29l3.93-27.5c0.21-1.44-0.22-2.89-1.17-3.98
			c-0.77-0.89-1.83-1.46-2.97-1.65V22.5C52.5,13.4,45.1,6,36,6z M36,12c5.79,0,10.5,4.71,10.5,10.5V24h-8.55
			c-0.25-1.97-1.91-3.5-3.95-3.5h-8.3C26.63,15.66,30.89,12,36,12z M21.5,24.5H34v14H15.5v-8C15.5,27.19,18.19,24.5,21.5,24.5z
			 M15.5,42.5H34v5l-18.5,0V42.5z M46.9,55.5H25.1l-0.57-4H34c2.21,0,4-1.79,4-4V30h12.54L46.9,55.5z"/>
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
