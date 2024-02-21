<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M29.5,63h-5c-0.28,0-0.5-0.22-0.5-0.5V27h6v35.5C30,62.78,29.78,63,29.5,63z"/>
<path d="M56.5,63h-5c-0.28,0-0.5-0.22-0.5-0.5V42.35c-3.18-1.88-9-6.79-9-17.6c0-13.14,6.53-17.04,9.53-18.13
	c0.72-0.26,1.49-0.36,2.23-0.21C55.73,6.82,57,8.51,57,10.35V62.5C57,62.78,56.78,63,56.5,63z M51,14.12c-1.5,1.71-3,4.87-3,10.63
	c0,4.71,1.43,7.8,3,9.78V14.12z"/>
<path d="M26,25.77h-4V8.27c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5V25.77z"/>
<path d="M32,25.77h-4V8.27c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5V25.77z"/>
<path d="M32,27.77H22c-3.31,0-6-2.69-6-6V8.27c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v13.5c0,1.1,0.9,2,2,2h10
	c1.1,0,2-0.9,2-2V8.27c0-0.28,0.22-0.5,0.5-0.5h3c0.28,0,0.5,0.22,0.5,0.5v13.5C38,25.09,35.31,27.77,32,27.77z"/>

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
