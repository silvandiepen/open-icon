<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M61,33H24.5V22.5c0-6.71,5.77-12.09,12.61-11.45c5.96,0.56,10.39,5.8,10.39,11.78V24c0,0.28,0.22,0.5,0.5,0.5h3
		c0.28,0,0.5-0.22,0.5-0.5v-1.5c0-8.81-7.38-15.92-16.28-15.48C26.89,7.43,20.5,14.61,20.5,22.95V33H11c-0.28,0-0.5,0.22-0.5,0.5V55
		c0,6.08,4.92,11,11,11h29c6.08,0,11-4.92,11-11V33.5C61.5,33.22,61.28,33,61,33z M55.5,55c0,2.76-2.24,5-5,5h-29
		c-2.76,0-5-2.24-5-5V39h39V55z"/>
	<path d="M33.5,57h5c0.28,0,0.5-0.22,0.5-0.5v-14c0-0.28-0.22-0.5-0.5-0.5h-5c-0.28,0-0.5,0.22-0.5,0.5v14
		C33,56.78,33.22,57,33.5,57z"/>
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
