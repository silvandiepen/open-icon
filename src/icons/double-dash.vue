<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M11.75,33.5v5c0,0.28,0.22,0.5,0.5,0.5H32.5c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5H12.25
			C11.97,33,11.75,33.22,11.75,33.5z"/>
	</g>
	<g>
		<path d="M39.5,39h20.25c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5H39.5c-0.28,0-0.5,0.22-0.5,0.5v5
			C39,38.78,39.22,39,39.5,39z"/>
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
