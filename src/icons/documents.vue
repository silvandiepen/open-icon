<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54.5,57h-28c-3.86,0-7-3.14-7-7V13c0-3.86,3.14-7,7-7h15.24L61.5,25.76V50C61.5,53.86,58.36,57,54.5,57z M26.5,12
		c-0.55,0-1,0.45-1,1v37c0,0.55,0.45,1,1,1h28c0.55,0,1-0.45,1-1V28.24L39.26,12H26.5z"/>
	<path d="M58.5,29h-14c-3.31,0-6-2.69-6-6V9c0-1.1,0.9-2,2-2s2,0.9,2,2v14c0,1.1,0.9,2,2,2h14c1.1,0,2,0.9,2,2S59.6,29,58.5,29z"/>
</g>
<g>
	<path d="M45.5,66h-28c-3.86,0-7-3.14-7-7V22c0-3.86,3.14-7,7-7h5c1.66,0,3,1.34,3,3s-1.34,3-3,3h-5c-0.55,0-1,0.45-1,1v37
		c0,0.55,0.45,1,1,1h28c0.55,0,1-0.45,1-1v-5c0-1.66,1.34-3,3-3s3,1.34,3,3v5C52.5,62.86,49.36,66,45.5,66z"/>
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
