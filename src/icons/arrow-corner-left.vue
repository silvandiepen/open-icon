<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M26.65,48.89L15.88,38.12c-1.17-1.17-1.17-3.07,0-4.24l10.77-10.77c0.2-0.2,0.51-0.2,0.71,0l3.54,3.54
	c0.2,0.2,0.2,0.51,0,0.71L22.24,36l8.65,8.65c0.2,0.2,0.2,0.51,0,0.71l-3.54,3.54C27.16,49.08,26.84,49.08,26.65,48.89z"/>
<path d="M56.5,57h-5c-0.28,0-0.5-0.22-0.5-0.5V52c0-7.18-5.82-13-13-13H19.5v-6H38c10.49,0,19,8.51,19,19v4.5
	C57,56.78,56.78,57,56.5,57z"/>

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
