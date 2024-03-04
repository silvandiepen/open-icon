<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M19.38,49.08l3.54,3.54c0.2,0.2,0.51,0.2,0.71,0l22.1-22.1v15.62c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5
			V23.27c0-1.66-1.34-3-3-3H25.86c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h15.62l-22.1,22.1
			C19.19,48.57,19.19,48.89,19.38,49.08z"/>
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
