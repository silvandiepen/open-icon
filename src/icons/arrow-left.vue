<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M15.23,34.85c-0.04,0.1-0.06,0.2-0.09,0.3c-0.03,0.09-0.06,0.17-0.08,0.26c-0.08,0.39-0.08,0.79,0,1.18
		c0.02,0.09,0.05,0.17,0.08,0.26c0.03,0.1,0.05,0.21,0.09,0.3c0.04,0.1,0.1,0.19,0.15,0.29c0.04,0.07,0.07,0.15,0.12,0.22
		c0.11,0.17,0.24,0.32,0.38,0.46l14.4,14.4c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L25.24,39
		H54c1.66,0,3-1.34,3-3s-1.34-3-3-3H25.24l9.28-9.28c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0l-14.4,14.4
		c-0.14,0.14-0.27,0.29-0.38,0.46c-0.05,0.07-0.08,0.15-0.12,0.22C15.33,34.66,15.27,34.75,15.23,34.85z"/>
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
