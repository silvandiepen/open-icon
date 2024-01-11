<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M41.74,6H17.5c-3.86,0-7,3.14-7,7v27.5c0,1.66,1.34,3,3,3s3-1.34,3-3V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		c0,0.55-0.45,1-1,1H36c-1.66,0-3,1.34-3,3s1.34,3,3,3h18.5c3.86,0,7-3.14,7-7V25.76L41.74,6z M42.5,23v-7.76L52.26,25H44.5
		C43.4,25,42.5,24.1,42.5,23z"/>
	<path d="M29.12,47.38c-1.17-1.17-3.07-1.17-4.24,0l-4.63,4.63l-4.63-4.63c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24
		l4.63,4.63l-4.63,4.63c-1.17,1.17-1.17,3.07,0,4.24C11.96,65.71,12.73,66,13.5,66s1.54-0.29,2.12-0.88l4.63-4.63l4.63,4.63
		C25.46,65.71,26.23,66,27,66s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-4.63-4.63l4.63-4.63
		C30.29,50.45,30.29,48.55,29.12,47.38z"/>
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
