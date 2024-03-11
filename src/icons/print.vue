<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M63,24h-6V9c0-1.66-1.34-3-3-3H18c-1.66,0-3,1.34-3,3v15H9c-1.66,0-3,1.34-3,3v27c0,1.66,1.34,3,3,3h6v6c0,1.66,1.34,3,3,3
		h36c1.66,0,3-1.34,3-3v-6h6c1.66,0,3-1.34,3-3V27C66,25.34,64.66,24,63,24z M21,12h30v12H21V12z M51,60H21v-6v-6h30v6V60z M60,51
		h-3v-6c0-1.66-1.34-3-3-3H18c-1.66,0-3,1.34-3,3v6h-3V30h6h36h6V51z"/>
	<path d="M51.88,33.88C51.32,34.44,51,35.21,51,36s0.32,1.56,0.88,2.12C52.44,38.68,53.21,39,54,39s1.56-0.32,2.12-0.88
		C56.68,37.56,57,36.79,57,36s-0.32-1.56-0.88-2.12C55,32.76,53,32.76,51.88,33.88z"/>
	<path d="M45,52H27c-1.1,0-2,0.9-2,2s0.9,2,2,2h18c1.1,0,2-0.9,2-2S46.1,52,45,52z"/>
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
