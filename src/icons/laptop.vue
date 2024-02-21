<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M63,44h-1.5V20c0-3.86-3.14-7-7-7h-37c-3.86,0-7,3.14-7,7v24H9c-1.66,0-3,1.34-3,3v3c0,4.96,4.04,9,9,9h42
		c4.96,0,9-4.04,9-9v-3C66,45.34,64.66,44,63,44z M16.5,20c0-0.55,0.45-1,1-1h37c0.55,0,1,0.45,1,1v24h-39V20z M57,53H15
		c-1.65,0-3-1.35-3-3h1.5h45H60C60,51.65,58.65,53,57,53z"/>
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
