<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M59,15H13c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7V22C66,18.14,62.86,15,59,15z M60,50
			c0,0.55-0.45,1-1,1H13c-0.55,0-1-0.45-1-1V22c0-0.55,0.45-1,1-1h46c0.55,0,1,0.45,1,1V50z"/>
	</g>
	<g>
		<path d="M31.5,25H18c-1.1,0-2,0.9-2,2v18c0,1.1,0.9,2,2,2h13.5c1.1,0,2-0.9,2-2V27C33.5,25.9,32.6,25,31.5,25z M29.5,43H20V29h9.5
			V43z"/>
	</g>
	<g>
		<path d="M54,34H40.5c-1.1,0-2,0.9-2,2s0.9,2,2,2H54c1.1,0,2-0.9,2-2S55.1,34,54,34z"/>
	</g>
	<g>
		<path d="M40.5,29h9c1.1,0,2-0.9,2-2s-0.9-2-2-2h-9c-1.1,0-2,0.9-2,2S39.4,29,40.5,29z"/>
	</g>
	<g>
		<path d="M54,43H40.5c-1.1,0-2,0.9-2,2s0.9,2,2,2H54c1.1,0,2-0.9,2-2S55.1,43,54,43z"/>
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
