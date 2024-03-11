<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,15C16.37,15,6.72,33.86,6.32,34.66c-0.42,0.84-0.42,1.84,0,2.68C6.72,38.14,16.37,57,36,57
		c19.63,0,29.28-18.86,29.68-19.66c0.42-0.84,0.42-1.84,0-2.68C65.28,33.86,55.63,15,36,15z M36,51c-13.15,0-21.14-11.09-23.54-15
		c2.41-3.91,10.4-15,23.54-15c13.14,0,21.13,11.09,23.54,15C57.13,39.91,49.14,51,36,51z"/>
	<path d="M36,25c-6.07,0-11,4.93-11,11s4.93,11,11,11s11-4.93,11-11S42.07,25,36,25z M36,43c-3.86,0-7-3.14-7-7s3.14-7,7-7
		s7,3.14,7,7S39.86,43,36,43z"/>
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
