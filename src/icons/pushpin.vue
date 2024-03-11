<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M14.43,55.45l2.12,2.12c0.2,0.2,0.51,0.2,0.71,0L28.93,45.9l9.84,9.84c1.26,1.26,3.41,0.37,3.41-1.41v-13.9l7.79-7.79h7.54
		c1.78,0,2.67-2.15,1.41-3.41L42.78,13.08c-1.26-1.26-3.41-0.37-3.41,1.41v7.54l-7.79,7.79h-13.9c-1.78,0-2.67,2.15-1.41,3.41
		l9.84,9.84L14.43,54.74C14.24,54.93,14.24,55.25,14.43,55.45z M34.06,35.82l11.3-11.3v-0.36l2.49,2.48h-0.36l-11.3,11.3v6.73
		l-8.85-8.85H34.06z"/>
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
