<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M50.04,59.75H19.86c-0.87,0-1.7-0.38-2.27-1.03c-0.57-0.66-0.83-1.53-0.7-2.39l3.77-26.41c0.21-1.48,1.48-2.58,2.97-2.58
		h22.64c1.49,0,2.76,1.1,2.97,2.58l3.77,26.41c0.12,0.86-0.13,1.73-0.7,2.39C51.74,59.37,50.91,59.75,50.04,59.75z M23.32,53.75
		h23.26l-2.92-20.41H26.24L23.32,53.75z"/>
	<path d="M48.37,48.43c-1.66,0-3-1.34-3-3s1.34-3,3-3c6.67,0,12.09-5.42,12.09-12.09s-5.42-12.09-12.09-12.09
		s-12.09,5.42-12.09,12.09c0,1.66-1.34,3-3,3s-3-1.34-3-3c0-9.98,8.12-18.09,18.09-18.09s18.09,8.12,18.09,18.09
		S58.34,48.43,48.37,48.43z"/>
	<path d="M22.32,42.56c-0.59,0-1.17-0.17-1.67-0.51L6.87,32.83c-0.83-0.56-1.33-1.49-1.33-2.49v-3.77c0-0.92,0.43-1.8,1.15-2.36
		c0.73-0.57,1.68-0.77,2.57-0.55l15.09,3.77c1.49,0.37,2.46,1.81,2.24,3.33l-1.32,9.22c-0.15,1.02-0.81,1.9-1.75,2.32
		C23.15,42.48,22.73,42.56,22.32,42.56z M15.53,31.41l4.49,3.01l0.26-1.82L15.53,31.41z"/>
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
