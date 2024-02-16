<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,17.5c-10.18-6.79-20.37-3.33-24.76-1.23
	C9.86,16.93,9,18.34,9,19.87v36.37c0,2.74,2.7,4.68,5.29,3.78c5.17-1.79,13.44-3.03,21.71,2.48c8.27-5.51,16.54-4.27,21.71-2.48
	c2.59,0.9,5.29-1.04,5.29-3.78V19.87c0-1.53-0.86-2.93-2.24-3.59C56.37,14.17,46.18,10.71,36,17.5z"/>
<line x1="36" y1="17.5" x2="36" y2="62.5"/>

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
