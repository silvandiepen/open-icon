<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36.91,56.5H50c3.86,0,7-3.14,7-7V47h2c3.31,0,6-2.69,6-6V18c0-3.31-2.69-6-6-6H22c-3.31,0-6,2.69-6,6v1.5h-3
		c-3.86,0-7,3.14-7,7v23c0,3.86,3.14,7,7,7h6.5v11.61L36.91,56.5z M20,18c0-1.1,0.9-2,2-2h37c1.1,0,2,0.9,2,2v23c0,1.1-0.9,2-2,2h-2
		V26.5c0-3.86-3.14-7-7-7H20V18z M13,50.5c-0.55,0-1-0.45-1-1v-23c0-0.55,0.45-1,1-1h37c0.55,0,1,0.45,1,1v23c0,0.55-0.45,1-1,1
		H35.09l-9.59,6.39V50.5H13z"/>
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
