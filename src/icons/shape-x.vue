<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M40.24,36l20.38-20.38c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0L36,31.76L15.62,11.38
	c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L31.76,36L11.38,56.38c-1.17,1.17-1.17,3.07,0,4.24
	c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88L36,40.24l20.38,20.38c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88
	c1.17-1.17,1.17-3.07,0-4.24L40.24,36z"/>

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
