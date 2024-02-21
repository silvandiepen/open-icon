<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M13.35,32.72c-0.28,0.09-0.57-0.06-0.64-0.35c-0.35-1.39-1.02-5.32,1.35-8.6c2.15-2.98,6.07-4.49,11.66-4.49
	c4.16,0,7.06-0.97,8.4-2.81c1.31-1.8,0.98-4.15,0.77-5.11c-0.05-0.25,0.09-0.49,0.33-0.57l2.86-0.94c0.28-0.09,0.57,0.06,0.64,0.35
	c0.35,1.39,1.02,5.32-1.35,8.6c-2.15,2.98-6.07,4.49-11.66,4.49c-4.16,0-7.06,0.97-8.4,2.81c-1.31,1.8-0.98,4.15-0.77,5.11
	c0.05,0.25-0.09,0.49-0.33,0.57L13.35,32.72z"/>
<g>
	<path d="M19.5,45h-3c-0.28,0-0.5-0.22-0.5-0.5v-8c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v8C20,44.78,19.78,45,19.5,45z
		"/>
</g>
<path d="M58,45H23c-0.28,0-0.5-0.22-0.5-0.5v-8c0-0.28,0.22-0.5,0.5-0.5h35c0.28,0,0.5,0.22,0.5,0.5v8C58.5,44.78,58.28,45,58,45z"
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
