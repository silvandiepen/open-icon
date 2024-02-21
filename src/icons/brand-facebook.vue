<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,4.73c-17.4,0-31.5,14.1-31.5,31.5c0,15.79,11.63,28.83,26.79,31.11V44.58H23.5V36.3h7.79v-5.51
		c0-9.12,4.44-13.13,12.03-13.13c3.63,0,5.55,0.27,6.46,0.39v7.23h-5.17c-3.22,0-4.34,3.05-4.34,6.49v4.53h9.43l-1.28,8.28h-8.15
		v22.83C55.64,65.32,67.5,52.18,67.5,36.23C67.5,18.83,53.4,4.73,36,4.73z"/>
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
