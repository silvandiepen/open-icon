<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M66,56.5c0,0.28-0.22,0.5-0.5,0.5H54c-0.8,0-1.56-0.32-2.12-0.88L16.76,21H6.5C6.22,21,6,20.78,6,20.5v-5
	C6,15.22,6.22,15,6.5,15H18c0.8,0,1.56,0.32,2.12,0.88L55.24,51H65.5c0.28,0,0.5,0.22,0.5,0.5V56.5z"/>
<path d="M27,60.5h-8.5c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5H25V50c0-0.28,0.22-0.5,0.5-0.5h3
	c0.28,0,0.5,0.22,0.5,0.5v8.5C29,59.6,28.1,60.5,27,60.5z"/>
<path d="M25.59,59.91L12.44,46.77c-0.2-0.2-0.2-0.51,0-0.71l2.12-2.12c0.2-0.2,0.51-0.2,0.71,0l13.15,13.15L25.59,59.91z"/>
<circle cx="43.32" cy="18.71" r="5.21"/>
<path d="M48.98,37.66c-3.48,7.62-7.02,7.77-11.15,0c-3.22-6.07-2.66-11.15,5.57-11.15S51.83,31.41,48.98,37.66z"/>

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
