<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M15.53,46.77c0.2,0.2,0.51,0.2,0.71,0l3.54-3.54c0.2-0.2,0.2-0.51,0-0.71L16.24,39H26.5c0.28,0,0.5-0.22,0.5-0.5v-5
		c0-0.28-0.22-0.5-0.5-0.5H16.24l3.53-3.53c0.2-0.2,0.2-0.51,0-0.71l-3.54-3.54c-0.2-0.2-0.51-0.2-0.71,0l-8.65,8.65
		c-1.17,1.17-1.17,3.07,0,4.24L15.53,46.77z"/>
	<path d="M56.47,25.23c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54c-0.2,0.2-0.2,0.51,0,0.71L55.76,33H45.5c-0.28,0-0.5,0.22-0.5,0.5v5
		c0,0.28,0.22,0.5,0.5,0.5h10.26l-3.53,3.53c-0.2,0.2-0.2,0.51,0,0.71l3.54,3.54c0.2,0.2,0.51,0.2,0.71,0l8.65-8.65
		c1.17-1.17,1.17-3.07,0-4.24L56.47,25.23z"/>
	<path d="M33.5,63h5c0.28,0,0.5-0.22,0.5-0.5v-53C39,9.22,38.78,9,38.5,9h-5C33.22,9,33,9.22,33,9.5v53C33,62.78,33.22,63,33.5,63z"
		/>
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
