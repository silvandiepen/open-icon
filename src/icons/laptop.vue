<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M58.5,50h-45c-1.66,0-3-1.34-3-3V20c0-3.86,3.14-7,7-7h37c3.86,0,7,3.14,7,7v27C61.5,48.66,60.16,50,58.5,50z M16.5,44h39
		V20c0-0.55-0.45-1-1-1h-37c-0.55,0-1,0.45-1,1V44z"/>
	<path d="M57,59H15c-4.96,0-9-4.04-9-9v-3c0-1.66,1.34-3,3-3h54c1.66,0,3,1.34,3,3v3C66,54.96,61.96,59,57,59z M12,50
		c0,1.65,1.35,3,3,3h42c1.65,0,3-1.35,3-3H12z"/>
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
