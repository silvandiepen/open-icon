<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M56.8,29.85L36.3,14.47c-0.18-0.13-0.42-0.13-0.6,0L15.2,29.85c-0.13,0.09-0.2,0.24-0.2,0.4V61c0,0.28,0.22,0.5,0.5,0.5h18
	v-19h5v19h18c0.28,0,0.5-0.22,0.5-0.5V30.25C57,30.09,56.93,29.94,56.8,29.85z M51,55.5h-8.5v-17h-13v17H21V33l15-11.25L51,33V55.5z
	"/>

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
