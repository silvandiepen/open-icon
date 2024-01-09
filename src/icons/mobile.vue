<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M22,66h28c3.86,0,7-3.14,7-7V13c0-3.86-3.14-7-7-7H22c-3.86,0-7,3.14-7,7v46C15,62.86,18.14,66,22,66z M21,13
		c0-0.55,0.45-1,1-1h28c0.55,0,1,0.45,1,1v46c0,0.55-0.45,1-1,1H22c-0.55,0-1-0.45-1-1V13z"/>
	<path d="M34.34,56.5c0.16,0.1,0.33,0.2,0.51,0.27c0.18,0.08,0.37,0.13,0.56,0.17C35.61,56.98,35.81,57,36,57
		c0.79,0,1.56-0.32,2.12-0.88C38.68,55.56,39,54.79,39,54s-0.32-1.56-0.88-2.12c-0.69-0.7-1.74-1.02-2.71-0.82
		c-0.19,0.04-0.38,0.1-0.56,0.17c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37C33.32,52.44,33,53.21,33,54
		s0.32,1.56,0.88,2.12C34.02,56.26,34.17,56.39,34.34,56.5z"/>
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
