<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M60,4.5H12c-4.14,0-7.5,3.36-7.5,7.5v48c0,4.14,3.36,7.5,7.5,7.5h48c4.14,0,7.5-3.36,7.5-7.5V12
		C67.5,7.86,64.14,4.5,60,4.5z M24,57h-9V28.5h9V57z M19.5,24c-2.7,0-4.5-1.7-4.5-3.8s1.8-3.7,4.5-3.7s4.4,1.6,4.5,3.7
		C24,22.3,22.32,24,19.5,24z M57,57h-9c0,0,0-13.89,0-15c0-3-1.5-6-5.25-6.06h-0.12c-3.63,0-5.13,3.09-5.13,6.06c0,1.36,0,15,0,15
		h-9V28.5h9v3.84c0,0,2.9-3.84,8.72-3.84C52.17,28.5,57,32.59,57,40.89V57z"/>
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
