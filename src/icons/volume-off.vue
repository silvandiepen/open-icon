<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M46.88,6.88L29.76,24H22c-1.66,0-3,1.34-3,3v18c0,1.66,1.34,3,3,3h7.76l17.12,17.12C47.45,65.7,48.22,66,49,66
		c0.39,0,0.78-0.07,1.15-0.23C51.27,65.31,52,64.21,52,63V9c0-1.21-0.73-2.31-1.85-2.77S47.74,6.02,46.88,6.88z M46,55.76
		L33.12,42.88C32.56,42.32,31.8,42,31,42h-6V30h6c0.8,0,1.56-0.32,2.12-0.88L46,16.24V55.76z"/>
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
    circle,
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
