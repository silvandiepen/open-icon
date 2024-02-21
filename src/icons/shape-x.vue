<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M58.5,61.5c-0.77,0-1.54-0.29-2.12-0.88l-45-45c-1.17-1.17-1.17-3.07,0-4.24c1.17-1.17,3.07-1.17,4.24,0l45,45
		c1.17,1.17,1.17,3.07,0,4.24C60.04,61.21,59.27,61.5,58.5,61.5z"/>
	<path d="M13.5,61.5c-0.77,0-1.54-0.29-2.12-0.88c-1.17-1.17-1.17-3.07,0-4.24l45-45c1.17-1.17,3.07-1.17,4.24,0
		c1.17,1.17,1.17,3.07,0,4.24l-45,45C15.04,61.21,14.27,61.5,13.5,61.5z"/>
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
