<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M17.5,6c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h37c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,15.24L52.26,25H44.5
		c-1.1,0-2-0.9-2-2V15.24z M54.5,60h-37c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		C55.5,59.55,55.05,60,54.5,60z"/>
	<path d="M47.12,33.88c-1.17-1.17-3.07-1.17-4.24,0L36,40.76l-6.88-6.88c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24
		L31.76,45l-6.88,6.88c-1.17,1.17-1.17,3.07,0,4.24C25.46,56.71,26.23,57,27,57s1.54-0.29,2.12-0.88L36,49.24l6.88,6.88
		C43.46,56.71,44.23,57,45,57s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L40.24,45l6.88-6.88
		C48.29,36.95,48.29,35.05,47.12,33.88z"/>
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
