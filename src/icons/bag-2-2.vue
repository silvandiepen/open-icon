<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="
	M59,58.5H13c-2.21,0-4-1.79-4-4v-28c0-2.21,1.79-4,4-4h46c2.21,0,4,1.79,4,4v28C63,56.71,61.21,58.5,59,58.5z"/>
<path d="
	M27,31.5V18c0-4.97,4.03-9,9-9h0c4.97,0,9,4.03,9,9v13.5"/>

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
