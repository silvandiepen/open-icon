<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M32.05,54.29L15.88,38.12c-1.17-1.17-1.17-3.07,0-4.24l16.17-16.17c0.2-0.2,0.51-0.2,0.71,0l3.54,3.54
		c0.2,0.2,0.2,0.51,0,0.71L22.24,36l14.05,14.05c0.2,0.2,0.2,0.51,0,0.71l-3.54,3.54C32.56,54.48,32.24,54.48,32.05,54.29z"/>
	<path d="M56.5,39h-37v-6h37c0.28,0,0.5,0.22,0.5,0.5v5C57,38.78,56.78,39,56.5,39z"/>
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
