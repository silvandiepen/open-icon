<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M31.31,37.55l17.23,13c1.32,1,3.21,0.05,3.2-1.6l-0.08-26.78c-0.01-1.68-1.95-2.6-3.25-1.55L31.26,34.39
		C30.24,35.21,30.27,36.76,31.31,37.55z"/>
	<path d="M22.26,18c-1.1,0-2,0.9-2,2v32c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2V20c0-1.1-0.9-2-2-2H22.26z"/>
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
