<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M31.63,52.51c-5.62,12.3-11.34,12.55-18,0c-5.2-9.79-4.3-18,9-18S36.24,42.43,31.63,52.51z"/>
<circle cx="49.5" cy="22.5" r="9"/>
<circle cx="22.5" cy="22.5" r="9"/>
<path d="M40.37,45c5.62-12.3,11.34-12.55,18,0c5.2,9.79,4.3,18-9,18S35.76,55.09,40.37,45z"/>

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
