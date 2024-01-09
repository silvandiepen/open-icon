<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M27,39h6v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-6h6c1.66,0,3-1.34,3-3s-1.34-3-3-3h-6v-6c0-1.66-1.34-3-3-3s-3,1.34-3,3v6h-6
		c-1.66,0-3,1.34-3,3S25.34,39,27,39z"/>
	<path d="M36,66c16.54,0,30-13.46,30-30S52.54,6,36,6S6,19.46,6,36S19.46,66,36,66z M36,12c13.23,0,24,10.77,24,24S49.23,60,36,60
		S12,49.23,12,36S22.77,12,36,12z"/>
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
