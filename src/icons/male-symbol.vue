<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,43.5c-9.1,0-16.5-7.4-16.5-16.5S26.9,10.5,36,10.5S52.5,17.9,52.5,27S45.1,43.5,36,43.5z M36,16.5
	c-5.79,0-10.5,4.71-10.5,10.5S30.21,37.5,36,37.5S46.5,32.79,46.5,27S41.79,16.5,36,16.5z"/>
<path d="M38.5,66h-5c-0.28,0-0.5-0.22-0.5-0.5v-28h6v28C39,65.78,38.78,66,38.5,66z"/>
<path d="M47.5,57h-23c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h23c0.28,0,0.5,0.22,0.5,0.5v5C48,56.78,47.78,57,47.5,57
	z"/>

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
