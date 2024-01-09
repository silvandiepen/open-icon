<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M66,33c0-4.96-4.04-9-9-9h-9c0-4.96-4.04-9-9-9H15c-4.96,0-9,4.04-9,9v33h9.15c-0.1,0.48-0.15,0.99-0.15,1.5
		c0,4.14,3.36,7.5,7.5,7.5s7.5-3.36,7.5-7.5c0-0.51-0.05-1.02-0.15-1.5H42h0.15c-0.1,0.48-0.15,0.99-0.15,1.5
		c0,4.14,3.36,7.5,7.5,7.5s7.5-3.36,7.5-7.5c0-0.51-0.05-1.02-0.15-1.5H66V33z M48,51v-4h12v4H48z M57,30c1.65,0,3,1.35,3,3v10H48
		V30H57z M24,58.5c0,0.83-0.67,1.5-1.5,1.5S21,59.33,21,58.5s0.67-1.5,1.5-1.5S24,57.67,24,58.5z M42,51H12V24c0-1.65,1.35-3,3-3h24
		c1.65,0,3,1.35,3,3V51z M51,58.5c0,0.83-0.67,1.5-1.5,1.5S48,59.33,48,58.5s0.67-1.5,1.5-1.5S51,57.67,51,58.5z"/>
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
