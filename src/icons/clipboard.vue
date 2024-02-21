<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M50,66H22c-3.86,0-7-3.14-7-7V17.5c0-3.86,3.14-7,7-7h9.5v6H22c-0.55,0-1,0.45-1,1V59c0,0.55,0.45,1,1,1h28
	c0.55,0,1-0.45,1-1V17.5c0-0.55-0.45-1-1-1h-9.5v-6H50c3.86,0,7,3.14,7,7V59C57,62.86,53.86,66,50,66z"/>
<path d="M40.5,20h-9c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h9c1.1,0,2,0.9,2,2v9C42.5,19.1,41.6,20,40.5,20z M33.5,16h5v-5h-5V16z"/>

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
