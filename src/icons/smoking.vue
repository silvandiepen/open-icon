<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M25.72,19.28c-5.59,0-9.52,1.51-11.66,4.49c-2.36,3.28-1.69,7.21-1.35,8.6c0.07,0.28,0.36,0.44,0.64,0.35l2.86-0.94
		c0.24-0.08,0.39-0.32,0.33-0.57c-0.21-0.95-0.54-3.31,0.77-5.11c1.34-1.84,4.25-2.81,8.4-2.81c5.59,0,9.52-1.51,11.66-4.49
		c2.36-3.28,1.69-7.21,1.35-8.6c-0.07-0.28-0.36-0.44-0.64-0.35l-2.86,0.94c-0.24,0.08-0.39,0.32-0.33,0.57
		c0.21,0.95,0.54,3.31-0.77,5.11C32.78,18.31,29.88,19.28,25.72,19.28z"/>
	<path d="M16.5,36c-0.28,0-0.5,0.22-0.5,0.5v8c0,0.28,0.22,0.5,0.5,0.5h3c0.28,0,0.5-0.22,0.5-0.5v-8c0-0.28-0.22-0.5-0.5-0.5H16.5z
		"/>
	<path d="M58.5,44.5v-8c0-0.28-0.22-0.5-0.5-0.5H23c-0.28,0-0.5,0.22-0.5,0.5v8c0,0.28,0.22,0.5,0.5,0.5h35
		C58.28,45,58.5,44.78,58.5,44.5z"/>
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
