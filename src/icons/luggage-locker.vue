<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M50,57H22c-3.86,0-7-3.14-7-7V35.5c0-3.86,3.14-7,7-7h28c3.86,0,7,3.14,7,7V50C57,53.86,53.86,57,50,57z M22,34.5
		c-0.55,0-1,0.45-1,1V50c0,0.55,0.45,1,1,1h28c0.55,0,1-0.45,1-1V35.5c0-0.55-0.45-1-1-1H22z"/>
	<path d="M42.75,33.5c-1.1,0-2-0.9-2-2v-7h-9.5v7c0,1.1-0.9,2-2,2s-2-0.9-2-2v-9c0-1.1,0.9-2,2-2h13.5c1.1,0,2,0.9,2,2v9
		C44.75,32.6,43.85,33.5,42.75,33.5z"/>
</g>
<path d="M59,65H13c-3.31,0-6-2.69-6-6V13c0-3.31,2.69-6,6-6h46c3.31,0,6,2.69,6,6v46C65,62.31,62.31,65,59,65z M13,11
	c-1.1,0-2,0.9-2,2v46c0,1.1,0.9,2,2,2h46c1.1,0,2-0.9,2-2V13c0-1.1-0.9-2-2-2H13z"/>

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
