<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<rect x="10.5" y="10.5" width="51" height="6"/>
</g>
<path d="M50,49.82H22c-3.86,0-7-3.14-7-7V10.5h42v32.32C57,46.68,53.86,49.82,50,49.82z M21,16.5v26.32c0,0.55,0.45,1,1,1h28
	c0.55,0,1-0.45,1-1V16.5H21z"/>
<path d="M36,65c-3.08,0-5.59-2.51-5.59-5.59s2.51-5.59,5.59-5.59s5.59,2.51,5.59,5.59S39.08,65,36,65z M36,57.82
	c-0.88,0-1.59,0.71-1.59,1.59S35.12,61,36,61s1.59-0.71,1.59-1.59S36.88,57.82,36,57.82z"/>
<rect x="34" y="44.82" width="4" height="13"/>

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
