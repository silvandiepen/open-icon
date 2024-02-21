<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M56.5,57h-41c-0.28,0-0.5-0.22-0.5-0.5l0-19.98c0-11.37,8.83-21.07,20.19-21.5C47.14,14.56,57,24.15,57,36v20.5
		C57,56.78,56.78,57,56.5,57z M21,51h30V36c0-8.27-6.73-15-15-15s-15,6.73-15,15V51z"/>
	<path d="M36,66c-6.62,0-12-5.38-12-12h6c0,3.31,2.69,6,6,6s6-2.69,6-6h6C48,60.62,42.62,66,36,66z"/>
	<path d="M39,18h-6V9.5C33,9.22,33.22,9,33.5,9h5C38.78,9,39,9.22,39,9.5V18z"/>
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
