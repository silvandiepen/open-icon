<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M59,6H13c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7V13C66,9.14,62.86,6,59,6z M60,13v12H47V12h12
	C59.55,12,60,12.45,60,13z M29,43V29h14v14H29z M43,47v13H29V47H43z M25,43H12V29h13V43z M29,25V12h14v13H29z M47,29h13v14H47V29z
	 M13,12h12v13H12V13C12,12.45,12.45,12,13,12z M12,59V47h13v13H13C12.45,60,12,59.55,12,59z M59,60H47V47h13v12
	C60,59.55,59.55,60,59,60z"/>

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
