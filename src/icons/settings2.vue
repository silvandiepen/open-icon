<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M27,34.5c-6.62,0-12-5.38-12-12s5.38-12,12-12s12,5.38,12,12S33.62,34.5,27,34.5z M27,16.5c-3.31,0-6,2.69-6,6s2.69,6,6,6
		s6-2.69,6-6S30.31,16.5,27,16.5z"/>
	<path d="M45,61.5c-6.62,0-12-5.38-12-12s5.38-12,12-12s12,5.38,12,12S51.62,61.5,45,61.5z M45,43.5c-3.31,0-6,2.69-6,6s2.69,6,6,6
		s6-2.69,6-6S48.31,43.5,45,43.5z"/>
	<g>
		<path d="M21,25.5H6.5C6.22,25.5,6,25.28,6,25v-5c0-0.28,0.22-0.5,0.5-0.5H21V25.5z"/>
	</g>
	<g>
		<path d="M65.5,25.5H33v-6h32.5c0.28,0,0.5,0.22,0.5,0.5v5C66,25.28,65.78,25.5,65.5,25.5z"/>
	</g>
	<g>
		<line x1="54" y1="49.5" x2="63" y2="49.5"/>
		<path d="M65.5,52.5H51v-6h14.5c0.28,0,0.5,0.22,0.5,0.5v5C66,52.28,65.78,52.5,65.5,52.5z"/>
	</g>
	<g>
		<line x1="9" y1="49.5" x2="36" y2="49.5"/>
		<path d="M39,52.5H6.5C6.22,52.5,6,52.28,6,52v-5c0-0.28,0.22-0.5,0.5-0.5H39V52.5z"/>
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
