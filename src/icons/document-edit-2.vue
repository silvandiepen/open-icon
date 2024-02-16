<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,63h18.5
		c2.21,0,4-1.79,4-4V27l-18-18h-23c-2.21,0-4,1.79-4,4v27.5"/>
	<path d="M40.5,9v14
		c0,2.21,1.79,4,4,4h14"/>
</g>
<polygon points="
	13.5,54 13.5,63 22.5,63 40.5,45 31.5,36 "/>
<path d="M13.5,54c4.97,0,9,4.03,9,9"
	/>

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
