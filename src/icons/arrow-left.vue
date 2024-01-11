<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M54,33H25.24l9.28-9.28c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0l-14.4,14.4c-0.01,0.01-0.02,0.02-0.02,0.03
	c-0.13,0.13-0.24,0.27-0.35,0.42c-0.04,0.05-0.06,0.11-0.09,0.17c-0.07,0.11-0.14,0.23-0.19,0.35c-0.03,0.07-0.04,0.14-0.07,0.21
	c-0.04,0.12-0.08,0.23-0.11,0.35C15.02,35.6,15,35.8,15,36c0,0.2,0.02,0.4,0.06,0.59c0.02,0.12,0.07,0.24,0.11,0.36
	c0.02,0.07,0.04,0.14,0.06,0.2c0.06,0.13,0.13,0.26,0.2,0.38c0.03,0.04,0.05,0.09,0.07,0.14c0.11,0.16,0.24,0.32,0.37,0.46
	l14.4,14.4c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L25.24,39H54c1.66,0,3-1.34,3-3
	C57,34.34,55.66,33,54,33z"/>

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
