<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M59,11H13c-3.86,0-7,3.14-7,7v27.5c0,3.86,3.14,7,7,7h22.09L52.5,64.11V52.5H59c3.86,0,7-3.14,7-7V18
		C66,14.14,62.86,11,59,11z M60,45.5c0,0.55-0.45,1-1,1H46.5v6.39l-9.59-6.39H13c-0.55,0-1-0.45-1-1V18c0-0.55,0.45-1,1-1h46
		c0.55,0,1,0.45,1,1V45.5z"/>
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
