<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<circle cx="28.29" cy="24.75" r="11.25"/>
<path d="
	M47.57,55.29C47.57,63,28.29,63,28.29,63S9,63,9,55.29C9,44.63,17.63,36,28.29,36S47.57,44.63,47.57,55.29z"/>
<path d="
	M36,32.92c2.01,1.9,4.72,3.08,7.71,3.08c6.21,0,11.25-5.04,11.25-11.25S49.93,13.5,43.71,13.5c-2.99,0-5.7,1.17-7.71,3.08"/>
<path d="
	M36,62.37C40.1,63,43.71,63,43.71,63S63,63,63,55.29C63,44.63,54.37,36,43.71,36c-2.74,0-5.35,0.58-7.71,1.62"/>

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
