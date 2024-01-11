<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M39,15.24V9c0-1.66-1.34-3-3-3c-1.66,0-3,1.34-3,3v6.24C22.84,16.7,15,25.44,15,36v18c0,1.66,1.34,3,3,3h6.39
	c1.34,5.17,6.03,9,11.61,9c5.58,0,10.27-3.83,11.61-9H54c1.66,0,3-1.34,3-3V36C57,25.44,49.16,16.7,39,15.24z M36,60
	c-2.22,0-4.15-1.21-5.19-3h10.38C40.15,58.79,38.22,60,36,60z M51,51H21V36c0-8.27,6.73-15,15-15c8.27,0,15,6.73,15,15V51z"/>

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
