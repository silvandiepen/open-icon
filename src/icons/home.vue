<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M56.12,31.88l-18-18c-1.17-1.17-3.07-1.17-4.24,0l-18,18C15.32,32.44,15,33.2,15,34v14c0,6.07,4.93,11,11,11h20
	c6.07,0,11-4.93,11-11V34C57,33.2,56.68,32.44,56.12,31.88z M51,48c0,2.76-2.24,5-5,5H26c-2.76,0-5-2.24-5-5V35.24l15-15l15,15V48z"
	/>

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
