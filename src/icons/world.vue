<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,66C19.46,66,6,52.54,6,36S19.46,6,36,6s30,13.46,30,30S52.54,66,36,66z M36,12c-13.23,0-24,10.77-24,24s10.77,24,24,24
	s24-10.77,24-24S49.23,12,36,12z"/>
<path d="M36,65c-0.63,0-15.5-0.33-15.5-29S35.37,7,36,7s15.5,0.33,15.5,29S36.63,65,36,65z M35.97,11c-0.42,0.01-11.47,0.6-11.47,25
	s11.06,24.99,11.53,25c0.42-0.01,11.47-0.6,11.47-25S36.44,11.01,35.97,11z"/>
<path d="M36,65c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2s2,0.9,2,2v54C38,64.1,37.1,65,36,65z"/>
<path d="M63,38H9c-1.1,0-2-0.9-2-2s0.9-2,2-2h54c1.1,0,2,0.9,2,2S64.1,38,63,38z"/>

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
