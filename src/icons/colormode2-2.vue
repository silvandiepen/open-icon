<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,36c0-6.05,2.99-11.39,7.58-14.66
	c0.63-0.45,0.56-1.41-0.14-1.73c-2.93-1.34-6.29-1.92-9.82-1.46c-8.14,1.06-14.64,7.7-15.51,15.87C16.95,44.85,25.41,54,36,54
	c2.66,0,5.17-0.58,7.44-1.62c0.7-0.32,0.77-1.28,0.14-1.72C39,47.4,36,42.05,36,36z"/>
<line x1="36" y1="4.5" x2="36" y2="9"/>
<line x1="36" y1="63" x2="36" y2="67.5"/>
<line x1="4.5" y1="36" x2="9" y2="36"/>
<line x1="13.73" y1="13.73" x2="16.91" y2="16.91"/>
<line x1="13.73" y1="58.27" x2="16.91" y2="55.09"/>

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
