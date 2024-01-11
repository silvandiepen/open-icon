<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M67.85,59.83L38.6,9.17c-0.54-0.93-1.53-1.5-2.6-1.5c-1.07,0-2.06,0.57-2.6,1.5L4.15,59.83c-0.54,0.93-0.54,2.07,0,3
	c0.54,0.93,1.53,1.5,2.6,1.5h58.5c1.07,0,2.06-0.57,2.6-1.5C68.38,61.9,68.38,60.76,67.85,59.83z M11.95,58.33L36,16.67l24.05,41.66
	H11.95z"/>

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
