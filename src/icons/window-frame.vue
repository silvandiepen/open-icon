<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M13.5,25.5c1.66,0,3-1.34,3-3v-6h6c1.66,0,3-1.34,3-3s-1.34-3-3-3h-9c-1.66,0-3,1.34-3,3v9
		C10.5,24.16,11.84,25.5,13.5,25.5z"/>
	<path d="M58.5,46.5c-1.66,0-3,1.34-3,3v6h-6c-1.66,0-3,1.34-3,3s1.34,3,3,3h9c1.66,0,3-1.34,3-3v-9
		C61.5,47.84,60.16,46.5,58.5,46.5z"/>
	<path d="M13.5,61.5h9c1.66,0,3-1.34,3-3s-1.34-3-3-3h-6v-6c0-1.66-1.34-3-3-3s-3,1.34-3,3v9C10.5,60.16,11.84,61.5,13.5,61.5z"/>
	<path d="M46.5,13.5c0,1.66,1.34,3,3,3h6v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-9c0-1.66-1.34-3-3-3h-9C47.84,10.5,46.5,11.84,46.5,13.5z
		"/>
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
