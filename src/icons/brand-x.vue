<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M68.9,67.5L43.72,30.78l0.04,0.03L66.47,4.5h-7.59l-18.5,21.42L25.69,4.5H5.79L29.3,38.78l0,0L4.5,67.5h7.59l20.57-23.83
	L49,67.5H68.9z M22.68,10.23l35.34,51.55h-6.01L16.64,10.23H22.68z"/>

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
