<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M51.23,46.64h-5c-0.28,0-0.5-0.22-0.5-0.5V26.27H25.86c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h22.86
		c1.66,0,3,1.34,3,3v22.86C51.73,46.41,51.5,46.64,51.23,46.64z"/>
	<path d="M22.92,52.62l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71L45,22.76L49.24,27L23.63,52.62C23.43,52.81,23.11,52.81,22.92,52.62z"/>
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
