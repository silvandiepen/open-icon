<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M65.95,24.88c-0.45-6.43-4.11-11.62-9.55-13.55c-3.09-1.1-10.95-2.51-20.4,6.21c-9.45-8.72-17.31-7.31-20.4-6.21
	c-5.44,1.93-9.1,7.12-9.55,13.55C5.71,29.7,6.76,46.58,34.61,61.16L36,61.89l1.39-0.73C65.24,46.58,66.29,29.7,65.95,24.88z
	 M36,55.1C17.53,45.01,11.48,33.16,12.03,25.3c0.29-4.07,2.37-7.18,5.57-8.32c0.92-0.33,1.89-0.48,2.9-0.48
	c4.09,0,8.86,2.58,13.3,7.32L36,26.16l2.19-2.34c5.54-5.92,11.6-8.47,16.21-6.84c3.2,1.14,5.28,4.25,5.57,8.32
	C60.52,33.16,54.47,45.01,36,55.1z"/>

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
