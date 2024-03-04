<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M66.47,48.39H16.19c-0.55,0-1.08,0.22-1.46,0.6L4.8,58.93c-0.65,0.65-0.19,1.76,0.73,1.76h50.27
			c0.55,0,1.08-0.22,1.46-0.6l9.93-9.93C67.85,49.5,67.39,48.39,66.47,48.39z"/>
	</g>
	<g>
		<path d="M66.47,11.31H16.19c-0.54,0-1.06,0.22-1.46,0.6L4.8,21.85c-0.65,0.65-0.19,1.76,0.73,1.76h50.27
			c0.55,0,1.08-0.22,1.46-0.6l9.93-9.93C67.85,12.42,67.39,11.31,66.47,11.31z"/>
	</g>
	<g>
		<path d="M57.26,30.34c-0.38-0.38-0.9-0.6-1.46-0.6H5.53c-0.92,0-1.38,1.11-0.73,1.76l9.93,9.93c0.38,0.38,0.9,0.6,1.46,0.6h50.27
			c0.92,0,1.38-1.11,0.73-1.76L57.26,30.34z"/>
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
