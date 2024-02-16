<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M40.5,9h-14
		c-2.21,0-4,1.79-4,4v37c0,2.21,1.79,4,4,4h28c2.21,0,4-1.79,4-4V27L40.5,9z"/>
	<path d="M40.5,9v14
		c0,2.21,1.79,4,4,4h14"/>
</g>
<g>
	<path d="M22.5,18h-5
		c-2.21,0-4,1.79-4,4v37c0,2.21,1.79,4,4,4h28c2.21,0,4-1.79,4-4v-5"/>
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
