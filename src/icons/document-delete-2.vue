<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54.5,66h-37c-3.86,0-7-3.14-7-7V13c0-3.86,3.14-7,7-7h24.24L61.5,25.76V59C61.5,62.86,58.36,66,54.5,66z M17.5,12
		c-0.55,0-1,0.45-1,1v46c0,0.55,0.45,1,1,1h37c0.55,0,1-0.45,1-1V28.24L39.26,12H17.5z"/>
	<path d="M58.5,29h-14c-3.31,0-6-2.69-6-6V9c0-1.1,0.9-2,2-2s2,0.9,2,2v14c0,1.1,0.9,2,2,2h14c1.1,0,2,0.9,2,2S59.6,29,58.5,29z"/>
</g>
<path d="M42.53,55.77L25.23,38.47c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54c0.2-0.2,0.51-0.2,0.71,0l17.29,17.29c0.2,0.2,0.2,0.51,0,0.71
	l-3.54,3.54C43.04,55.96,42.72,55.96,42.53,55.77z"/>
<path d="M28.77,55.77l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71l17.29-17.29c0.2-0.2,0.51-0.2,0.71,0l3.54,3.54c0.2,0.2,0.2,0.51,0,0.71
	L29.47,55.77C29.28,55.96,28.96,55.96,28.77,55.77z"/>

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
