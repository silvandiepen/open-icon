<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M55.26,15.28c-1.5-0.7-3.29-0.04-3.98,1.47L38.93,43.46L27.5,26.33c-0.92-1.38-2.78-1.75-4.16-0.83
	c-1.38,0.92-1.75,2.78-0.83,4.16L39.89,55.7l16.83-36.44C57.42,17.75,56.76,15.97,55.26,15.28z"/>

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
