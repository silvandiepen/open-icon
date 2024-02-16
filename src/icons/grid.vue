<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M66,59V13c0-3.86-3.14-7-7-7H13c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h46C62.86,66,66,62.86,66,59z M47,12h12
		c0.55,0,1,0.45,1,1v12H47V12z M47,29h13v14H47V29z M25,60H13c-0.55,0-1-0.45-1-1V47h13V60z M25,43H12V29h13V43z M25,25H12V13
		c0-0.55,0.45-1,1-1h12V25z M43,60H29V47h14V60z M43,43H29V29h14V43z M43,25H29V12h14V25z M47,47h13v12c0,0.55-0.45,1-1,1H47V47z"/>
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
