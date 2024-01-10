<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M50.85,21.15c-1.17-1.17-3.07-1.17-4.24,0L26.27,41.49V28.36c0-1.66-1.34-3-3-3s-3,1.34-3,3v20.36
		c0,0.2,0.02,0.39,0.06,0.59c0.02,0.09,0.05,0.17,0.08,0.26c0.03,0.1,0.05,0.21,0.09,0.3c0.04,0.1,0.1,0.19,0.15,0.29
		c0.04,0.07,0.07,0.15,0.12,0.22c0.22,0.33,0.5,0.61,0.83,0.83c0.07,0.05,0.15,0.08,0.23,0.12c0.1,0.05,0.19,0.11,0.29,0.15
		c0.1,0.04,0.2,0.06,0.3,0.09c0.09,0.03,0.17,0.06,0.26,0.08c0.19,0.04,0.39,0.06,0.59,0.06h20.36c1.66,0,3-1.34,3-3s-1.34-3-3-3
		H30.51l20.33-20.33C52.02,24.22,52.02,22.32,50.85,21.15z"/>
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
