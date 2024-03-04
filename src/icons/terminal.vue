<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M13,66h46c3.86,0,7-3.14,7-7V13c0-3.86-3.14-7-7-7H13c-3.86,0-7,3.14-7,7v46C6,62.86,9.14,66,13,66z M12,13
			c0-0.55,0.45-1,1-1h46c0.55,0,1,0.45,1,1v46c0,0.55-0.45,1-1,1H13c-0.55,0-1-0.45-1-1V13z"/>
	</g>
	<g>
		<path d="M16.59,32.91c0.39,0.39,0.9,0.59,1.41,0.59s1.02-0.2,1.41-0.59l6.75-6.75c0.78-0.78,0.78-2.05,0-2.83l-6.75-6.75
			c-0.78-0.78-2.05-0.78-2.83,0c-0.78,0.78-0.78,2.05,0,2.83l5.34,5.34l-5.34,5.34C15.8,30.87,15.8,32.13,16.59,32.91z"/>
	</g>
	<g>
		<path d="M31.5,33.5h9c1.1,0,2-0.9,2-2s-0.9-2-2-2h-9c-1.1,0-2,0.9-2,2S30.4,33.5,31.5,33.5z"/>
	</g>
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
