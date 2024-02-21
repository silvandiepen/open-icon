<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M31.5,20H27c-1.1,0-2-0.9-2-2s0.9-2,2-2h4.5c1.1,0,2,0.9,2,2S32.6,20,31.5,20z"/>
<path d="M27,42.5c-1.1,0-2-0.9-2-2V36c0-1.1,0.9-2,2-2s2,0.9,2,2v4.5C29,41.6,28.1,42.5,27,42.5z"/>
<path d="M50,66H22c-3.86,0-7-3.14-7-7V13c0-3.86,3.14-7,7-7h28c3.86,0,7,3.14,7,7v46C57,62.86,53.86,66,50,66z M22,12
	c-0.55,0-1,0.45-1,1v46c0,0.55,0.45,1,1,1h28c0.55,0,1-0.45,1-1V13c0-0.55-0.45-1-1-1H22z"/>
<rect x="16" y="25" width="40" height="4"/>

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
