<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M59.9,14.45c-0.02-0.09-0.05-0.17-0.08-0.26c-0.03-0.1-0.05-0.2-0.09-0.3c-0.04-0.1-0.1-0.2-0.16-0.3
	c-0.04-0.07-0.07-0.15-0.12-0.22c-0.22-0.33-0.5-0.61-0.83-0.83c-0.07-0.05-0.14-0.08-0.21-0.12c-0.1-0.06-0.2-0.11-0.3-0.16
	c-0.1-0.04-0.2-0.06-0.3-0.09c-0.09-0.03-0.17-0.06-0.26-0.08c-0.19-0.04-0.39-0.06-0.59-0.06H40.5c-1.66,0-3,1.34-3,3s1.34,3,3,3
	h9.22l-8.87,8.87C38.18,25.08,34.97,24,31.5,24C22.4,24,15,31.4,15,40.5C15,49.6,22.4,57,31.5,57C40.6,57,48,49.6,48,40.5
	c0-3.47-1.08-6.68-2.91-9.34l8.87-8.87v9.22c0,1.66,1.34,3,3,3s3-1.34,3-3V15.04C59.96,14.84,59.94,14.65,59.9,14.45z M31.5,51
	C25.71,51,21,46.29,21,40.5C21,34.71,25.71,30,31.5,30c2.89,0,5.51,1.17,7.41,3.06c0.01,0.01,0.01,0.01,0.01,0.02
	s0.01,0.01,0.02,0.01c1.89,1.9,3.06,4.52,3.06,7.41C42,46.29,37.29,51,31.5,51z"/>

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
