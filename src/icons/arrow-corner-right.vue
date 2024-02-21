<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M15.5,57h5c0.28,0,0.5-0.22,0.5-0.5V52c0-7.18,5.82-13,13-13h12.76l-5.65,5.65c-0.2,0.2-0.2,0.51,0,0.71l3.54,3.54
		c0.2,0.2,0.51,0.2,0.71,0l10.77-10.77c1.17-1.17,1.17-3.07,0-4.24L45.35,23.11c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54
		c-0.2,0.2-0.2,0.51,0,0.71L46.76,33H34c-10.49,0-19,8.51-19,19v4.5C15,56.78,15.22,57,15.5,57z"/>
</g>

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
