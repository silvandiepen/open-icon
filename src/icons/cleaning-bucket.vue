<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M47.77,61.5H24.23c-2.47,0-4.6-1.85-4.95-4.29l-1.04-7.28l5.94-0.85l0.92,6.42h21.8L50.54,30H36v-6h15.69
	c1.45,0,2.83,0.63,3.78,1.72s1.38,2.55,1.17,3.98l-3.93,27.5C52.37,59.65,50.24,61.5,47.77,61.5z"/>
<path d="M52.5,27h-6v-4.5C46.5,16.71,41.79,12,36,12s-10.5,4.71-10.5,10.5h-6C19.5,13.4,26.9,6,36,6s16.5,7.4,16.5,16.5V27z"/>
<path d="M34,51.5H15.5c-2.21,0-4-1.79-4-4v-17c0-5.51,4.49-10,10-10H34c2.21,0,4,1.79,4,4v23C38,49.71,36.21,51.5,34,51.5z
	 M21.5,24.5c-3.31,0-6,2.69-6,6v17l18.5,0v-23H21.5z"/>
<rect x="13.5" y="38.5" width="22.5" height="4"/>

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
