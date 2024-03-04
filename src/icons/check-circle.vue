<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
			s24,10.77,24,24S49.23,60,36,60z"/>
	</g>
	<g>
		<path d="M48.58,25.43l-4.47-2.24c-0.25-0.12-0.55-0.02-0.67,0.22l-8.26,16.51l-7.82-7.82c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54
			c-0.2,0.2-0.2,0.51,0,0.71l13.22,13.22c0.24,0.24,0.65,0.18,0.8-0.13L48.8,26.11C48.93,25.86,48.83,25.56,48.58,25.43z"/>
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
