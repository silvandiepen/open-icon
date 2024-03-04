<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M66,22c0-3.86-3.14-7-7-7H13c-3.86,0-7,3.14-7,7v30.57c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7V22z M60,52.57
			c0,0.55-0.45,1-1,1H13c-0.55,0-1-0.45-1-1V22c0-0.55,0.45-1,1-1h46c0.55,0,1,0.45,1,1V52.57z"/>
	</g>
	<g>
		<path d="M14.71,35.43h11.71V23.71H14.71V35.43z M18.71,27.71h3.71v3.71h-3.71V27.71z"/>
	</g>
	<g>
		<path d="M14.71,50.86h11.71V39.14H14.71V50.86z M18.71,43.14h3.71v3.71h-3.71V43.14z"/>
	</g>
	<g>
		<path d="M30.14,50.86h11.71V39.14H30.14V50.86z M34.14,43.14h3.71v3.71h-3.71V43.14z"/>
	</g>
	<g>
		<path d="M30.14,35.43h11.71V23.71H30.14V35.43z M34.14,27.71h3.71v3.71h-3.71V27.71z"/>
	</g>
	<g>
		<path d="M45.57,35.43h11.71V23.71H45.57V35.43z M49.57,27.71h3.71v3.71h-3.71V27.71z"/>
	</g>
	<g>
		<path d="M45.57,50.86h11.71V39.14H45.57V50.86z M49.57,43.14h3.71v3.71h-3.71V43.14z"/>
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
