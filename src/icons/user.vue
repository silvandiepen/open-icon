<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,66c3.72,0,22.29-0.52,22.29-10.71c0-8.83-5.16-16.48-12.63-20.08c2.82-2.61,4.6-6.32,4.6-10.45
		c0-7.86-6.39-14.25-14.25-14.25s-14.25,6.39-14.25,14.25c0,4.13,1.78,7.85,4.6,10.45c-7.47,3.6-12.63,11.25-12.63,20.08
		C13.71,65.48,32.28,66,36,66z M36,16.5c4.55,0,8.25,3.7,8.25,8.25S40.55,33,36,33s-8.25-3.7-8.25-8.25S31.45,16.5,36,16.5z M36,39
		c8.98,0,16.29,7.31,16.29,16.29c0,2.22-6.97,4.7-16.28,4.71c-9.32-0.01-16.29-2.5-16.29-4.71C19.71,46.31,27.02,39,36,39z"/>
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
