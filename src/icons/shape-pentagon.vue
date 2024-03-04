<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M66.26,27.17l-28.5-20.7c-1.05-0.76-2.48-0.76-3.53,0l-28.5,20.7c-1.05,0.76-1.49,2.12-1.09,3.35l10.88,33.5
			c0.4,1.24,1.55,2.07,2.85,2.07h35.22c1.3,0,2.45-0.84,2.85-2.07l10.88-33.5C67.75,29.29,67.31,27.94,66.26,27.17z M51.43,60.1
			H20.57l-9.54-29.35L36,12.61l24.97,18.14L51.43,60.1z"/>
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
