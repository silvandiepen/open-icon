<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M44.65,39.89l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71L49.76,27l-8.65-8.65c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54
	c0.2-0.2,0.51-0.2,0.71,0l10.77,10.77c1.17,1.17,1.17,3.07,0,4.24L45.35,39.89C45.16,40.08,44.84,40.08,44.65,39.89z"/>
<path d="M29.5,48h-5c-0.28,0-0.5-0.22-0.5-0.5V43c0-10.49,8.51-19,19-19h9.5v6H43c-7.18,0-13,5.82-13,13v4.5
	C30,47.78,29.78,48,29.5,48z"/>
<path d="M56.5,61.5h-41c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h41c0.28,0,0.5,0.22,0.5,0.5v5
	C57,61.28,56.78,61.5,56.5,61.5z"/>

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
