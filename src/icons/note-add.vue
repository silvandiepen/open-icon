<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M25,42h-5c-0.28,0-0.5,0.22-0.5,0.5V51H11c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h8.5v8.5
		c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V57H34c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5h-8.5v-8.5
		C25.5,42.22,25.28,42,25,42z"/>
	<path d="M54.5,10.5h-3v-3C51.5,7.22,51.28,7,51,7h-3c-0.28,0-0.5,0.22-0.5,0.5v3h-5v-3C42.5,7.22,42.28,7,42,7h-3
		c-0.28,0-0.5,0.22-0.5,0.5v3h-5v-3C33.5,7.22,33.28,7,33,7h-3c-0.28,0-0.5,0.22-0.5,0.5v3h-5v-3C24.5,7.22,24.28,7,24,7h-3
		c-0.28,0-0.5,0.22-0.5,0.5v3h-3c-3.87,0-7,3.13-7,7V43c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V17.5c0-0.55,0.45-1,1-1
		h3v3c0,0.28,0.22,0.5,0.5,0.5h3c0.28,0,0.5-0.22,0.5-0.5v-3h5v3c0,0.28,0.22,0.5,0.5,0.5h3c0.28,0,0.5-0.22,0.5-0.5v-3h5v3
		c0,0.28,0.22,0.5,0.5,0.5h3c0.28,0,0.5-0.22,0.5-0.5v-3h5v3c0,0.28,0.22,0.5,0.5,0.5h3c0.28,0,0.5-0.22,0.5-0.5v-3h3
		c0.55,0,1,0.45,1,1V59c0,0.55-0.45,1-1,1h-21c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h21c3.87,0,7-3.13,7-7V17.5
		C61.5,13.63,58.37,10.5,54.5,10.5z"/>
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
