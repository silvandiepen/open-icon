<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M54,27
	c-0.2,0-0.39,0.02-0.58,0.03C51.43,19.26,44.39,13.5,36,13.5s-15.43,5.76-17.42,13.53C18.39,27.02,18.2,27,18,27c-4.97,0-9,4.03-9,9
	s4.03,9,9,9c1.74,0,3.36-0.5,4.74-1.36c3.29,3.59,8.01,5.86,13.26,5.86s9.97-2.27,13.26-5.86C50.64,44.5,52.26,45,54,45
	c4.97,0,9-4.03,9-9S58.97,27,54,27z"/>
<line x1="18" y1="54" x2="18" y2="54"/>
<line x1="36" y1="58.5" x2="36" y2="58.5"/>
<line x1="54" y1="54" x2="54" y2="54"/>

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
