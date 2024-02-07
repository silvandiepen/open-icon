<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M56.5,24h-5.14c-3.25,0-6.3-1.24-8.63-3.5C39.26,17.1,34.73,15,29.87,15H21h-5.5c-0.28,0-0.5,0.22-0.5,0.5V48v17.5
		c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V48.02c3.11,0.09,6.03,1.31,8.26,3.49c3.48,3.39,8.01,5.5,12.87,5.5H56.5
		c0.28,0,0.5-0.22,0.5-0.5v-32C57,24.22,56.78,24,56.5,24z M51,51h-8.64c-3.3,0-6.41-1.29-8.74-3.62C30.24,44,25.77,42.1,21,42V21
		h8.64c3.3,0,6.41,1.29,8.74,3.62C41.76,28,46.23,29.9,51,30V51z"/>
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
