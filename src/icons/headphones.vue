<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M36,15.5c-11.58,0-21,7.4-21,16.5v1.83c-2.55,1.44-4.5,4.43-4.5,10.67c0,12,7.22,12,12,12H25c0.28,0,0.5-0.22,0.5-0.5V33
			c0-0.28-0.22-0.5-0.5-0.5h-2.5c-0.48,0-0.98,0-1.5,0.01V32c0-5.69,6.87-10.5,15-10.5S51,26.31,51,32v0.51
			c-0.52-0.01-1.02-0.01-1.5-0.01H47c-0.28,0-0.5,0.22-0.5,0.5v23c0,0.28,0.22,0.5,0.5,0.5h2.5c4.78,0,12,0,12-12
			c0-6.24-1.95-9.23-4.5-10.67V32C57,22.9,47.58,15.5,36,15.5z M19.5,50.41c-2.41-0.27-3-1.39-3-5.91s0.59-5.64,3-5.91V50.41z
			 M52.5,50.41V38.59c2.41,0.27,3,1.39,3,5.91S54.91,50.14,52.5,50.41z"/>
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
