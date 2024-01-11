<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M50.85,46.61L30.51,26.27h13.13c1.66,0,3-1.34,3-3s-1.34-3-3-3H23.27c-0.01,0-0.02,0-0.03,0c-0.19,0-0.38,0.02-0.56,0.06
	c-0.09,0.02-0.17,0.05-0.26,0.08c-0.1,0.03-0.2,0.05-0.3,0.09c-0.1,0.04-0.19,0.1-0.29,0.15c-0.08,0.04-0.16,0.08-0.23,0.13
	c-0.16,0.11-0.31,0.23-0.45,0.37c0,0-0.01,0-0.01,0.01c-0.01,0.01-0.01,0.01-0.01,0.02c-0.13,0.13-0.25,0.28-0.36,0.44
	c-0.05,0.08-0.09,0.16-0.13,0.24c-0.05,0.09-0.1,0.18-0.14,0.27c-0.04,0.1-0.07,0.21-0.1,0.31c-0.02,0.08-0.06,0.16-0.07,0.25
	c-0.04,0.19-0.06,0.39-0.06,0.59v20.37c0,1.66,1.34,3,3,3s3-1.34,3-3V30.51l20.34,20.34c0.59,0.59,1.35,0.88,2.12,0.88
	s1.54-0.29,2.12-0.88C52.02,49.68,52.02,47.78,50.85,46.61z"/>

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
