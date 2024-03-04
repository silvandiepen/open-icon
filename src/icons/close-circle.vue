<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M48.89,26.65l-3.54-3.54c-0.2-0.2-0.51-0.2-0.71,0L36,31.76l-8.65-8.65c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54
			c-0.2,0.2-0.2,0.51,0,0.71L31.76,36l-8.65,8.65c-0.2,0.2-0.2,0.51,0,0.71l3.54,3.54c0.2,0.2,0.51,0.2,0.71,0L36,40.24l8.65,8.65
			c0.2,0.2,0.51,0.2,0.71,0l3.54-3.54c0.2-0.2,0.2-0.51,0-0.71L40.24,36l8.65-8.65C49.08,27.16,49.08,26.84,48.89,26.65z"/>
	</g>
	<g>
		<path d="M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
			s24,10.77,24,24S49.23,60,36,60z"/>
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
