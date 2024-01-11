<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M56.12,42.88l-18-18c-1.17-1.17-3.07-1.17-4.24,0l-18,18c-1.17,1.17-1.17,3.07,0,4.24c1.17,1.17,3.07,1.17,4.24,0L36,31.24
	l15.88,15.88C52.46,47.71,53.23,48,54,48s1.54-0.29,2.12-0.88C57.29,45.95,57.29,44.05,56.12,42.88z"/>

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
