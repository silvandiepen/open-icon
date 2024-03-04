<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M33.88,56.12C34.46,56.71,35.23,57,36,57s1.54-0.29,2.12-0.88l16.17-16.17c0.2-0.2,0.2-0.51,0-0.71l-3.54-3.54
			c-0.2-0.2-0.51-0.2-0.71,0L39,46.76V15.5c0-0.28-0.22-0.5-0.5-0.5h-5c-0.28,0-0.5,0.22-0.5,0.5v31.26L21.95,35.71
			c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54c-0.2,0.2-0.2,0.51,0,0.71L33.88,56.12z"/>
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
