<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M59,61.5H13c-3.86,0-7-3.14-7-7v-28c0-3.86,3.14-7,7-7h46c3.86,0,7,3.14,7,7v28C66,58.36,62.86,61.5,59,61.5z M13,25.5
	c-0.55,0-1,0.45-1,1v28c0,0.55,0.45,1,1,1h46c0.55,0,1-0.45,1-1v-28c0-0.55-0.45-1-1-1H13z"/>
<path d="M36,47c-0.44,0-0.88-0.15-1.25-0.44l-22.5-18c-0.86-0.69-1-1.95-0.31-2.81s1.95-1,2.81-0.31l21.25,17l21.25-17
	c0.86-0.69,2.12-0.55,2.81,0.31c0.69,0.86,0.55,2.12-0.31,2.81l-22.5,18C36.88,46.85,36.44,47,36,47z"/>

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
