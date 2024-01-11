<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M50.02,52.35l-3.2-19.18c-0.43-2.58-1.73-4.81-3.56-6.43c1.55-1.73,2.49-4,2.49-6.49c0-5.38-4.37-9.75-9.75-9.75
	s-9.75,4.37-9.75,9.75c0,2.49,0.95,4.76,2.49,6.49c-1.83,1.62-3.13,3.85-3.56,6.43l-3.2,19.19c-0.19,1.16,0.14,2.34,0.9,3.23
	c0.76,0.9,1.88,1.41,3.05,1.41h2.57v10.5h6V57h3v10.5h6V57h2.57c1.18,0,2.29-0.51,3.05-1.41C49.88,54.69,50.21,53.51,50.02,52.35z
	 M32.25,20.25c0-2.07,1.68-3.75,3.75-3.75c2.07,0,3.75,1.68,3.75,3.75S38.07,24,36,24C33.93,24,32.25,22.32,32.25,20.25z M28.29,51
	l2.81-16.85C31.5,31.75,33.56,30,36,30c2.44,0,4.5,1.75,4.9,4.15L43.71,51H28.29z"/>

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
