<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<circle cx="36" cy="36" r="18"/>
<line x1="36" y1="4.5" x2="36" y2="9"/>
<line x1="36" y1="63" x2="36" y2="67.5"/>
<line x1="4.5" y1="36" x2="9" y2="36"/>
<line x1="63" y1="36" x2="67.5" y2="36"/>
<line x1="13.73" y1="13.73" x2="16.91" y2="16.91"/>
<line x1="55.09" y1="55.09" x2="58.27" y2="58.27"/>
<line x1="13.73" y1="58.27" x2="16.91" y2="55.09"/>
<line x1="55.09" y1="16.91" x2="58.27" y2="13.73"/>

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
