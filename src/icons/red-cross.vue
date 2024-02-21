<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M47.5,61.5h-23c-0.28,0-0.5-0.22-0.5-0.5V48.5c0-0.28-0.22-0.5-0.5-0.5H11c-0.28,0-0.5-0.22-0.5-0.5v-23
	c0-0.28,0.22-0.5,0.5-0.5h12.5c0.28,0,0.5-0.22,0.5-0.5V11c0-0.28,0.22-0.5,0.5-0.5h23c0.28,0,0.5,0.22,0.5,0.5v12.5
	c0,0.28,0.22,0.5,0.5,0.5H61c0.28,0,0.5,0.22,0.5,0.5v23c0,0.28-0.22,0.5-0.5,0.5H48.5c-0.28,0-0.5,0.22-0.5,0.5V61
	C48,61.28,47.78,61.5,47.5,61.5z M30.5,55.5h11c0.28,0,0.5-0.22,0.5-0.5V42.5c0-0.28,0.22-0.5,0.5-0.5H55c0.28,0,0.5-0.22,0.5-0.5
	v-11c0-0.28-0.22-0.5-0.5-0.5H42.5c-0.28,0-0.5-0.22-0.5-0.5V17c0-0.28-0.22-0.5-0.5-0.5h-11c-0.28,0-0.5,0.22-0.5,0.5v12.5
	c0,0.28-0.22,0.5-0.5,0.5H17c-0.28,0-0.5,0.22-0.5,0.5v11c0,0.28,0.22,0.5,0.5,0.5h12.5c0.28,0,0.5,0.22,0.5,0.5V55
	C30,55.28,30.22,55.5,30.5,55.5z"/>

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
