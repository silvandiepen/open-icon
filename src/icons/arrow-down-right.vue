<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M25.36,48.73c0,1.66,1.34,3,3,3h20.36c0.2,0,0.39-0.02,0.59-0.06c0.09-0.02,0.17-0.05,0.26-0.08
		c0.1-0.03,0.21-0.05,0.3-0.09c0.1-0.04,0.19-0.1,0.29-0.15c0.08-0.04,0.16-0.08,0.23-0.12c0.33-0.22,0.61-0.5,0.83-0.83
		c0.05-0.07,0.08-0.15,0.12-0.22c0.05-0.1,0.11-0.19,0.15-0.29c0.04-0.1,0.06-0.2,0.09-0.3c0.03-0.09,0.06-0.17,0.08-0.26
		c0.04-0.19,0.06-0.39,0.06-0.59V28.36c0-1.66-1.34-3-3-3s-3,1.34-3,3v13.12L25.39,21.15c-1.17-1.17-3.07-1.17-4.24,0
		c-1.17,1.17-1.17,3.07,0,4.24l20.33,20.33H28.36C26.71,45.73,25.36,47.07,25.36,48.73z"/>
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
