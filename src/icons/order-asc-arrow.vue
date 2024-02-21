<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<rect x="28.5" y="51" width="28.5" height="6"/>
<rect x="28.5" y="39" width="19.5" height="6"/>
<rect x="28.5" y="27" width="10.5" height="6"/>
<rect x="16" y="16" width="4" height="44.5"/>
<path d="M22.5,20.83l-4.5-4.5l-4.5,4.5L10.67,18l5.91-5.91c0.78-0.78,2.05-0.78,2.83,0L25.33,18L22.5,20.83z"/>

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
