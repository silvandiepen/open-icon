<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M24.39,28.51c-2.71,0.06-4.89,2.27-4.89,4.99V61c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V33.5c0-2.72-2.19-4.93-4.89-4.99
			c-1.09-4.21-4.4-7.53-8.61-8.62V16.5h6v-6H22.5v6H33v3.39C28.79,20.98,25.48,24.3,24.39,28.51z M46.5,34.5v4h-21v-4H46.5z
			 M46.5,42.5v5h-21v-5H46.5z M25.5,60v-8.5h21V60H25.5z M41.19,28.5H30.81c1.04-1.79,2.97-3,5.19-3S40.15,26.71,41.19,28.5z"/>
	</g>
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
