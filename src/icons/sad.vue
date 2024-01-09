<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M36,60c-13.23,0-24-10.77-24-24s10.77-24,24-24
		s24,10.77,24,24S49.23,60,36,60z"/>
	<path d="M36,42c-4.41,0-8.55,1.72-11.67,4.83c-1.17,1.17-1.17,3.07,0,4.24c1.17,1.17,3.07,1.17,4.24,0c0.9-0.9,1.94-1.61,3.07-2.12
		h8.72c1.12,0.51,2.17,1.22,3.07,2.12c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24
		C44.55,43.72,40.41,42,36,42z"/>
	<path d="M45,35c1.66,0,3-1.34,3-3v-5c0-1.66-1.34-3-3-3s-3,1.34-3,3v5C42,33.66,43.34,35,45,35z"/>
	<path d="M27,35c1.66,0,3-1.34,3-3v-5c0-1.66-1.34-3-3-3s-3,1.34-3,3v5C24,33.66,25.34,35,27,35z"/>
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
