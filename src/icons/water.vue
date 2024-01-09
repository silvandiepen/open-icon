<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,66c11.58,0,21-9.42,21-21C57,25.98,38.89,7.65,38.12,6.88c-1.17-1.17-3.07-1.17-4.24,0C33.11,7.65,15,25.98,15,45
		C15,56.58,24.42,66,36,66z M36,13.44C40.58,18.69,51,32.05,51,45c0,8.27-6.73,15-15,15s-15-6.73-15-15
		C21,32.05,31.42,18.69,36,13.44z"/>
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
