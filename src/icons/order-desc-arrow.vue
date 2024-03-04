<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<rect x="28.5" y="15" width="28.5" height="6"/>
	</g>
	<g>
		<rect x="28.5" y="27" width="19.5" height="6"/>
	</g>
	<g>
		<rect x="28.5" y="39" width="10.5" height="6"/>
	</g>
	<g>
		<path d="M18,60.5c0.51,0,1.02-0.2,1.41-0.59L25.33,54l-2.83-2.83l-2.5,2.5V11.5h-4v42.17l-2.5-2.5L10.67,54l5.91,5.91
			C16.98,60.3,17.49,60.5,18,60.5z"/>
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
