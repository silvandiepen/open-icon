<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M20.12,47.12L36,31.24l15.88,15.88C52.46,47.71,53.23,48,54,48s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-18-18
		c-1.17-1.17-3.07-1.17-4.24,0l-18,18c-1.17,1.17-1.17,3.07,0,4.24C17.05,48.29,18.95,48.29,20.12,47.12z"/>
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
