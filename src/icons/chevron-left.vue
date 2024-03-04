<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M44.65,57.89c0.2,0.2,0.51,0.2,0.71,0l3.54-3.54c0.2-0.2,0.2-0.51,0-0.71L31.24,36l17.65-17.65c0.2-0.2,0.2-0.51,0-0.71
			l-3.54-3.54c-0.2-0.2-0.51-0.2-0.71,0L24.88,33.88c-1.17,1.17-1.17,3.07,0,4.24L44.65,57.89z"/>
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
