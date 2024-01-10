<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,15c-1.66,0-3,1.34-3,3v15H18c-1.66,0-3,1.34-3,3s1.34,3,3,3h15v15c0,1.66,1.34,3,3,3s3-1.34,3-3V39h15
		c1.66,0,3-1.34,3-3s-1.34-3-3-3H39V18C39,16.34,37.66,15,36,15z"/>
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
