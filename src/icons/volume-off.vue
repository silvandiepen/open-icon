<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M48.59,66.83L29.76,48H19.5c-0.28,0-0.5-0.22-0.5-0.5v-23c0-0.28,0.22-0.5,0.5-0.5h10.26L48.59,5.17
	C49.85,3.91,52,4.8,52,6.59v58.83C52,67.2,49.85,68.09,48.59,66.83z M25,42h7.24L46,55.76V16.24L32.24,30H25V42z"/>

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
