<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M59,57H13c-3.86,0-7-3.14-7-7V22c0-3.86,3.14-7,7-7h46c3.86,0,7,3.14,7,7v28C66,53.86,62.86,57,59,57z M13,21
		c-0.55,0-1,0.45-1,1v28c0,0.55,0.45,1,1,1h46c0.55,0,1-0.45,1-1V22c0-0.55-0.45-1-1-1H13z"/>
</g>
<path d="M31.5,47H18c-1.1,0-2-0.9-2-2V27c0-1.1,0.9-2,2-2h13.5c1.1,0,2,0.9,2,2v18C33.5,46.1,32.6,47,31.5,47z M20,43h9.5V29H20V43z
	"/>
<path d="M54,38H40.5c-1.1,0-2-0.9-2-2s0.9-2,2-2H54c1.1,0,2,0.9,2,2S55.1,38,54,38z"/>
<path d="M49.5,29h-9c-1.1,0-2-0.9-2-2s0.9-2,2-2h9c1.1,0,2,0.9,2,2S50.6,29,49.5,29z"/>
<path d="M54,47H40.5c-1.1,0-2-0.9-2-2s0.9-2,2-2H54c1.1,0,2,0.9,2,2S55.1,47,54,47z"/>

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
