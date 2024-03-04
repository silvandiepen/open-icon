<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M31.63,52.51c4.61-10.09,4.3-18-9-18c-13.3,0-14.2,8.21-9,18C20.29,65.07,26.01,64.81,31.63,52.51z"/>
	</g>
	<g>
		<circle cx="49.5" cy="22.5" r="9"/>
	</g>
	<g>
		<circle cx="22.5" cy="22.5" r="9"/>
	</g>
	<g>
		<path d="M40.37,45c-4.61,10.09-4.3,18,9,18c13.3,0,14.2-8.21,9-18C51.71,32.45,45.99,32.7,40.37,45z"/>
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
