<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M29.12,24.62L33,20.74V45c0,1.66,1.34,3,3,3c1.66,0,3-1.34,3-3V20.74l3.88,3.88c0.59,0.59,1.35,0.88,2.12,0.88
		s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-9-9c-0.14-0.14-0.3-0.27-0.46-0.38c-0.07-0.05-0.14-0.08-0.21-0.11
		c-0.1-0.06-0.2-0.12-0.3-0.16c-0.09-0.04-0.19-0.06-0.29-0.09c-0.09-0.03-0.17-0.06-0.27-0.08c-0.19-0.04-0.39-0.06-0.58-0.06
		c0,0,0,0-0.01,0c0,0,0,0,0,0c-0.2,0-0.39,0.02-0.59,0.06c-0.09,0.02-0.17,0.05-0.25,0.07c-0.1,0.03-0.21,0.05-0.31,0.1
		c-0.1,0.04-0.19,0.1-0.28,0.15c-0.08,0.04-0.16,0.08-0.23,0.13c-0.17,0.11-0.32,0.24-0.46,0.38l-9,9c-1.17,1.17-1.17,3.07,0,4.24
		C26.05,25.79,27.95,25.79,29.12,24.62z"/>
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
