<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<circle cx="15.75" cy="56.25" r="6.75"/>
<circle cx="15.75" cy="15.75" r="6.75"/>
<circle cx="56.25" cy="15.75" r="6.75"/>
<circle cx="56.25" cy="56.25" r="6.75"/>
<line x1="15.75" y1="22.5" x2="15.75" y2="49.5"/>
<line x1="22.5" y1="56.25" x2="49.5" y2="56.25"/>
<line x1="56.25" y1="22.5" x2="56.25" y2="49.5"/>
<line x1="22.5" y1="15.75" x2="49.5" y2="15.75"/>

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
