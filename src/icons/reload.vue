<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M61.23,43.23c-0.2-0.2-0.51-0.2-0.71,0L57,46.76V22c0-3.87-3.13-7-7-7H32.5c-0.41,0-0.65,0.47-0.4,0.8l3.75,5
		c0.09,0.13,0.24,0.2,0.4,0.2H50c0.55,0,1,0.45,1,1v24.76l-3.53-3.53c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54c-0.2,0.2-0.2,0.51,0,0.71
		l8.65,8.65C52.46,56.71,53.23,57,54,57s1.54-0.29,2.12-0.88l8.65-8.65c0.2-0.2,0.2-0.51,0-0.71L61.23,43.23z"/>
	<path d="M36.15,51.2c-0.09-0.13-0.24-0.2-0.4-0.2H22c-0.55,0-1-0.45-1-1V25.24l3.53,3.53c0.2,0.2,0.51,0.2,0.71,0l3.54-3.54
		c0.2-0.2,0.2-0.51,0-0.71l-8.65-8.65c-1.17-1.17-3.07-1.17-4.24,0l-8.65,8.65c-0.2,0.2-0.2,0.51,0,0.71l3.54,3.54
		c0.2,0.2,0.51,0.2,0.71,0L15,25.24V50c0,3.87,3.13,7,7,7h17.5c0.41,0,0.65-0.47,0.4-0.8L36.15,51.2z"/>
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
