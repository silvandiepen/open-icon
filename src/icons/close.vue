<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M20.12,15.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L31.76,36L15.88,51.88c-1.17,1.17-1.17,3.07,0,4.24
		C16.46,56.71,17.23,57,18,57s1.54-0.29,2.12-0.88L36,40.24l15.88,15.88C52.46,56.71,53.23,57,54,57s1.54-0.29,2.12-0.88
		c1.17-1.17,1.17-3.07,0-4.24L40.24,36l15.88-15.88c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0L36,31.76L20.12,15.88z"
		/>
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
