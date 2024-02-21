<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M57,66H15c-4.96,0-9-4.04-9-9V15c0-4.96,4.04-9,9-9h12c1.66,0,3,1.34,3,3s-1.34,3-3,3H15c-1.65,0-3,1.35-3,3v42
	c0,1.65,1.35,3,3,3h42c1.65,0,3-1.35,3-3V45c0-1.66,1.34-3,3-3s3,1.34,3,3v12C66,61.96,61.96,66,57,66z"/>
<path d="M57,56H15c-4.41,0-8-3.14-8-7V14c0-3.86,3.59-7,8-7h12c1.1,0,2,0.9,2,2s-0.9,2-2,2H15c-2.17,0-4,1.37-4,3v35
	c0,1.63,1.83,3,4,3h42c2.17,0,4-1.37,4-3v-4c0-1.1,0.9-2,2-2s2,0.9,2,2v4C65,52.86,61.41,56,57,56z"/>
<g>
	<path d="M63,25.5H36c-1.66,0-3-1.34-3-3s1.34-3,3-3h27c1.66,0,3,1.34,3,3S64.66,25.5,63,25.5z"/>
	<path d="M49.5,39c-1.66,0-3-1.34-3-3V9c0-1.66,1.34-3,3-3s3,1.34,3,3v27C52.5,37.66,51.16,39,49.5,39z"/>
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
