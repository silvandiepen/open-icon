<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,61.89l-1.39-0.73C6.76,46.58,5.71,29.69,6.05,24.87c0.46-6.43,4.11-11.61,9.55-13.54c3.09-1.1,10.95-2.51,20.4,6.22
	c9.45-8.72,17.31-7.31,20.4-6.22c5.43,1.93,9.09,7.12,9.55,13.54c0.34,4.83-0.71,21.71-28.56,36.29L36,61.89z M20.51,16.5
	c-1.01,0-1.99,0.16-2.9,0.48c-3.2,1.14-5.28,4.24-5.57,8.31C11.48,33.15,17.52,45.01,36,55.1c18.48-10.09,24.52-21.95,23.96-29.81
	c-0.29-4.07-2.37-7.18-5.57-8.31c-4.6-1.63-10.66,0.92-16.21,6.84L36,26.16l-2.19-2.34C29.37,19.08,24.6,16.5,20.51,16.5z"/>

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
