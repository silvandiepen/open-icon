<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M54,31.5
	c-0.2,0-0.39,0.02-0.58,0.03C51.43,23.76,44.39,18,36,18s-15.43,5.76-17.42,13.53C18.39,31.52,18.2,31.5,18,31.5c-4.97,0-9,4.03-9,9
	s4.03,9,9,9c1.74,0,3.36-0.5,4.74-1.36C26.03,51.73,30.74,54,36,54s9.97-2.27,13.26-5.86c1.38,0.86,3,1.36,4.74,1.36
	c4.97,0,9-4.03,9-9S58.97,31.5,54,31.5z"/>

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
