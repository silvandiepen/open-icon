<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M40.5,9h-23
		c-2.21,0-4,1.79-4,4v46c0,2.21,1.79,4,4,4h37c2.21,0,4-1.79,4-4V27L40.5,9z"/>
	<path d="M40.5,9v14
		c0,2.21,1.79,4,4,4h14"/>
</g>
<polyline points="27,45 36,54 45,36 
	"/>

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
