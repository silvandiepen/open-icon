<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M50,66H22c-3.86,0-7-3.14-7-7V13c0-3.86,3.14-7,7-7h28c3.86,0,7,3.14,7,7v46C57,62.86,53.86,66,50,66z M22,12
	c-0.55,0-1,0.45-1,1v46c0,0.55,0.45,1,1,1h28c0.55,0,1-0.45,1-1V13c0-0.55-0.45-1-1-1H22z"/>
<path d="M36,57c-0.19,0-0.39-0.02-0.59-0.06c-0.19-0.04-0.38-0.09-0.56-0.17c-0.18-0.07-0.35-0.17-0.51-0.27
	c-0.17-0.11-0.32-0.24-0.46-0.38C33.32,55.56,33,54.79,33,54s0.32-1.56,0.88-2.12c0.14-0.14,0.29-0.26,0.46-0.37
	c0.16-0.11,0.33-0.2,0.51-0.28c0.18-0.07,0.37-0.13,0.56-0.17c0.97-0.2,2.02,0.12,2.71,0.82C38.68,52.44,39,53.21,39,54
	s-0.32,1.56-0.88,2.12C37.56,56.68,36.79,57,36,57z"/>

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
