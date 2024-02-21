<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M29.5,66h-5c-0.28,0-0.5-0.22-0.5-0.5v-14c0-0.28,0.22-0.5,0.5-0.5H33v-8.5c0-0.28,0.22-0.5,0.5-0.5H42v-8.5
	c0-0.28,0.22-0.5,0.5-0.5H51v-8.5c0-0.28,0.22-0.5,0.5-0.5h14c0.28,0,0.5,0.22,0.5,0.5v5c0,0.28-0.22,0.5-0.5,0.5H57v8.5
	c0,0.28-0.22,0.5-0.5,0.5H48v8.5c0,0.28-0.22,0.5-0.5,0.5H39v8.5c0,0.28-0.22,0.5-0.5,0.5H30v8.5C30,65.78,29.78,66,29.5,66z"/>
<g>
	<path d="M29.5,39h-16c-1.66,0-3-1.34-3-3V20c0-0.28,0.22-0.5,0.5-0.5h5c0.28,0,0.5,0.22,0.5,0.5v13h13c0.28,0,0.5,0.22,0.5,0.5v5
		C30,38.78,29.78,39,29.5,39z"/>
	<path d="M18,35.74l-4.24-4.24L35.65,9.61c0.2-0.2,0.51-0.2,0.71,0l3.54,3.54c0.2,0.2,0.2,0.51,0,0.71L18,35.74z"/>
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
