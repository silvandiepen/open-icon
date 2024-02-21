<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M58.57,30H11.18c-3.96,0-5.51-5.13-2.22-7.33L34.6,5.58c0.17-0.11,0.39-0.11,0.55,0l25.64,17.09
	C64.08,24.87,62.53,30,58.57,30z M17.78,24h34.18L34.88,12.61L17.78,24z"/>
<g>
	<rect x="13.88" y="24" width="6" height="33"/>
	<rect x="22.88" y="24" width="6" height="33"/>
	<rect x="40.88" y="24" width="6" height="33"/>
	<rect x="49.88" y="24" width="6" height="33"/>
</g>
<path d="M59.88,57h-50c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h50c0.28,0,0.5,0.22,0.5,0.5v5
	C60.38,56.78,60.15,57,59.88,57z"/>
<path d="M64.38,66h-59c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h59c0.28,0,0.5,0.22,0.5,0.5v5
	C64.88,65.78,64.65,66,64.38,66z"/>

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
