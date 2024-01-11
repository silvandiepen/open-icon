<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M33.88,47.12c0.14,0.14,0.29,0.27,0.46,0.38c0.07,0.05,0.15,0.08,0.22,0.12c0.1,0.05,0.19,0.11,0.29,0.15
		c0.1,0.04,0.2,0.06,0.3,0.09c0.09,0.03,0.17,0.06,0.26,0.08C35.61,47.98,35.8,48,36,48c0.2,0,0.39-0.02,0.59-0.06
		c0.09-0.02,0.18-0.05,0.27-0.08c0.1-0.03,0.2-0.05,0.29-0.09c0.11-0.04,0.21-0.11,0.31-0.16c0.07-0.04,0.14-0.07,0.21-0.11
		c0.17-0.11,0.32-0.24,0.46-0.38l9-9c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0L39,37.76V13.5c0-1.66-1.34-3-3-3
		c-1.66,0-3,1.34-3,3v24.26l-3.88-3.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L33.88,47.12z"/>
	<path d="M54,55.5H18c-1.66,0-3,1.34-3,3s1.34,3,3,3h36c1.66,0,3-1.34,3-3S55.66,55.5,54,55.5z"/>
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
