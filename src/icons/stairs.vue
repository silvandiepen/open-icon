<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M16,61.5h-5c-0.28,0-0.5-0.22-0.5-0.5V47c0-0.28,0.22-0.5,0.5-0.5h8.5V38c0-0.28,0.22-0.5,0.5-0.5h8.5V29
	c0-0.28,0.22-0.5,0.5-0.5h8.5V20c0-0.28,0.22-0.5,0.5-0.5h8.5V11c0-0.28,0.22-0.5,0.5-0.5h14c0.28,0,0.5,0.22,0.5,0.5v5
	c0,0.28-0.22,0.5-0.5,0.5h-8.5V25c0,0.28-0.22,0.5-0.5,0.5h-8.5V34c0,0.28-0.22,0.5-0.5,0.5h-8.5V43c0,0.28-0.22,0.5-0.5,0.5h-8.5
	V52c0,0.28-0.22,0.5-0.5,0.5h-8.5V61C16.5,61.28,16.28,61.5,16,61.5z"/>

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
