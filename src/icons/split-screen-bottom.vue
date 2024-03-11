<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M59,6H13c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7V13C66,9.14,62.86,6,59,6z M13,12h46
		c0.55,0,1,0.45,1,1v33.5H12V13C12,12.45,12.45,12,13,12z M59,60H13c-0.55,0-1-0.45-1-1v-6.5h48V59C60,59.55,59.55,60,59,60z"/>
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
