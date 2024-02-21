<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M63,57h-9c-1.66,0-3-1.34-3-3v-6H21v6c0,1.66-1.34,3-3,3H9c-1.66,0-3-1.34-3-3V27c0-1.66,1.34-3,3-3h54c1.66,0,3,1.34,3,3
	v27C66,55.66,64.66,57,63,57z M57,51h3V30H12v21h3v-6c0-1.66,1.34-3,3-3h36c1.66,0,3,1.34,3,3V51z"/>
<path d="M54,30H18c-1.66,0-3-1.34-3-3V9c0-1.66,1.34-3,3-3h36c1.66,0,3,1.34,3,3v18C57,28.66,55.66,30,54,30z M21,24h30V12H21V24z"
	/>
<path d="M54,66H18c-1.66,0-3-1.34-3-3V45c0-1.66,1.34-3,3-3h36c1.66,0,3,1.34,3,3v18C57,64.66,55.66,66,54,66z M21,60h30V48H21V60z"
	/>
<path d="M54,39c-0.79,0-1.56-0.32-2.12-0.88C51.32,37.56,51,36.79,51,36s0.32-1.56,0.88-2.12c1.12-1.12,3.12-1.12,4.24,0
	C56.68,34.44,57,35.21,57,36s-0.32,1.56-0.88,2.12C55.56,38.68,54.79,39,54,39z"/>
<path d="M45,56H27c-1.1,0-2-0.9-2-2s0.9-2,2-2h18c1.1,0,2,0.9,2,2S46.1,56,45,56z"/>

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
