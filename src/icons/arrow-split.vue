<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M15.53,46.77l-8.65-8.65c-1.17-1.17-1.17-3.07,0-4.24l8.65-8.65c0.2-0.2,0.51-0.2,0.71,0l3.54,3.54c0.2,0.2,0.2,0.51,0,0.71
	L13.24,36l6.52,6.53c0.2,0.2,0.2,0.51,0,0.71l-3.54,3.54C16.04,46.96,15.72,46.96,15.53,46.77z"/>
<path d="M26.5,39H9v-6h17.5c0.28,0,0.5,0.22,0.5,0.5v5C27,38.78,26.78,39,26.5,39z"/>
<path d="M55.77,46.77l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71L58.76,36l-6.52-6.53c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54
	c0.2-0.2,0.51-0.2,0.71,0l8.65,8.65c1.17,1.17,1.17,3.07,0,4.24l-8.65,8.65C56.28,46.96,55.96,46.96,55.77,46.77z"/>
<path d="M63,39H45.5c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5H63V39z"/>
<path d="M38.5,63h-5c-0.28,0-0.5-0.22-0.5-0.5v-53C33,9.22,33.22,9,33.5,9h5C38.78,9,39,9.22,39,9.5v53C39,62.78,38.78,63,38.5,63z"
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
