<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M62.34,54.21l-8.13,8.13c-0.39,0.39-1.02,0.39-1.41,0L9.66,19.21c-0.39-0.39-0.39-1.02,0-1.41l8.13-8.13
	c0.39-0.39,1.02-0.39,1.41,0l43.13,43.13C62.73,53.18,62.73,53.82,62.34,54.21z"/>
<path d="M54.21,9.66l8.13,8.13c0.39,0.39,0.39,1.02,0,1.41L19.21,62.34c-0.39,0.39-1.02,0.39-1.41,0l-8.13-8.13
	c-0.39-0.39-0.39-1.02,0-1.41L52.79,9.66C53.18,9.27,53.82,9.27,54.21,9.66z"/>

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
