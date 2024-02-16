<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="
		M59,58.5H13c-2.21,0-4-1.79-4-4v-28c0-2.21,1.79-4,4-4h46c2.21,0,4,1.79,4,4v28C63,56.71,61.21,58.5,59,58.5z"/>
	
		<polyline points="
		27,22.5 27,13.5 45,13.5 45,22.5 	"/>
	
		<line x1="9" y1="36" x2="63" y2="36"/>
</g>
<line x1="36" y1="45" x2="36" y2="45"/>

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
