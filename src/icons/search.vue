<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M32.27,53.27c4.71,0,9.05-1.58,12.55-4.2l11.55,11.55c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88
		c1.17-1.17,1.17-3.07,0-4.24L49.07,44.83c2.63-3.51,4.21-7.84,4.21-12.55c0-11.58-9.42-21-21-21s-21,9.42-21,21
		S20.69,53.27,32.27,53.27z M32.27,17.27c8.27,0,15,6.73,15,15s-6.73,15-15,15s-15-6.73-15-15S24,17.27,32.27,17.27z"/>
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
