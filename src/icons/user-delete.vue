<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,39c-7.86,0-14.25-6.39-14.25-14.25S28.14,10.5,36,10.5s14.25,6.39,14.25,14.25S43.86,39,36,39z M36,16.5
	c-4.55,0-8.25,3.7-8.25,8.25S31.45,33,36,33s8.25-3.7,8.25-8.25S40.55,16.5,36,16.5z"/>
<path d="M36,66c-3.72,0-22.29-0.52-22.29-10.71C13.71,43,23.71,33,36,33s22.29,10,22.29,22.29C58.29,65.48,39.72,66,36,66z M36,39
	c-8.98,0-16.29,7.31-16.29,16.29c0,2.22,6.97,4.7,16.29,4.71c9.32-0.01,16.28-2.5,16.28-4.71C52.29,46.31,44.98,39,36,39z"/>
<path d="M40.82,58.41L28.35,45.94c-0.2-0.2-0.2-0.51,0-0.71l2.12-2.12c0.2-0.2,0.51-0.2,0.71,0l12.47,12.47c0.2,0.2,0.2,0.51,0,0.71
	l-2.12,2.12C41.33,58.61,41.02,58.61,40.82,58.41z"/>
<path d="M30.47,58.41l-2.12-2.12c-0.2-0.2-0.2-0.51,0-0.71l12.47-12.47c0.2-0.2,0.51-0.2,0.71,0l2.12,2.12c0.2,0.2,0.2,0.51,0,0.71
	L31.18,58.41C30.98,58.61,30.67,58.61,30.47,58.41z"/>

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
