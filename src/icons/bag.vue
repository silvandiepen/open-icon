<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M56.25,61.5h-40.5c-0.83,0-1.63-0.35-2.19-0.95c-0.57-0.61-0.86-1.42-0.8-2.25l2.5-36c0.11-1.57,1.42-2.79,2.99-2.79h35.5
	c1.58,0,2.88,1.22,2.99,2.79l2.5,36c0.06,0.83-0.23,1.65-0.8,2.25C57.88,61.15,57.08,61.5,56.25,61.5z M18.97,55.5h34.07l-2.08-30
	h-29.9L18.97,55.5z"/>
<path d="M47,29h-4V18c0-3.86-3.14-7-7-7s-7,3.14-7,7v11h-4V18c0-6.07,4.93-11,11-11s11,4.93,11,11V29z"/>

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
