<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M28.5,41.41v21.14c0,0.37,0.39,0.61,0.72,0.45l14-7c0.17-0.08,0.28-0.26,0.28-0.45V41.41l20.09-30.13
			c0.22-0.33-0.02-0.78-0.42-0.78H8.83c-0.4,0-0.64,0.45-0.42,0.78L28.5,41.41z M52.89,16.5L37.5,39.59v12.55l-3,1.5V39.59
			L19.11,16.5H52.89z"/>
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
