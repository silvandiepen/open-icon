<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,10.5c-1.2,0-2.37,0.09-3.52,0.25c-0.07,0.01-0.13,0.02-0.2,0.03c-0.25,0.04-0.5,0.08-0.74,0.12
	c-0.19,0.03-0.39,0.07-0.58,0.1c-0.13,0.03-0.25,0.05-0.38,0.08c-0.32,0.07-0.63,0.14-0.94,0.22c-0.01,0-0.01,0-0.02,0.01
	c-10.23,2.61-17.89,11.36-18.98,22.06c0,0.01,0,0.02,0,0.04c-0.04,0.38-0.07,0.76-0.09,1.14c0,0.05-0.01,0.1-0.01,0.16
	c-0.02,0.43-0.03,0.86-0.03,1.3c0,0.44,0.01,0.87,0.03,1.3c0,0.06,0.01,0.11,0.01,0.17c0.02,0.38,0.05,0.75,0.09,1.13
	c0,0.02,0,0.03,0.01,0.05c1.28,12.44,11.44,22.25,24.17,22.83c0.07,0,0.14,0,0.21,0c0.01,0,0.03,0,0.04,0
	c0.31,0.01,0.62,0.02,0.94,0.02c14.06,0,25.5-11.44,25.5-25.5S50.06,10.5,36,10.5z M36,55.5c-0.51,0-1-0.04-1.5-0.08V16.58
	c0.06,0,0.11-0.01,0.17-0.02c0.44-0.03,0.88-0.07,1.33-0.07c10.75,0,19.5,8.75,19.5,19.5C55.5,46.75,46.75,55.5,36,55.5z"/>

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
