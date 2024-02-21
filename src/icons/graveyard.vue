<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M58,61.5H14c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h44c0.28,0,0.5,0.22,0.5,0.5v5
	C58.5,61.28,58.28,61.5,58,61.5z"/>
<path d="M39,22.5h-6V5c0-0.28,0.22-0.5,0.5-0.5h5C38.78,4.5,39,4.72,39,5V22.5z"/>
<path d="M44.5,16.5h-17c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h17c0.28,0,0.5,0.22,0.5,0.5v5
	C45,16.28,44.78,16.5,44.5,16.5z"/>
<path d="M52.5,61.5h-33v-31c0-6.07,4.93-11,11-11h11c6.07,0,11,4.93,11,11V61.5z M25.5,55.5h21v-25c0-2.76-2.24-5-5-5h-11
	c-2.76,0-5,2.24-5,5V55.5z"/>

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
