<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M60.88,33.88L57,37.76V36c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21c1.66,0,3-1.34,3-3s-1.34-3-3-3
		c-8.27,0-15-6.73-15-15s6.73-15,15-15s15,6.73,15,15v1.76l-3.88-3.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24
		L54,49.24l11.12-11.12c1.17-1.17,1.17-3.07,0-4.24C63.95,32.71,62.05,32.71,60.88,33.88z"/>
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
