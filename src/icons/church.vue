<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M39,25.5h-6v-19C33,6.22,33.22,6,33.5,6h5C38.78,6,39,6.22,39,6.5V25.5z"/>
<path d="M42.25,16.5h-12.5c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h12.5c0.28,0,0.5,0.22,0.5,0.5v5
	C42.75,16.28,42.53,16.5,42.25,16.5z"/>
<path d="M56.8,34.35L36,18.75l-20.8,15.6c-0.13,0.09-0.2,0.24-0.2,0.4V61c0,0.28,0.22,0.5,0.5,0.5h18v-19h5v19h18
	c0.28,0,0.5-0.22,0.5-0.5V34.75C57,34.59,56.93,34.44,56.8,34.35z M51,55.5h-8.5v-17h-13v17H21v-18l15-11.25L51,37.5V55.5z"/>

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
