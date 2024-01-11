<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M9,34.5h18c1.66,0,3-1.34,3-3v-18c0-1.66-1.34-3-3-3H9c-1.66,0-3,1.34-3,3v18C6,33.16,7.34,34.5,9,34.5z M12,16.5h12v12H12
		V16.5z"/>
	<path d="M63,10.5H36c-1.66,0-3,1.34-3,3v18c0,1.66,1.34,3,3,3h27c1.66,0,3-1.34,3-3v-18C66,11.84,64.66,10.5,63,10.5z M60,28.5H39
		v-12h21V28.5z"/>
	<path d="M45,37.5H9c-1.66,0-3,1.34-3,3v18c0,1.66,1.34,3,3,3h36c1.66,0,3-1.34,3-3v-18C48,38.84,46.66,37.5,45,37.5z M42,55.5H12
		v-12h30V55.5z"/>
	<path d="M63,37.5h-9c-1.66,0-3,1.34-3,3v18c0,1.66,1.34,3,3,3h9c1.66,0,3-1.34,3-3v-18C66,38.84,64.66,37.5,63,37.5z M60,55.5h-3
		v-12h3V55.5z"/>
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
