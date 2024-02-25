<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M59,6H13c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7V13C66,9.14,62.86,6,59,6z M12,59V13
		c0-0.55,0.45-1,1-1h20v48H13C12.45,60,12,59.55,12,59z M60,59c0,0.55-0.45,1-1,1H39V12h20c0.55,0,1,0.45,1,1V59z"/>
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
