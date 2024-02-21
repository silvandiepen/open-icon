<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,66C19.46,66,6,52.54,6,36S19.46,6,36,6s30,13.46,30,30S52.54,66,36,66z M36,12c-13.23,0-24,10.77-24,24s10.77,24,24,24
	s24-10.77,24-24S49.23,12,36,12z"/>
<path d="M19.79,49.68l7.39-22.18c0.05-0.15,0.17-0.27,0.32-0.32l22.18-7.39c1.56-0.52,3.05,0.97,2.53,2.53L44.82,44.5
	c-0.05,0.15-0.17,0.27-0.32,0.32l-22.18,7.39C20.76,52.73,19.27,51.24,19.79,49.68z M32.01,32.01l-3.99,11.98l11.98-3.99l3.99-11.98
	L32.01,32.01z"/>

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
