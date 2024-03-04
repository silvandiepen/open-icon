<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M53.65,14.11L36,31.76L18.35,14.11c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54c-0.2,0.2-0.2,0.51,0,0.71L31.76,36L14.11,53.65
			c-0.2,0.2-0.2,0.51,0,0.71l3.54,3.54c0.2,0.2,0.51,0.2,0.71,0L36,40.24l17.65,17.65c0.2,0.2,0.51,0.2,0.71,0l3.54-3.54
			c0.2-0.2,0.2-0.51,0-0.71L40.24,36l17.65-17.65c0.2-0.2,0.2-0.51,0-0.71l-3.54-3.54C54.16,13.92,53.84,13.92,53.65,14.11z"/>
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
