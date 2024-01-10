<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M47.12,24.88c-1.17-1.17-3.07-1.17-4.24,0L36,31.76l-6.88-6.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24
		L31.76,36l-6.88,6.88c-1.17,1.17-1.17,3.07,0,4.24C25.46,47.71,26.23,48,27,48s1.54-0.29,2.12-0.88L36,40.24l6.88,6.88
		C43.46,47.71,44.23,48,45,48s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L40.24,36l6.88-6.88
		C48.29,27.95,48.29,26.05,47.12,24.88z"/>
	<path d="M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z"/>
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
