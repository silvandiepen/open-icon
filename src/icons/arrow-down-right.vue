<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M25.36,46.23v5c0,0.28,0.22,0.5,0.5,0.5h22.86c1.66,0,3-1.34,3-3V25.86c0-0.28-0.22-0.5-0.5-0.5h-5
			c-0.28,0-0.5,0.22-0.5,0.5v15.62l-22.1-22.1c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54c-0.2,0.2-0.2,0.51,0,0.71l22.1,22.1H25.86
			C25.59,45.73,25.36,45.95,25.36,46.23z"/>
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
