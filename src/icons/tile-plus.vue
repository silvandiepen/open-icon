<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M63,42c-1.66,0-3,1.34-3,3v5.94C59.26,51.58,58.19,52,57,52H15c-1.19,0-2.26-0.42-3-1.06V15c0-1.65,1.35-3,3-3h12
		c1.66,0,3-1.34,3-3s-1.34-3-3-3H15c-4.96,0-9,4.04-9,9v42c0,4.96,4.04,9,9,9h42c4.96,0,9-4.04,9-9V45C66,43.34,64.66,42,63,42z
		 M57,60H15c-1.65,0-3-1.35-3-3v-1.52c0.93,0.33,1.94,0.52,3,0.52h42c1.06,0,2.07-0.19,3-0.52V57C60,58.65,58.65,60,57,60z"/>
	<path d="M36,25.5h10.5V36c0,1.66,1.34,3,3,3s3-1.34,3-3V25.5H63c1.66,0,3-1.34,3-3s-1.34-3-3-3H52.5V9c0-1.66-1.34-3-3-3
		s-3,1.34-3,3v10.5H36c-1.66,0-3,1.34-3,3S34.34,25.5,36,25.5z"/>
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
