<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M65.25,64.33H6.75c-1.07,0-2.06-0.57-2.6-1.5c-0.54-0.93-0.54-2.07,0-3L33.4,9.17c0.54-0.93,1.53-1.5,2.6-1.5
	s2.06,0.57,2.6,1.5l29.25,50.66c0.54,0.93,0.54,2.07,0,3C67.31,63.76,66.32,64.33,65.25,64.33z M11.95,58.33h48.11L36,16.67
	L11.95,58.33z"/>

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
