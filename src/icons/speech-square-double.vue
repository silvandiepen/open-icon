<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M22.61,66.03l14.3-9.53H50c3.87,0,7-3.13,7-7V47h2c3.31,0,6-2.69,6-6V18c0-3.31-2.69-6-6-6H22c-3.31,0-6,2.69-6,6v1.5h-3
		c-3.87,0-7,3.13-7,7v23c0,3.87,3.13,7,7,7h6.5v7.87C19.5,65.97,21.28,66.92,22.61,66.03z M20,18c0-1.1,0.9-2,2-2h37
		c1.1,0,2,0.9,2,2v23c0,1.1-0.9,2-2,2h-2V26.5c0-3.87-3.13-7-7-7H20V18z M13,50.5c-0.55,0-1-0.45-1-1v-23c0-0.55,0.45-1,1-1h37
		c0.55,0,1,0.45,1,1v23c0,0.55-0.45,1-1,1H35.09l-9.59,6.39V50.5H13z"/>
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
