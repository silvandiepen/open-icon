<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,7c-6.07,0-11,4.93-11,11v1.5h-6.75c-1.58,0-2.88,1.22-2.99,2.79l-2.5,36c-0.06,0.83,0.23,1.65,0.8,2.25
		c0.57,0.61,1.36,0.95,2.19,0.95h40.5c0.83,0,1.63-0.35,2.19-0.95c0.57-0.61,0.86-1.42,0.8-2.25l-2.5-36
		c-0.11-1.57-1.42-2.79-2.99-2.79H47V18C47,11.93,42.07,7,36,7z M29,18c0-3.86,3.14-7,7-7s7,3.14,7,7v1.5H29V18z M50.95,25.5
		l2.08,30H18.97l2.08-30H25V27c0,1.1,0.9,2,2,2s2-0.9,2-2v-1.5h14V27c0,1.1,0.9,2,2,2s2-0.9,2-2v-1.5H50.95z"/>
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
