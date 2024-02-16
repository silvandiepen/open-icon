<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M65.12,6.88c-1.17-1.17-3.07-1.17-4.24,0L54,13.76l-6.88-6.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24
		L49.76,18l-6.88,6.88c-1.17,1.17-1.17,3.07,0,4.24C43.46,29.71,44.23,30,45,30s1.54-0.29,2.12-0.88L54,22.24l6.88,6.88
		C61.46,29.71,62.23,30,63,30s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L58.24,18l6.88-6.88C66.29,9.95,66.29,8.05,65.12,6.88
		z"/>
	<path d="M63,42c-1.66,0-3,1.34-3,3v5.94C59.26,51.58,58.19,52,57,52H15c-1.19,0-2.26-0.42-3-1.06V15c0-1.65,1.35-3,3-3h12
		c1.66,0,3-1.34,3-3s-1.34-3-3-3H15c-4.96,0-9,4.04-9,9v42c0,4.96,4.04,9,9,9h42c4.96,0,9-4.04,9-9V45C66,43.34,64.66,42,63,42z
		 M60,57c0,1.65-1.35,3-3,3H15c-1.65,0-3-1.35-3-3v-1.52c0.93,0.33,1.94,0.52,3,0.52h42c1.06,0,2.07-0.19,3-0.52V57z"/>
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
