<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M59,63
	H13c-2.21,0-4-1.79-4-4V13c0-2.21,1.79-4,4-4h46c2.21,0,4,1.79,4,4v46C63,61.21,61.21,63,59,63z"/>
<polyline points="
	18,18 24.75,24.75 18,31.5 "/>
<line x1="31.5" y1="31.5" x2="40.5" y2="31.5"/>

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
