<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,49.79c-1.35,0-2.7-0.39-3.88-1.18L9.83,33.76c-1.39-0.93-2.23-2.48-2.23-4.16s0.83-3.23,2.23-4.16l0,0c0,0,0,0,0,0
	l22.29-14.86c2.36-1.57,5.41-1.57,7.77,0l22.28,14.86c1.39,0.93,2.23,2.48,2.23,4.16s-0.83,3.23-2.23,4.16L39.88,48.61
	C38.7,49.4,37.35,49.79,36,49.79z M14.41,29.6l21.04,14.02c0.34,0.22,0.77,0.22,1.11,0L57.59,29.6L36.55,15.57
	c-0.34-0.22-0.77-0.22-1.11,0L14.41,29.6z M11.5,27.93L11.5,27.93L11.5,27.93z"/>
<path d="M63,39.73c0-0.4-0.45-0.64-0.78-0.42L36.55,56.43c-0.34,0.22-0.77,0.22-1.11,0L9.78,39.32C9.45,39.1,9,39.33,9,39.73v6.01
	c0,0.17,0.08,0.32,0.22,0.42l22.89,15.26c1.18,0.79,2.53,1.18,3.88,1.18c1.35,0,2.7-0.39,3.88-1.18l22.89-15.26
	c0.14-0.09,0.22-0.25,0.22-0.42V39.73z"/>

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
