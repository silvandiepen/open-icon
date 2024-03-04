<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M50,28.5h-5.25v-6c0-1.1-0.9-2-2-2h-13.5c-1.1,0-2,0.9-2,2v6H22c-3.86,0-7,3.14-7,7V50c0,3.86,3.14,7,7,7h28
			c3.86,0,7-3.14,7-7V35.5C57,31.64,53.86,28.5,50,28.5z M31.25,24.5h9.5v4h-9.5V24.5z M51,50c0,0.55-0.45,1-1,1H22
			c-0.55,0-1-0.45-1-1V35.5c0-0.55,0.45-1,1-1h28c0.55,0,1,0.45,1,1V50z"/>
	</g>
	<g>
		<path d="M59,7H13c-3.31,0-6,2.69-6,6v46c0,3.31,2.69,6,6,6h46c3.31,0,6-2.69,6-6V13C65,9.69,62.31,7,59,7z M61,59c0,1.1-0.9,2-2,2
			H13c-1.1,0-2-0.9-2-2V13c0-1.1,0.9-2,2-2h46c1.1,0,2,0.9,2,2V59z"/>
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
