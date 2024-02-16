<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M57,54
	H15c-3.31,0-6-2.69-6-6V24c0-3.31,2.69-6,6-6h42c3.31,0,6,2.69,6,6v24C63,51.31,60.31,54,57,54z"/>
<line x1="18" y1="45" x2="18" y2="45"/>
<line x1="27" y1="45" x2="27" y2="45"/>
<line x1="9" y1="31.5" x2="63" y2="31.5"/>

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
