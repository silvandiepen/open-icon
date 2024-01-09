<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M57,15H47v-2c0-3.31-2.69-6-6-6H31c-3.31,0-6,2.69-6,6v2H15c-4.96,0-9,4.04-9,9v24c0,4.96,4.04,9,9,9h42c4.96,0,9-4.04,9-9
		V24C66,19.04,61.96,15,57,15z M29,13c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v2H29V13z M60,48c0,1.65-1.35,3-3,3H15c-1.65,0-3-1.35-3-3
		V24c0-1.65,1.35-3,3-3h42c1.65,0,3,1.35,3,3V48z"/>
	<path d="M36,25c-6.07,0-11,4.93-11,11s4.93,11,11,11s11-4.93,11-11S42.07,25,36,25z M36,43c-3.86,0-7-3.14-7-7s3.14-7,7-7
		s7,3.14,7,7S39.86,43,36,43z"/>
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
