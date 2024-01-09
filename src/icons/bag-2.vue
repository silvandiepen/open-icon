<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M59,19.5H48V18c0-6.62-5.38-12-12-12s-12,5.38-12,12v1.5H13c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7
		v-28C66,22.64,62.86,19.5,59,19.5z M30,18c0-3.31,2.69-6,6-6s6,2.69,6,6v1.5H30V18z M60,54.5c0,0.55-0.45,1-1,1H13
		c-0.55,0-1-0.45-1-1v-28c0-0.55,0.45-1,1-1h11v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-6h12v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-6h11
		c0.55,0,1,0.45,1,1V54.5z"/>
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
